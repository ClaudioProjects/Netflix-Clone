import styled from 'styled-components';

export const HomeBox = styled.div`
  width: 100%;
  height: 100%;
  background: #141414;
`;

export const MoviesBox = styled.div`
  width: 100%;
  overflow-x: hidden;
  display: flex;
  flex-flow: column;
  justify-content: center;
  padding: 0 0.1vw 8vw 2.5vw;
  margin-top: 48vw;

  @media (max-width: 770px) {
    margin-top: 42vw;
    padding-left: 4vw;
  }
`;
