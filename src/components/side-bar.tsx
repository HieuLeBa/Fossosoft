'use client'
import React from "react";
import { Search } from "lucide-react";
import AdsBanner from "./ads-banner";

const categories = [
  { name: "Tất cả", count: 108 },
  { name: "Thiết kế Website", count: 33 },
  { name: "Thiết kế App Mobile", count: 25 },
  { name: "Quản lý Sản Xuất", count: 23 },
  { name: "Quản lý Lưu Hàng", count: 17 },
  { name: "Báo Chí Nhà Nước FOSO", count: 7 },
  { name: "Tin Tức FOSO", count: 3 },
];

export default function Sidebar() {
  return (
    <aside className="w-3/12">
      <div className="relative flex align-center pl-6 pr-2 py-3 mb-8 rounded-lg border border-gray-300 h-18 bg-red" style={{ backgroundColor: "#ffffff" }}>
        <input
          type="text"
          placeholder="Tìm kiếm bài viết"
          className="w-full text focus:ring-2 focus:ring-green-500"
        />
        <div className=" flex align-center justify-center bg-[#15AA7A] p-3 rounded-lg ">
          <button className="text-white">
            <Search size={18} />
          </button>
        </div>
      </div>

      <div className="bg-white py-4">
        <h2 className="text-2xl font-extrabold leading-loose text-[#050505] mb-3">Danh Mục</h2>
        <ul className="space-y-2">
          {categories.map((category, index) => (
            <li key={index} className="flex justify-between text-gray-700 py-2">
              <span>{category.name}</span>
              <span className="text-gray-500">{category.count}</span>
            </li>
          ))}
        </ul>
      </div>
      <AdsBanner />
    </aside>
  );
}
