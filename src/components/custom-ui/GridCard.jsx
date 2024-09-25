import { v4 as uuidv4 } from "uuid";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { Dot } from "lucide-react";

import electronics_1 from "@/app/Assets/images/electronics_1.jpg";
import electronics_2 from "@/app/Assets/images/electronics_2.avif";
import electronics_3 from "@/app/Assets/images/electronics_3.jpg";
import electronics_4 from "@/app/Assets/images/electronics_4.webp";

import forniture_1 from "@/app/Assets/images/forniture_1.webp";
import forniture_2 from "@/app/Assets/images/forniture_2.avif";
import forniture_3 from "@/app/Assets/images/forniture_3.webp";
import forniture_4 from "@/app/Assets/images/forniture_4.avif";

import tools_1 from "@/app/Assets/images/tools_1.png";
import tools_2 from "@/app/Assets/images/tools_2.jpeg";
import tools_3 from "@/app/Assets/images/tools_3.jpg";
import tools_4 from "@/app/Assets/images/tools_4.jpeg";

const latestBlogPosts = [
  {
    id: uuidv4(),
    category: "Category",
    img: electronics_1,
    title: "Blog title heading will go here",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
    date: "11 Jan 2022",
    time_to_read: "5 min read",
  },
  {
    id: uuidv4(),
    category: "Category",
    img: electronics_2,
    title: "Blog title heading will go here",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
    date: "11 Jan 2022",
    time_to_read: "5 min read",
  },
  {
    id: uuidv4(),
    category: "Category",
    img: electronics_3,
    title: "Blog title heading will go here",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
    date: "11 Jan 2022",
    time_to_read: "5 min read",
  },
  {
    id: uuidv4(),
    category: "Category",
    img: electronics_4,
    title: "Blog title heading will go here",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
    date: "11 Jan 2022",
    time_to_read: "5 min read",
  },
  {
    id: uuidv4(),
    category: "Category",
    img: forniture_1,
    title: "Blog title heading will go here",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
    date: "11 Jan 2022",
    time_to_read: "5 min read",
  },
  {
    id: uuidv4(),
    category: "Category",
    img: forniture_2,
    title: "Blog title heading will go here",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
    date: "11 Jan 2022",
    time_to_read: "5 min read",
  },
  {
    id: uuidv4(),
    category: "Category",
    img: forniture_3,
    title: "Blog title heading will go here",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
    date: "11 Jan 2022",
    time_to_read: "5 min read",
  },
  {
    id: uuidv4(),
    category: "Category",
    img: forniture_4,
    title: "Blog title heading will go here",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
    date: "11 Jan 2022",
    time_to_read: "5 min read",
  },
  {
    id: uuidv4(),
    category: "Category",
    img: tools_1,
    title: "Blog title heading will go here",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
    date: "11 Jan 2022",
    time_to_read: "5 min read",
  },
];

const GridCard = ({ title }) => {
  return (
    <section id="latest" className="flex flex-col gap-12 px-10">
      <h3 className="font-agbalumo text-primary text-5xl ">{title}</h3>
      <div className="w-full h-full grid grid-cols-3 grid-rows-3 gap-8">
        {latestBlogPosts.map((l) => (
          <Card
            key={l.id}
            className="border-none bg-background shadow-none flex flex-col items-start justify-center gap-6"
          >
            <CardContent className="shrink-0 w-full aspect-[2/1] p-0 relative">
              <Image
                src={l.img}
                layout="fill"
                alt=""
                objectFit="cover"
                className="rounded-2xl"
              />
            </CardContent>
            <CardHeader className="p-0">
              <p className="font-roboto font-medium text-sm">{l.category}</p>
              <CardTitle className="font-roboto font-bold text-2xl">
                {l.title}
              </CardTitle>
              <CardDescription className="line-clamp-2 font-roboto text-base text-black">
                {l.description}
              </CardDescription>
            </CardHeader>
            <div className="flex items-center justify-center w-fit h-fit text-sm">
              <p className="font-roboto text-base">{l.date}</p>
              <Dot className="text-black" />
              <p className="font-roboto text-base">{l.time_to_read}</p>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default GridCard;
