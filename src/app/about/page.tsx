import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-neutral-900">
      <main className="flex-1 mx-auto max-w-3xl px-6 py-16 space-y-8">
        <h1 className="text-4xl font-semibold">About</h1>

        <p>
          This is a personal blog.
        </p>

        <p>
          I write to think clearly about what’s happening in AI, software,
          and systems. Some posts are explanations. Some are notes.
          Some are unfinished thoughts made public on purpose.
        </p>

        <p>
          There’s no newsletter, no social funnel, no comment section.
          If something here is useful, you’re welcome to read along via{" "}
          <Link href="/rss.xml" className="underline">
            RSS
          </Link>.
        </p>

        <p className="text-neutral-500">
          Written in Markdown. Published via Git.
        </p>
      </main>

      {/* reuse your existing footer */}
    </div>
  );
}
