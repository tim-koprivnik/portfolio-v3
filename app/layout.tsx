import type { Metadata } from 'next';
import { Sora } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Background from '@/components/Background';

const soraFont = Sora({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'TK',
  description: 'Portfolio By Tim Koprivnik',
  keywords: ['FE Engineer', 'Portfolio', 'Tim Koprivnik'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning={true} // TODO: fix issue properly and then remove this
        className={`${soraFont.className} bg-[#111] text-white overflow-y-scroll overflow-x-hidden`}
      >
        <Background />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
