import React from 'react';

import Catalog from '../../components/Catalog';
import Cart from '../../components/Cart';

// import { Container } from './styles';

const ShoppingCart: React.FC = () => {
  return <div>
    <Catalog />
    <Cart />;
  </div>
}

export default ShoppingCart;
