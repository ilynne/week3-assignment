import React from 'react';
import PropTypes from 'prop-types';

const CartItemsList = (props) => {

  return (
    <div className={'cart-items-list'}>
      {props.cartItems.map((cartItem) =>
        <p>{JSON.stringify(cartItem)}</p>
      )}
    </div>
  )
}

CartItemsList.propTypes = {
  cartItems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      qty: PropTypes.number.isRequired,
    })
  ).isRequired
}

export default CartItemsList;
