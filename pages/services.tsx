import Index from '@/components/services';
import { Inter } from 'next/font/google';
import { IndexKind } from 'typescript';
const inter = Inter({ subsets: ['latin'] });

export default function Services() {
  return <Index />;
}
