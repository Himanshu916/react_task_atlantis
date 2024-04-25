import { useEffect, useState } from "react";
import { getMovies } from "../services/api.services";

export function useMovies() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(function () {
    async function settingMovies() {
      try {
        setLoading(true);
        const data = await getMovies();
        setMovies(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    }
    settingMovies();
  }, []);

  return [isLoading, movies];
}
