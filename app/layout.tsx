import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter'
})

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ["latin"],
  variable: '--font-jetbrains'
})

export const metadata: Metadata = {
  title: 'Nebat Hussen Yimam | Software Engineer',
  description: 'Software Engineer building scalable, modern, and accessible web applications with strong focus on frontend engineering, performance optimization, and user experience.',
  keywords: ['Software Engineer', 'Frontend Developer', 'React', 'Next.js', 'Web Development', 'Addis Ababa'],
  authors: [{ name: 'Nebat Hussen Yimam' }],
  openGraph: {
    title: 'Nebat Hussen Yimam | Software Engineer',
    description: 'Building scalable, modern, and accessible web applications',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark bg-background">
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
