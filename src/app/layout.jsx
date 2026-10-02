import "./globals.css";
import Footer from "../components/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>
        {children}
        <Footer />
      </body>
    </html>
  );
}