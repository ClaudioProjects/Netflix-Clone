import React from 'react';
import { Link } from 'react-router-dom';
import { Header } from './styles';
import SearchContent from './singleComponents/SearchContent';
import Genres from './singleComponents/Genres';

export default function HeaderHome(isHome) {
  const [blackHeader, setBlackHeader] = React.useState(false);

  React.useEffect(() => {
    const scrollListener = () => {
      if (window.screenY > 10) {
        setBlackHeader(true);
      } else {
        setBlackHeader(false);
      }
    };

    window.addEventListener('scroll', scrollListener);

    return () => {
      window.removeEventListener('scroll', scrollListener);
    };
  });

  return (
    <Header className={!blackHeader ? 'black' : ''}>
      <div style={{ display: 'flex' }}>
        <img className="header-logo" src="./images/logo.png" alt="Logo Netflix"></img>
        <div className="header-items">
          <Link
            style={
              isHome ? { pointerEvents: 'none' } : {}
            }
            to={'/home'}>inicio</Link>
          <Genres></Genres>
        </div>
      </div>
      <SearchContent></SearchContent>
    </Header>
  );
}
