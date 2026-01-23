import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PortableText } from "@portabletext/react";
import { client } from "@/lib/sanityClient";
import CTASection from "@/app/components/sections/shared/CTASection";
import AISummarizeCard from "@/app/(site)/blog/AISummarizeCard";


/* ================= Types ================= */

type Post = {
  title: string;
  publishedAt: string;
  mainImage?: {
    asset: { url: string };
    alt?: string;
  };
  author?: {
    name: string;
    image?: { asset?: { url: string } };
  };
  categories?: { title: string }[];
  body?: any;
};

/* ================= Data ================= */

async function getPost(slug: string): Promise<Post | null> {
  return client.fetch(
    `
    *[_type == "post" && slug.current == $slug][0]{
      title,
      publishedAt,
      mainImage{ alt, asset->{url} },
      author->{
        name,
        image{ asset->{url} }
      },
      categories[]->{ title },
      body[]{
        ...,
        _type == "image" => { ..., asset->{ url } },
        _type == "videoFile" => { ..., asset->{ url } },
        _type == "videoEmbed" => { ... }
      }
    }
    `,
    { slug },
  );
}

async function getRelatedPosts(slug: string, categoryTitle?: string) {
  if (!categoryTitle) return [];

  return client.fetch(
    `
    *[_type == "post" && slug.current != $slug && $cat in categories[]->title]
    | order(publishedAt desc)[0..2]{
      title,
      slug,
      publishedAt,
      mainImage{
        asset->{url}
      },
      categories[]->{
        title
      }
    }
    `,
    { slug, cat: categoryTitle },
  );
}

/* ================= Metadata ================= */

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) {
    return {
      title: "Post not found",
    };
  }

  const description =
    post.body?.[0]?.children?.[0]?.text?.slice(0, 160) ||
    "Read this article on Saclen Atlas.";

  return {
    title: post.title,
    description,

    openGraph: {
      title: post.title,
      description,
      url: `https://atlas.saclen.com/blog/${slug}`,
      siteName: "Saclen Atlas",
      images: post.mainImage?.asset?.url
        ? [
            {
              url: post.mainImage.asset.url,
              width: 1200,
              height: 630,
              alt: post.title,
            },
          ]
        : [],
      type: "article",
    },

    twitter: {
      card: "summary_large_image",
      title: post.title,
      description,
      images: post.mainImage?.asset?.url ? [post.mainImage.asset.url] : [],
    },
  };
}

/* ================= Portable Text ================= */

