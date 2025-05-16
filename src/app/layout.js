import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/app/components/Header";
import Contact from "@/app/components/Contact";
import Footer from "@/app/components/Footer";


const geistMono = Montserrat({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Career Cognizance | Empowering Future Careers",
  description: "Explore career guidance, industry insights, and skill development resources to help you succeed in your professional journey with Career Cognizance.",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistMono.variable} `}
      >
         <Header/>
        {children}
        <Contact/>
        <Footer/>
      </body>
    </html>
  );
}
