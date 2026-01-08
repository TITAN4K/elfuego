import './globals.css'
import { Playfair_Display, Inter } from 'next/font/google'

const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' })
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata = {
  title: 'El-Fuego Cuisine | Masterful Fire-Grilled Dining',
  description: 'Experience the art of flame-side craftsmanship at El-Fuego.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-charcoal text-white scroll-smooth">
      <body className={`${playfair.variable} ${inter.variable} font-sans`}>{children}</body>
    </html>
  )
}