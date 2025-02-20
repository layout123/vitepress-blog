import type { DefaultTheme } from 'vitepress';

export const nav: DefaultTheme.Config['nav'] = [
  { text: '主页', link: '/' },
  { text: '前端导航', link: '/nav/' },
  { text: '踩坑记录', link: '/markdown-examples' },
  { text: '学习笔记', link: '/markdown-examples' },
  {
    text: '全栈之路',
    items: [
      { text: '大前端', link: '/item-1' },
      { text: '后端', link: '/item-2' },
      { text: '部署', link: '/item-3' },
    ],
  },
];
