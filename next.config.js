/* eslint-disable @typescript-eslint/no-var-requires */
// @ts-check

const { flatten } = require('lodash');
const { withPlausibleProxy } = require('next-plausible');

/** @type {import('next').NextConfig} */
module.exports = withPlausibleProxy()({
  eslint: {
    dirs: ['src'],
  },

  reactStrictMode: true,
  swcMinify: true,

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.hashnode.com',
      },
    ],
  },

  async redirects() {
    return [
      {
        source: '/blog/series/:path*',
        permanent: false,
        destination: `/blog/category/:path*`,
      },
      ...flatten(
        ['/rss.xml', '/atom.xml', '/feed.json'].map((path) => [
          {
            source: path,
            permanent: false,
            destination: `/blog${path}`,
          },
          {
            source: path.replace(/\.(xml|json)$/, ''),
            permanent: false,
            destination: `/blog${path}`,
          },
          {
            source: `/blog${path.replace(/\.(xml|json)$/, '')}`,
            permanent: false,
            destination: `/blog${path}`,
          },
        ]),
      ),
      {
        source: '/blog/sitemap.xml',
        permanent: false,
        destination: `/sitemap.xml`,
      },
      {
        source: '/:path*',
        has: [
          { type: 'host', value: 'fix-git-main-some-engineering.vercel.app' },
        ],
        permanent: true,
        destination: 'https://fix.security/:path*',
      },
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'origin.fix.security' }],
        permanent: true,
        destination: 'https://fix.security/:path*',
      },
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'blog.fix.security' }],
        permanent: true,
        destination: 'https://fix.security/blog/:path*',
      },
      {
        source: '/docs/:path*',
        permanent: true,
        destination: 'https://docs.fix.security/:path*',
      },
    ];
  },

  async rewrites() {
    return [
      {
        source: '/api/blog/view',
        destination: 'https://hn-ping2.hashnode.com/api/view',
      },
    ];
  },

  webpack(config) {
    // Grab the existing rule that handles SVG imports
    const fileLoaderRule = config.module.rules.find((rule) =>
      rule.test?.test?.('.svg'),
    );

    config.module.rules.push(
      // Reapply the existing rule, but only for svg imports ending in ?url
      {
        ...fileLoaderRule,
        test: /\.svg$/i,
        resourceQuery: /url/, // *.svg?url
      },
      // Convert all other *.svg imports to React components
      {
        test: /\.svg$/i,
        issuer: { not: /\.(css|scss|sass)$/ },
        resourceQuery: { not: /url/ }, // exclude if *.svg?url
        loader: '@svgr/webpack',
        options: {
          dimensions: false,
          titleProp: true,
        },
      },
    );

    // Modify the file loader rule to ignore *.svg, since we have it handled now.
    fileLoaderRule.exclude = /\.svg$/i;

    return config;
  },

  experimental: {
    useDeploymentId: true,
    useDeploymentIdServerActions: true,
    webpackBuildWorker: true,
  },
});
