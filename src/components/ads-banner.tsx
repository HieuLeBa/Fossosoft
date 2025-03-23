"use client";

import React from "react";
import ButtonUIFososoft from "./button-redirect";

interface PromoBannerProps {
  image: string;
  title: string;
}

const promoData = [
  {
    image: "/images/fososoft/sidebar-1.png",
    title: "Trải Nghiệm Ngay",
    buttonText: "Trải Nghiệm Ngay",
    link: "#",
  },
  {
    image: "/images/fososoft/sidebar-4.png",
    title: "Gia nhập cộng đồng FMRP Việt – Kết nối, chia sẻ, cùng phát triển!",
    buttonText: "Tham Gia Ngay",
    link: "#",
  },
];

export default function AdsBanner() {
  return (
    <div className="space-y-6">
      {promoData.map((item, index) => (
        <PromoBanner key={index} {...item} />
      ))}
    </div>
  );
}

export function PromoBanner({
  image,
  title,
}: PromoBannerProps) {
  return (
    <div className="bg-blue-600 text-white rounded-2xl py-9 shadow-lg">
      <img src={image} alt={title} className="w-full rounded-lg mb-4" />
      <h3 className="px-6 py-12 text-lg font-semibold">{title}</h3>
      <div className="px-6">
        <ButtonUIFososoft
          text="Tham Gia Ngay"
          width="318px"
          height="50px"
          onClick={() => alert("Trải nghiệm ngay!")}
        />
      </div>
    </div>
  );
}
