import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/comonents/Navbar/Navbar";
import Footer from "@/comonents/Footer/Footer";
import { TimelineProvider } from "@/context/TimelineContext";
import { ToastContainer } from "react-toastify";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Keen-Keeper",
  description: "Modern Friends management app",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-theme="light"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <TimelineProvider>
          {/* <ToastContainer /> */}

          <Navbar />
          <main>{children}</main>
          <ToastContainer />
          <Footer />
        </TimelineProvider>
      </body>
    </html>
  );
}
