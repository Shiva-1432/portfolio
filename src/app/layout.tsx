import type { Metadata } from "next";
import "./globals.css";
import SmoothScrollProvider from "@/components/common/SmoothScrollProvider";
import CustomCursor from "@/components/common/Cursor";

export const metadata: Metadata = {
  title: "Podishetti Shiva Krishna | Cloud & AI Engineering Portfolio",
  description: "Official portfolio of Podishetti Shiva Krishna. Computer Science student specializing in Cloud Native systems, AI-driven DBMS optimization, and high-performance Frontend development.",
  keywords: ["Podishetti Shiva Krishna", "Cloud Engineer", "AI Researcher", "Next.js Portfolio", "Software Engineer"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-black text-white antialiased">
        <SmoothScrollProvider>
          <CustomCursor />
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  );
}


