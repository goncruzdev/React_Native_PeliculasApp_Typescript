import axios from 'axios';

const movieDB = axios.create({
  baseURL: 'https://api.themoviedb.org/3/movie',
  params: {
    api_key: '97f574465c349a3c5b2bd8a35ddcada7',
    language: 'es-ES',
  },
});

export default movieDB;
