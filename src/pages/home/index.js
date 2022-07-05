import React from 'react';
import { HomeBox, MoviesBox } from './styles';
import Header from '../../components/reusableComponents/Header';
import EmphasisMovie from '../../components/home/EmphasisMovie';
import SectionMovie from '../../components/home/SectionMovie';
import categories from '../../services/api/index';
import FooterHome from '../../components/reusableComponents/Footer';

function Home() {
  return (
    <HomeBox className="home-box">
      <Header isHome></Header>
      <EmphasisMovie category={categories}></EmphasisMovie>
      <MoviesBox className="movies-box">
        {
        categories.map((category) => {
          return (
            <SectionMovie
              key={category.name} 
              title={category.title} 
              path={category.path} 
            >
            </SectionMovie>
          );
        })
        }
      </MoviesBox>
      <FooterHome></FooterHome>
    </HomeBox>
  );
}

export default Home;
