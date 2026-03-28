import type { Metadata } from "next";
import "./globals.css";
import SmoothScrollProvider from "@/components/common/SmoothScrollProvider";

export const metadata: Metadata = {
  title: "Podishetty Shivakrishna | Cloud Native & AI Researcher",
  description: "Personal portfolio of Podishetty Shivakrishna, showcasing projects in Cloud Computing, AI-driven DBMS optimization, and Frontend Development.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white antialiased">
        <SmoothScrollProvider>
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
