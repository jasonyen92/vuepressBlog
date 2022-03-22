# 使用VuePress搭建个人博客



## 一.为什么要搭建博客？

​		首先，本身作为一个程序员，你要有记录和分享的习惯。记录下学习和遇到的问题，以便日后温故知新；分享你的成果，帮助他人在coding的路上减少阻碍。

​		当然，也可以记录生活的点点滴滴，记录美好生活。



## 二.什么是VuePress，为什么要用VuePress？

​		VuePress是尤雨溪(vue.js框架作者)发布的一个全新的基于vue的静态网站生成器，实际上就是一个vue的spa应用，内置webpack，可以用来写文档。详见[VuePress中文网](https://vuepress.docschina.org)。

​		VuePress有很多有点：

- 界面简洁优雅
- 容易上手
- 更好的兼容、扩展MarkDown语法
- 相应式布局，PC端、手机端
- Google Analytics集成
- 支持PWA



## 三.开始搭建

**创建文件夹**

新建空白文件夹，命名为vuepressBlog

**安装VuePress**

使用命令

```shell
npm install -g vuepress
```

**初始化项目**

使用`npm init`或`npm init -y` 初始化项目

**创建文件夹和文件**

在文件夹中创建docs文件夹，在docs文件夹中创建.vuepress文件夹，在.vuepress文件夹中创建public文件夹和config.js文件，项目结构如下

```
vuepressBlog
|———— docs
|     |—— README.md
|     |—— .vuepress
|         |—— public
|         |—— config.js
|———— package.json

```

在config.js文件中配置网站标题、描述、主题等信息

```js
module.exports = {
  title: '码上小强',  // 标题
  keywords: 'java,随笔', // 关键词
  description: '梦开始的地方😄', // 描述
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
            '/2022/': [
                ['/mybatis/', '']
                ]
        }
  }
}
```

> 注意：文档的根目录为docs目录且需要有一个README.md文件，图片根目录为public目录

**在package.json文件里添加三个启动命令**

```shell
"scripts": {
  "dev": "vuepress dev docs",
  "build": "vuepress build docs",
  "deploy": "bash deploy.sh"
}
```

**配置首页**

在根目录下的README.md里添加如下

```markdown
---
home: true
heroImage: /spider.png
heroText: 我的主页
tagline: My homepage
actionText: 技术文档 →
actionLink: /tech/interview/
features:
- title: 生活
  details: 记录点点滴滴
- title: 技术
  details: 享受coding
- title: 沉淀
  details: 不积跬步，无以至千里
footer: 码上小强的个人博客
---
```

**ok，一切就绪，本地试一下吧！**

```shell
npm run dev
```

## 四.部署到github上

**新建仓库一：username.github.io**

> username为你github用户名，切勿随意乱写

点击右上角头像会显示你的username是什么，如图：

![1.png](https://github.com/jasonyen92/pics/blob/main/1.png)

**新建仓库二：vuepressBlog**

仓库二为我们之前新建的目录里的文件代码

二者的关系是：**仓库一负责显示网站内容，我们不需要改动它；日常开发和新增内容，都在仓库二中，并通过 npm run deploy 命令，将代码发布到仓库一**

在根目录下新建deploy.sh部署文件

```shell
#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run build

# 进入生成的文件夹
cd docs/.vuepress/dist

# 如果是发布到自定义域名
# echo 'www.yourwebsite.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# 如果你想要部署到 https://USERNAME.github.io
git push -f https://github.com/jasonyen92/jasonyen92.github.io.git master

cd -
```

然后在目录下执行命令`npm run deploy`，当成功后，打开你的username.github.io（username为你的github用户名）查看

