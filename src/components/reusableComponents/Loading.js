import React from 'react';
import styled from 'styled-components';

const Loading = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.8vw;
  background: #141414;
  z-index: 999999999;

  .ring {
    height: 5em;
    width: 5em;
    border-radius: 50%;
    animation: ring 0.6s linear infinite;
  }

  @keyframes ring {
    0% {
      transform: rotate(0deg);
      box-shadow: .1em .2em .2em #e50914;
    }

    50% {
      transform: rotate(180deg);
      box-shadow: .1em .2em .2em #e50914;
    }

    100% {
      transform: rotate(360deg);
      box-shadow: .1em .2em .2em #e50914;
    }
  }

  .ring::before {
    position: absolute;
    content: '';
    height: 100%;
    width: 100%;
    border-radius: 50%;
    box-shadow: 0 0 5px rgba(255,255,255,.3);
  }

  @media(max-width: 770px) {
    font-size: 1.5em;
  }
`;

export default function LoadingO() {
  return (
    <Loading>
      <div className="ring"></div>
    </Loading>
  );
}
