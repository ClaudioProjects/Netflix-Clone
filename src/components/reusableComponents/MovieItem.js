/* eslint-disable react/jsx-no-bind */
import React from 'react';
import { LazyLoadComponent } from 'react-lazy-load-image-component';
import { MovieItemStyle } from './styles';
import { URL_IMG, genre } from '../../services/api';

export default function MovieItem(props) {
  const [imgError, setImgError] = React.useState(false);
  function getGenre(genreId) {
    // eslint-disable-next-line array-callback-return
    return genre.filter((item) => {
      if (genreId.includes(item.id)) return item.name;
    });
  }

  function openModal() {
    props.props({ 
      id: props.movie.id, 
      isSet: true, 
      isMovie: movieOrTv(),
    });
  }
  
  function movieOrTv() {
    if (props.isModal) return props.isModal.isMovie;
    if (props.isSearchByGenre) return props.isSearchByGenre.isMovie;
    return props.movie.media_type !== 'tv';
  }
  
  function retryElement() {
    setImgError(!imgError);
  }

  React.useEffect(() => {
  }, [imgError]);

  return (
    props.movie.poster_path && props.movie.backdrop_path 
      && <LazyLoadComponent><MovieItemStyle style={{ border: 'none' }} className="movie-item" onClick={openModal}>
      <img 
        src={`${URL_IMG}w400${props.movie.poster_path}`} 
        alt={props.movie.title}
        loading="lazy"
        decoding="async"
        onError={retryElement}
      ></img>
      <div className="details-movie-item">
        <div className="details-move-item-text">
          {getGenre(props.movie.genre_ids).map((genre, index) => {
            if (index > 3) return;
            return (
              <span key={genre.id}>• {genre.name}</span>
            );
          })}
        </div>
      <div className="view-more" type="button">
        Clique para mais informações
      </div>
      </div>
    </MovieItemStyle></LazyLoadComponent>
  );
}
