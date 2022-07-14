/* eslint-disable array-callback-return */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable no-unused-vars */
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { searchByGenre, getChosenMovie, getGenreList } from '../../services/api';
import Header from '../../components/reusableComponents/Header';
import EmphasisMovie from '../../components/reusableComponents/EmphasisMovie';
import ModalMovie from '../../components/reusableComponents/ModalMovie';
import SectionMovieGrid from '../../components/reusableComponents/SectionMovieGrid';
import Footer from '../../components/reusableComponents/Footer';
import Loading from '../../components/reusableComponents/Loading';

export const Search = styled.div`
  background: #141414;
  width: 100%;
  height: 100%;

  .Teste {
    margin-top: 48vw;
  }

  .title-search {
    position: absolute;
    z-index: 10;
    top: 10vw;
    left: 10vw;
    color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 1.3vw;
    background: rgba(0,0,0,0.5);
    padding: 1vw;
    border-radius: .5vw;

    @media(max-width: 770px) {
      top: 12vw;
      font-size: 2vw;
    }

    p {
      color: gray;
      margin-right: 2vw;
    }
  }

  .genre-section {
    margin-top: 48vw;
    margin-bottom: 5vw;
    padding: 0 3vw;
  }
`;

export default function index() {
  const history = useNavigate();
  const { movieOrTv, id } = useParams();
  const [movies, setMovies] = React.useState([]);
  const [chosenMovie, setChosenMovie] = React.useState('');
  const [modal, setModal] = React.useState({});
  const [closeLoad, setCloseLoad] = React.useState(Boolean);
  const [genre, setGenre] = React.useState({});

  async function returnGenre(genre) {
    const idInt = parseInt(id, 10);
    const name = genre.genres.filter((item) => {
      if (item.id === idInt) return item;
    });
    setGenre(name[0].name);
  } 

  function setIdModalFNC(Param) {
    setModal(Param);
  } 

  function isValidParam() {
    if (movieOrTv !== 'movie' && movieOrTv !== 'tv') history('/notfound');
  }

  function isMovie() {
    return movieOrTv === 'movie';
  }

  const viewHome = () => {
    document.querySelector('html').scrollTop = 0;
    setTimeout(() => {
      document.querySelector('.search').classList.remove('hidden');
      setCloseLoad(true);
    }, 1500);
  };

  const fetchMovie = async () => {
    isValidParam();
    const referenceArray = [];
    for (let page = 1; page <= 5; page++) {
      referenceArray.push(searchByGenre(id, isMovie(), page));
    }
    setMovies(await Promise.all(referenceArray));
    return Promise.all(referenceArray);
  };

  const fetchChosenMovie = async (api) => {
    const indexPage = Math.floor(Math.random() * api.length);
    const indexMovie = Math.floor(Math.random() * api[indexPage].length);
    const data = await getChosenMovie(api[indexPage][indexMovie].id, isMovie());
    await returnGenre(await getGenreList(isMovie()));
    setChosenMovie(data);
  };

  const fetchAll = async () => {
    try {
      setCloseLoad(false);
      await fetchChosenMovie(await fetchMovie()).then(() => { viewHome(); });
    } catch (e) {
      history('/notfound');
    }
  };

  React.useEffect(() => {
    fetchAll();
  }, [id]);

  return (
    <Search>
      {chosenMovie.id && <div className="search hidden"> 
        <div className="title-search shadow">
          <p>{isMovie() ? 'Filmes >' : 'Series >'}</p>
          <h2>{genre}</h2>
        </div>
        <Header />
        <EmphasisMovie props={setIdModalFNC} chosenMovie={chosenMovie} isSearchByGenre={{ isMovie: isMovie() }} />
        {modal.isSet && <ModalMovie props={setIdModalFNC} modal={modal}></ModalMovie>}
        <SectionMovieGrid props={setIdModalFNC} movies={movies} isSearchByGenre={{ isMovie: isMovie() }}></SectionMovieGrid>
        <Footer />
      </div>}
      {!closeLoad && <Loading></Loading>}
    </Search>
  );
}
