export const dynamic = "force-dynamic";

import { MetadataRoute } from "next";
import { client } from "@/lib/sanityClient";

type Post = {
  slug: {
    current: string;
  };
  _updatedAt: string;
};

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://saclen.com";

  // Fetch all blog slugs from Sanity
  const posts: Post[] = await client.fetch(`
    *[_type == "post" && defined(slug.current)]{
      slug,
      _updatedAt
    }
  `);

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
    },
  ];

  // Blog pages (dynamic)
  const blogPages: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug.current}`,
    lastModified: new Date(post._updatedAt),
  }));

  return [...staticPages, ...blogPages];
}
