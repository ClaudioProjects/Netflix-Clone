/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaSistrix } from 'react-icons/fa';

export default function SearchContent() {
  const history = useNavigate();
  const [searchMovie, setSearchMovie] = React.useState('');

  function setInput(e) {
    setSearchMovie(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    history(`/search?${searchMovie}`);
  }

  function handleFocus(e) {
    const input = e.target;
    if (input.classList.contains('hidden')) {
      document.querySelector('.search-icon').classList.toggle('hidden');
      input.classList.toggle('hidden');
      input.focus();
    }
  }

  function handleBlur(e) {
    const input = e.target;
    input.classList.toggle('hidden');
    document.querySelector('.search-icon').classList.toggle('hidden');
  }
 
  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
      <label className="btn-search">
        <input 
          className="hidden input-search" 
          type="text"
          value={searchMovie} 
          onChange={setInput}
          onClick={handleFocus} 
          onBlur={handleBlur}
          spellCheck="false"
          autoCorrect="off"
          placeholder="Filmes e series"
        ></input>
        <FaSistrix className="search-icon"></FaSistrix>
      </label>
      <img className="user-img" src="./images/user.png" alt="User images"></img>
    </form>
  );
}
