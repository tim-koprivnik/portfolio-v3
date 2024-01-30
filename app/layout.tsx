import type { Metadata } from 'next';
import { Inter, Inconsolata } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Background from '@/components/Background';

const inter = Inter({ subsets: ['latin'] });
const inconsolata = Inconsolata({ subsets: ['latin'] });
export const metadata: Metadata = {
  title: 'TK',
  description: 'Portfolio By Tim Koprivnik',
  keywords: ['Developer', 'Portfolio', 'Tim Koprivnik'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inconsolata.className} bg-[#111] overflow-y-scroll overflow-x-hidden`}
      >
        <Background />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
