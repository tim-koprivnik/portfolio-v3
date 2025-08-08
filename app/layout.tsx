import type { Metadata } from 'next';
import { Inter, Inconsolata } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Background from '@/components/Background';

const interFont = Inter({ subsets: ['latin'] });
const inconsolataFont = Inconsolata({ subsets: ['latin'] });

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
        className={`${inconsolataFont.className} bg-[#111] text-white overflow-y-scroll overflow-x-hidden`}
      >
        <Background />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
