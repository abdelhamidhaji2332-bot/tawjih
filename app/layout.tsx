import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'TAWJIH.ma | Moroccan Post-Bac Orientation & CPGE Platform',
  description: 'منصة التوجيه الجامعي وأقسام التحضير بالمغرب - TAWJIH.ma Moroccan Orientation Platform with CPGE & Preselection Simulators',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" dir="ltr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700;900&family=Comic+Neue:wght@400;700&family=JetBrains+Mono:wght@400;600;700&family=Tajawal:wght@400;500;700;900&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-[#FDFBF7] text-[#111827] min-h-screen flex flex-col selection:bg-[#49B6E5] selection:text-[#263D5B]">
        {children}
      </body>
    </html>
  )
}
