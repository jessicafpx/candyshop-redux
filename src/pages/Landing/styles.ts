import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;

  display: flex;
  justify-content: center;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: center;

  max-width: 575px;
  margin: 0 0 0 11.4rem;

  h1 {
    font-weight: 700;
    color: #FD7C5C;
    font-size: 6.4rem;
    max-width: 30rem;
    line-height: 7.5rem;
    margin-bottom: 3.8rem;
  }

  h3 {
    color: #FD7C5C;
    font-size: 2.4rem;
    max-width: 43rem;
    margin-bottom: 6.4rem;
  }
`;

export const Button = styled.button`
  width: 100%;
  height: 6.8rem;
  background: linear-gradient(90deg, #F8BE61 -6.73%, #F78A6C 100%);
  border: 0;
  border-radius: 8.8rem;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.15));
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  transition: background-color 0.2s;

  &:hover {
    background: linear-gradient(90deg, #F3AF42 -6.73%, #FB8261 100%);
  }

  a {
    color: #fff;
    text-decoration: none;
    font-size: 2.4rem;
    font-weight: 700;
    line-height: 6.8rem;
    width: 29.29.rem;
  }
`;

export const Background = styled.div`
  flex: 1;
  align-items: center;
  justify-content: center;
  display: flex;

  #background {
    position: relative;
    right: 0;
    width: 100%;
    height: 100vh;
    margin: 0;
  }

  #donut {
    position: absolute;
    top: 24rem;
    width: 80rem;
  }

`;
