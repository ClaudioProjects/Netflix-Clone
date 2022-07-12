/* eslint-disable react/jsx-no-bind */
/* eslint-disable no-unused-vars */
import React from 'react';
import categories, { getMovies, getChosenMovie } from '../../services/api';
import { HomeBox, MoviesBox } from './styles';
import Loading from '../../components/reusableComponents/Loading';
import Header from '../../components/reusableComponents/Header';
import EmphasisMovie from '../../components/home/EmphasisMovie';
import SectionMovie from '../../components/home/SectionMovie';
import FooterHome from '../../components/reusableComponents/Footer';
import ModalMovie from '../../components/reusableComponents/ModalMovie';

function Home() {
  const [colectionMovies, setColectionMovies] = React.useState([]);
  const [chosenMovie, setChosenMovie] = React.useState({});
  const [modal, setModal] = React.useState({});

  function setIdModalFNC(Param) {
    setModal(Param);
  } 

  const loadAll = () => {
    if (colectionMovies.length === categories.length && Object.values(chosenMovie).length > 0) return true;
    return false;
  };

  const fetchAll = async () => {
    try {
      await fetchChosenMovie(await fetchMovies());
    } catch (e) {
      console.log(e);
    }
  };
  
  const fetchMovies = async () => {
    const referenceArray = await Promise.all(categories.map(async (category) => {
      const model = { name: category.name, title: category.title, path: category.path };
      const data = await getMovies(category.path);
      model.api = data.results;
      return model;
    }));
    setColectionMovies(referenceArray);
    return referenceArray;
  };
  
  const fetchChosenMovie = async (dataAPI) => {
    const infoMovie = selectChosenMovie(dataAPI);
    const data = await getChosenMovie(infoMovie.id, infoMovie.isMovie);
    setChosenMovie(data);
  };
  
  function selectChosenMovie(referenceArray) {
    const indexColection = Math.floor(Math.random() * referenceArray.length);
    const indexMovie = Math.floor(Math.random() * referenceArray[indexColection].api.length);
    const dataMovie = { 
      id: referenceArray[indexColection].api[indexMovie].id, 
      isMovie: isMovie(referenceArray[indexColection].api[indexMovie].media_type), 
    };
    return dataMovie;
  }

  function isMovie(type) {
    if (type) if (type.toLowerCase() === 'tv') return false;
    return true;
  }
  
  React.useEffect(() => {
    fetchAll();
  }, [categories]);

  return (
    loadAll() 
      ? (
      <HomeBox className="home-box">
        <Header isHome></Header>
        {modal.isSet && <ModalMovie props={setIdModalFNC} modal={modal}></ModalMovie>}
        <EmphasisMovie props={setIdModalFNC} chosenMovie={chosenMovie}></EmphasisMovie>
        <MoviesBox className="movies-box">
          {
          colectionMovies.map((item) => {
            return (
              <SectionMovie
                props={setIdModalFNC}
                key={item.name} 
                item={item}
              >
              </SectionMovie>
            );
          })
          }
        </MoviesBox>
        <FooterHome></FooterHome>
      </HomeBox>
      )
      : (
      <Loading></Loading>
      )
  );
}

export default Home;
