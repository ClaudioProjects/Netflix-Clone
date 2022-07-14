/* eslint-disable react/jsx-no-bind */
/* eslint-disable no-unused-vars */
import React from 'react';
import categories, { getMovies, getChosenMovie } from '../../services/api';
import { HomeBox, MoviesBox } from './styles';
import Loading from '../../components/reusableComponents/Loading';
import Header from '../../components/reusableComponents/Header';
import EmphasisMovie from '../../components/reusableComponents/EmphasisMovie';
import SectionMovie from '../../components/home/SectionMovie';
import FooterHome from '../../components/reusableComponents/Footer';
import ModalMovie from '../../components/reusableComponents/ModalMovie';

function Home() {
  const [colectionMovies, setColectionMovies] = React.useState([]);
  const [chosenMovie, setChosenMovie] = React.useState({});
  const [modal, setModal] = React.useState({});
  const [closeLoad, setCloseLoad] = React.useState(Boolean);

  function setIdModalFNC(Param) {
    setModal(Param);
  } 

  const viewPage = (className, duration) => {
    setTimeout(() => {
      document.querySelector(className).classList.remove('hidden');
      setCloseLoad(true);
    }, duration);
  };

  const fetchAll = async () => {
    try {
      await fetchChosenMovie(await fetchMovies()).then(() => { viewPage('.home-page', 1500); });
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
      <HomeBox className="home-box">
        {colectionMovies.length === categories.length && Object.values(chosenMovie).length > 0 && <div className="home-page hidden">
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
        </div>}
        {!closeLoad && <Loading></Loading>}
      </HomeBox>
  );
}

export default Home;
