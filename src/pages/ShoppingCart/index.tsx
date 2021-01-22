import React from 'react';

import Catalog from '../../components/Catalog/index';
import Cart from '../../components/Cart/index';

// import { Container } from './styles';

const ShoppingCart: React.FC = () => {
  return <div>
    <Catalog />
    <Cart />;
  </div>
}

export default ShoppingCart;
