## Exam &middot; 笔试模拟测试平台

笔试模拟测试平台提供了可线上部署的笔试试题生成环境，旨在解决传统纸质版题库携带及复习刷题的不便。将平台部署到公网服务器后，无论 PC 还是移动设备，均可随时随地开启学霸模式，愉快刷题，助力备考。

## 当前版本主要功能及特性

- 目前仅支持选择题（单选及多选）的顺序排列
- 题库数据源由用户上传。目前仅支持 doc 文档，题目按指定格式排版即可解析。
- 浏览器适配情况：
  | |Chrome|Firefox|Opera|Safari|Edge|IE 11|
  |:-:|:-:|:-:|:-:|:-:|:-:|:-:|
  |PC |Yes|Perfect|Yes|Perfect|Bad|No|
  |移动端|Perfect|Perfect|Perfect|Perfect|Perfect|-|

> 注：以上主要功能及特性可能随版本的迭代或功能调整而改变

## 当前版本试题排版格式

```
题号．题干
A、选项描述
B、选项描述
C、选项描述
D、选项描述
答案：标准答案
```

注意事项：

- 选项字母后的顿号必须使用中文全角
- 答案后的冒号必须使用中文全角
- 其余部分的标点符号使用英文半角或中文全角均可

> 注：以上排版格式和注意事项可能随版本的迭代或功能调整而改变

试题案例：

```
2．《建设工程安全生产管理条例》国务院令第393号第十条规定：（　　）在申请领取施工许可证时，应当提供建设工程有关（　　）的资料。
A、施工单位，安全施工措施
B、建设单位，施工机具
C、建设单位，安全施工措施
D、施工单位，施工机具
答案：C
```

## 主要开发环境

- React 16.12.0
- Material-UI 4.9.2
- OpenJDK（Amazon Corretto 11.0.3）
- SpringBoot 2.2.4.RELEASE

## 仓库分支结构

- master 分支用于记载项目说明、功能更新情况等非代码信息
- exam-web 分支用于保存项目前端代码
- exam-server 分支用于保存项目服务端代码

## 前端文件结构

前端部分采用 create-react-app 脚手架搭建。执行 `npm run build` 后，将 build 中的静态内容并入服务器端打包即可部署；源代码未执行 `npm run eject`，留有定制配置容器的余地。文件结构如下：

```
├── public/                                     # 静态文件
│   ├── favicon.ico                             # 图标
│   ├── index.html                              # 应用入口 HTML
│   ├── manifest.json
│   └── robots.txt                              # 爬虫程序君子协议
├── src/
│   ├── components/                             # 自定义业务组件
│   │   ├── FileOperation/                      # 文件操作组件
│   │   │   ├── DataUnit/                       # 数据单元
│   │   │   │   └── index.jsx
│   │   │   └── index.jsx
│   │   ├── Overview/                           # 概览组件
│   │   │   ├── SquareUnit/                     # 方格单元
│   │   │   │   └── index.jsx
│   │   │   └── index.jsx
│   │   └── Questions/                          # 题目展示组件
│   │       ├── ChoiceUnit/                     # 选项单元
│   │       │   ├── CheckBoxUnit/               # 复选框单元
│   │       │   │   └── index.jsx
│   │       │   └── index.jsx
│   │       └── index.jsx
│   ├── layouts/                                # 布局组件
│   │   └── BasicLayout/                        # 基础布局组件
│   │       ├── components/
│   │       │   └── Header/
│   │       │       ├── images/                 # 组件展示图片
│   │       │       └── index.jsx
│   │       └── index.jsx
│   ├── mock/                                   # 模拟数据
│   │   └── mockData.js
│   ├── App.jsx
│   ├── App.test.js
│   ├── ExamContext.js                          # 应用上下文
│   ├── global.css                              # 全局样式
│   ├── index.jsx                               # 应用入口脚本
│   ├── serviceWorker.js                        # 离线资源缓存
│   └── setupTests.js
├── .gitignore
├── .prettierrc                                 # Prettier 格式化规则
├── package-lock.json
└── package.json
```

## 服务端文件结构

```
├── gradle/wrapper/                             # gradle 通用配置文件
├── src/
│   ├── main/
│   │   ├── java/site.dcheng.examserver
│   │   │   ├── config/
│   │   │   │   └── WebConfig.java              # 全局配置
│   │   │   ├── controller/
│   │   │   │   └── ReceiveController.java      # 请求处理
│   │   │   ├── ExamServerApplication.java      # 应用入口
│   │   │   └── QuestionEntity.java             # 题目实体类
│   │   └── resources/
│   │   │   ├── static/                         # 静态文件
│   │   │   ├── templates/                      # 模版文件
│   │   │   └── application.yml                 # 配置文件
│   └── test/
├── .gitignore
├── build.gradle                                # 项目依赖
├── gradlew
├── gradlew.bat
└── settings.gradle
```
