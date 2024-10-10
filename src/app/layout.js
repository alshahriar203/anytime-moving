import '../styles/common.css';
import Navbar from '../components/Navbar';
import Footer from '../components/FooterFinal';

export const metadata = {
  title: 'Code Machines Academy - Fun & Engaging Coding for Kids',
  description: 'Code Machines is a growing academy and educational services provider for STEAM subjects in Halifax, Nova Scotia. Our mission is to equip kids with the tools they need to thrive in an evolving technological world through practical approaches',
//   icons: {
//     icon: '/favicon.png', // Path to the favicon file
//   },
};

export default function RootLayout({ children }) {
    return (
      <html lang="en">
        <body>
          <Navbar/>
          <main>{children}</main>
          <Footer />
        </body>
      </html>
    );
  }
  
  