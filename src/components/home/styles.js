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
  }

  .movie-item img {
    height: 100%;
  }

  .view-more {
    height: 1.5vw;
    font-weight: 800;
    font-size: 0.6vw;
  }

  .left-navegation, .right-navegation {
    position: absolute;
    height: 96%;
    bottom: 0vw;
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
    right: -0.4vw; 
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
  }

  @media (max-width: 450px) {
      .section-movie-content {
        height: 46vw;
      }
  }
`;
