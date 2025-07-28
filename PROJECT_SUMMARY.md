# 静态网页项目总结

## 项目概述

本项目是一个简单的静态网页集合，包含一个主页和一个猜数字小游戏。所有文件都已成功发布到GitHub仓库并可通过GitHub Pages访问。

## 项目文件

1. **主页相关文件**：
   - `index.html` - 主页文件，包含基本内容和指向游戏的链接
   - `style.css` - 样式表文件，为整个网站提供统一的视觉风格
   - `script.js` - JavaScript文件，为主页提供交互功能

2. **猜数字游戏文件**：
   - `guess-number.html` - 游戏界面文件
   - `guess-number.js` - 游戏逻辑实现文件

3. **文档文件**：
   - `README.md` - 项目说明文档
   - `PROJECT_SUMMARY.md` - 项目总结文档

## 功能特性

### 主页
- 响应式设计，适配不同屏幕尺寸
- 美观的渐变背景和卡片式布局
- 简单的JavaScript交互功能
- 点击页面可触发动态效果
- 标题颜色定时变化

### 猜数字游戏
- 随机生成1到100之间的数字
- 用户输入猜测数字
- 提供"太大"或"太小"的提示
- 记录尝试次数
- 游戏结束后可重新开始

## GitHub仓库

项目已发布到GitHub仓库：[static-helloworld-web](https://github.com/mifox/static-helloworld-web)

## 如何设置GitHub Pages

1. 访问仓库设置页面：`https://github.com/mifox/static-helloworld-web/settings`
2. 在左侧菜单中找到"Pages"选项
3. 在"Source"部分选择：
   - Source: Deploy from a branch
   - Branch: main
   - Folder: / (root)
4. 点击"Save"按钮保存设置
5. 等待几分钟，页面将可通过以下URL访问：
   - 主页：`https://mifox.github.io/static-helloworld-web/`
   - 游戏：`https://mifox.github.io/static-helloworld-web/guess-number.html`

## 技术栈

- HTML5
- CSS3
- JavaScript (ES6)
- 响应式设计
- GitHub Pages 部署

## 浏览器兼容性

- Chrome (推荐)
- Firefox
- Safari
- Edge

## 许可证

这是一个开源示例项目，可以自由使用和修改。