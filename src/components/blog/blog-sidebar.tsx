'use client'
import React, { useState } from "react";
import AdsBanner from "../ads-banner";

export default function BlogSidebar() {

  const [activeId, setActiveId] = useState<string | null>(null);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, targetId: string) => {
    e.preventDefault();
    setActiveId(targetId);
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="w-1/3 p-4 border-l border-gray-200">
      <h2 className="text-xl font-bold mb-4">Nội Dung Bài Viết</h2>
      <ul className="text-gray-700 text-sm">
        <li className="mb-2"><a href="#quy-trinh-5s" onClick={(e) => handleScroll(e, "quy-trinh-5s")} className={`block py-2 ${activeId === "quy-trinh-5s" ? "text-green-600 font-bold" : "text-gray-600"}`}>1. Quy trình 5S là gì?</a></li>
        <li className="mb-2"><a href="#loi-ich" onClick={(e) => handleScroll(e, "loi-ich")} className={`block py-2 ${activeId === "loi-ich" ? "text-green-600 font-bold" : "text-gray-600"}`}>2. Lợi ích quy trình 5S đem lại</a></li>
        <li className="mb-2">
          <a href="#tai-sao-5s" onClick={(e) => handleScroll(e, "tai-sao-5s")} className={`block py-2 ${activeId === "tai-sao-5s" ? "text-green-600 font-bold" : "text-gray-600"}`}>3. Tại sao doanh nghiệp nên áp dụng quy trình 5S?</a>
          <ul className="ml-4 mt-1 text-gray-600">
            <li className="mb-1"><a href="#cai-thien" className="text-gray-700">3.1 Cải thiện rõ nét môi trường làm việc</a></li>
            <li className="mb-1"><a href="#tiet-kiem-thoi-gian" className="text-gray-700">3.2 Tiết kiệm thời gian đáng kể</a></li>
            <li className="mb-1"><a href="#tang-nang-suat" className="text-gray-700">3.3 Tăng năng suất làm việc</a></li>
            <li className="mb-1"><a href="#tiet-kiem-chi-phi" className="text-gray-700">3.4 Tiết kiệm chi phí</a></li>
            <li className="mb-1"><a href="#tang-chat-luong" className="text-gray-700">3.5 Tăng chất lượng sản phẩm</a></li>
          </ul>
        </li>
        <li className="mb-2">
          <a href="#thuc-hien-5s" onClick={(e) => handleScroll(e, "cac-buoc-5s")} className={`block py-2 ${activeId === "cac-buoc-5s" ? "text-green-600 font-bold" : "text-gray-600"}`}>4. Quy trình 5S gồm các bước:</a>
          <ul className="ml-4 mt-1 text-gray-600">
            <li className="mb-1"><a href="#seiri" className="text-gray-700">4.1 Seiri (Ngăn nắp)</a></li>
            <li className="mb-1"><a href="#seiton" className="text-gray-700">4.2 Seiton (Sắp xếp)</a></li>
            <li className="mb-1"><a href="#seiso" className="text-gray-700">4.3 Seiso (Vệ sinh)</a></li>
            <li className="mb-1"><a href="#seiketsu" className="text-gray-700">4.4 Seiketsu (Tiêu chuẩn hóa)</a></li>
            <li className="mb-1"><a href="#shitsuke" className="text-gray-700">4.5 Shitsuke (Kỷ luật)</a></li>
          </ul>
        </li>
        <li className="mb-2">
          <a href="#thuc-hien-5s" onClick={(e) => handleScroll(e, "thuc-hien-5s")} className={`block py-2 ${activeId === "thuc-hien-5s" ? "text-green-600 font-bold" : "text-gray-600"}`}>5. Quy trình thực hiện 5S</a>
          <ul className="ml-4 mt-1 text-gray-600">
            <li className="mb-1"><a href="#chuan-bi" className="text-gray-700">5.1 Giai đoạn chuẩn bị</a></li>
            <li className="mb-1"><a href="#trien-khai" className="text-gray-700">5.2 Triển khai rộng rãi</a></li>
            <li className="mb-1"><a href="#ve-sinh" className="text-gray-700">5.3 Thực hiện vệ sinh toàn bộ doanh nghiệp</a></li>
            <li className="mb-1"><a href="#sap-xep" className="text-gray-700">5.4 Sàng lọc, sắp xếp và đánh giá</a></li>
            <li className="mb-1"><a href="#danh-gia" className="text-gray-700">5.5 Đánh giá</a></li>
          </ul>
        </li>
        <li className="mb-2"><a href="#kaizen" className="text-gray-800">6. Quy trình 5S có giống với Kaizen?</a></li>
      </ul>
      <AdsBanner />
    </div>
  );
}
