# **Tata Bolg**

> 生活，从这里启航

**用户手册** 👉 _doc/Manual.md

### 开始使用

1. 你需要安装 [Ruby](https://www.ruby-lang.org/en/) 和 [Bundler](https://bundler.io/) 来使用 [Jekyll](https://jekyllrb.com/)。按照 [使用 Bundler 配合 Jekyll](https://jekyllrb.com/tutorials/using-jekyll-with-bundler/) 的教程来完成环境配置。

2. 安装 Gemfile 中的依赖：

   ```bash
   $ bundle install
   ```

3. 启动网站（默认是 localhost:4000）：

   ```bash
   $ bundle exec jekyll serve  # 或者使用 npm start
   ```

### 开发（从源码构建）

要修改主题，你需要安装 [Grunt](https://gruntjs.com/)。在 Gruntfile.js 中有许多任务，包括压缩 JavaScript、将 .less 文件编译为 .css、添加 Apache 2.0 许可证声明、监听文件变化等。

是的，这些任务已经继承了很久，非常传统。没有模块化、没有转译等。

Jekyll 相关的关键代码位于 _include/ 和 _layouts/ 目录下。大部分是 [Liquid](https://github.com/Shopify/liquid/wiki) 模板。

此主题使用了 Jekyll 默认的代码高亮工具 [Rouge](http://rouge.jneen.net/)，它与 Pygments 主题兼容，所以你可以选择任何 Pygments 主题的 CSS（例如来自 [这里](http://jwarby.github.io/jekyll-pygments-themes/languages/javascript.html)）并替换 highlight.less 中的内容。

想了解更多吗？请查阅完整的用户手册 _doc/Manual.md！

### 其他资源

#### 移植版本

•  [Hexo](https://github.com/Kaijun/hexo-theme-huxblog) 由 @kaijun 提供
 •  [React-SSR](https://github.com/LucasIcarus/huxpro.github.io/tree/ssr) 由 @LucasIcarus 提供

------

**Apache License 2.0**
 Copyright (c) 2024-present Tachibana Kousuke

Tata bolg 基于 [Clean Blog Jekyll Theme (MIT 许可证)](https://github.com/BlackrockDigital/startbootstrap-clean-blog-jekyll/) 开发，版权 (c) 2013-2024 Blackrock Digital LLC.
