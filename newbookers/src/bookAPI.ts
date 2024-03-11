import { ApiResponse, BookType } from "../types/types";

/* 全ての本 */
export const getAllBooks = async (): Promise<ApiResponse> => {
  const res = await fetch(`http://localhost:3001/api/v1/search`, {
    next: { revalidate: 1800 },
  });
  const allbooks = await res.json();
  return allbooks;
};

/* 全ての本の詳細 */
export const getShowBooks = async (booksGenreId: string): Promise<BookType> => {
  const res = await fetch(
    `http://localhost:3001/api/v1/search/${booksGenreId}`,
    {
      next: { revalidate: 1200 },
    }
  );
  const showbooks = await res.json();
  return showbooks;
};

/* 基礎のところ */
export const getBaseBooks = async (): Promise<ApiResponse> => {
  const res = await fetch(`http://localhost:3001/api/v1/base`, {
    next: { revalidate: 1800 },
  });
  const basebooks = await res.json();
  return basebooks;
};
