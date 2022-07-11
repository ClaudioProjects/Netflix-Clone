/* eslint-disable no-unused-vars */
import React from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { SectionMovieContent } from './styles';
import MovieItem from './MovieItem';

export default function SectionMovie({ title, colectionMovies }) {
  const [scrollX, setScrollX] = React.useState(0);

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
      }>{colectionMovies?.map((movie, index) => {
        if (index > 19) return;
        return ( 
          <MovieItem key={movie.id} movie={movie}></MovieItem>
        );
      })}
      </div>
      <button type="button" className="left-navegation" onClick={handleNavegationLeft} style={scrollX === 0 ? { display: 'none' } : {}}>
        <FaChevronLeft></FaChevronLeft>
      </button>
      <button type="button" className="right-navegation" onClick={handleNavegationRight} style={scrollX === -141 ? { display: 'none' } : {}}>
        <FaChevronRight></FaChevronRight>
      </button>
    </SectionMovieContent>
  );
}
