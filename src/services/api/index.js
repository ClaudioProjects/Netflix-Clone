const API_KEY = 'api_key=55c0eaff4f483cf91aefa4794e50f199';
const API_BASE = 'https://api.themoviedb.org/3';
const LANGUAGE = '&language=pt-BR';

const categories = [
  {
    name: 'trending',
    title: 'Em Alta',
    path: `/trending/all/week?${API_KEY + LANGUAGE}`,
  },
  // {
  //   name: 'Top2022',
  //   title: 'Os melhores de 2022',
  //   path: `/discover/movie?primary_release_year=2022&sort_by=vote_average.desc&${API_KEY}${LANGUAGE}`,
  // },
  {
    name: 'family',
    title: 'Para toda a familia',
    path: `/discover/movie?${API_KEY}&with_genres=10751${LANGUAGE}`,
  },
  {
    name: 'comedyAndRomance',
    title: 'Comédias romanticas',
    path: getPathGenresMovies([35, 10749], true, 1),
  },
  {
    name: 'sci-fiAndFantasy',
    title: 'Ficção cientifica e fantasia',
    path: getPathGenresMovies([14, 878], true, 1),
  },
  {
    name: 'actionAndAventure',
    title: 'Ação e aventura',
    path: getPathGenresMovies([28, 12], true, 1),
  },
  {
    name: 'horror',
    title: 'Terror',
    path: getPathGenresMovies([27], true, 1),
  },
  {
    name: 'documentary',
    title: 'Documentários',
    path: getPathGenresMovies([99], true, 1),
  },
  
];
export const genre = [
  {
    id: 28,
    name: 'Ação',
  },
  {
    id: 12,
    name: 'Aventura',
  },
  {
    id: 16,
    name: 'Animação',
  },
  {
    id: 35,
    name: 'Comédia',
  },
  {
    id: 80,
    name: 'Crime',
  },
  {
    id: 99,
    name: 'Documentário',
  },
  {
    id: 18,
    name: 'Drama',
  },
  {
    id: 10751,
    name: 'Família',
  },
  {
    id: 14,
    name: 'Fantasia',
  },
  {
    id: 36,
    name: 'História',
  },
  {
    id: 27,
    name: 'Terror',
  },
  {
    id: 10402,
    name: 'Música',
  },
  {
    id: 9648,
    name: 'Mistério',
  },
  {
    id: 10749,
    name: 'Romance',
  },
  {
    id: 878,
    name: 'Ficção científica',
  },
  {
    id: 10770,
    name: 'Cinema TV',
  },
  {
    id: 53,
    name: 'Thriller',
  },
  {
    id: 10752,
    name: 'Guerra',
  },
  {
    id: 37,
    name: 'Faroeste',
  },
  {
    id: 10765,
    name: 'Sci-Fi & Fantasy',
  },
  {
    id: 10769,
    name: 'Action & Adventure',
  },
];

export const listItemsFooter = [
  ['Audiodescrição', 'Relação com os investidores', 'Avisos legais'], 
  ['Centro de ajuda', 'Carreiras', 'Preferencia de cookies'],
  ['Cartão pré-pago', 'Termos de uso', 'Informações corporativas'],
  ['Imprensa', 'Privacidade', 'Entre em contato'],
];

export const URL_IMG = 'https://image.tmdb.org/t/p/';

export const getMovies = async (path) => {
  try {
    const url = `${API_BASE}${path}`;
    const response = await fetch(url);
    return await response.json();
  } catch (e) {
    console.log(e);
  }
};

export const getChosenMovie = async (id, isMovie) => {
  try {
    const url = `/${isMovieFunc(isMovie)}/${id}?${API_KEY}${LANGUAGE}`;
    return await getMovies(url);
  } catch (e) {
    console.log(e);
  }
};

export const getSimilarMovie = async (id, isMovie) => {
  try {
    const url = `/${isMovieFunc(isMovie)}/${id}/similar?${API_KEY}${LANGUAGE}`;
    return await getMovies(url);
  } catch (e) {
    console.log(e);
  }
};

export const searchByGenre = async (idGenre, isMovie, page) => {
  try {
    const genreId = idGenre.split(',');
    const data = await getMovies(getPathGenresMovies(genreId, isMovie, page));
    return data.results;
  } catch (e) {
    console.log(e);
  }
};

export const searchByQuery = async (query, page) => {
  try {
    const queryFormat = query.join(',');
    const url = `/search/multi?${API_KEY}&query=${queryFormat}${LANGUAGE}&page=${page}`;
    const data = await getMovies(url);
    return data;
  } catch (e) {
    console.log(e);
  }
};

export const getGenreList = async (isMovie) => {
  try {
    const url = `/genre/${isMovieFunc(isMovie)}/list?${API_KEY}${LANGUAGE}`;
    return await getMovies(url);
  } catch (e) {
    console.log(e);
  }
};

function getPathGenresMovies(genres, isMovie, page) {
  const string = genres.join(',');
  return `/discover/${isMovieFunc(isMovie)}?${API_KEY}&with_genres=${string}${LANGUAGE}&page=${page}`;
}

function isMovieFunc(isMovie) {
  const movieOrTv = isMovie ? 'movie' : 'tv';
  return movieOrTv;
}

export default categories;
