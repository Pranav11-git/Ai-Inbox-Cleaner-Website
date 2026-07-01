import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

const routes = ["", "/privacy", "/terms", "/contact", "/support", "/faq"];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date("2026-06-30"),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
