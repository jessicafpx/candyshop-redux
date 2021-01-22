import styled from 'styled-components';

export const Container = styled.footer`
  position: fixed;
  bottom: 0;
  width: 100vw;
  height: 8rem;
  background: linear-gradient(90deg, #F9C585 0%, #F797CB 100%);

  color: #fff;
  font-size: 2.4rem;
  font-weight: 700;

  section {
    max-width: 1280px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
  }
`;

export const TotalItens = styled.div`
  display: flex;
  align-items: center;

  svg {
    margin-right: 2.4rem;
  }
`;
