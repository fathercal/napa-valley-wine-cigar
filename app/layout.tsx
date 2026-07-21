import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Napa Valley Wine & Cigar - Premium Wine & Cigar Store',
  description: 'Curated wines, premium cigars, and accessories selected for those who appreciate craftsmanship. Experience Napa Valley\'s finest.',
  viewport: 'width=device-width, initial-scale=1',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Cormorant+Garamond:wght@400;500;600&family=Inter:wght@300;400;500;600&family=Montserrat:wght@400;500;600&display=swap" rel="preconnect" />
      </head>
      <body className="bg-dark-black text-white font-inter">
        {children}
      </body>
    </html>
  );
}
