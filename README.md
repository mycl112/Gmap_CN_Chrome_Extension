# Google Maps GL CN Fix - Chrome Extension

自动为Google Maps/Google地球添加`gl=cn`参数并刷新的Chrome扩展，适配中国地区。

## 功能特点

- 🚀 **自动添加参数**：访问Google Maps或Google地球时自动添加`gl=cn`参数
- 🔄 **智能刷新**：仅在URL变化时才重定向，避免无限刷新
- 🛡️ **错误处理**：包含完善的错误处理机制，确保脚本稳定运行
- 🎯 **多域名支持**：适配以下域名：
  - `earth.google.com`
  - `www.google.com/maps`
  - `www.google.com.hk/maps`
- 🌐 **独立运行**：不依赖Tampermonkey等第三方扩展

## 安装方法

### 方法一：开发者模式安装（推荐用于测试）

1. 下载或克隆本仓库到本地
2. 打开Chrome浏览器，访问 `chrome://extensions/`
3. 打开右上角的"开发者模式"开关
4. 点击"加载已解压的扩展程序"按钮
5. 选择本项目的根目录
6. 扩展安装完成！

### 方法二：从Chrome Web Store安装（未来支持）

如果扩展已发布到Chrome Web Store，可以直接搜索"Google Maps GL CN Fix"进行安装。

## 使用方法

安装完成后，扩展会自动运行，无需任何手动操作：

1. 访问 Google Maps 或 Google 地球
2. 扩展会自动检测URL并添加`gl=cn`参数
3. 页面会自动刷新以应用更改
4. 打开浏览器控制台可以看到操作日志

## 项目结构

```
Gmap_CN_Chrome_Extension/
├── manifest.json       # 扩展配置文件
├── content.js          # 内容脚本
├── icons/              # 图标文件夹
│   ├── icon16.png
│   ├── icon48.png
│   └── icon128.png
└── README.md          # 项目说明文档
```

## 工作原理

1. **URL处理**：分离URL的哈希部分，移除已存在的`gl`参数，添加`gl=cn`参数
2. **智能判断**：仅当URL发生变化时才重定向，避免无限循环
3. **错误处理**：包含try-catch块，确保脚本在各种情况下都能稳定运行
4. **提前执行**：使用`run_at: document_start`确保在页面加载前执行，避免无效加载

## 开发说明

### 修改扩展

1. 编辑`content.js`文件修改功能逻辑
2. 编辑`manifest.json`文件修改扩展配置
3. 在`chrome://extensions/`页面点击扩展的"刷新"按钮

### 打包扩展

1. 在`chrome://extensions/`页面点击"打包扩展程序"
2. 选择扩展目录
3. 生成`.crx`和`.pem`文件

## 版本历史

- **v1.2.0**：Chrome扩展版本，优化URL处理逻辑
- **v1.1.0**：添加错误处理机制
- **v1.0.0**：初始版本，实现基本功能

## 贡献

欢迎提交Issue和Pull Request来改进这个项目！

## 许可证

本项目采用 MIT 许可证 - 详见 [LICENSE](LICENSE) 文件

## 免责声明

本扩展仅用于技术研究和学习目的，使用时请遵守相关法律法规。

## 相关项目

- [Tampermonkey版本](https://github.com/mycl112/Gmap_CN) - Tampermonkey用户脚本版本