const portableComponents = {
  types: {
    image: ({ value }: any) => {
      if (!value?.asset?.url) return null;
      return (
        <div className="my-16">
          <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden border border-gray-200">
            <Image src={value.asset.url} alt="" fill className="object-cover" />
          </div>
        </div>
      );
    },

    videoFile: ({ value }: any) => {
      if (!value?.asset?.url) return null;

      return (
        <div className="my-16">
          <video
            src={value.asset.url}
            controls
            className="w-full rounded-xl border border-gray-200"
          />
        </div>
      );
    },

    videoEmbed: ({ value }: any) => {
      if (!value?.url) return null;

      const embedUrl = value.url
        .replace("watch?v=", "embed/")
        .replace("youtu.be/", "www.youtube.com/embed/");

      return (
        <div className="my-16">
          <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-gray-200">
            <iframe
              src={embedUrl}
              className="w-full h-full"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      );
    },

    blogTable: ({ value }: any) => {
      if (!value?.rows?.length) return null;

      return (
        <div className="my-16">
          <div className="border border-gray-200 rounded-xl bg-white shadow-sm overflow-hidden">
            {value.caption && (
              <div className="px-6 py-4 text-[15px] font-semibold text-gray-700 bg-gray-50 border-b border-gray-200">
                {value.caption}
              </div>
            )}

            <div className="overflow-x-auto">
              <table className="min-w-[800px] w-full border-collapse text-left">
                <tbody>
                  {value.rows.map((row: any, rowIndex: number) => {
                    const isHeader = row.isHeader || rowIndex === 0;

                    return (
                      <tr
                        key={rowIndex}
                        className={isHeader ? "bg-gray-50" : "bg-white"}
                      >
                        {row.cells?.map((cell: any, cellIndex: number) => {
                          const Tag = isHeader ? "th" : "td";

                          return (
                            <Tag
                              key={cellIndex}
                              className={`
                                border-b border-r last:border-r-0 border-gray-200
                                px-6 py-4 align-top
                                ${
                                  isHeader
                                    ? "text-[16px] font-semibold text-gray-900"
                                    : "text-[16px] text-gray-700"
                                }
                              `}
                            >
                              <div
                                className="
                                  max-w-none
                                  text-[16px] leading-relaxed
                                  [&_a]:text-blue-600
                                  [&_a]:underline
                                  [&_a:hover]:text-blue-700
                                  [&_code]:text-black
                                  [&_strong]:font-semibold
                                "
                              >
                                <PortableText
                                  value={
                                    Array.isArray(cell)
                                      ? cell
                                      : cell.text || []
                                  }
                                />
                              </div>
                            </Tag>
                          );
                        })}
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      );
    },
  },

  marks: {
    link: ({ value, children }: any) => {
      return (
        <a
          href={value?.href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-700 underline underline-offset-4"
        >
          {children}
        </a>
      );
    },
  },

  block: {
    h2: ({ children }: any) => (
      <h2 className="text-[32px] md:text-[34px] font-semibold text-gray-900 mt-20 mb-6 tracking-tight">
        {children}
      </h2>
    ),

    h3: ({ children }: any) => (
      <h3 className="text-[24px] font-semibold text-gray-900 mt-12 mb-4">
        {children}
      </h3>
    ),

    normal: ({ children }: any) => (
      <p className="text-gray-700 text-[19px] leading-[1.9] mb-8">{children}</p>
    ),
  },

  list: {
    bullet: ({ children }: any) => (
      <ul className="list-disc pl-6 my-10 space-y-4 text-gray-700 text-[19px] leading-[1.8]">
        {children}
      </ul>
    ),
    number: ({ children }: any) => (
      <ol className="list-decimal pl-6 my-10 space-y-4 text-gray-700 text-[19px] leading-[1.8]">
        {children}
      </ol>
    ),
  },
};

/* ================= Page ================= */

export default async function SingleBlogPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) return <div className="pt-40 text-center">Post not found</div>;

  const relatedPosts = await getRelatedPosts(slug, post.categories?.[0]?.title);

  return (
    <main className="pt-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* ===== TOP HEADER ===== */}
        <div className="max-w-3xl mx-auto mb-20">

          {/* Breadcrumb */}
          <div className="text-[14px] text-gray-500 mb-8 flex flex-wrap items-center gap-2">
            <Link href="/" className="hover:text-gray-900">Home</Link>
            <span className="text-gray-400">›</span>
            <Link href="/blog" className="hover:text-gray-900">Blog</Link>

            {post.categories?.[0]?.title && (
              <>
                <span className="text-gray-400">›</span>
                <span className="text-gray-700">
                  {post.categories[0].title}
                </span>
              </>
            )}
          </div>

          {/* Title */}
          <h1 className="text-[48px] md:text-[60px] font-semibold text-gray-900 leading-[1.05] tracking-tight mb-8">
            {post.title}
          </h1>

          {/* Author row */}
          <div className="flex items-center gap-4 text-[15px] mb-12">
            {post.author?.image?.asset?.url && (
              <div className="relative w-10 h-10 rounded-full overflow-hidden">
                <Image
                  src={post.author.image.asset.url}
                  alt={post.author.name}
                  fill
                  className="object-cover"
                />
              </div>
            )}

            <div className="flex items-center gap-2">
              <span className="font-medium text-gray-900">
                {post.author?.name}
              </span>
              <span className="text-gray-400">|</span>
              <span>
                {new Date(post.publishedAt).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
            </div>
          </div>

          {/* Featured Image */}
          {post.mainImage?.asset?.url && (
            <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-gray-200">
              <Image
                src={post.mainImage.asset.url}
                alt={post.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          )}
        </div>

        {/* ===== ARTICLE ===== */}
        <div className="max-w-3xl mx-auto">
          <article>
            <AISummarizeCard />
            <PortableText value={post.body} components={portableComponents} />
          </article>
        </div>

          {/* ===== RELATED POSTS ===== */}
          {relatedPosts.length > 0 && (
            <div className="mt-40">

              <h2 className="text-[34px] font-semibold text-gray-900 mb-12">
                Related Articles
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-16">

                {relatedPosts.map((p: any) => (
                  <Link
                    key={p.slug.current}
                    href={`/blog/${p.slug.current}`}
                    className="group block"
                  >
                    {/* Image */}
                    {p.mainImage?.asset?.url && (
                      <div className="relative w-full aspect-video overflow-hidden rounded-lg mb-4">
                        <Image
                          src={p.mainImage.asset.url}
                          alt={p.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                        />
                      </div>
                    )}

                    {/* Date */}
                    <div className="text-sm text-gray-500 mb-2">
                      {new Date(p.publishedAt).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </div>

                    {/* Title */}
                    <h3 className="text-[20px] leading-snug font-semibold text-gray-900 mb-2 transition-colors">
                      {p.title}
                    </h3>
                  </Link>
                ))}

              </div>
            </div>
          )}

        {/* ===== CTA ===== */}
        <CTASection />
      </div>
    </main>
  );
}