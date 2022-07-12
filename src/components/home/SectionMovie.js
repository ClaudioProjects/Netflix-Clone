/* eslint-disable no-unused-vars */
import React from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { SectionMovieContent } from './styles';
import MovieItem from '../reusableComponents/MovieItem';

export default function SectionMovie(props) {
  const [scrollX, setScrollX] = React.useState(0);

  function setModal(obj) {
    props.props(obj);
  }

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
      <h2 className="title-section-movies">{props.item.title}</h2>
      <div
        className="section-movie-content"
        style={
        {
          transition: '300ms ease-in-out',
          marginLeft: `${scrollX}vw`,
        }
      }>{props.item.api?.map((movie, index) => {
        if (index > 19) return;
        return ( 
          // eslint-disable-next-line react/jsx-no-bind
          <MovieItem key={movie.id} props={setModal} movie={movie}></MovieItem>
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
