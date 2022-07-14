import React from 'react';
// eslint-disable-next-line no-unused-vars
import { Link } from 'react-router-dom';
import { Header } from './styles';
import SearchContent from './singleComponents/SearchContent';
import Genres from './singleComponents/Genres';

export default function HeaderHome() {
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
        <Link to={'/'}>
          <img className="header-logo" src="/images/logo.png" alt="Logo Netflix"></img>
        </Link>
        <div className="header-items">
          <Genres></Genres>
        </div>
      </div>
      <SearchContent></SearchContent>
    </Header>
  );
}
