// 引入 vitepress 的 defineConfig 函数，用于定义 VitePress 配置
import { defineConfig } from 'vitepress';
// 引入 node:path 模块的 basename 函数，用于获取路径的最后一部分
import { basename } from 'node:path';
// 引入 vite-plugin-markdown-preview 插件，用于在开发环境中预览 Markdown 文件
import MarkdownPreview from 'vite-plugin-markdown-preview';
// 引入自定义配置文件中的 head、nav 和 sidebar 配置
import { head, nav, sidebar } from './configs/index.mjs';
/**
 * 获取应用的基础路径，如果存在 GITHUB_REPOSITORY 环境变量，则使用其最后一部分作为基础路径，否则为空字符串
 */
const APP_BASE_PATH = basename(process.env.GITHUB_REPOSITORY || '');

/**
 * 导出 VitePress 配置对象
 * @see https://vitepress.dev/reference/site-config
 */
export default defineConfig({
  // 指定构建输出目录，相对于当前配置文件的路径
  // 设置应用的基础路径，如果 APP_BASE_PATH 存在，则使用其作为基础路径，否则使用根路径
  base: APP_BASE_PATH ? `/${APP_BASE_PATH}/` : '/',
  // 设置网站的语言为中文
  lang: 'zh-CN',
  // 设置网站的标题
  title: '一蓑烟雨任平生',
  // 设置网站的描述
  description: '寒江孤影，一蓑烟雨任平生',
  // 设置网站的头部标签，使用自定义配置中的 head 配置
  head: head,
  // 启用最后更新时间显示
  lastUpdated: true,
  // 启用简洁的 URL 格式
  cleanUrls: true,
  /* markdown 配置 */
  markdown: {
    // 显示代码行号
    lineNumbers: true,
  },
  // 配置 VitePress 主题
  themeConfig: {
    // 设置网站的 logo 路径
    logo: '/logo.jpg',
    // 配置搜索功能，使用本地搜索提供者
    search: {
      provider: 'local',
    },
    // 设置导航栏，使用自定义配置中的 nav 配置
    nav,
    // 设置侧边栏，使用自定义配置中的 sidebar 配置
    sidebar,
    // 配置大纲显示，显示所有层级的标题，并设置标签为 '目录'
    outline: {
      level: 'deep',
      label: '目录',
    },
    // 设置社交链接，显示 GitHub 链接
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
    ],
    // 设置页脚信息，包括版权声明和许可信息
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright ©2025 一蓑烟雨任平生',
    },
    // 配置最后更新时间的显示文本和格式选项
    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium',
      },
    },
    // 配置文档页脚的上一篇和下一篇链接的显示文本
    docFooter: {
      prev: '上一篇',
      next: '下一篇',
    },
    // 设置返回顶部按钮的标签
    returnToTopLabel: '回到顶部',
    // 设置侧边栏菜单按钮的标签
    sidebarMenuLabel: '菜单',
    // 设置暗黑模式切换按钮的标签
    darkModeSwitchLabel: '主题',
    // 设置浅色模式切换按钮的标题
    lightModeSwitchTitle: '切换到浅色模式',
    // 设置暗黑模式切换按钮的标题
    darkModeSwitchTitle: '切换到深色模式',
  },
  // 配置 Vite 构建工具，使用 MarkdownPreview 插件
  vite: {
    plugins: [MarkdownPreview()],
  },
});
