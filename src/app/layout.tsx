import { Footer } from "@/components/Footer/Footer";
import { Header } from "@/components/Header/Header";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body className={`app-body ${inter.className}`}>
        <Header />
        <main className="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
