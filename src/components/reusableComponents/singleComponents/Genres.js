import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { getGenreList } from '../../../services/api';

const GenreContent = styled.div`
  position: relative;
  z-index: 30;
  transition: 300ms ease-in-out;
  display: flex;
  gap: 1vw;
  margin-left: 1vw;

  .genre-list:hover .genre-items {
    display: flex;
  }

  .btn-genre {
    background: transparent;
    border: 0;
    font-size: 1.2vw;
  }

  .genre-items {
    display: none;
    width: 25vw;
    flex-flow: wrap;
    background: #141414;
    padding: 0.5vw;
    border-radius: 0.2vw;
    transition: 300ms ease-in-out;
    position: absolute;
  }

  .item {
    width: 33%;
    font-size: 1vw;
    padding: 0.2vw 0;
    cursor: pointer;
    display: block;
  }

  .item:hover {
    text-decoration: underline;
  }

  @media(max-width: 770px) {


    .btn-genre {
      font-size: 3.5vw;
    }

    .genre-items {
      width: 80vw;
      left: -27vw;
      top: 5vw;
      background-color: #000000;
    }

    .item {
      font-size: 2.5vw;
      height: 5vw;
    }
  }
`;

export default function Genres() {
  const [moviesList, setMoviesList] = React.useState([]);
  const [seriesList, setSeriesList] = React.useState([]);
  const arrGenreOcult = [10763, 10767, 10766];

  const fetchGenres = async () => {
    const movie = await getGenreList(true);
    const serie = await getGenreList(false);
    setMoviesList(movie);
    setSeriesList(serie);
  };

  React.useEffect(() => {
    fetchGenres();
  }, []);

  return (
    seriesList.genres && seriesList.genres.length > 0 && <GenreContent>
      <div className="genre-list">
        <p className="btn-genre movies">Filmes</p>
        <div className="genre-items">
          {moviesList.genres.map((genre) => {
            return (
              <Link to={`/search/movie/${genre.id}`} className="item" key={genre.id}>{genre.name}</Link>
            );
          })}
        </div>
      </div>
      <div className="genre-list">
        <p className="btn-genre">Series</p>
        <div className="genre-items">
          {seriesList.genres.map((genre) => {
            return (
              !arrGenreOcult.includes(genre.id) && <Link to={`/search/tv/${genre.id}`} className="item" key={genre.id}>{genre.name}</Link>
            );
          })}
        </div>
      </div>
    </GenreContent>
  );
}
