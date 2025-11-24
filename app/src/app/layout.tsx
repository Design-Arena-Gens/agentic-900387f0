import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-main",
  subsets: ["latin", "cyrillic"],
});

export const metadata: Metadata = {
  title: "Monoluxe Interior | Авторская мебель на заказ",
  description:
    "Эксклюзивная российская мебель премиум-класса: авторские коллекции, экологичные материалы и персональный дизайн-проект под ваш интерьер.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={manrope.variable}>{children}</body>
    </html>
  );
}
