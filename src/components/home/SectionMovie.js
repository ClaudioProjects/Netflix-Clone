/* eslint-disable no-unused-vars */
import React from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { SectionMovieContent } from './styles';
import MovieItem from './MovieItem';
import { getMovies } from '../../services/api';

export default function SectionMovie({ title, path }) {
  const [scrollX, setScrollX] = React.useState(0);
  const [movies, setMovies] = React.useState([]);
  const fetchMovies = async (_path) => {
    try {
      const data = await getMovies(_path);
      setMovies(data?.results);
    } catch (e) {
      console.log(e);
    }
  };

  function handleNavegationRight() {
    if (window.innerWidth >= 770) {
      if (scrollX === 0) setScrollX(-94);
      if (scrollX === -94) setScrollX(-141);
    }
  }

  function handleNavegationLeft() {
    if (window.innerWidth >= 770) {
      if (scrollX === -94) setScrollX(0);
      if (scrollX === -141) setScrollX(-94);
    }
  }

  React.useEffect(() => {
    fetchMovies(path);
  }, [path]);

  return (
    <SectionMovieContent>
      <h2 className="title-section-movies">{title}</h2>
      <div
        className="section-movie-content"
        style={
        {
          transition: '300ms ease-in-out',
          marginLeft: `${scrollX}vw`,
        }
      }>{movies?.map((movie, index) => {
        if (index > 19) return;
        return ( 
          <MovieItem key={movie.id} movie={movie}></MovieItem>
        );
      })}
      </div>
      <button type="button" className="left-navegation" onClick={handleNavegationLeft}>
        <FaChevronLeft></FaChevronLeft>
      </button>
      <button type="button" className="right-navegation" onClick={handleNavegationRight}>
        <FaChevronRight></FaChevronRight>
      </button>
    </SectionMovieContent>
  );
}
