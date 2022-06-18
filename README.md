# 安装 CloudBase CLI#
使用 NPM
npm i -g @cloudbase/cli
或使用 Yarn
yarn global add @cloudbase/cli


# tcb常用命令
cloudbase login

## 添加新函数
cloudbaserc.json add function
```json
 {
      "name": "textModeration",
      "timeout": 5,
      "envVariables": {},
      "runtime": "Nodejs12.16",
      "memorySize": 256,
      "handler": "index.main"
  }
```

– 部署云函数

tcb fn deploy textModeration 

- 下载云函数代码

tcb fn code download textModeration


- 代码更新

tcb fn code update nlpSentimentAnalysis
tcb fn deploy textModeration


cloudbase login

– 创建免费环境

  $ tcb env create envName

– 初始化云开发项目

  $ tcb new

– 部署云函数

  $ tcb fn deploy

– 查看命令使用介绍

  $ tcb -h