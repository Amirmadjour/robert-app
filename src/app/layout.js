import "./globals.css";
import Nav from "@/components/Nav/Nav";
import { Agbalumo, Inter, Roboto } from "next/font/google";
import Footer from "@/components/custom-ui/Footer";
import clsx from "clsx";

const agbalumo = Agbalumo({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  variable: "--font-agbalumo",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
  variable: "--font-roboto",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "600"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata = {
  title: "Shop4them",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={clsx(
          "flex flex-col justify-center items-center gap-12 font-roboto",
          agbalumo.variable,
          roboto.variable,
          inter.variable
        )}
      >
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
