import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Alert } from "@/components/ui/alert"
import "./globals.css"

export const metadata = {
  title: "TechBlog - Modern Web Development",
  description: "Your go-to source for modern web development tutorials, best practices, and industry insights.",
  generator: "v0.app",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
}
        `}</style>
      </head>
      <body className="font-sans antialiased">
        {children}
        <Alert />
      </body>
    </html>
  )
}
