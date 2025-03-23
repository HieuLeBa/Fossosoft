"use client";
import DeleteProduct from "@/app/products/_components/delete-product";
import { Button } from "@/components/ui/button";
import { ProductListResType } from "@/schemaValidations/product.schema";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Pencil } from "lucide-react";
import { Card } from "@/components/ui/card";

export default function ProductEditButton({
  product,
}: {
  product: ProductListResType["data"][0];
}) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    setIsAuthenticated(Boolean(localStorage.getItem("sessionToken")));
  }, []);

  if (!isAuthenticated) return null;

  return (
    <Card className="container mx-auto max-w-5xl px-6 py-6 rounded-lg shadow-md flex justify-between items-center">
      <div className="flex items-center space-x-4">
        <h3 className="text-lg font-semibold">{product.name}</h3>
        <div className="text-gray-500">{product.price}₫</div>
      </div>

      <div className="container mx-auto max-w-5xl px-6 py-6 w-full flex space-x-2 mx-auto">
        <Link href={`/products/${product.id}/edit`}>
          <Button
            variant={"outline"}
            className="flex items-center space-x-2 hover:bg-blue-100 transition-all"
          >
            <Pencil size={16} />
            <span>Edit</span>
          </Button>
        </Link>

        <DeleteProduct product={product} />
      </div>
    </Card>
  );
}
