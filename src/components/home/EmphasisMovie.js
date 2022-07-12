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
    border-radius: 10%;
    background: rgba(0,0,0,0.5);
    filter: blur(3.5vw);
    width: 60%;
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
    cursor: pointer;
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
      font-size: 3.5vw;
    }

    .view-more-emphasis {
      font-size: 3vw;
    }
  }
`;

export default function EmphasisMovie(props) {
  function setModal() {
    props.props({
      id: props.chosenMovie.id,
      isSet: true,
      isMovie: props.chosenMovie.media_type !== 'tv',
    });
  }

  function isTv() {
    if (props.chosenMovie.seasons) return true;
    return false;
  }

  function toSeasons() {
    const string = props.chosenMovie.seasons.length === 1 ? 'Temporada' : 'Temporadas';
    return `${props.chosenMovie.seasons.length} ${string}`;
  }
  
  function viewOverView() {
    const text = props.chosenMovie.overview;
    const stringArr = text.split('');
    if (stringArr.length === 0 || !stringArr) return '';
    if (stringArr.length < 150) return `${text}...`;
    return `${text.substring(0, 150)}...`;
  }

  return (
    <EmphasisMovieBox className="emphasis-movie">
      <img src={`${`${URL_IMG}/original`}${props.chosenMovie.backdrop_path}`} alt="emphasis movie"></img>
      <div className="blur-details"></div>
      <div className="details">
        <p className="title-emphasis">
          {props.chosenMovie.title ? props.chosenMovie.title : props.chosenMovie.name }
        </p>
        <div className="desktop-details">
          <div className="details-movie">
            {isTv() ? (<span>{toSeasons()}</span>) : (<span></span>)}
          </div>
          <p className="overview">
            {viewOverView()}
          </p>
            {props.chosenMovie.genres.map((genre) => {
              return (
                <span className="genre" key={genre.id}>{genre.name}</span>
              );
            })}
        </div>
        <button type="button" className="view-more-emphasis shadow" onClick={setModal}>
          <FaInfoCircle></FaInfoCircle>
          Mais informações
        </button>
      </div>
    </EmphasisMovieBox>
  );
}
