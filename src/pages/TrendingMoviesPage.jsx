import React from "react";
import { useQuery } from "@tanstack/react-query";
import Spinner from "../components/spinner";
import PageTemplate from "../components/templateMovieListPage";
import { getTrendingMovies } from "../api/tmdb-api";

const TrendingThisWeekPage = () => {
  const { data, error, isLoading, isError } = useQuery({
    queryKey: ["trendingThisWeek"],
    queryFn: getTrendingMovies,
  });

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  const movies = data.results;

  return (
    <PageTemplate
      title="Trending This Week"
      movies={movies}
    />
  );
};

export default TrendingThisWeekPage;