import type { Metadata } from 'next'
import { Inter, Outfit } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import { ThemeProvider } from './theme-provider'
import "@fortawesome/fontawesome-svg-core/styles.css"
import Footer from '@/components/Footer'
import ScrollToTopFab from '@/components/ScrollToTopFab'
import StructuredData from '@/components/StructuredData'
import seoConfig from '@/data/seo'

const inter = Inter({ subsets: ['latin'] })
const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
})

export const metadata: Metadata = seoConfig

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <StructuredData />
      </head>
      <body
        className={`${inter.className} ${outfit.variable} bg-bg-light text-text-light dark:bg-bg-dark dark:text-text-dark duration-700`}
        suppressHydrationWarning
      >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <Navigation />
          <main className='w-full overflow-x-hidden'>{children}</main>
          <Footer />
          <ScrollToTopFab />
        </ThemeProvider>
      </body>
    </html>
  )
}
