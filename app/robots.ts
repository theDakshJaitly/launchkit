import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/waitlist/success", "/waitlist/survey"],
    },
    sitemap: "https://launchx.page/sitemap.xml",
  };
}
