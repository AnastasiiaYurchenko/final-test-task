import React, { useEffect, useState } from 'react';
import * as API from '../../API';
import { Loader } from 'components/Loader/Loader';

export const ERROR_MSG = 'Something went wrong, please try again';

const Catalog = () => {
  //   return <div>Catalog</div>;
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getTrendingMovies() {
      try {
        setLoading(true);
        setError(null);
        const trendingMovies = await API.getTrendingMovies();
        // console.log(trendingMovies);

        setMovies(trendingMovies);
      } catch (error) {
        setError(ERROR_MSG);
      } finally {
        setLoading(false);
      }
    }
    getTrendingMovies();
  }, []);
  //   console.log(movies);
  return (
    <ul>
      {error && <h1>{error} </h1>}
      {loading && <Loader />}
      {movies &&
        movies.map(movie => {
          return (
            <li key={movie.id}>
              <img src={movie.img} alt={movie.make}></img>
              <p>{movie.make}</p>
              <p>{movie.model},</p>
              <p>{movie.year}</p>
              <p>{movie.rentalPrice}</p>
              <p></p>

              {/* <Link key={movie.id} to={`movies/${movie.id}`}>
                {movie.title || movie.name}
              </Link> */}
            </li>
          );
        })}
    </ul>
  );
};

export default Catalog;
