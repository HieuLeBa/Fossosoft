"use client";
import { useAppContext } from "@/app/app-provider";
import ButtonLogout from "@/components/button-logout";
import { ModeToggle } from "@/components/mode-toggle";
import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import clsx from "clsx";
import { ChevronDown, ChevronUp } from "lucide-react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export default function Header() {
  const { user } = useAppContext();
  const router = useRouter();

  const [isSticky, setIsSticky] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleProductClick = (e: React.MouseEvent) => {
    if (!user) {
      e.preventDefault(); // Ngăn điều hướng
      toast.error("Xin hãy đăng nhập để xem sản phẩm!");
    } else {
      router.push("/products");
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={clsx(
        "w-[1280px] mx-auto transition-all duration-300 py-3 bg-transparent z-100",
        {
          "fixed top-0 left-1/2 transform -translate-x-1/2 bg-transparent":
            isSticky,
          relative: !isSticky,
        }
      )}
    >
      <div className="max-w-[1280px] mx-auto flex justify-between items-center shadow-md rounded-[40px] p-4 bg-white">
        <Link href="/">
          <Image
            src={"/images/fososoft/logo-foso.png"}
            alt="Avatar"
            width={134}
            height={55}
          />
        </Link>
        <nav className="hidden md:flex items-center space-x-6">
          <Link
            href="/products"
            onClick={handleProductClick}
            className="hover:text-green-600"
          >
            Sản phẩm
          </Link>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost">Giải Pháp</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem asChild>
                <Link href="#">Giải pháp 1</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="#">Giải pháp 2</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <DropdownMenu onOpenChange={setIsDropdownOpen}>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="flex items-center gap-1">
                Tài Nguyên
                {isDropdownOpen ? (
                  <ChevronUp size={16} />
                ) : (
                  <ChevronDown size={16} />
                )}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="z-[9999] bg-white shadow-lg rounded-lg w-40">
              <DropdownMenuItem asChild>
                <Link
                  href="/resources/blog"
                  className="px-3 py-2 hover:bg-gray-100 block rounded"
                >
                  Blog
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link
                  href="#"
                  className="px-3 py-2 hover:bg-gray-100 block rounded"
                >
                  Hướng Dẫn
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link
                  href="#"
                  className="px-3 py-2 hover:bg-gray-100 block rounded"
                >
                  Tài Liệu
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Link href="#" className="hover:text-green-600">
            Liên Hệ
          </Link>
        </nav>
        <div className="flex items-center space-x-4">
          <Button variant="outline">VI</Button>
          <Button variant="default" className="bg-green-600 text-white">
            Trở Thành Khách Hàng
          </Button>
        </div>
        {user ? (
          <>
            <span>
              <Link href={"/me"}>
                Xin chào <strong>{user.name}</strong>
              </Link>
            </span>
            <li>
              <ButtonLogout />
            </li>
          </>
        ) : (
          <>
            <Button variant="outline">
              <Link href="/login">Đăng nhập</Link>
            </Button>
            <Button variant="destructive">
              <Link href="/register">Đăng ký</Link>
            </Button>
          </>
        )}
        <ModeToggle />
      </div>
    </header>
  );
}
