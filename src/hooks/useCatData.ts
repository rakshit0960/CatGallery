import { useEffect, useState } from "react";
import { Cat } from "../types/catDataTypes";
import { CatsArraySchema } from "../utils/catDataSchema";

export const useCatData = () => {
  const [cats, setCats] = useState<Cat[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState(1);

  const loadMore = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://api.thecatapi.com/v1/images/search?limit=100&page=${page}&order=Desc`
      );
      const data = await response.json();
      const catsData = CatsArraySchema.parse(data);
      setCats((prevCats) => [...prevCats, ...catsData]);
      setPage((prevPage) => prevPage + 1);
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      }
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
      loadMore();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { cats, loading, error, loadMore };
};
