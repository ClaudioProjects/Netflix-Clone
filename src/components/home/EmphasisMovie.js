import React from 'react';
import styled from 'styled-components';
import { FaInfoCircle } from 'react-icons/fa';
import { URL_IMG } from '../../services/api';

const EmphasisMovieBox = styled.div`
  img {
    width: 100%;
    position: absolute;
    top: 0;
  }

  .blur-details{
    position: absolute;
    height: 100vw;
    background: rgba(0,0,0,0.5);
    filter: blur(2vw);
    width: 54%;
    top: 6vw;
    left: -2vw;
  }

  .details {
    position: absolute;
    top: 20vw;
    width: 50%;
    color: white;
    z-index: 10;
    left: 2vw;
  }

  .title-emphasis{
    font-size: 3vw;
    font-family: 'Ubuntu', sans-serif;
  }

  .details-movie {
    font-size: 1.1vw;
    margin-top: 0.2vw;
  }

  .overview {
    font-size: 1.2vw;
    margin: .7vw 0;
  }

  .genre {
    margin: 0 0.2vw;
    font-size: 0.8vw;
  }

  .view-more-emphasis {
    font-size: 1.1vw;
    margin-top: 1em;
    height: 3em;
    width: 13em;
    border-radius: 0.3em;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.2em;
    border: 0;
  }

  @media(max-width: 770px) {
    .desktop-details{
      display: none;
    }

    .blur-details {
      width: 66%;
    }

    .details {
      width: 60%;
    }

    .title-emphasis {
      font-size: 5vw;
    }

    .view-more-emphasis {
      font-size: 2.6vw;
    }
  }
`;

export default function EmphasisMovie(chosenMovie) {
  // function premiereDate() {
  //   const data = chosenMovie.chosenMovie.release_date 
  //     ? chosenMovie.chosenMovie.release_date.split('-')
  //     : chosenMovie.chosenMovie.first_air_date.split('-');
  //   return data[0];
  // }

  function isTv() {
    if (chosenMovie.chosenMovie.seasons) return true;
    return false;
  }

  function toSeasons() {
    const string = chosenMovie.chosenMovie.seasons.length === 1 ? 'Temporada' : 'Temporadas';
    return `${chosenMovie.chosenMovie.seasons.length} ${string}`;
  }
  
  function viewOverView() {
    const text = chosenMovie.chosenMovie.overview;
    const stringArr = text.split('');
    if (stringArr.length === 0 || !stringArr) return '';
    if (stringArr.length < 150) return `${text}...`;
    return `${text.substring(0, 150)}...`;
  }

  return (
    <EmphasisMovieBox className="emphasis-movie">
      <img src={`${`${URL_IMG}/original`}${chosenMovie.chosenMovie.backdrop_path}`} alt="emphasis movie"></img>
      <div className="blur-details"></div>
      <div className="details">
        <p className="title-emphasis">
          {chosenMovie.chosenMovie.title ? chosenMovie.chosenMovie.title : chosenMovie.chosenMovie.name }
        </p>
        <div className="desktop-details">
          <div className="details-movie">
            {isTv() ? (<span>{toSeasons()}</span>) : (<span></span>)}
          </div>
          <p className="overview">
            {viewOverView()}
          </p>
            {chosenMovie.chosenMovie.genres.map((genre) => {
              return (
                <span className="genre" key={genre.id}>{genre.name}</span>
              );
            })}
        </div>
        <button type="button" className="view-more-emphasis shadow">
          <FaInfoCircle></FaInfoCircle>
          Mais informações
        </button>
      </div>
    </EmphasisMovieBox>
  );
}
