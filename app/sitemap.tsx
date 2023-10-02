import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://linke.de",
      lastModified: new Date(),
    },
  ];
}
