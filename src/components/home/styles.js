import styled from 'styled-components';

export const SectionMovieContent = styled.div`
  margin: 1.2vw 0;
  position: relative;

  :hover .left-navegation, :hover .right-navegation {
    display: flex;
  }

  .title-section-movies {
    font-weight: 700;
    color: #e5e5e5;;
    font-size: 1.4vw;
    margin-bottom: 0.8vw;
  }

  .section-movie-content {
    height: 17vw;
    display: flex;
    margin-left: 0;
  }

  .movie-item {
    height: 100%;
    transition: 50ms ease-in-out;
    margin: 0 0.2vw;
    position: relative;
    z-index: 10;
    cursor: pointer;
  }

  .movie-item img {
    height: 100%;
  }

  .movie-item:hover {
    transition: 300ms ease-in-out;
    transform: scale(1.3);
    z-index: 20;
  }

  .movie-item:hover .details-movie-item {
    display: block;
  }

  .details-movie-item {
    background: #252525;
    color: #3caa57;
    font-size: 0.7vw;
    display: none;
    position: absolute;
    bottom: -4vw;
    border-radius: 0 0 0.5vw .5vw;
    width: 100%;
    height: 4vw;
    padding: 0.3vw;
    font-weight: 600;
    transition: 300ms ease-in-out;
  }

  .details-move-item-text {
    display: flex;
    justify-content: center;
    align-content: center;
    height: 2vw;
    flex-wrap: wrap;
  }

  .details-move-item-text span {
    margin: 0 0.2vw;
  }

  .view-more {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    background: #e5e5e5;
    border: none;
    height: 1.5vw;
    border-radius: 0 0 0.5vw .5vw;
    cursor: pointer;
    font-weight: 800;
    color: #141414;
    font-size: 0.6vw;
  }

  .left-navegation, .right-navegation {
    position: absolute;
    height: 87.5%;
    bottom: 0;
    z-index: 15;
    border: none;
    width: 3vw;
    background: #111111de;
    transition: 50ms ease-in;
    display: none;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }

  .left-navegation>*, .right-navegation>*{
    color: white;
    height: 2vw;
    width: 100%;
  }

  .right-navegation {
    left: 94vw; 
  }

  .left-navegation {
    left: -2.7vw;
  }

  @media (max-width: 770px) {
    :hover .left-navegation, :hover .right-navegation {
      display: none;
    }

    .section-movie-content {
      height: 35vw;
      overflow-x: auto;
      overflow-y: hidden;
    }

    .section-movie-content::-webkit-scrollbar {
      display: none;
    }

    .title-section-movies {
      font-size: 4vw;
      color: white;
    }

    .movie-item:hover .details-movie-item {
      display: none;
    }

    .movie-item:hover {
      transform: scale(1);
      z-index: 10;
    }
  }

  @media (max-width: 450px) {
      .section-movie-content {
        height: 46vw;
      }
  }
`;
