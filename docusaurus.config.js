// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Trout Lake Holdings',
  tagline: 'A holding company in Toronto, Canada.',
  url: 'https://troutlakeholdings.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: {
          showReadingTime: false,
          blogSidebarCount: 10,
          postsPerPage: 6,
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
        title: 'Trout Lake Holdings',
        logo: {
          alt: 'Trout Lake Holdings Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            href: 'mailto:blake@troutlakeholdings.com',
            label: 'Get In Touch',
            position: 'left',
          },
        ],
      },
      footer: {
        style: 'dark',
        copyright: `Made with ❤️  in Canada.<br>Copyright © ${new Date().getFullYear()} Trout Lake Holdings, Ltd. <a href='/trout-lake-vancouver'>⛰</a>`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
