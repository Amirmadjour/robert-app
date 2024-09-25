import "./globals.css";
import Nav from "@/components/Nav/Nav";
import { Agbalumo, Roboto } from "next/font/google";
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
          roboto.variable
        )}
      >
        <Nav />
        {children}
      </body>
    </html>
  );
}
