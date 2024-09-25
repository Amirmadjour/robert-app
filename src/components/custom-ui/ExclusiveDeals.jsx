"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import exclusive_img_1 from "@/app/Assets/images/Air_cooler.png";
import exclusive_img_2 from "@/app/Assets/images/airFly.png";
import exclusive_img_3 from "@/app/Assets/images/fake_iphone.png";
import exclusive_img_4 from "@/app/Assets/images/telecomande.png";

import ArrowLeft from "@/app/Assets/svg/ArrowLeft";
import ArrowRight from "@/app/Assets/svg/ArrowRight";
import AmazonLogo from "@/app/Assets/svg/AmazonLogo";

import { v4 as uuidv4 } from "uuid";
import Image from "next/image";
import clsx from "clsx";

const exclusive_deals = [
  {
    id: uuidv4(),
    src: exclusive_img_1,
    title: "Twelve South AirFly Pro",
    description:
      "Twelve South AirFly Pro Bluetooth Wireless Audio Transmitter/ Receiver",
    price: "$9.99",
    discount: "%25 OFF",
  },
  {
    id: uuidv4(),
    src: exclusive_img_2,
    title: "Twelve South AirFly Pro",
    description:
      "Twelve South AirFly Pro Bluetooth Wireless Audio Transmitter/ Receiver",
    price: "$9.99",
    discount: "%25 OFF",
  },
  {
    id: uuidv4(),
    src: exclusive_img_3,
    title: "Twelve South AirFly Pro",
    description:
      "Twelve South AirFly Pro Bluetooth Wireless Audio Transmitter/ Receiver",
    price: "$9.99",
    discount: "%25 OFF",
  },
  {
    id: uuidv4(),
    src: exclusive_img_4,
    title: "Twelve South AirFly Pro",
    description:
      "Twelve South AirFly Pro Bluetooth Wireless Audio Transmitter/ Receiver",
    price: "$9.99",
    discount: "%25 OFF",
  },
  {
    id: uuidv4(),
    src: exclusive_img_1,
    title: "Twelve South AirFly Pro",
    description:
      "Twelve South AirFly Pro Bluetooth Wireless Audio Transmitter/ Receiver",
    price: "$9.99",
    discount: "%25 OFF",
  },
  {
    id: uuidv4(),
    src: exclusive_img_2,
    title: "Twelve South AirFly Pro",
    description:
      "Twelve South AirFly Pro Bluetooth Wireless Audio Transmitter/ Receiver",
    price: "$9.99",
    discount: "%25 OFF",
  },
  {
    id: uuidv4(),
    src: exclusive_img_3,
    title: "Twelve South AirFly Pro",
    description:
      "Twelve South AirFly Pro Bluetooth Wireless Audio Transmitter/ Receiver",
    price: "$9.99",
    discount: "%25 OFF",
  },
  {
    id: uuidv4(),
    src: exclusive_img_4,
    title: "Twelve South AirFly Pro",
    description:
      "Twelve South AirFly Pro Bluetooth Wireless Audio Transmitter/ Receiver",
    price: "$9.99",
    discount: "%25 OFF",
  },
  {
    id: uuidv4(),
    src: exclusive_img_1,
    title: "Twelve South AirFly Pro",
    description:
      "Twelve South AirFly Pro Bluetooth Wireless Audio Transmitter/ Receiver",
    price: "$9.99",
    discount: "%25 OFF",
  },
  {
    id: uuidv4(),
    src: exclusive_img_2,
    title: "Twelve South AirFly Pro",
    description:
      "Twelve South AirFly Pro Bluetooth Wireless Audio Transmitter/ Receiver",
    price: "$9.99",
    discount: "%25 OFF",
  },
  {
    id: uuidv4(),
    src: exclusive_img_3,
    title: "Twelve South AirFly Pro",
    description:
      "Twelve South AirFly Pro Bluetooth Wireless Audio Transmitter/ Receiver",
    price: "$9.99",
    discount: "%25 OFF",
  },
  {
    id: uuidv4(),
    src: exclusive_img_4,
    title: "Twelve South AirFly Pro",
    description:
      "Twelve South AirFly Pro Bluetooth Wireless Audio Transmitter/ Receiver",
    price: "$9.99",
    discount: "%25 OFF",
  },
];
const ExclusiveDeals = () => {
  const [imageIndex, setImageIndex] = useState(0);
  const exclusive_deals_index = exclusive_deals.length / 4;

  function showNextImage() {
    setImageIndex((index) => {
      if (index === exclusive_deals_index - 1) return 0;
      return index + 1;
    });
  }

  function showPrevImage() {
    setImageIndex((index) => {
      if (index === 0) return exclusive_deals_index - 1;
      return index - 1;
    });
  }
  return (
    <section
      id="exclusive-deals"
      className="w-full h-fit flex flex-col items-center justify-center gap-12"
    >
      <div className="w-full flex justify-between items-center px-10">
        <h3 className="font-agbalumo text-primary text-5xl ">
          Exclusive deals
        </h3>
        <div className="flex items-center justify-center gap-6">
          <Button
            variant="ghost"
            className="bg-white border border-[#D0D5DD] w-fit h-fit rounded-full p-[14px]"
            onClick={showPrevImage}
          >
            <ArrowLeft />
          </Button>
          <Button
            variant="ghost"
            className="bg-white border border-[#D0D5DD] w-fit h-fit rounded-full p-[14px]"
            onClick={showNextImage}
          >
            <ArrowRight />
          </Button>
        </div>
      </div>
      <div className="w-full h-fit px-10 ">
        <div className="w-full h-fit flex gap-8 items-center justify-start overflow-hidden">
          {exclusive_deals.map((d) => (
            <Card
              key={d.id}
              className={clsx(
                "shrink-0 border-[#D9D9D9] rounded-2xl p-[17px] flex flex-col items-start justify-center gap-[18px]",
                "img-slider-img"
              )}
              style={{
                translate: `calc(${-100 * 4 * imageIndex}% - ${
                  imageIndex * 128
                }px)`,
              }}
            >
              <CardContent className="p-0 relative">
                <p className="bg-primary text-background px-3 py-2 w-fit h-fit rounded-full absolute text-[12px]">
                  {d.discount}
                </p>
                <Image src={d.src} alt="" />
              </CardContent>
              <CardHeader className="p-0">
                <CardTitle className="font-agbalumo text-2xl">
                  {d.title}
                </CardTitle>
                <CardDescription>{d.description}</CardDescription>
              </CardHeader>
              <div
                className={clsx(
                  "flex items-center justify-center w-fit h-fit",
                  " bg-primary rounded-full text-background py-2 px-3 font-agbalumo gap-2 text-[12px]"
                )}
              >
                <p>{d.price} at</p>
                <AmazonLogo />
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExclusiveDeals;
