import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Kuda Mukucha | Portfolio',
  description: 'Kudakwashe Mukucha - Frontend Developer and Mobile App Developer proficient in React JS, React Native, Next JS. Experienced with databases like Postgres and MySQL. Also skilled in WordPress development.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body className={inter.className}>{children}</body>
    </html>
  )
}
