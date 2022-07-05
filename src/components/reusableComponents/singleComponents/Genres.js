import React from 'react';
import styled from 'styled-components';
import { genre as genres } from '../../../services/api';

const GenreContent = styled.div`
  position: relative;
  z-index: 30;
  transition: 300ms ease-in-out;

  :hover .genre-items {
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
      background-color: #000000;
    }

    .item {
      font-size: 2.5vw;
    }
  }
`;

export default function Genres() {
  return (
    <GenreContent>
      <button className="btn-genre">Generos</button>
      <div className="genre-items">
        {genres.map((genre) => {
          return (
            <p className="item" key={genre.id}>{genre.name}</p>
          );
        })}
      </div>
    </GenreContent>
  );
}
