import React from 'react';
import styled from 'styled-components';
import MovieItem from './MovieItem';

const Section = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 0.5vw;
  width: 100%;

  .movie-item {
    width: 100%;
    margin-bottom: 3vw;
    height: 20vw;
    width: 1fr;
  }

  .movie-item img {
    height: 100%;
    width: 100%;
  }

  @media(max-width: 770px) {
    grid-template-columns: repeat(4, 1fr);

    .movie-item {
      height: 33vw;
    }
  }
`;

export default function SectionMovieGrid(props) {
  return (
    <Section className={props.isSearchByQuery ? 'query-section' : 'genre-section'}>
      { !props.isSearchByQuery 
        ? (props.movies.map((page) => {
          return (
            page.map((movie) => {
              return (
                <MovieItem key={movie.id} props={props.props} movie={movie} isSearchByGenre={props.isSearchByGenre}></MovieItem>
              );
            })
          );
        }))
        : (props.movies.map((movie) => {
          return (
            <MovieItem key={movie.id} props={props.props} movie={movie} />
          );
        }))}
    </Section>
  );
}
