export const dynamic = "force-dynamic";

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { client } from "@/lib/sanityClient";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Articles on web development, AI automation, product engineering, and the systems that power modern businesses.",
};

// ===== AUTO EXCERPT =====
function getExcerpt(body: any[], limit = 160): string {
  if (!body || !body.length) return "";

  const firstBlock = body.find((b) => b._type === "block");
  if (!firstBlock || !firstBlock.children) return "";

  const text = firstBlock.children.map((c: any) => c.text || "").join("");
  return text.length > limit ? text.slice(0, limit) + "..." : text;
}

// ===== TYPES =====
type Post = {
  _id: string;
  title: string;
  slug: { current: string };
  publishedAt: string;
  mainImage?: {
    alt?: string;
    asset?: { url: string };
  };
  categories?: { title: string }[];
  body?: any;
};

// ===== FETCH POSTS =====
async function getPosts(): Promise<Post[]> {
  return client.fetch(`
    *[_type == "post"]
    | order(publishedAt desc)[0..5]{
      _id,
      title,
      slug,
      publishedAt,
      mainImage{ alt, asset->{url} },
      categories[]->{ title },
      body
    }
  `);
}

// ===== PAGE =====
export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <main className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* ===== POSTS GRID ===== */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {posts.map((post) => (
            <Link
              key={post._id}
              href={`/blog/${post.slug.current}`}
              className="group block rounded-xl border border-gray-200 overflow-hidden transition bg-white"
            >
              {/* Thumbnail */}
              {post.mainImage?.asset?.url && (
                <div className="relative w-full aspect-video overflow-hidden">
                  <Image
                    src={post.mainImage.asset.url}
                    alt={post.mainImage.alt || post.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.05]"
                  />
                </div>
              )}

              <div className="p-6">
                {/* Category */}
                {post.categories?.[0]?.title && (
                  <div className="inline-block mb-3 px-3 py-1 rounded-md text-xs bg-blue-50 text-blue-700 font-inter">
                    {post.categories[0].title}
                  </div>
                )}

                {/* Title */}
                <h2 className="text-2xl leading-snug font-medium text-gray-900 mb-2 group-hover:text-primary font-inter">
                  {post.title}
                </h2>

                {/* Excerpt */}
                <p className="text-md leading-relaxed text-gray-600 line-clamp-3 mb-4 font-inter">
                  {getExcerpt(post.body || [], 140)}
                </p>

                {/* Date */}
                <div className="text-xs text-gray-500">
                  {new Date(post.publishedAt).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
