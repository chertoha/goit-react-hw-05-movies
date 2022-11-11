import axios from 'axios';

const fetchMovies = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: '1936ce94882661ecfd75d2c22e8905aa',
  },
});

const getTrendings = async () => {
  const response = await fetchMovies.get(`trending/movie/day`);
  return response.data.results;
};

const searchMovie = async query => {
  const response = await fetchMovies.get(`search/movie`, {
    params: { query: query },
  });
  return response.data.results;
};

const movieDetails = async movieId => {
  const response = await fetchMovies.get(`movie/${movieId}`);
  return response.data;
};

const movieCast = async movieId => {
  const response = await fetchMovies.get(`movie/${movieId}/credits`);
  return response.data.cast;
};

const movieReviews = async movieId => {
  const response = await fetchMovies.get(`movie/${movieId}/reviews`);
  return response.data.results;
};

export { getTrendings, searchMovie, movieDetails, movieCast, movieReviews };
