import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import "./globals.css";

export const metadata = {
  title: "Portfolio-Abdullah",
  description: "This is my portfolio",
};

export default function RootLayout({ children }) {  
  return (
    <html lang="en" className="scroll-pt-10 scroll-smooth">
      <body  cz-shortcut-listen="true">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
