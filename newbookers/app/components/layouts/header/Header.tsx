import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoIosSearch } from "react-icons/io";
function Header() {
  return (
    <div className="flex flex-col pt-4 border-b border-white pb-2.5">
      <div className="flex justify-between mx-auto container items-center text-white">
        <Link href="/" className="text-xl">
          新Bookers
        </Link>
        <div className="">
          <ul className="flex">
            <Link href="categories">
              <IoIosSearch className="w-6 h-12 cursor-pointer hover:text-gray-500" />
            </Link>
            <Link
              href="/login"
              className="ml-4 pt-3.5 cursor-pointer hover:text-gray-700"
            >
              ログイン
            </Link>
            <Link href="/profile">
              <Image
                width={50}
                height={50}
                src={"/images/default_icon.svg"}
                alt="profile"
                className="flex flex-col ml-2.5 rounded-full cursor-pointer"
              />
            </Link>
          </ul>
        </div>
      </div>
      <div>
        <ul className="flex justify-center gap-[1.6rem] pt-3.5 text-white">
          <Link href="/" className="cursor-pointer hover:text-gray-500">
            ホーム
          </Link>
          <Link href="/base" className="cursor-pointer hover:text-gray-500">
            プログラミング基礎
          </Link>
          <Link href="/design" className="cursor-pointer hover:text-gray-500">
            デザイン
          </Link>
          <Link
            href="/computer_science"
            className="cursor-pointer hover:text-gray-500"
          >
            CS(コンピューターサイエンス)
          </Link>
          <Link
            href="/front_end"
            className="cursor-pointer hover:text-gray-500"
          >
            フロントエンド
          </Link>
          <Link href="/back_end" className="cursor-pointer hover:text-gray-500">
            バックエンド
          </Link>
          <Link
            href="/infrastructure"
            className="cursor-pointer hover:text-gray-500"
          >
            インフラ・アーキテクチャ
          </Link>
          <Link
            href="/web_development"
            className="cursor-pointer hover:text-gray-500"
          >
            Web開発
          </Link>
          <Link
            href="/useful_book"
            className="cursor-pointer hover:text-gray-500"
          >
            実務で役立つ本
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default Header;
