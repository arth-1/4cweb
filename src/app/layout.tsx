import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Toaster } from '@/components/ui/toaster';
import { AnimatedBg } from '@/components/animated-bg';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
});

export const metadata: Metadata = {
  title: '4C',
  description: 'The official website of the 4C Marketing Committee.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={cn(
          'min-h-screen bg-background font-body antialiased relative',
          inter.variable,
          spaceGrotesk.variable
        )}
      >
        <AnimatedBg />
        <Header />
        <main className="relative z-10">{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
