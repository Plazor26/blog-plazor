import Link from "next/link";

export default function Navbar() {
  return (
    <div className="absolute left-0 right-0 top-0 z-30 px-6 pt-5">
      <div className="flex items-center justify-between rounded-2xl border border-white/25 bg-white/10 px-5 py-3 backdrop-blur">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-2 text-white">
            <div className="grid h-7 w-7 place-items-center rounded-md bg-white/20 text-sm font-semibold">
              P
            </div>
            <span className="font-semibold">Plazor</span>
          </Link>

          <nav className="hidden items-center gap-5 text-sm text-white/90 md:flex">
            <Link className="hover:text-white" href="/">Blog</Link>
            <Link className="hover:text-white" href="/about">About</Link>
            <a className="hover:text-white" href="/rss.xml">RSS</a>
          </nav>
        </div>

        <div className="flex items-center gap-3 text-sm text-white/90">
          <a className="hidden md:inline hover:text-white" href="/rss.xml">RSS</a>
          <Link
            href="/about"
            className="rounded-xl bg-white px-4 py-2 text-sm font-semibold text-neutral-900"
          >
            About
          </Link>
        </div>
      </div>
    </div>
  );
}
