'use client'
import { useEffect, useState } from "react";
import { getMovieDetails } from "@/app/utilities/getMovieDetails";
import { IMAGE_BASE_URL } from "@/app/config";
import router from "next/router";

interface MovieDetailProps {
  id: number;
  title: string;
  genre_ids: number[];
  poster_path: string;
  overview: string;
  release_date: string;
  vote_average: number;
}

const MovieDetail = ({ params: { movieId } }: { params: { movieId: number } }) => {
  const [movieDetails, setMovieDetails] = useState<MovieDetailProps | null>(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const details = await getMovieDetails(movieId);
        setMovieDetails(details);
      } catch (error) {
        console.error("Error fetching movie details:", error);
      }
    };

    fetchMovieDetails();
  }, [movieId]);
  const goBack = () => {
    router.back();
  };

  return (
    <div className="bg-gray-200 min-h-screen p-4">
      {movieDetails ? (
        <div className="bg-white p-4 rounded-lg shadow-md max-w-screen-md mx-auto">
          <a
          onClick={goBack}
          className="cursor-pointer text-blue-500 hover:text-blue-700 text-xl"
        >
           Back
        </a>
          <h2 className="text-2xl font-semibold mb-2">{movieDetails.title}</h2>
          <img
            src={`${IMAGE_BASE_URL}${movieDetails.poster_path}`}
            alt={movieDetails.title}
            className="w-full max-w-full rounded-lg shadow-md"
          />
          <p className="mt-4 max-w-prose">{movieDetails.overview}</p>
          <p className="mt-2">Release Date: {movieDetails.release_date}</p>
          <p className="mt-2">Vote Average: {movieDetails.vote_average}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default MovieDetail;