import { getShowBooks } from "@/src/bookAPI";
import Image from "next/image";
import React from "react";

const BookShow = async ({ params }: { params: { booksGenreId: string } }) => {
  const detailBook = await getShowBooks(params.booksGenreId);
  console.log(detailBook);

  return (
    <div className="flex items-center mt-[5rem] mb-[4rem]">
      <div className="flex items-start ml-[13.5rem]">
        <Image
          src="/images/typescript.jpg"
          alt="TypeScript入門書"
          width={300}
          height={100}
          className="rounded-t-md"
        />
        <div className="text-white text-center text-[2.3rem] pt-[0.1rem] ml-[2.2rem]">
          TypeScript入門書
        </div>
        <div className="text-white text-[1.05rem] my-[3rem] ml-[-18.8rem] pt-[1.5rem]">
          宮下颯太(MiyashitaSouta)
        </div>
        <div className="text-white text-[1rem] ml-[-12.8rem] pt-[11rem]">
          2024年03月7日頃発売/インプレス/単行本
        </div>
        <div className="text-white text-[1.7rem] ml-[-18.6rem] pt-[14rem]">
          価格: 3,300円(税込)
        </div>
      </div>
    </div>
  );
};

export default BookShow;
