import "./globals.css";
import Footer from "../components/Footer";

export const metadata = {
  title: 'Khush Kothari | Full-Stack Developer',
  description: 'Portfolio of Khush Kothari, a Full-Stack Developer based in Sydney specializing in the MERN stack, Next.js, and scalable cloud architectures.',
  keywords: ['Khush Kothari', 'Full-Stack Developer', 'Software Engineer', 'Sydney', 'React', 'Next.js', 'UI/UX'],
};

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