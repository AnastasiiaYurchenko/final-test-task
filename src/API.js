import axios from 'axios';

export const getTrendingMovies = async (page, perPage) => {
  const response = await axios.get(
    `https://647baa58d2e5b6101db18476.mockapi.io/adverts?page=${page}&limit=8`
  );
  if (response.status === 404) {
    throw new Error('Something went wrong, please try again', response.status);
  }
  console.log(response.data);
  return response.data;
};

// export const getMovieDetails = async movieId => {
//   const response = await axios.get(
//     `https://api.themoviedb.org/3/movie/${movieId}?api_key=${KEY}&language=en-US`
//   );
//   if (response.status === 404) {
//     throw new Error('Something went wrong, please try again', response.status);
//   }
//   return response.data;
// };

// export const getMovieCredits = async movieId => {
//   const response = await axios.get(
//     `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${KEY}&language=en-US`
//   );
//   if (response.status === 404) {
//     throw new Error('Something went wrong, please try again', response.status);
//   }
//   return response.data;
// };

// export const getMovieReviews = async movieId => {
//   const response = await axios.get(
//     `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${KEY}&language=en-US&page=1`
//   );
//   if (response.status === 404) {
//     throw new Error('Something went wrong, please try again', response.status);
//   }
//   return response.data;
// };

// export const SearchMovies = async query => {
//   const response = await axios.get(
//     `https://api.themoviedb.org/3/search/movie?query=${query}&api_key=${KEY}`
//   );
//   if (response.status === 404) {
//     throw new Error('Something went wrong, please try again', response.status);
//   }
//   return response.data;
// };
