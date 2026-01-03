import "./globals.css";
import Script from "next/script";

export const metadata = {
  title: "Plazor",
  description: "Essays on AI, systems, and building.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Google AdSense verification — does NOT enable ads by itself */}
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8438735279878088"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </head>

      {/* pure white background, no gray strip */}
      <body className="min-h-screen bg-white text-neutral-900 antialiased">
        {children}
      </body>
    </html>
  );
}
