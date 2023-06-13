import Navbar from '@/components/navigation';
import Footer from '@/components/footer';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { NavContextProvider } from '@/context/navcontext/navContext';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <NavContextProvider>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </NavContextProvider>
    </>
  );
}
