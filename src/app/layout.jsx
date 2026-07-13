import '../styles/index.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CartDrawer from '../components/CartDrawer';
import Providers from '../components/Providers';

export const metadata = {
  title: 'Re-wear',
  description: 'Re-wear fashion e-commerce',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <div className="flex flex-col min-h-screen bg-[#FAF8F5]">
            <Navbar />
            <CartDrawer />
            {children}
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
