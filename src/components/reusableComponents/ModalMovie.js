/* eslint-disable no-unused-vars */
import React from 'react';
import {
  FaTimes, FaPlay, FaPlus, FaRegThumbsUp, FaHorse, 
} from 'react-icons/fa';
import { getChosenMovie, URL_IMG } from '../../services/api'; 
import { Modal } from './styles';

export default function ModalMovie(props) {
  const [movie, setMovie] = React.useState({});
  if (props.modal.isSet) document.querySelector('body').classList.add('hidden-overflow');
  
  function toggleOverflowBody() {
    document.querySelector('body').classList.toggle('hidden-overflow');
  }
  const fetchMovie = async () => {
    const data = await getChosenMovie(props.modal.id, props.modal.isMovie);
    setMovie(data);
  };

  function closeModal() {
    toggleOverflowBody();
    props.props({});
  }

  function premiereDate() {
    const data = movie.release_date 
      ? movie.release_date.split('-')
      : movie.first_air_date.split('-');
    return data[0];
  }

  function toSeasons() {
    const string = movie.seasons.length === 1 ? 'Temporada' : 'Temporadas';
    return `${movie.seasons.length} ${string}`;
  }

  function toRuntime() {
    const hour = Math.floor(movie.runtime / 60);
    const min = movie.runtime % 60;
    return `${hour}h ${min}min`;
  }

  React.useEffect(() => {
    try {
      fetchMovie();
    } catch (e) {
      console.log(e);
    }
  }, []);

  return (
    <Modal>
      {movie.id 
        && <div className="modal-content shadow">
          {console.log(movie)}
          <button className="closeModal" onClick={closeModal}><FaTimes></FaTimes></button>
          <div className="content-title-img">
            <img src={`${URL_IMG}/w1280${movie.backdrop_path}`} alt="title"></img>
            <div className="title">
              <h2>{props.modal.isMovie ? movie.title : movie.name}</h2>
              <div className="btn-box">
                <div className="view shadow"><FaPlay></FaPlay>Assistir</div>
                <div className="addList"><FaPlus></FaPlus></div>
                <div className="Like"><FaRegThumbsUp /></div>
              </div>
            </div>
          </div>
          <div className="modal-details">
            <div className="overview-modal">
              <div className="header-overview-modal">
                <span className="average">{movie.vote_average * 10}% Relevante</span>
                <span>{premiereDate()}</span>
                <span>{props.modal.isMovie ? toRuntime() : toSeasons()}</span>
              </div>
              <div>
                {movie.overview}
              </div>
            </div>
            <div className="other-details-modal">
              <div>
                <span className="identifiquer">Generos: </span>
                {movie.genres.map((genre) => {
                  return (
                    <span key={genre.id} className="items-modal">{genre.name}</span>
                  );
                })}
              </div>
              <div>
                {movie.production_companies.length > 0 && <span className="identifiquer">Feito por: </span>}
                {movie.production_companies.map((company) => {
                  return (
                    <span key={company.id} className="items-modal">{company.name}</span>
                  );
                })}
              </div>
            </div>
          </div>
        </div>}
    </Modal>
  );
}
