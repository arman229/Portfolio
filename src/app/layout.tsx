import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
// import Navbar from "@/app/components/navbar/navbar";
 

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Arman's Portfolio",
  description: "Portfolio showcasing Arman's projects and skills.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <head>
          {" "}
          <style></style>
        </head>
        <div className="min-h-screen selection:bg-indigo-500/30 overflow-x-hidden bg-[#0f172a] text-slate-200">
         
          {children}
          {/* <Footer /> */}
        </div>
      </body>
    </html>
  );
}
