import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import { getPostBySlug } from "@/lib/posts";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { mdxOptions } from "@/lib/mdx";
import readingTime from "reading-time";

function initials(name: string) {
  const parts = (name || "Plazor").trim().split(" ").filter(Boolean);
  return ((parts[0]?.[0] ?? "P") + (parts[1]?.[0] ?? "")).toUpperCase();
}

function ShareRow({
  title,
  url,
}: {
  title: string;
  url: string;
}) {
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  return (
    <div className="flex flex-wrap items-center gap-4 text-sm text-neutral-600">
      <span className="font-medium text-neutral-900">Share:</span>

      <a
        href={`https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        className="hover:underline"
      >
        X
      </a>

      <a
        href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        className="hover:underline"
      >
        LinkedIn
      </a>

      <button
        onClick={() => navigator.clipboard.writeText(url)}
        className="hover:underline"
      >
        Copy link
      </button>
    </div>
  );
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  try {
    const { content, data } = getPostBySlug(slug);

    const rt = readingTime(content).text;
    const author = (data as any)?.author ?? "Plazor";
    const tag = (data as any)?.tags?.[0] ?? "Essay";
    const image = (data as any)?.image as string | undefined;

    const url = `https://blog.plazor.xyz/posts/${slug}`;

    return (
      <div className="min-h-screen flex flex-col bg-white text-neutral-900">
        {/* MAIN */}
        <main className="flex-1">
          {/* HERO */}
          {image && (
            <section className="relative">
              <Navbar />
              <div className="relative h-[420px] w-full overflow-hidden">
                <Image
                  src={image}
                  alt={data.title}
                  fill
                  priority
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/20 to-transparent" />
              </div>
            </section>
          )}

          {/* ARTICLE */}
          <article className="mx-auto max-w-3xl px-6 py-16 space-y-14">
            <header className="space-y-6">
              <span className="inline-flex items-center rounded-md bg-neutral-100 px-2 py-0.5 text-[11px] uppercase tracking-wide text-neutral-700">
                {tag}
              </span>

              <h1 className="text-4xl font-semibold leading-tight tracking-tight">
                {data.title}
              </h1>

              <div className="flex items-center gap-3 text-sm text-neutral-600">
                <div className="grid h-7 w-7 place-items-center rounded-full bg-neutral-200 text-[10px] font-semibold">
                  {initials(author)}
                </div>
                <span>{author}</span>
                <span className="text-neutral-400">•</span>
                <span>{(data as any).date}</span>
                <span className="text-neutral-400">•</span>
                <span>{rt}</span>
              </div>
            </header>

            {/* CONTENT */}
            <div className="prose prose-neutral max-w-none text-neutral-900">
              <MDXRemote source={content} options={mdxOptions} />
            </div>

            {/* SHARE */}
            <ShareRow title={data.title} url={url} />

            {/* COMMENTS */}
            <section className="pt-10 border-t">
              <div className="text-sm font-medium mb-4">
                Comments
              </div>

              <div
                dangerouslySetInnerHTML={{
                  __html: `
<script src="https://giscus.app/client.js"
  data-repo="YOUR_GITHUB_USERNAME/YOUR_REPO"
  data-repo-id="YOUR_REPO_ID"
  data-category="General"
  data-category-id="YOUR_CATEGORY_ID"
  data-mapping="pathname"
  data-strict="0"
  data-reactions-enabled="1"
  data-emit-metadata="0"
  data-input-position="bottom"
  data-theme="light"
  data-lang="en"
  crossorigin="anonymous"
  async>
</script>
                  `,
                }}
              />
            </section>
          </article>
        </main>

        {/* FOOTER */}
        <footer className="bg-neutral-900 px-6 py-12 text-white">
          <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-12">
            <div className="md:col-span-4 space-y-3">
              <div className="flex items-center gap-2">
                <div className="grid h-8 w-8 place-items-center rounded-md bg-white/10 text-sm font-semibold">
                  P
                </div>
                <div className="font-semibold">Plazor</div>
              </div>
              <p className="text-sm text-white/70">
                Essays on AI, systems, and building with clarity.
              </p>
              <div className="text-xs text-white/50">
                © {new Date().getFullYear()} Plazor. All rights reserved.
              </div>
            </div>

            <div className="md:col-span-3 space-y-2 text-sm text-white/80">
              <h4 className="font-semibold text-white">About</h4>
              <Link href="/about">About</Link>
              <Link href="/">Blog</Link>
            </div>

            <div className="md:col-span-2 space-y-2 text-sm text-white/80">
              <h4 className="font-semibold text-white">Support</h4>
              <a href="/rss.xml">RSS</a>
            </div>

            <div className="md:col-span-3 space-y-3">
              <h4 className="font-semibold">Get Updates</h4>
              <div className="flex gap-2">
                <input
                  className="w-full rounded-md bg-white/10 px-3 py-2 text-sm text-white placeholder:text-white/40 outline-none ring-1 ring-white/10 focus:ring-white/25"
                  placeholder="Enter your email"
                />
                <button className="rounded-md bg-white px-4 py-2 text-sm font-semibold text-neutral-900">
                  Subscribe
                </button>
              </div>
              <p className="text-xs text-white/50">
                (Just UI for now. Wiring later.)
              </p>
            </div>
          </div>
        </footer>
      </div>
    );
  } catch {
    notFound();
  }
}
