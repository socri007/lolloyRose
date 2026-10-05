import type { Metadata } from "next"
import { Readex_Pro } from "next/font/google"
import "./globals.css"

const readex = Readex_Pro({ subsets: ["arabic"], variable: "--font-readex" })

export const metadata: Metadata = {
  title: "لولي روز | أجمل باقات الورد والهدايا",
  description: "باقات ورد وهدايا بتنسيقات عصرية مع توصيل سريع إلى جميع مناطق المملكة.",
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ar" dir="rtl"><body className={readex.variable}>{children}</body></html>
}
