# 一个由 rspress 驱动的博客

## 背景

> https://rspress.dev/guide/start/introduction.html

听群友说 rspress出了。 rspress是由字节内部孵化，基于rspack全新打包器构建的文档解决方案。那就基于它写个blog，为自己沉淀一些东西吧。

## 实践

- 借助官网get start，通过 `bun` 快速启动。
  - https://rspress.dev/zh/guide/start/getting-started.html
  - 这里参照官网文档就行，启动没有问题。
- 启动后将官网的文档，logo进行部分替换。
  - 例如将logo换成自己画的logo，写上自己的内容。
  - 毕竟写博客最重要的是内容价值。**常用常新**。
- 将项目通过github自动部署。
    - 自动部署需要将仓库名改为 `${你的github名字}.github.io`，这样就能通过仓库名域名访问你的博客了。
    - 上传之后还需要借助github action在你push\合入代码时自动打包，更新内容。
    - 使用pnpm的这里可以参照一下官网的脚本
        - https://rspress.dev/zh/guide/basic/deploy.html
    - 使用bun的可以参照我的脚本
      - https://github.com/hanhan9449/hanhan9449.github.io/blob/master/.github/workflows/deploy.yml
    - 添加脚本、启用github action后，还需要添加environments
        - 需要通过environments，来告诉github，哪个分支是用来部署的分支，有权限部署。
        - 但是environments我几年前就能好了，添加github action后直接能用。这里大家参照一下网上的资料吧。
- 访问他、使用他
    - 可以借助google analyze来分析你页面的使用人数，借助正反馈多写写文章。
    - 好开始，好维持。
        - 好的内容和门面是成功的一半，为页面打造一些有趣的内容和资源吧。
    - 平台有了，就靠自己多总结多写了。

## 优化实践

- 在 google search console 优化你的网页 seo。
  - https://search.google.com/search-console/index?resource_id=sc-domain%3Ahanhan9449.top&hl=zh-cn
- 借助 cloudflare 为你的网页分析、提速。
  - https://dash.cloudflare.com/13cc7f75e56814f3f892a43b837cfbbd/hanhan9449.top/analytics/traffic