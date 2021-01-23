import styled from 'styled-components';

export const Container = styled.div`
  width: 34.5rem;
  height: 54.5rem;

  background: linear-gradient(180deg, #F9C388 0%, rgba(247, 152, 202, 0.29) 100%), #F0D6E2;
  border-radius: 1.6rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  section {
    width: 24rem;
    height: 24rem;
    border-radius: 50%;
    background: #F797CB;
    margin-top: -5%;
    margin-bottom: 3rem;

    img {
      width: 24rem;
      height: 24rem;
      border-radius: 50%;
      object-fit: contain;
    }
  }

  strong {
    color: #fff;
    font-size: 3.6rem;
    font-weight: 700;
    text-align: center;
    line-height: 4.2rem;
    max-width: 24rem;
    margin-bottom: .5rem;
  }

  span {
    color: #fff;
    font-size: 2.4rem;
    font-weight: 700;
    text-align: center;
    max-width: 24rem;
    margin-bottom: 1.5rem;
  }

  button {
    width: 12rem;
    height: 4.8rem;
    border-radius: 8.8rem;
    border: none;

    color: #fff;
    font-size: 2.4rem;
    font-weight: 700;
    background: #FF89C4;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  }

  .outOfStock {
    color: red;
    font-size: 1.2rem;
    font-weight: 500;
    position: absolute;
  }
`;
