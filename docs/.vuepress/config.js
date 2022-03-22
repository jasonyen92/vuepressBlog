module.exports = {
  title: '码上小强',  // 标题
  keywords: 'java,随笔',
  description: '梦开始的地方😄',
  head: [ // 注入到当前页面的 HTML <head> 中的标签
    ['link', { rel: 'icon', href: '/bar.jpg' }], // 增加一个自定义的 favicon(网页标签的图标)
  ],
  base: '/', // 这是部署到github相关的配置
  lastUpdated: 'Last Updated',
  markdown: {
    lineNumbers: false // 代码块显示行号
  },
  themeConfig: {
    sidebarDepth: 2, // e'b将同时提取markdown中h2 和 h3 标题，显示在侧边栏上。
    nav:[ // 导航栏配置
      {text: 'MyBatis', link: '/mybatis/' },
      {text: '搭建博客', link: '/vuepress/' },
      {text: 'github', link: 'https://github.com/jasonyen92' }
    ],
    sidebar: {  //侧边拦
             '/mybatis/': [
                {
                    title: 'mybatis',
                    children: [
                        {title: 'mybatis基础', path: '/mybatis/mybatis基础/使用VuePress搭建个人博客'}
                        
                    ]
                },
                {
                    title: '手撸mybatis',
                    children: [
                        {title: '手撸mybatis', path: '/mybatis/手撸mybatis/使用VuePress搭建个人博客'},
                    ]
                }
            ],
            '/vuepress/': [{
                title: '手把手教你搭建博客',
                children: [
                    {title: '手把手教你搭建博客', path: '/vuepress/搭建博客一/使用VuePress搭建个人博客'},
                ]
            }]
      }
  }
}
