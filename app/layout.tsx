import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "@/Providers";
import { Suspense } from "react";
import Loader from "@/app/components/Loader";

export const metadata: Metadata = {
  title: "NextAuth Example",
  description: "Simple authentication example using NextAuth.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Suspense fallback={<Loader />}>
          <Providers>{children}</Providers>
        </Suspense>
      </body>
    </html>
  );
}
