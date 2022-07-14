import styled from 'styled-components';

export const ErrorPage = styled.div`
  height: 100vh;
  background: #141414;

  .header-items{
    display: none;
  }

  .header-search {
    display: none;
  }

  .message {
    color: #FFFFFF;
    position: absolute;
    top: 50%;
    right: 50%;
    transform: translate(50%, -50%);
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .message h2 {
    font-size: 4vw;
    margin-bottom: 1vw;
  }

  .message p {
    font-size: 1.5vw;
    padding: 0 6vw;
  }

  .message a {
    text-decoration: none;
    color: #141414;
    height: 3vw;
    width: 15vw;
    background: #FFFFFF;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 0.2vw;
    margin-top: 1vw;
    font-size: 1.2vw;
  }

  @media(max-width: 770px) {
    .message h2 {
      font-size: 7vw;
      margin-bottom: 3vw;
      width: 100vw;
    }

    .message p {
      font-size: 3.5vw;
      padding: 0 13vw;
    }

    .message a {
      height: 8vw;
      width: 30vw;
      font-size: 2.6vw;
      margin-top: 3vw;
    }
  }
`;
