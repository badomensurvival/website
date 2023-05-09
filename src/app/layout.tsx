import './globals.css';
import Head from 'next/head';
import { Inter } from 'next/font/google';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { BadOmenProvider } from '@/contexts/BadOmenContext';
import { Toaster } from 'react-hot-toast';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Bad Omen Hard Survival',
  description: 'Servidor de Minecraft Hard Survival',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      </Head>
      <body className={inter.className + ' min-h-screen'}>
        <Toaster />

        <BadOmenProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </BadOmenProvider>
      </body>
    </html>
  );
}
