---
layout: home
layoutClass: 'm-home-layout'

hero:
  name: 一蓑烟雨任平生
  text: 个人学习博客
  tagline: 进步是一点点累积来的，日积月累，终将是质变。
  image:
    src: /logo.jpg
    alt: 社会很单纯
  actions:
    - text: 面试整理
      link:
    - text: 前端导航
      link: /nav/
      theme: alt
    - text: 音乐播放器
      link:
    - text: 测试页
      link: /test
      theme: alt
features:
  - icon: 📖
    title: 面试整理
    details: 整理前端常用知识点<small>（面试八股文）</small><br />熟记八股文，面试时就不会慌了
    link:
    linkText: 前端常用知识
  - icon: 📘
    title: 源码学习
    details: 了解各种库的实现原理<br />学习其中的小技巧和冷知识
    link:
    linkText: 源码学习
  - icon: 🧰
    title: 提效工具
    details: 工欲善其事，必先利其器<br />记录开发和日常使用中所用到的软件、插件、扩展等
    link:
    linkText: 提效工具
  - icon: 🐞
    title: 踩坑记录
    details: 那些年我们踩过的坑<br />总有一些让你意想不到的问题
    link:
    linkText: 踩坑记录
  - icon: 💡
    title: 强身健体
    details: 身体是成功的前提<small>（跑步、徒手健身）</small><br />保持睿智的头脑和健康的身体
    link:
  - icon: 💯
    title: 阅读图书馆
    details: '<small class="bottom-small">热爱文学的改行程序员</small>'
    link:
---

<style>
/*爱的魔力转圈圈*/
.m-home-layout .image-src:hover {
  transform: translate(-50%, -50%) rotate(666turn);
  transition: transform 59s 1s cubic-bezier(0.3, 0, 0.8, 1);
}

.m-home-layout .details small {
  opacity: 0.8;
}

.m-home-layout .bottom-small {
  display: block;
  margin-top: 2em;
  text-align: right;
}
</style>
