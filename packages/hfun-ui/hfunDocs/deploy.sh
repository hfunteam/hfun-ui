#!usr/bin/env sh

set -e

pnpm run docs:build

cd docs/.vitepress/dist

git init

# git add -A

# git commit -m "github actions 自动部署"

git push -f https://github.com/hfunteam/hfunteam.github.io.git master:docs

# git config --global -l

# rm -rf docs/.vitepress/dist