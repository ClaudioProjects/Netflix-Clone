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
    padding-top: 4vh;
    margin-bottom: 3vh;
    font-size: 3.5vw;

    .header-logo {
      height: 8vw;
      min-height: 40px;
    }

    .header-items {
      width: 24vw;
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
