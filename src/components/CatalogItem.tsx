import React, { useCallback } from 'react';
import { IProduct } from '../store/modules/cart/types';
import { addProductToCart } from '../store/modules/cart/actions';
import { useDispatch } from 'react-redux';

interface CatalogItemProps {
  product: IProduct;
}

const CatalogItem: React.FC<CatalogItemProps> = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddProductToCart = useCallback(() => {
    dispatch(addProductToCart(product));
  }, [dispatch, product]);

  return (
    <article >
      <strong>{product.title}</strong> {" - "}
      <span>{product.price}</span> {" "}

      <button
        type="button"
        onClick={handleAddProductToCart}
      >Comprar</button>
    </article>
  );
}

export default CatalogItem;
