import React from 'react';
import PropTypes from 'prop-types';
import properties from '../_data/airbnbs.json';
import PropertyList from './propertyList';

class RentalApp extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      cartItems: [{
        id: 1,
        qty: 2,
      }],
    }
  }

  addPropertyToCart = (id, qty) => {
    const existingCartItem = this.state.cartItems.find((cartItem) => { return cartItem.id === id })
    if (existingCartItem) {
      this.updateCartItemQuantity(id, qty);
    } else {
      this.addCartItem(id, qty);
    }
  }

  updateCartItemQuantity = (id, qty) => {
    const newCartItems = this.state.cartItems.map((cartItem) => {
      if (cartItem.id === id) {
        return {
          ...cartItem,
          qty: cartItem.qty + qty,
        }
      } else {
        return {
          ...cartItem
        }
      }
    });
    this.setState({ cartItems: [...newCartItems] });
  }

  addCartItem = (id, qty) => {
    const cartItem = { id: id, qty: qty }
    this.setState({ cartItems: [...this.state.cartItems, cartItem] } );
  }

  render() {
    return (
      <div className={'main-content'}>
        <PropertyList
          properties={properties}
          addPropertyToCart={this.addPropertyToCart}
        >
        </PropertyList>
      </div>
    )
  }
}

export default RentalApp;
