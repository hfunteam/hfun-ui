import * as fs from "fs-extra";
import * as path from "path";
import { config } from "../vite.config";
import { build, InlineConfig, defineConfig, UserConfig } from "vite";
const buildAll = async () => {
  // 全量打包
  await build(defineConfig(config as UserConfig) as InlineConfig);

  const baseOutDir = config.build.outDir;
  // 复制 Package.json 文件
  const packageJson = require("../package.json");
  packageJson.main = "hfun-ui.umd.js";
  packageJson.module = "hfun-ui.esm.js";
  fs.outputFile(
    path.resolve(baseOutDir, `package.json`),
    JSON.stringify(packageJson, null, 2)
  );

  // 拷贝 README.md文件
  fs.copyFileSync(
    path.resolve("./README.md"),
    path.resolve(baseOutDir + "/README.md")
  );

  const srcDir = path.resolve(__dirname, "../src/");
  const componentsDir = fs.readdirSync(srcDir).filter((name) => {
    // 只要目录不要文件，且里面包含index.ts
    const componentDir = path.resolve(srcDir, name);
    const isDir = fs.lstatSync(componentDir).isDirectory();
    return isDir && fs.readdirSync(componentDir).includes("index.ts");
  });
  // forEach中异步执行有问题 改为for-of
  for (let name of componentsDir) {
    const outDir = path.resolve(baseOutDir, name);
    const custom = {
      lib: {
        entry: path.resolve(srcDir, name),
        name, // 导出模块名
        fileName: `index`,
        formats: [`es`, `umd`],
      },
      outDir,
    };

    Object.assign(config.build, custom);
    await build(defineConfig(config as UserConfig) as InlineConfig);
    // 给子包添加package.json
    fs.outputFile(
      path.resolve(outDir, `package.json`),
      `{
        "name": "hfun-ui-vite/${name}",
        "main": "index.umd.js",
        "module": "index.umd.js"
      }`,
      `utf-8`
    );
  }
};

buildAll();
