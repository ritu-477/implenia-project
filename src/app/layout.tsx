import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Implenia Project",
  description: "WE ARE LOOKING FOR YOUR IDEA",
  openGraph: {
    title: "Implenia Project",
    description: "WE ARE LOOKING FOR YOUR IDEA",
    images: [
      {
        url: "/meta-img.png",
        width: 800,
        height: 600,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
