import styled from 'styled-components';

export const Footer = styled.footer`
  padding-left: 14vw;
  background: #141414;

  .social-media-icons{
    width: 12vw;
  }

  .social-media-icons>* {
    font-size: 2vw;
  }

  .list-col {
    display: flex;
    justify-content: space-between;
    color: #797e72;
    width: 80%;
    padding-top: 4vh;
    padding-bottom: 3vh;
  }

  .list-item {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 6vw;
    font-size: 1vw;
  }

  .list-item p:hover {
    text-decoration: underline;
    cursor: pointer;
  }

  .final-considerations {
    color: #797e72;
    padding-bottom: 3vw;
    font-size: 1.2vw;
  }

  @media(max-width: 770px) {
    padding-left: 5vw;

    .list-col {
      width: 99%;
    }

    .list-item {
      font-size: 1.8vw;
      height: 10vw;
    }

    .final-considerations {
      font-size: 1.9vw;
    }
  }
`;

export const Header = styled.div`
  width: 100%;
  height: 5vw;
  padding: 0 2.5vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.1vw;
  position: fixed;
  top: 0;
  z-index: 30;
  transition: 200ms ease-in-out;

  .header-logo {
    height: 3.2vw;
  }

  .header-items {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 8.5vw;
    margin-left: 2vw;

    * {
      text-decoration: none;
      color: white;
      text-transform: capitalize;
    }
  }

  .btn-search {
    background: transparent;
    border: 0;
    cursor: pointer;
    margin-right: 3vw;
  }

  .search-icon {
    color: white;
    font-size: 1.6vw;
  }

  .user-img {
    height: 2.5vw;
    border-radius: .2vw;
  }

  .input-search {
    outline: 0;
    font-size: 1.3vw;
    background: transparent;
    border: 0;
    border-bottom: 0.1vw solid white;
    color: white;
    padding-bottom: 0.3vw;
    padding-left: 0.3vw;
  }

  @media(max-width: 770px) {
    margin-bottom: 3vh;
    font-size: 3.5vw;
    height: 10vw;

    .header-logo {
      height: 8vw;
      min-height: 40px;
    }

    .header-items {
      width: 25vw;
    }

    .search-icon {
      font-size: 4vw;
    }

    .user-img {
      height: 4.5vw;
    }

    .input-search {
      width: 27vw;
      font-size: 2.6vw;
    }
  }
`;

export const Modal = styled.div`
  position: fixed;
  background-color: rgba(0,0,0,0.7);
  height: 100vh;
  width: 100vw;
  z-index: 300;
  top: 0;
  overflow-y: auto;

  * {
    font-size: 1vw;
  }
  
  .modal-content {
    overflow-y: auto;
    height: 90vw;
    width: 60vw;
    background: #141414;
    position: absolute;
    top: 10vw;
    right: 50%;
    transform: translateX(50%);
    border-radius: .5vw;
  }

  .closeModal {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    right: .5vw;
    top: .5vw;
    background: #141414;
    border: 0;
    padding: 0.4vw;
    border-radius: 50%;
    color: #fff;
    cursor: pointer;
    z-index: 20;
  }

  .closeModal svg {
    height: 2em;
    width: 2em;
  }

  .content-title-img {
    position: relative;
  }

  .content-title-img img {
    width: 100%;
  }

  .title {
    position: absolute;
    padding: 0 1vw 2vw 3vw;
    bottom: 0;
    color: #FFF;
    width: 100%;
    background: rgb(0,0,0,0);
    background: linear-gradient(180deg, #1414140a 0%, #14141496 40%, #141414c4 80%, #141414 100%);
  }

  .title h2 {
    margin-bottom: 1vw;
    font-size: 2.5em;
  }

  .btn-box {
    display: flex;
    width: 25%;
    justify-content: space-between;
    align-items: center;
  }

  .btn-box div {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }

  .view {
    background: #FFF;
    color: #141414;
    font-size: 1em;
    height: 2.3em;
    padding: 0 1.4vw;
    border-radius: .2vw;
  }

  .addList, .Like {
    background: #141414;
    width: 2em;
    height: 2em;
    border-radius: 50%;
    border: 0.08vw solid #fff;
    font-size: 1em;
  }

  .modal-details {
    padding: 0.5vw;
    display: flex;
    justify-content: space-around;
    align-items: center;
    color: #d3d3d3;
  }

  .overview-modal {
    width: 50%;
  }

  .header-overview-modal {
    width: 70%;
    display: flex;
    justify-content: space-around;
    font-size: 1em;
    margin-bottom: 2vw;
  }

  .average {
    color: #43c563;
  }

  .other-details-modal {
    width: 35%;
    display: flex;
    flex-flow: column wrap;
    justify-content: space-between;
    gap: 2vw;
  }

  .identifiquer {
    color: #3d3d3d;
  }

  @media(max-width: 770px) {
    *{
      font-size: 2.5vw;
    }

    .modal-content {
      width: 100%;
      top: 0;
    }

    .btn-box {
      width: 30%;
    }

    .modal-details {
      display: block;
    }

    .modal-details>* {
      font-size: 54vw;
    }

    .header-overview-modal {
      width: 100%;
    }

    .overview-modal {
      width: 97%;
      margin: 0 auto;
    }

    .other-details-modal {
      width: 97%;
      padding-left: 2vw;
      padding: 2vw;
    }
  }
`;
