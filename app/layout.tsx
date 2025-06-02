import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "VentureToken | Connecting Startups and VCs with Token-Based Funding",
  description:
    "A modern platform for startups and VCs to connect through crypto-based token funding with secondary market liquidity.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
        <body className={inter.className}>
          <AuthProvider>
            {children}
          </AuthProvider>
          </body>
    </html>
  )
}
