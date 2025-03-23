'use client'
import React from "react";
import Container from "@/components/container";
import BlogMain from "@/components/blog/blog-main";
import BlogSidebar from "@/components/blog/blog-sidebar";

export default function Blog() {
  return (
    <Container>
      <div className="w-2/3">
        <div className="text-sm font-normal mb-12">Trang chủ - Tài nguyên - Blog - <span className='text-[#50d71e]'>Quản lý sản xuất</span></div>
      </div>
      <div className="flex gap-8">
        <BlogMain />
        <BlogSidebar />
      </div>
    </Container>
  );
}
