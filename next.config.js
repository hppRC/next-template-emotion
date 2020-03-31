const { resolve } = require(`path`);
const sitemap = require(`nextjs-sitemap-generator`);

sitemap({
  baseUrl: `next-tempalte.hpprc.com`,
  pagesDirectory: `${__dirname}/src/pages`,
  targetDirectory: `static/`,
});

module.exports = {
  target: `serverless`,
  webpack: (config) => {
    config.resolve.alias[`~`] = resolve(__dirname, `src`);
    return config;
  },
};
