import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { IProduct } from '../../store/modules/cart/types';
import CatalogItem from '../../components/CatalogItem';
import Cart from '../../components/Cart/index';

import api from '../../services/api';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { FiArrowLeft } from 'react-icons/fi';

import { Header, Content } from './styles';


const ShoppingCart: React.FC = () => {
  const [catalog, setCatalog] = useState<IProduct[]>([]);

  let settings = {
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    centerPadding: "10px",
    centerMode: true,
    initialSlide: 4,

    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 5,
          centerMode: true,
        }
      }
    ]
  }

  useEffect(() => {
    api.get('products').then(response => {
      setCatalog(response.data);
    })
  }, []);

  return (
    <>
      <Header>
        <Link to="/">
          <FiArrowLeft size={32} color="#FD7C5C" />
        </Link>
        <h3>Shopping cart</h3>
      </Header>

      <Content>
        <Slider {...settings}>
          {catalog.map(product => (
            <CatalogItem key={product.id} product={product} />
          ))}
        </Slider>
      </Content>

      <Cart />
    </>
  );

}

export default ShoppingCart;
