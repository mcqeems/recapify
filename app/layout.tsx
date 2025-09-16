import '@/app/ui/global.css';
import { inter, lexend } from '@/app/ui/fonts';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    template: '%s | Recapify',
    default: 'Recapify',
  },
  description: 'An open source invoices recapitulation system.',
  metadataBase: new URL('https://recapify.qeem.site'),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${lexend.variable}`}>
      <body className={`font-inter antialiased`}>{children}</body>
    </html>
  );
}
