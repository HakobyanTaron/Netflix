const API_KEY = process.env.REACT_APP_TMBD_API_KEY;

const requests = {
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&languages=en-US`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&languages=en-US`,
  fetchActionMovies: `/discover/tv?api_key=${API_KEY}&with_genres=10759`,
  fetcComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetcHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetcRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetcDocumentariesMovies: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
};

export default requests;
