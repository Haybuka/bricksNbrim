import Image from 'next/image';
import { Inter } from 'next/font/google';
import Index from '@/components/gallery';

const inter = Inter({ subsets: ['latin'] });

export default function Gallery() {
  return <Index />;
}
