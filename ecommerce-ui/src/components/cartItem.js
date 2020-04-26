import React from 'react';
import PropTypes from 'prop-types';

const CartItem = (props) => {
  const { cartItem } = props;
  const { id, qty, title, cost } = cartItem;
  const nights = (qty > 1 ? 'nights' : 'night ');
  const total = qty * cost;

  return (
    <div className={'cart-item'}>
      <p><b>{title}</b></p>
      <p>{`${qty} ${nights} at $${cost} per night.`}</p>
      <p className={'cart-total'}>{`$${total}`}</p>
    </div>
  )
}

CartItem.propTypes = {
  cartItem: PropTypes.shape({
    id: PropTypes.number.isRequired,
    qty: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    cost: PropTypes.number.isRequired,
  }).isRequired
}

export default CartItem;
