import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';


import Cart from '../../components/Cart/index';

import { Container, Header, Content } from './styles';

import api from '../../services/api';

import { IProduct } from '../../store/modules/cart/types';
import CatalogItem from '../../components/CatalogItem';

import { FiArrowLeft } from 'react-icons/fi';

const ShoppingCart: React.FC = () => {
  const [catalog, setCatalog] = useState<IProduct[]>([]);

  useEffect(() => {
    api.get('products').then(response => {
      setCatalog(response.data);
    })
  }, []);

  return <div>
    <Container>
      <Header>
        <Link to="/">
          <FiArrowLeft size={36} color="#FD7C5C" />
        </Link>
        <h3>Shopping cart</h3>
      </Header>

      <Content>
        {catalog.map(product => (
          <CatalogItem key={product.id} product={product} />
        ))}
      </Content>

    </Container>
    <Cart />;
  </div>
}

export default ShoppingCart;
