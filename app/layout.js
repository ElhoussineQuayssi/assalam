import Navbar from '@/components/Navbar';
import Footer from '@/components/UIComponents/Footer';
import "./globals.css";

export const metadata = {
  title: 'Assalam',
  description: 'Assalam',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({ children, params }) {
  const { locale } = params;
  
  return (
    <html lang={locale} className="scroll-smooth" dir={locale === 'ar' ? 'rtl' : 'ltr'}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
