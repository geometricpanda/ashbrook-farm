// eslint-disable-next-line @typescript-eslint/no-var-requires
const withNx = require('@nrwl/next/plugins/with-nx');

const nextConfig = {
  target: 'experimental-serverless-trace',

  images: {
    deviceSizes: [320, 360, 768, 1024, 1200],
    domains: ['images.prismic.io'],
  },

  nx: {
    svgr: true
  },

  async redirects() {
    return [
      {
        source: '/breed',
        destination: '/breeds',
        permanent: true,
      },
    ]
  },
};

module.exports = withNx(nextConfig);
