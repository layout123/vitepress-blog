import type { DefaultTheme } from 'vitepress';

export const sidebar: DefaultTheme.Config['sidebar'] = {
  '/interview/': [
    {
      text: '相关文章',
      items: [
        { text: 'html相关', link: '/interview/html/' },
        { text: 'css相关', link: '/interview/css/' },
        { text: 'js相关', link: '/interview/js/' },
        { text: 'vue相关', link: '/interview/vue/' },
        { text: 'react相关', link: '/interview/react/' },
      ],
    },
  ],
};
