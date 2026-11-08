import type { MetadataRoute } from "next";
import { site } from "@/content/site";
import { services } from "@/content/services";
import { cases } from "@/content/cases";
import { posts } from "@/content/blog";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "/",
    "/services/",
    "/case-studies/",
    "/our-clients/",
    "/about/",
    "/blog/",
    "/contact/",
    ...services.map((s) => `/services/${s.slug}/`),
    ...cases.map((c) => `/case-studies/${c.slug}/`),
    ...posts.map((p) => `/blog/${p.slug}/`),
  ];
  return paths.map((p) => ({ url: site.url + p }));
}
