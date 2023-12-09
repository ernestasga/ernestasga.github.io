import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import { ThemeProvider } from './theme-provider'
import "@fortawesome/fontawesome-svg-core/styles.css"
import Footer from '@/components/Footer'
import ScrollToTopFab from '@/components/ScrollToTopFab'
import seoConfig from '@/data/seo'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = seoConfig

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-bg-light text-text-light dark:bg-bg-dark dark:text-text-dark duration-700`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navigation />
          <main className='container mx-auto'>{children}</main>
          <Footer />
          <ScrollToTopFab />
        </ThemeProvider>
      </body>
    </html>
  )
}
