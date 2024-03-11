import Image from "next/image";
import React, { useEffect, useState } from "react";
import styles from "./AllBooks.module.css";
import Tag from "./Tag/TagProgramming";
import TagFramework from "./Tag/TagFramework";
import { getAllBooks } from "@/src/bookAPI";
import BookList from "./AllBookList";
import Pagination from "../components/Pagination/Pagination";

export default async function AllBook() {
  const allbooks = await getAllBooks();

  return (
    <>
      <div className="pt-10">
        <div className={styles.book_all_title}>技術書一覧</div>
        <div className={styles.book_all_line} />
        <BookList allbooks={allbooks} />
      </div>
      <Tag />
      <TagFramework />
    </>
  );
}
