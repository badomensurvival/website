import remarkEmoji from 'remark-emoji';

import nextra from 'nextra';

const withNextra = nextra({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
  mdxOptions: {
    remarkPlugins: [[remarkEmoji, { emoticon: true }]],
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'minotar.net',
        port: '',
        pathname: '/avatar/:username',
      },
    ],
  }
});

export default withNextra();

// If you have other Next.js configurations, you can pass them as the parameter:
// module.exports = withNextra({ /* other next.js config */ })
