// import { defineConfig } from "vite";

module.exports = {
    title:'hfunui组件库0923',
    lang: 'zh-CN',
    base:'/',
    themeConfig: {
        logo: '/logo.png',
        nav:[
            {text:'首页', link:'/'},
            {text:'关于', link:'/about/'},
            {text:'组件', link:'/component/'}
        ],
        sidebar:{
            '/component/':[
                {
                    text:'分类一',
                    collapsible:true,
                    collapsed:false,
                    items:[
                        { text:'按钮', link:'/component/sidebar/class1/button.md'}
                    ]
                }
            ]
        },
        socialLinks:[
            {icon:'github', link:'/'}
        ],
        footer:{
            message: 'Released under the MIT License.',
            copyright: 'Copyright © 2022-present HFUN TEAM'
        },
        docFooter: {
            prev: 'Pagina prior',
            next: 'Proxima pagina'
        }
    },
    markdown: {
        config: (md) => {
          // 这里可以使用 markdown-it 插件，vitepress-theme-demoblock就是基于此开发的
          const { demoBlockPlugin } = require("vitepress-theme-demoblock");
          md.use(demoBlockPlugin);
        },
    },
}