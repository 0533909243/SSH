import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ميدان سيد الشهداء | المخطط التفاعلي",
  description:
    "خريطة تفاعلية لاستكشاف عناصر ومبادرات تطوير ميدان سيد الشهداء.",
  other: {
    "codex-preview": "development",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
