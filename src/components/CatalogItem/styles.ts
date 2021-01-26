import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  width: 30rem;
  height: 47rem;

  background: linear-gradient(180deg, #F9C388 0%, rgba(247, 152, 202, 0.29) 100%), #F0D6E2;
  border-radius: 1.6rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  section {
    width: 22rem;
    height: 22rem;
    border-radius: 50%;
    background: #F797CB;

    margin-bottom: 2rem;

    img {
      width: 22rem;
      height: 22rem;
      border-radius: 50%;
      object-fit: cover;
    }
  }

  strong {
    color: #fff;
    font-size: 2.4rem;
    font-weight: 700;
    text-align: center;
    line-height: 3.3rem;
    max-width: 18rem;
    margin-bottom: 1rem;
  }

  span {
    color: #fff;
    font-size: 2rem;
    font-weight: 700;
    text-align: center;
    max-width: 22rem;
    margin-bottom: 2.8rem;
  }

  button {
    width: 12rem;
    height: 4.8rem;
    border-radius: 8.8rem;
    border: none;

    color: #fff;
    font-size: 2rem;
    font-weight: 700;
    background: #FF89C4;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);

    transition: background-color 0.2s;

    &:hover {
      background: ${shade(0.2, '#FF89C4')};
    }
  }

  .outOfStock {
    color: red;
    font-size: 1.2rem;
    font-weight: 500;
    position: absolute;
  }
`;
