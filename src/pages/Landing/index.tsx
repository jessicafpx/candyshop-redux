import React from 'react';
import { Link } from 'react-router-dom';

import Donut from '../../assets/donut.png';

import { Container, Content, Background } from './styles';

const Landing: React.FC = () => {
  return (
    <Container>
      <Content>
        <h1>Candy your day</h1>
        <h3>Pie brownie chocolate candy ice cream cotton candy. Icing cream gummies chocolate sugar. Dessert wafer pudding bears.</h3>
        <Link to="/shoppingcart">
          Find your dessert
        </Link>
      </Content>
      <Background>
        <img src={Donut} alt="Donut" id="donut"></img>
      </Background>
    </Container>
  );
};

export default Landing;
