import { getAllPosts } from "@/lib/posts";

export async function GET() {
  const posts = getAllPosts();

  const items = posts.map((p: any) => `
    <item>
      <title>${p.title}</title>
      <link>https://blog.plazor.xyz/posts/${p.slug}</link>
      <guid>https://blog.plazor.xyz/posts/${p.slug}</guid>
      <pubDate>${new Date(p.date).toUTCString()}</pubDate>
      <description><![CDATA[${p.description}]]></description>
    </item>
  `).join("");

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
  <rss version="2.0">
    <channel>
      <title>Plazor</title>
      <link>https://blog.plazor.xyz</link>
      <description>Essays on AI, systems, and building.</description>
      ${items}
    </channel>
  </rss>`;

  return new Response(rss, {
    headers: {
      "Content-Type": "application/rss+xml",
    },
  });
}
