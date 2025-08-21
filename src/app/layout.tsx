import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'JLC Fire - Sistemas de Seguridad y Detección de Incendios',
  description: 'Especialistas en sistemas de seguridad electrónica, detección y extinción de incendios, control de acceso, BMS y mantenimiento.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
