export const dynamic = "force-dynamic";

import productApiRequest from "@/apiRequests/product";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import ProductEditButton from "@/app/products/_components/product-edit-button";
import ProductAddButton from "@/app/products/_components/product-add-button";

export const metadata: Metadata = {
  title: "Danh sách sản phẩm",
  description: "Danh sách sản phẩm của Productic, được tạo bởi Được dev",
};

export default async function ProductListPage() {
  const { payload } = await productApiRequest.getList();
  const productList = payload.data;
  return (
    <div className="container mx-auto max-w-5xl px-6 py-6">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold text-gray-800">
          🛍️ Danh sách sản phẩm
        </h1>
        <ProductAddButton />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {productList.map((product) => (
          <div
            key={product.id}
            className="bg-white shadow-md rounded-lg p-5 flex flex-col items-center space-y-3 transition-all hover:shadow-lg"
          >
            <Link href={`/products/${product.id}`} className="w-40 h-40">
              <Image
                src={product.image}
                alt={product.name}
                width={160}
                height={160}
                className="w-full h-full object-cover rounded-md"
              />
            </Link>

            <div className="text-center">
              <h3 className="text-lg font-semibold">{product.name}</h3>
              <div className="text-gray-600 font-bold text-lg">
                {product.price}₫
              </div>
            </div>

            <div className="flex space-x-3">
              <ProductEditButton product={product} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
