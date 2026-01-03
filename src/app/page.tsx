import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import { getAllPosts } from "@/lib/posts";

type CardPost = {
  slug: string;
  title: string;
  description: string;
  date: string;
  readingTime: string;
  tag: string;
  author: string;
  image?: string;
};

function initials(name: string) {
  const parts = name.trim().split(" ").filter(Boolean);
  return (parts[0]?.[0] ?? "P") + (parts[1]?.[0] ?? "");
}

function toCard(p: any): CardPost {
  return {
    slug: p.slug,
    title: p.title,
    description: p.description,
    date: p.date,
    readingTime: p.readingTime,
    tag: p.tags?.[0] ?? "Essay",
    author: p.author ?? "Plazor",
    image: p.image,
  };
}

export default function Home() {
  const posts = (getAllPosts() as any[]).map(toCard);
  const featured = posts[0];
  const grid = posts.slice(1);

  return (
    <div className="bg-white">
      {/* ─── HERO ───────────────────────────── */}
      <section className="relative">
        <Navbar />

        {/* hero image (NO white wash) */}
        <div className="relative h-[520px] w-full overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.18)]">
          {featured?.image ? (
            <Image
              src={featured.image}
              alt={featured.title}
              fill
              priority
              className="object-cover"
            />
          ) : (
            <div className="absolute inset-0 bg-gradient-to-br from-slate-400 via-slate-300 to-amber-200" />
          )}

          {/* subtle contrast only, not exposure */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-black/10 to-transparent" />
        </div>

        {/* overlay content */}
        {featured && (
          <div className="absolute bottom-0 left-0 right-0 z-20 px-8 pb-10">
            {/* bottom contrast ramp */}
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />

            {/* content */}
            <div className="relative mx-auto max-w-5xl">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-[1fr_auto] md:items-end">
                {/* LEFT */}
                <div className="space-y-4">
                  <span className="inline-flex items-center rounded-md bg-white/95 px-3 py-1 text-xs uppercase tracking-wide text-neutral-900">
                    {featured.tag}
                  </span>

                  <h1 className="text-4xl font-semibold leading-tight text-white drop-shadow-sm">
                    <Link href={`/posts/${featured.slug}`}>
                      {featured.title}
                    </Link>
                  </h1>

                  <p className="max-w-xl text-sm text-white/90 drop-shadow-sm">
                    {featured.description}
                  </p>

                  <div className="flex items-center gap-3 text-sm text-white">
                    <div className="grid h-9 w-9 place-items-center rounded-full bg-white/95 text-xs font-semibold text-neutral-900">
                      {initials(featured.author)}
                    </div>
                    <span className="font-medium">{featured.author}</span>
                  </div>
                </div>

                {/* RIGHT */}
                <div className="text-right text-sm text-white/90 tabular-nums drop-shadow-sm">
                  <div>{featured.date}</div>
                  <div className="text-white/80">{featured.readingTime}</div>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* ─── BLOG SECTION ───────────────────────────── */}
      <section className="mx-auto max-w-7xl px-6 py-14 space-y-10">
        <header className="space-y-1">
          <h2 className="text-3xl font-semibold text-neutral-900">Blog</h2>
          <p className="text-sm text-neutral-600">
            Essays on AI, systems, and building.
          </p>
        </header>

        {/* grid */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {grid.map((p) => (
            <article key={p.slug} className="space-y-3">
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-lg bg-neutral-200">
                {p.image && (
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    className="object-cover"
                  />
                )}
                <span className="absolute left-3 top-3 rounded-md bg-white/90 px-2 py-0.5 text-[11px] uppercase tracking-wide text-neutral-900">
                  {p.tag}
                </span>
              </div>

              <div className="text-xs text-neutral-500">
                {p.date} · {p.readingTime}
              </div>

              <h3 className="text-lg font-semibold leading-snug text-neutral-900">
                <Link href={`/posts/${p.slug}`}>{p.title}</Link>
              </h3>

              <p className="text-sm text-neutral-600 line-clamp-2">
                {p.description}
              </p>

              <div className="flex items-center gap-2 pt-1 text-sm text-neutral-700">
                <div className="grid h-7 w-7 place-items-center rounded-full bg-neutral-200 text-[10px] font-semibold">
                  {initials(p.author)}
                </div>
                <span>{p.author}</span>
              </div>
            </article>
          ))}
        </div>

        {/* lower panels */}
        <div className="grid gap-10 pt-12 md:grid-cols-5">
          <div className="space-y-8 md:col-span-2">
            <div className="rounded-lg bg-neutral-100 p-8">
              <div className="text-sm text-neutral-600">Start here</div>
              <div className="mt-2 text-2xl font-semibold text-neutral-900">
                Read the latest essay
              </div>
              <div className="mt-2 text-sm text-neutral-600">
                No noise. Just clear thinking and build notes.
              </div>
              {featured && (
                <Link
                  href={`/posts/${featured.slug}`}
                  className="mt-6 inline-flex items-center rounded-md bg-neutral-900 px-4 py-2 text-sm font-semibold text-white"
                >
                  Read now →
                </Link>
              )}
            </div>

            <div className="rounded-lg bg-neutral-100 p-8">
              <div className="text-sm text-neutral-600">Articles available</div>
              <div className="mt-2 text-4xl font-semibold text-neutral-900">
                {posts.length}
              </div>
            </div>
          </div>

          <div className="relative h-[340px] overflow-hidden rounded-lg bg-neutral-200 md:col-span-3">
            {featured?.image && (
              <Image
                src={featured.image}
                alt="Banner"
                fill
                className="object-cover"
              />
            )}
            {/* NO white overlay */}
            <div className="absolute inset-0 grid place-items-center px-10 text-center">
              <p className="text-2xl font-semibold text-white drop-shadow">
                Beyond automation, building a life you respect
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FOOTER (intentionally dark) ───────────────────────────── */}
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
            <Link href="/about">Contact</Link>
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
}
