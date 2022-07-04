import React from 'react';
import { URL_IMG, genre } from '../../services/api';

export default function MovieItem(movie) {
  function getGenre(genreId) {
    // eslint-disable-next-line array-callback-return
    return genre.filter((item) => {
      if (genreId.includes(item.id)) return item.name;
    });
  }
  
  return (
    <div className="movie-item">
      <img src={URL_IMG + movie.movie.poster_path} alt={movie.movie.title}></img>
      <div className="details-movie-item">
        <div className="details-move-item-text">
          {getGenre(movie.movie.genre_ids).map((genre, index) => {
            if (index > 3) return;
            return (
              <span key={genre.id}>• {genre.name}</span>
            );
          })}
        </div>
      <button className="view-more" type="button">
        Clique para mais informações
      </button>
      </div>
    </div>
  );
}
