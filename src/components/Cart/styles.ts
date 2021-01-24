import styled from 'styled-components';

export const Container = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;

  position: fixed;
  bottom: 0;
  width: 100vw;
  height: 6rem;
  padding: 0 11.5rem;

  background: linear-gradient(90deg, #F9C585 0%, #F797CB 100%);

  color: #fff;
  font-size: 2rem;
  font-weight: 700;
`;

export const TotalItens = styled.div`
  display: flex;
  align-items: center;

  svg {
    margin-right: 2.4rem;
  }
`;
