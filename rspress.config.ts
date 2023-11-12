import * as path from 'path';
import { defineConfig } from 'rspress/config';

export default defineConfig({
  root: path.join(__dirname, 'docs'),
  title: 'hanhan.rich',
  description: 'hanhan.rich',
  icon: "/apple-only-square.png",
  logo: {
    light: "/main-apple-rich-logo.png",
    dark: "/main-apple-rich-logo.png",
  },
  themeConfig: {
    socialLinks: [
      { icon: 'github', mode: 'link', content: 'https://github.com/web-infra-dev/rspress' },
    ],
  },
});
