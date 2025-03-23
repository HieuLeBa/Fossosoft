import React from "react";
import Image from "next/image";

export default function Banner() {
  return (
    <div className="relative flex items-center justify-between w-full bg-gradient-to-b from-green-50 to-white h-[392px] mb-24">
      <div className="flex w-full items-center justify-between gap-9">
        <div className="w-1/12">
          <Image
            src="/images/fososoft/banner-left.png"
            alt="Calendar Icon"
            width={282}
            height={268}
          />
        </div>

        <div className="w-10/12 h-[392px] flex justify-center">
          <Image
            src="/images/fososoft/banner-main.png"
            alt="Calendar Icon"
            width={1280}
            height={392}
          />
        </div>

        <div className="w-1/12">
          <Image
            src="/images/fososoft/banner-right.png"
            alt="Hand Drawing Icon"
            width={320}
            height={251}
            className="mx-auto"
          />
        </div>
      </div>
    </div>
  );
}
