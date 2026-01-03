import "./globals.css";

export const metadata = {
  title: "Plazor",
  description: "Essays on AI, systems, and building.",
  other: {
    "google-adsense-account": "ca-pub-8438735279878088",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-neutral-900 antialiased">
        {children}
      </body>
    </html>
  );
}
