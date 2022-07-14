/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { FaSistrix } from 'react-icons/fa';

const Form = styled.form`
  display: flex;
  align-items: center;
  height: 100%;

`;

export default function SearchContent() {
  const history = useNavigate();
  const [searchMovie, setSearchMovie] = React.useState('');

  function setInput(e) {
    setSearchMovie(e.target.value);
  }

  function formatSearchMovie() {
    const path = searchMovie.trim().split(' ');
    return path.join('$');
  }

  function handleSubmit(e) {
    e.preventDefault();
    history(`/search/${formatSearchMovie()}`);
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
    <Form className="header-search" onSubmit={handleSubmit}>
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
          maxLength={40}
        ></input>
        <FaSistrix className="search-icon"></FaSistrix>
      </label>
      <img className="user-img" src="/images/user.png" alt="User images"></img>
    </Form>
  );
}
