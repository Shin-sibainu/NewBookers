import { ApiResponse } from "@/types/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "../BookList.module.css";

type BaseBookProps = {
  basebooks: ApiResponse;
};

const BaseBooks = ({ basebooks }: BaseBookProps) => {
  return (
    <div>
      {basebooks.data.map((basebook) => (
        <div
          className="flex items-center pt-[5rem] mx-[6rem]"
          key={basebook.params?.booksGenreId}
        >
          <div className="flex items-center">
            <Link href={`base/${basebook.params?.booksGenreId}`}>
              <div className="flex items-start ml-[13.5rem]">
                <Image
                  src={basebook.params?.largeImageUrl.url}
                  alt={basebook.params?.title}
                  width={150}
                  height={50}
                  className="rounded-t-md"
                />
                <div className="text-white text-center text-[1.2rem] pt-[0.1rem] ml-[2.2rem]">
                  {basebook.params?.title}
                </div>
                <div className="text-white text-[0.78rem] my-[3rem] ml-auto pt-[-0.7rem]">
                  {basebook.params?.author}
                </div>
                <div className="text-white text-[0.78rem] ml-[-9.5rem] pt-[8rem]">
                  {basebook.params?.salesDate}発売/
                  {basebook.params?.publisherName}/{basebook.params?.size}
                </div>
                <div className="text-white text-[1.05rem] ml-[-14.5rem] pt-[10rem]">
                  価格: {basebook.params?.itemPrice}円(税込)
                </div>
              </div>
            </Link>
            <div className={styles.book_bottom_line}></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BaseBooks;
