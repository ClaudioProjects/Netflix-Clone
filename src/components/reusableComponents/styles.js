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

export const Header = styled.div``;
