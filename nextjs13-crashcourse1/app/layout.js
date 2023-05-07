import { Poppins } from 'next/font/google';
import Header from './components/header';

import './globals.css';

const poppins = Poppins({ weight: ['400', '700'], subsets: ['latin'] });

export const metadata = {
  title: 'Anthony Media',
  description: 'Web development tutorials and course',
  keywords: 'we dev, learn, web development',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Header />
        <main className="cointainer">{children}</main>
      </body>
    </html>
  );
}
