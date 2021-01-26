import styled from 'styled-components';
import BackgroundImg from '../../assets/vector-background.png';

export const Container = styled.div`
  height: 100vh;

  display: flex;
  justify-content: center;

  background: url(${BackgroundImg}) no-repeat;
  background-position: right;
  object-fit: cover;

  @media (max-width: 1100px) {
    background: none;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: center;

  max-width: 575px;
  margin: 0 0 0 11.4rem;

  @media (max-width: 1100px) {
    margin: 0;
  }

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

  a {
    display: flex;
    align-items: center;
    justify-content: center;

    height: 6.8rem;
    border-radius: 8.8rem;

    background: linear-gradient(90deg, #F8BE61 -6.73%, #F78A6C 100%);
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.15));

    color: #fff;
    text-decoration: none;
    font-size: 2.4rem;
    font-weight: 700;

    transition: background-color 0.2s;
    cursor: pointer;

    &:hover {
      background: linear-gradient(90deg, #F3AF42 -6.73%, #FB8261 100%);
    }
  }
`;

export const Background = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;

  #donut {
    position: absolute;
    bottom: 8.8rem;
    width: 64rem;
  }

  @media (max-width: 1240px) {
    #donut {
      width: 55rem;
      bottom: 22rem;
    }
  }

  @media (max-width: 1100px) {
    display: none;
  }
`;
