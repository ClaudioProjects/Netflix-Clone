/* eslint-disable react/jsx-no-bind */
import React from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { searchByQuery } from '../../services/api';
import Loading from '../../components/reusableComponents/Loading';
import Header from '../../components/reusableComponents/Header';
import ModalMovie from '../../components/reusableComponents/ModalMovie';
import SectionMovieGrid from '../../components/reusableComponents/SectionMovieGrid';
import FooterHome from '../../components/reusableComponents/Footer';

const SearchQuery = styled.div`
  min-height: 100vh;
  background: #131313;

  .movie-grid-search-query {
    color: white;
  }

  .title-query {
    font-size: 2.8vw;
    color: #fff;
    padding: 12vh 3vw 0;
  }

  .fail-search {
    position: static;
    padding: 10vh 3vw;
    height: 65vh;
  }

  @media(max-width: 770px) {
    .title-query {
      font-size: 6vw;
    }
  }

  .query-section {
    padding: 3vh 3vw;
  }
`;

export default function index() {
  const { query } = useParams();
  const [movies, setMovies] = React.useState([]);
  const [modal, setModal] = React.useState({});
  const [closeLoad, setCloseLoad] = React.useState(Boolean);

  const viewPage = (className, time) => {
    setTimeout(() => {
      document.querySelector(className).classList.remove('hidden');
      setCloseLoad(true);
    }, time);
  };

  function setIdModalFNC(Param) {
    setModal(Param);
  } 

  const formatQuery = () => {
    return query.split('$');
  };

  function returnTitle() {
    const arr = formatQuery();
    const string = arr.join(' ');
    return string;
  }

  const fetchMovies = async () => {
    const data = await searchByQuery(formatQuery(), 1);
    setMovies(data);
  };

  React.useEffect(() => {
    setCloseLoad(false);
    fetchMovies().then(() => { viewPage('.search-query', 500); });
  }, [query]);

  return (
    <SearchQuery>
      {movies.results && <div className="search-query hidden">
        <Header />
        {movies.results.length !== 0 
          ? (<div>
            <h2 className="title-query">Resultados de {returnTitle()}</h2>
            {modal.isSet && <ModalMovie props={setIdModalFNC} modal={modal}></ModalMovie>}
            <SectionMovieGrid props={setIdModalFNC} movies={movies.results} isSearchByQuery></SectionMovieGrid>
          </div>)
          : (<div>
            <h2 className="title-query fail-search">Não encontramos nenhum resultado de {returnTitle()}</h2>
          </div>)}
        <FooterHome />
      </div>}
      {!closeLoad && <Loading></Loading>}
    </SearchQuery>
  );
}
