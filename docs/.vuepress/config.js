module.exports = {
  title: '码上小强',  // 标题
  keywords: 'java',
  description: '梦开始的地方😄',
  head: [ // 注入到当前页面的 HTML <head> 中的标签
    ['link', { rel: 'icon', href: '/logo.png' }], // 增加一个自定义的 favicon(网页标签的图标)
  ],
  base: '/', // 这是部署到github相关的配置
  lastUpdated: 'Last Updated',
  markdown: {
    lineNumbers: false // 代码块显示行号
  },
  themeConfig: {
    nav:[ // 导航栏配置
      {text: 'MyBatis', link: '/mybatis/' },
      { text: 'github', link: 'https://github.com/jasonyen92' }
    ],
    sidebar: {  //侧边拦
            '/2020/': [
                ['/mybatis/', '']
        }
    sidebar: 'auto', // 侧边栏配置
    sidebarDepth: 2, // 侧边栏显示2级
  }
};