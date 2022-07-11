import React from 'react';
import styled from 'styled-components';

const Load = styled.div`
  height: 100%;
  position: fixed;
  top: 0;
  border: 0;
  right: 0;
  left: 0;
  z-index: 100;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    height: 20%;
  }

  @media(max-width: 770) {
    img {
      height: 80%
    }
  }

`;

export default function Loading() {
  return (
    <Load className="loading">
      <img src="https://media.filmelier.com/noticias/br/2020/03/Netflix_LoadTime.gif" alt="loading netflix"></img>
    </Load>
  );
}
