const { configureSitemap } = require("@sergeymyssak/nextjs-sitemap");

const Sitemap = configureSitemap({
  domains: [
    {
      domain: "www.wallbox-vergleich.com",
      defaultLocale: "de",
    },
  ],
  exclude: ["/admin/*"],
  excludeIndex: true,
  pagesConfig: {
    "/pages/*": {
      priority: "0.3",
      changefreq: "daily",
    },
  },
  trailingSlash: false,
  targetDirectory: __dirname + "/public",
  pagesDirectory: __dirname + "/pages",
});

Sitemap.generateSitemap();
