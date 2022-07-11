/* eslint-disable no-unused-vars */
import React from 'react';
import { logDOM } from '@testing-library/react';
import categories, { getMovies, getChosenMovie } from '../../services/api';
import { HomeBox, MoviesBox } from './styles';
import Loading from '../../components/reusableComponents/Loading';
import Header from '../../components/reusableComponents/Header';
import EmphasisMovie from '../../components/home/EmphasisMovie';
import SectionMovie from '../../components/home/SectionMovie';
import FooterHome from '../../components/reusableComponents/Footer';

function Home() {
  const [colectionMovies, setColectionMovies] = React.useState([]);
  const [chosenMovie, setChosenMovie] = React.useState({});

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
        <EmphasisMovie chosenMovie={chosenMovie}></EmphasisMovie>
        <MoviesBox className="movies-box">
          {
          colectionMovies.map((item) => {
            return (
              <SectionMovie
                key={item.name} 
                title={item.title} 
                path={item.path}
                colectionMovies={item.api}
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
