"use client";
import { Separator } from "@/components/ui/separator";
import Logo from "@/app/Assets/svg/Logo";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full bg-white flex flex-col px-10 pt-16 pb-12 gap-16">
      <div className="flex items-center justify-start gap-12">
        <button
          className="w-fit h-fit flex items-center justify-center"
          onClick={() => window.location.reload()}
        >
          <Logo />
        </button>
        <nav className="flex items-center justify-center gap-9 *:text-custom-gray-600">
          <a href="#home">Home</a>
          <a href="#latest">Latest</a>
          <a href="#exclusive-deals">Exclusive deals</a>
        </nav>
      </div>
      <div className="w-full h-fit flex flex-col items-center justify-center gap-8">
        <Separator className="bg-custom-gray-200" />
        <div className="w-full h-fit flex items-center justify-between">
          <div className="text-custom-gray-500 flex flex-col items-start justify-center gap-4">
            <p>© 2024 shop4them . All rights reserved.</p>
            <p>We may earn a commission on purchases made through our links</p>
          </div>
          <nav className="flex items-center justify-center gap-4 *:text-custom-gray-600">
            <Link href="/legal">Legal</Link>
            <Link href="/privacy">Privacy</Link>
            <Link href="/cookies">Coookis</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
