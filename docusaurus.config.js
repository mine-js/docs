const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(module.exports = {
  title: 'MineJS Docs',
  tagline: '버킷 기능을 JS로 코딩하세요!',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/logo.png',
  organizationName: 'minejs', // Usually your GitHub org/user name.
  projectName: 'minejs', // Usually your repo name.

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/facebook/docusaurus/edit/main/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/main/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'MineJS Docs',
        logo: {
          alt: 'MineJS Logo',
          src: 'https://avatars.githubusercontent.com/u/94840691?s=200&v=4',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: '튜토리얼',
          },
          {to: '/blog', label: '블로그', position: 'left'},
          {
            href: 'https://github.com/mine-js',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: '문서',
            items: [
              {
                label: '시작',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: '커뮤니티',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.gg/ngpsJ4Sfmb',
              }
            ],
          },
          {
            title: '더...',
            items: [
              {
                label: '블로그',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/mine-js',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} MineJS, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
});
