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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-[60px] gap-y-16">
          {posts.map((post) => (
            <Link
              key={post._id}
              href={`/blog/${post.slug.current}`}
              className="group block"
            >
              {/* Image */}
              {post.mainImage?.asset?.url && (
                <div className="relative w-full aspect-video overflow-hidden rounded-lg mb-4">
                  <Image
                    src={post.mainImage.asset.url}
                    alt={post.mainImage.alt || post.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                </div>
              )}

              {/* Date */}
              <div className="text-sm text-gray-500 mb-2">
                {new Date(post.publishedAt).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })}
              </div>

              {/* Title */}
              <h2 className="text-[20px] leading-snug font-semibold text-gray-900 mb-2 transition-colors group-hover:underline">
                {post.title}
              </h2>

              {/* Excerpt */}
              <p className="text-[15px] leading-relaxed text-gray-600 line-clamp-2">
                {getExcerpt(post.body || [], 140)}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
