import axios from 'axios';

const baseUrl = 'https://api.themoviedb.org/3';
const apiKey = 'a0891d2288480a98bcbb04a833141acb';

export const fetchTrendingMovies = async () => {
  try {
    const response = await axios.get(`${baseUrl}/trending/all/week`, {
      params: {
        api_key: apiKey,
      },
    });
    const recievedData = await response.data;
    return recievedData;
  } catch (error) {
    console.log('Something goes wrong');
  }
};

export const fetchMoviesBySearchQuery = async query => {
  try {
    const response = await axios.get(`${baseUrl}/search/movie?query=${query}`, {
      params: {
        api_key: apiKey,
      },
    });
    const recievedData = await response.data;
    return recievedData;
  } catch (error) {
    console.log('Something goes wrong');
  }
};

export const fetchEachMovie = async id => {
  try {
    const response = await axios.get(`${baseUrl}/movie/${id}`, {
      params: {
        api_key: apiKey,
      },
    });
    const recievedData = await response.data;
    return recievedData;
  } catch (error) {
    console.log('Something goes wrong');
  }
};

export const fetchEachMovieCast = async id => {
  try {
    const response = await axios.get(`${baseUrl}/movie/${id}/credits`, {
      params: {
        api_key: apiKey,
      },
    });
    const recievedData = await response.data;
    return recievedData;
  } catch (error) {
    console.log('Something goes wrong');
  }
};

export const fetchEachMovieReviews = async id => {
  try {
    const response = await axios.get(`${baseUrl}/movie/${id}/reviews`, {
      params: {
        api_key: apiKey,
      },
    });
    const recievedData = await response.data;
    return recievedData;
  } catch (error) {
    console.log('Something goes wrong');
  }
};
