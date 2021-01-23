import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 90vh;
  max-width: 1280px;
  margin: 0 auto;
  padding: 4rem 0;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: left;
  margin-left: -7.5rem ;

  svg{
    margin-right: 3.6rem;
  }

  h3 {
    color: #FD7C5C;
    font-size: 3.6rem;
    font-weight: 700;
  }
`;

export const Content = styled.main`
  display: flex;
  grid-template-columns: repeat(3, 1fr);
  gap: 12rem;

  overflow-x: hidden;
  margin-top: 3.6rem;
`;
