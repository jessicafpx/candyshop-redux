import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { IState } from '../../store';
import { ICartItem } from '../../store/modules/cart/types';

import { RiShoppingCart2Line } from 'react-icons/ri';

import { Container, TotalItens } from './styles';

const Cart: React.FC = () => {
  const cart = useSelector<IState, ICartItem[]>(state => state.cart.items);

  const cartTotal = useMemo(() => {
    const total = cart.reduce((accumulator, item) => {
      const productsSubtotal = item.product.price * item.quantity;

      return accumulator + productsSubtotal;
    }, 0);

    return total;
  }, [cart]);

  const totalItensInCart = useMemo(() => {
    const total = cart.reduce((accumulator, item) => {
      const productsQuantity = item.quantity;

      return accumulator + productsQuantity;
    }, 0);

    return total;
  }, [cart]);

  return (
    <Container>
      <section>
        <TotalItens>
          <RiShoppingCart2Line size={36} color="#fff" />
          <h4>{totalItensInCart} itens no carrinho</h4>
        </TotalItens>
        <h4>R$ {cartTotal.toFixed(2)}</h4>
      </section>
    </Container >
  );
}

export default Cart;
