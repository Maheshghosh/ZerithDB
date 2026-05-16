import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "ZerithDB — Build apps with zero backend",
  description:
    "Local-first, peer-to-peer, CRDT-powered browser-native database platform. Build full-stack apps with ZERO backend. The browser is the server.",
  keywords: [
    "ZerithDB",
    "database",
    "CRDT",
    "peer-to-peer",
    "local-first",
    "Next.js",
    "browser database",
  ],
  authors: [
    {
      name: "Mahesh Ghosh",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <body
        className="
          min-h-screen
          overflow-x-hidden
          bg-[#050816]
          text-gray-100
          font-sans
          antialiased
          selection:bg-blue-500/20
          selection:text-blue-200
        "
      >
        {/* ===============================
            BACKGROUND EFFECTS
        =============================== */}

        <div className="fixed inset-0 -z-10 overflow-hidden">

          {/* Top Blue Glow */}
          <div
            className="
              absolute
              top-[-120px]
              left-[-100px]
              h-[320px]
              w-[320px]
              rounded-full
              bg-blue-500/20
              blur-3xl
              animate-pulse
            "
          />

          {/* Purple Glow */}
          <div
            className="
              absolute
              right-[-100px]
              top-[25%]
              h-[300px]
              w-[300px]
              rounded-full
              bg-violet-500/20
              blur-3xl
              animate-bounce
            "
          />

          {/* Bottom Cyan Glow */}
          <div
            className="
              absolute
              bottom-[-120px]
              left-[30%]
              h-[280px]
              w-[280px]
              rounded-full
              bg-cyan-400/10
              blur-3xl
            "
          />

          {/* Grid Overlay */}
          <div
            className="
              absolute
              inset-0
              opacity-[0.04]
              bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)]
              bg-[size:60px_60px]
            "
          />
        </div>

        {/* ===============================
            MAIN CONTENT
        =============================== */}

        <main
          className="
            relative
            z-10
            animate-fadeIn
          "
        >
          {children}
        </main>
      </body>
    </html>
  );
}