import Image from "next/image";
import React from "react";
import styles from "./BookAll.module.css";
import Tag from "./Tag/TagProgramming";
import TagFramework from "./Tag/TagFramework";

const BooksAll = () => {
  return (
    <>
      <div className="pt-10">
        <div className={styles.book_all_title}>技術書一覧</div>
        <div className={styles.book_all_line} />
      </div>
      <div className="flex justify-center items-center pt-[3.5rem]">
        <div className="flex flex-col items-center mx-10">
          <Image
            src="/images/typescript.jpg"
            alt="Image 1"
            width={150}
            height={50}
            className="rounded-t-md"
          />
          <div className="text-white text-center pt-1">TypeScript入門</div>
        </div>
        <div className="flex flex-col items-center mx-10">
          <Image
            src="/images/typescript.jpg"
            alt="Image 1"
            width={150}
            height={50}
            className="rounded-t-md"
          />
          <div className="text-white text-center pt-1">TypeScript入門</div>
        </div>
        <div className="flex flex-col items-center mx-10">
          <Image
            src="/images/typescript.jpg"
            alt="Image 1"
            width={150}
            height={50}
            className="rounded-t-md"
          />
          <div className="text-white text-center pt-1">TypeScript入門</div>
        </div>
      </div>

      {/* 二段目 */}
      <div className="flex justify-center items-center pt-6">
        <div className="flex flex-col items-center mx-10">
          <Image
            src="/images/typescript.jpg"
            alt="Image 1"
            width={150}
            height={50}
            className="rounded-t-md"
          />
          <div className="text-white text-center pt-1">TypeScript入門</div>
        </div>
        <div className="flex flex-col items-center mx-10">
          <Image
            src="/images/typescript.jpg"
            alt="Image 1"
            width={150}
            height={50}
            className="rounded-t-md"
          />
          <div className="text-white text-center pt-1">TypeScript入門</div>
        </div>
        <div className="flex flex-col items-center mx-10">
          <Image
            src="/images/typescript.jpg"
            alt="Image 1"
            width={150}
            height={50}
            className="rounded-t-md"
          />
          <div className="text-white text-center pt-1">TypeScript入門</div>
        </div>
      </div>
      <Tag />
      <TagFramework />
    </>
  );
};

export default BooksAll;
