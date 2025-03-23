'use client'
import React from "react";
import Image from "next/image";
import ButtonUIFososoft from "./button-redirect";

const articles = [
  {
    id: 1,
    title: "Tại sao BOM quan trọng trong quản lý sản xuất?",
    category: "Quản lý Sản Xuất",
    date: "17/11/2022",
    readTime: "10 phút đọc",
    image: "/images/fososoft/image-blog.png",
  },
  {
    id: 2,
    title: "Ứng dụng 5S trong sản xuất giúp nâng cao hiệu suất",
    category: "Quản lý Sản Xuất",
    date: "17/11/2022",
    readTime: "10 phút đọc",
    image: "/images/fososoft/image-blog.png",
  },
  {
    id: 3,
    title: "Làm thế nào để tối ưu hóa quy trình sản xuất?",
    category: "Quản lý Sản Xuất",
    date: "17/11/2022",
    readTime: "10 phút đọc",
    image: "/images/fososoft/image-blog.png",
  },
  {
    id: 4,
    title: "Làm thế nào để tối ưu hóa quy trình sản xuất?",
    category: "Quản lý Sản Xuất",
    date: "17/11/2022",
    readTime: "10 phút đọc",
    image: "/images/fososoft/image-blog.png",
  },
  {
    id: 5,
    title: "Làm thế nào để tối ưu hóa quy trình sản xuất?",
    category: "Quản lý Sản Xuất",
    date: "17/11/2022",
    readTime: "10 phút đọc",
    image: "/images/fososoft/image-blog.png",
  },
  {
    id: 6,
    title: "Làm thế nào để tối ưu hóa quy trình sản xuất?",
    category: "Quản lý Sản Xuất",
    date: "17/11/2022",
    readTime: "10 phút đọc",
    image: "/images/fososoft/image-blog.png",
  },
];

export default function MainContent() {
  return (
    <div className="w-9/12">
      <div className="bg-blue-600 text-white rounded-xl flex items-center mb-6 h-[318px]">
        <div className="w-1/2 pt-[60px] pl-[60px]">
          <h1 className="text-4xl font-bold mb-8 w-[376px]">
            Gia nhập cộng đồng FMRP – Kết nối, chia sẻ, cùng phát triển!
          </h1>
          <ButtonUIFososoft text="Tham Gia Ngay" width="216px" onClick={() => alert("Đã tham gia!")} />
        </div>
        <div className="w-1/2 h-full flex justify-end">
          <Image
            src="/images/fososoft/slider.png"
            alt="Banner"
            width={472}
            height={400}
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-8">
        {articles.map((article) => (
          <div key={article.id} className="bg-white rounded-xl ">
            <Image
              src={article.image}
              alt={article.title}
              width={512}
              height={475}
              className="rounded-lg"
            />
            <div className="py-6">
              <span className="text-[12px] text-blue-600 font-normal bg-[#E2F0FE] p-2 rounded-lg">
                {article.category}
              </span>
              <h2 className="text-2xl font-bold mt-4 py-2">{article.title}</h2>
              <div className="flex items-center text-[16px] text-gray-500 mt-4">
                <span>{article.date}</span>
                <span className="mx-2">|</span>
                <span>{article.readTime}</span>
              </div>
              <button className="mt-4 font-medium">
                Khám phá thêm →
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
