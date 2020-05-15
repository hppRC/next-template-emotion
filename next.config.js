/* eslint-disable no-param-reassign */
const sitemap = require(`nextjs-sitemap-generator`);

sitemap({
  baseUrl: `next-tempalte.hpprc.com`,
  pagesDirectory: `${__dirname}/src/pages`,
  targetDirectory: `public/`,
});

module.exports = {
  target: `serverless`,
  assetPrefix: process.env.NEXT_PUBLIC_GITHUB_PAGES ? `/next-template` : ``,
};
