"use client";

import { useMemo, useState } from "react";

function Icon({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <span className="grid h-9 w-9 place-items-center rounded-full bg-neutral-100 text-neutral-700 ring-1 ring-neutral-200 transition hover:bg-neutral-200">
      {children}
    </span>
  );
}

function XIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M18.9 2H22l-6.8 7.8L23 22h-6.9l-5.4-7.1L4.6 22H1.5l7.4-8.5L1 2h7.1l4.9 6.3L18.9 2Zm-1.2 18h1.7L7.2 3.9H5.3L17.7 20Z"
      />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5ZM.5 8.5H4.5V23H.5V8.5ZM8.5 8.5H12.3V10.5h.1c.5-1 1.9-2.1 3.9-2.1 4.2 0 5 2.7 5 6.3V23h-4v-7.2c0-1.7 0-3.9-2.4-3.9s-2.8 1.8-2.8 3.8V23h-4V8.5Z"
      />
    </svg>
  );
}

function RedditIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M24 12c0-1.3-1-2.3-2.3-2.3-.6 0-1.1.2-1.5.5-1.4-1-3.4-1.6-5.6-1.8l1-4.6 3.2.7c.1 1 .9 1.8 2 1.8 1.1 0 2-.9 2-2s-.9-2-2-2c-.8 0-1.5.5-1.8 1.2l-3.8-.8c-.5-.1-1 .2-1.1.7l-1.2 5.2c-2.3.1-4.3.7-5.7 1.8-.4-.3-.9-.5-1.5-.5C1 9.7 0 10.7 0 12c0 .9.5 1.7 1.2 2.1-.1.4-.2.9-.2 1.3 0 3.5 4.8 6.4 10.7 6.4s10.7-2.9 10.7-6.4c0-.5-.1-.9-.2-1.3.8-.4 1.3-1.2 1.3-2.1ZM7.7 14.7c0-.9.7-1.6 1.6-1.6s1.6.7 1.6 1.6-.7 1.6-1.6 1.6-1.6-.7-1.6-1.6Zm10.6 3c-1.3 1.3-3.5 1.4-4.3 1.4s-3-.1-4.3-1.4c-.3-.3-.3-.8 0-1.1.3-.3.8-.3 1.1 0 .7.7 2.1 1 3.2 1s2.5-.3 3.2-1c.3-.3.8-.3 1.1 0 .3.3.3.8 0 1.1Zm-1.9-1.4c-.9 0-1.6-.7-1.6-1.6s.7-1.6 1.6-1.6 1.6.7 1.6 1.6-.7 1.6-1.6 1.6Z"
      />
    </svg>
  );
}

function HNIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M3 3h18v18H3V3Zm5.1 4.5h2.2l1.9 4.1 1.9-4.1h2.2l-3 6v4.5h-2.2V13.5l-3-6Z"
      />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M20.5 3.5A11.9 11.9 0 0 0 12 0C5.4 0 0 5.4 0 12c0 2.1.6 4.2 1.7 6L0 24l6.2-1.6A12 12 0 0 0 24 12c0-3.2-1.3-6.2-3.5-8.5ZM12 22a10 10 0 0 1-5.1-1.4l-.4-.2-3.7 1 1-3.6-.2-.4A10 10 0 1 1 12 22Zm5.7-7.5c-.3-.2-1.7-.8-2-.9-.3-.1-.5-.2-.7.2-.2.3-.8.9-.9 1.1-.2.2-.4.2-.7 0-.3-.2-1.3-.5-2.5-1.6-.9-.8-1.6-1.9-1.8-2.2-.2-.3 0-.5.1-.7.1-.1.3-.4.4-.6.1-.2.2-.4.3-.6.1-.2 0-.4 0-.6 0-.2-.7-1.7-1-2.4-.3-.7-.6-.6-.8-.6h-.7c-.2 0-.6.1-.9.4-.3.3-1.2 1.2-1.2 2.9s1.2 3.3 1.4 3.6c.2.2 2.4 3.6 5.9 5.1.8.3 1.4.5 1.9.6.8.2 1.5.2 2 .1.6-.1 1.7-.7 1.9-1.4.2-.7.2-1.2.1-1.4-.1-.2-.3-.2-.6-.4Z"
      />
    </svg>
  );
}

function TelegramIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M21.9 3.3c.3-1.1-.9-2-1.9-1.6L2.6 9.2c-1.3.5-1.2 2.4.1 2.8l4.6 1.4 1.8 5.8c.4 1.2 2 1.5 2.8.6l2.6-3 4.7 3.4c1 .7 2.4.1 2.7-1.1L21.9 3.3ZM8.4 12.7l9.7-6c.2-.1.4.2.2.3l-8 7.3-.3 3.2-1.5-4.7-3.7-1.1c-.2-.1-.2-.3 0-.4l13.7-5.3Z"
      />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M22 12a10 10 0 1 0-11.6 9.9v-7H8v-2.9h2.4V9.8c0-2.4 1.4-3.7 3.6-3.7 1 0 2.1.2 2.1.2v2.3h-1.2c-1.2 0-1.6.8-1.6 1.6v1.9H16l-.4 2.9h-2.3v7A10 10 0 0 0 22 12Z"
      />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2Zm0 4-8 5L4 8V6l8 5 8-5v2Z"
      />
    </svg>
  );
}

function LinkIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M3.9 12a5 5 0 0 1 5-5h3v2h-3a3 3 0 1 0 0 6h3v2h-3a5 5 0 0 1-5-5Zm7.1 1h2v-2h-2v2Zm4-6h-3V5h3a5 5 0 1 1 0 10h-3v-2h3a3 3 0 1 0 0-6Z"
      />
    </svg>
  );
}

export default function ShareRow({
  title,
  url,
}: {
  title: string;
  url: string;
}) {
  const [copied, setCopied] = useState(false);

  const links = useMemo(() => {
    const encodedUrl = encodeURIComponent(url);
    const encodedTitle = encodeURIComponent(title);

    return [
      {
        name: "X",
        href: `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`,
        icon: <XIcon />,
      },
      {
        name: "LinkedIn",
        href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
        icon: <LinkedInIcon />,
      },
      {
        name: "Reddit",
        href: `https://www.reddit.com/submit?url=${encodedUrl}&title=${encodedTitle}`,
        icon: <RedditIcon />,
      },
      {
        name: "Hacker News",
        href: `https://news.ycombinator.com/submitlink?u=${encodedUrl}&t=${encodedTitle}`,
        icon: <HNIcon />,
      },
      {
        name: "WhatsApp",
        href: `https://wa.me/?text=${encodedTitle}%0A${encodedUrl}`,
        icon: <WhatsAppIcon />,
      },
      {
        name: "Telegram",
        href: `https://t.me/share/url?url=${encodedUrl}&text=${encodedTitle}`,
        icon: <TelegramIcon />,
      },
      {
        name: "Facebook",
        href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
        icon: <FacebookIcon />,
      },
      {
        name: "Email",
        href: `mailto:?subject=${encodedTitle}&body=${encodedTitle}%0A${encodedUrl}`,
        icon: <MailIcon />,
      },
    ];
  }, [title, url]);

  return (
    <div className="flex flex-wrap items-center gap-3">
      <span className="text-sm font-medium text-neutral-900">Share</span>

      <div className="flex flex-wrap items-center gap-2">
        {links.map((l) => (
          <a
            key={l.name}
            href={l.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2"
            aria-label={`Share on ${l.name}`}
            title={l.name}
          >
            <Icon>{l.icon}</Icon>
          </a>
        ))}

        <button
          type="button"
          onClick={async () => {
            try {
              await navigator.clipboard.writeText(url);
              setCopied(true);
              window.setTimeout(() => setCopied(false), 1200);
            } catch {
              // no-op
            }
          }}
          className="group flex items-center gap-2"
          aria-label="Copy link"
          title="Copy link"
        >
          <Icon>
            <LinkIcon />
          </Icon>
        </button>

        {copied && (
          <span className="ml-1 text-xs text-neutral-500">Copied</span>
        )}
      </div>
    </div>
  );
}
