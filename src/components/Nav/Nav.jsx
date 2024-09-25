"use client";

import React from "react";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Search from "@/app/Assets/svg/Search";
import ConfirmSearch from "@/app/Assets/svg/ConfirmSearch";
import Logo from "@/app/Assets/svg/Logo";

const Nav = () => {
  return (
    <div className="w-full flex items-center justify-between px-10 py-6">
      <Link className="flex w-fit h-fit items-center justify-center" href="/">
        <Logo />
      </Link>
      <div className="flex items-center justify-center gap-[25px] ">
        <Link href="/about" className="font-agbalumo">
          About Us
        </Link>
        <Link href="/categories" className="font-agbalumo">
          Categories
        </Link>
        <form className="flex w-fit h-fit items-center justify-center border bg-white border-gray-300 rounded-full px-3 py-[7px] gap-1.5">
          <div className="flex items-center justify-center w-[22px] h-[22px]">
            <Search />
          </div>
          <Input
            placeholder="Search products..."
            className="border-none p-0 h-fit rounded-none focus-visible:ring-0 focus-visible:ring-offset-0 bg-white"
          />
          <Button
            type="submit"
            onClick={(e) => {
              e.preventDefault();
              console.log("Confirmation button has been clicked", e.value);
            }}
            variant="ghost"
            className="h-fit rounded-full p-0"
          >
            <ConfirmSearch />
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Nav;
