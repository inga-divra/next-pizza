import type { Metadata } from 'next';
import { Nunito } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/shared/header';

const nunito = Nunito({
  subsets: ['latin'],
  variable: '--font-nunito',
  weight: ['400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
  title: 'Next Pizza | Best Pizza in Town',
  description:
    'Order the best pizza in town with Next Pizza. Delicious, fresh, and fast delivery. Explore our menu and get your favorite pizza today!',
  keywords: 'pizza, best pizza, fast delivery, fresh pizza, Next Pizza',
  robots: 'index, follow',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${nunito.variable} antialiased`}>
        <main className='min-h-screen'>
          <Header />
          {children}
        </main>
      </body>
    </html>
  );
}
