import * as path from 'path';
import { defineConfig } from 'rspress/config';

export default defineConfig({
  root: path.join(__dirname, 'docs'),
  title: 'hanhan9449 的博客',
  description: '分享 hanhan9449 所了解到的一些技术，以及经历',
  icon: "/apple-only-square.png",
  logo: {
    light: "/main-apple-rich-logo.png",
    dark: "/main-apple-rich-logo.png",
  },
  themeConfig: {
    socialLinks: [
      { icon: 'github', mode: 'link', content: 'https://github.com/hanhan9449/hanhan9449.github.io' },
    ],
    enableContentAnimation: true,
    lastUpdated: true
  },
});
