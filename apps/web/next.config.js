// eslint-disable-next-line @typescript-eslint/no-var-requires
const withNx = require('@nrwl/next/plugins/with-nx');

const nextConfig = {
  target: 'experimental-serverless-trace',
  images: {
    domains: ['images.prismic.io'],
  },
  nx: {
    svgr: true
  },
};

module.exports = withNx(nextConfig);
