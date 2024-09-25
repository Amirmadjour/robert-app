import { createClient } from "contentful";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import Link from "next/link";
import GridCard from "@/components/custom-ui/GridCard";
import ExclusiveDeals from "@/components/custom-ui/ExclusiveDeals";

import mobilePhone from "@/app/Assets/images/mobile-phone.png";
import devices from "@/app/Assets/images/devices.png";
import house from "@/app/Assets/images/house.png";
import storageBox from "@/app/Assets/images/storage-box.png";
import toolBox from "@/app/Assets/images/tool-box.png";

import Image from "next/image";
import { v4 as uuidv4 } from "uuid";

import clsx from "clsx";

const categories = [
  {
    id: uuidv4(),
    src: mobilePhone,
    title: "Phone and accessories",
    href: "mobile",
  },
  { id: uuidv4(), src: toolBox, title: "Tools", href: "tools" },
  { id: uuidv4(), src: house, title: "Home care", href: "home" },
  { id: uuidv4(), src: storageBox, title: "Toys", href: "toys" },
  { id: uuidv4(), src: devices, title: "Electronics", href: "electronics" },
];

async function fetchData() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });

  const res = await client.getEntries();
  console.log(res.items, res.items[0].fields?.productImage[0].fields.file);
  return res.items;
}

export default async function Home() {
  const products = await fetchData();

  return (
    <main className="w-screen h-fit flex flex-col">
      <div className="w-screen h-fit flex flex-col items-center justify-center gap-12">
        <section
          id="home"
          className="w-full flex flex-col items-start justify-center gap-10 px-10"
        >
          <h2 className="font-agbalumo text-primary text-5xl">
            Featured blog posts
          </h2>
          <div className="w-full h-fit grid grid-rows-2 grid-cols-2 gap-4">
            <Card className="row-span-2 border-none bg-background shadow-none flex flex-col gap-6">
              <CardContent className="p-0">
                <img
                  src={
                    "https:" +
                    products[0].fields.productImage[0].fields.file.url
                  }
                  alt=""
                  className="w-full max-h-[400px] object-cover rounded-2xl"
                />
              </CardContent>
              <CardHeader className="p-0 ">
                <p className="font-roboto font-medium text-sm">
                  {products[0].fields.category || "Category"}
                </p>
                <CardTitle className="font-roboto font-bold text-4xl">
                  {products[0].fields.title}
                </CardTitle>
                <CardDescription className="font-roboto text-base line-clamp-2 text-black">
                  {products[0].fields.description}
                </CardDescription>
              </CardHeader>
            </Card>
            {products.map((p) => (
              <Card
                key={p.sys.id}
                className="border-none bg-background shadow-none flex items-center"
              >
                <CardContent className="shrink-0 w-fit h-fit">
                  <img
                    src={"https:" + p.fields.productImage[0].fields.file.url}
                    className="rounded-2xl aspect-square w-[250px] object-cover"
                    alt=""
                  />
                </CardContent>
                <CardHeader>
                  <p className="font-roboto font-medium text-sm">
                    {p.fields.category || "Category"}
                  </p>
                  <CardTitle className="font-roboto font-bold text-4xl">
                    {p.fields.title}
                  </CardTitle>
                  <CardDescription className="line-clamp-2 font-roboto text-base text-black">
                    {p.fields.description}
                  </CardDescription>
                  <p className="font-roboto text-base">
                    {p.fields.date || "11 Jan 2022"}
                  </p>
                </CardHeader>
              </Card>
            ))}
          </div>
        </section>
        <section className="w-full h-fit flex flex-col items-center justify-center gap-12">
          <h3 className="font-agbalumo text-primary text-3xl">Categories</h3>
          <div className="w-full flex items-center justify-evenly">
            {categories.map((c) => (
              <Link
                key={c.id}
                className="bg-white py-[14px] px-[18px] rounded-[18px] border border-[#BDB7B7] flex items-center justify-center gap-[14px]"
                href={"/categories/" + c.href}
              >
                <Image src={c.src} alt="" />
                <p className="font-roboto text-lg font-medium">{c.title}</p>
              </Link>
            ))}
          </div>
        </section>
        <ExclusiveDeals />
        <GridCard title="Latest blog posts" />
      </div>
    </main>
  );
}
