import { BookType } from "../types/types";

export const getAllBooks = async (): Promise<BookType[]> => {
  const res = await fetch(`http://localhost:3001/api/v1/search`, {
    next: { revalidate: 1800 },
  });
  const allbook = await res.json();
  return allbook;
};
