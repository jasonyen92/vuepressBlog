module.exports = {
  title: '码上小强',  // 标题
  keywords: 'java,随笔',
  description: '梦开始的地方😄',
  head: [ // 注入到当前页面的 HTML <head> 中的标签
    ['link', { rel: 'icon', href: '/bar.jpeg' }], // 增加一个自定义的 favicon(网页标签的图标)
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
      { text: 'github', link: 'https://github.com/jasonyen92' }
    ],
    sidebar: {  //侧边拦
            // docs文件夹下面的accumulate文件夹 文档中md文件 书写的位置(命名随意)
        '/mybatis/': [
            '/mybatis/', // accumulate文件夹的README.md 不是下拉框形式
            {
              title: 'mybatis',
              children: [
                '/mybatis/MyBatis学习文档', // 以docs为根目录来查找文件 
                // 上面地址查找的是：docs>accumulate>JS>test.md 文件
                // 自动加.md 每个子选项的标题 是该md文件中的第一个h1/h2/h3标题
              ]
            }
          ],
          // docs文件夹下面的algorithm文件夹 这是第二组侧边栏 跟第一组侧边栏没关系
          '/vuepress/': [
            '/vuepress/', 
            {
              title: '手把手教你搭建博客',
              children: [
                '/vuepress/使用VuePress搭建个人博客' 
              ]
            }
          ]
      }
  }
}
