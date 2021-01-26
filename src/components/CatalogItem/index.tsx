import React, { useCallback } from 'react';
import { IProduct } from '../../store/modules/cart/types';
import { addProductToCartRequest } from '../../store/modules/cart/actions';
import { useDispatch, useSelector } from 'react-redux';
import { IState } from '../../store';

import { Container } from './styles';
interface CatalogItemProps {
  product: IProduct;
}

const CatalogItem: React.FC<CatalogItemProps> = ({ product }) => {
  const dispatch = useDispatch();

  const hasFailedStockCheck = useSelector<IState, boolean>(state => {
    return state.cart.failedStockCheck.includes(product.id);
  });

  const handleAddProductToCart = useCallback(() => {
    dispatch(addProductToCartRequest(product));
  }, [dispatch, product]);

  return (
    <Container >
      <section>
        <img src={product.url} alt="product" />

      </section>
      <strong>{product.title}</strong>
      <span>${product.price.toFixed(2)}</span>

      {hasFailedStockCheck
        ? <div className="outOfStock">
          <button type="button" disabled>SHOP</button>
          <span> Produto indisponível</span>
        </div>
        : <button type="button" onClick={handleAddProductToCart}>SHOP</button>
      }

    </Container >
  );
}

export default CatalogItem;
