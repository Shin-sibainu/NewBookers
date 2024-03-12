import { ApiResponse, BookType } from "../types/types";

/* 全ての本 */
export const getAllBooks = async (): Promise<ApiResponse> => {
  const res = await fetch(`http://localhost:3001/api/v1/search`, {
    next: { revalidate: 1800 },
  });
  const allbooks = await res.json();
  return allbooks;
};

/* 基礎のところ */
export const getBaseBooks = async (): Promise<ApiResponse> => {
  const res = await fetch(`http://localhost:3001/api/v1/base`, {
    next: { revalidate: 1800 },
  });
  const basebooks = await res.json();
  return basebooks;
};
