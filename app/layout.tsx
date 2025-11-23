import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/context";
import { SiteHeader } from "@/components/site-header";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Social Links Profile",
  description:
    "This is the solution to social links profile challenge on frontend mentor",
};

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <SiteHeader />
          <main className="h-[calc(100vh-4rem)] grid place-content-center">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
