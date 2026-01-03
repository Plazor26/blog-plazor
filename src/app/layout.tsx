import "./globals.css";

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
      {/* pure white, no gray strip around */}
      <body className="min-h-screen bg-white text-neutral-900 antialiased">
        {children}
      </body>
    </html>
  );
}
