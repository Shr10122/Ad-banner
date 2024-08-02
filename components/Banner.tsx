"use client";

import Image from "next/image";
import { Button } from "./ui/button";
import { Pencil } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import EditBanner from "./EditBanner";

interface BannerProps {
  id: number;
  title: string;
  description: string;
  cta: string;
  image: string;
  background: string;
}

const Banner = ({
  id,
  title,
  description,
  cta,
  image,
  background,
}: BannerProps) => {
  const banner = { id, title, description, cta, image, background };

  return (
    <section className="w-[350px] sm:w-full h-[420px] mx-auto relative rounded-sm shadow shadow-black-3 ">
      <div className="w-full h-full absolute top-0 left-0 z-0">
        <Image
          src={background}
          alt={title}
          width={100}
          height={400}
          className="w-full h-full object-cover rounded-sm z-0"
        />
      </div>
      <div className="w-full h-full absolute top-0 left-0 flex flex-col items-center justify-center gap-y-10 p-5">
        <h2 className="text-xl font-semibold text-white text-center">{title}</h2>
        <p className="text-gray-1 font-medium text-lg text-center">
          {description}
        </p>
        <Image
          src={image}
          alt={title}
          width={100}
          height={100}
          className="w-full h-[150px] rounded object-cover mt-10"
        />
        <Button variant={"destructive"} className="w-full text-left">
          {cta}
        </Button>
      </div>
      <Sheet>
        <SheetTrigger asChild>
          <span className="absolute top-2 right-2">
            <Pencil className="text-white size-3 cursor-pointer hover:opacity-80 transition" />
          </span>
        </SheetTrigger>
        <SheetContent side="bottom" className="bg-black-3 border-none">
          <EditBanner banner={banner} />
        </SheetContent>
      </Sheet>
    </section>
  );
};

export default Banner;
