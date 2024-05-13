import type { Metadata } from "next";
import { poppins } from "./fonts";
import "./globals.css";
import NavBar from "@/components/NavBar";
import StoreProvider from "./StoreProvider";

export const metadata: Metadata = {
  title: "Press Start",
  description: "An AI project Idea Generator",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <StoreProvider>
        <body className={poppins.className}>
          <NavBar />
          {children}
        </body>
      </StoreProvider>
    </html>
  );
}
