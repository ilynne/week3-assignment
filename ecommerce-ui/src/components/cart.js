import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';


class Cart extends React.Component {
  static propTypes = {
    cartItems: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        qty: PropTypes.number.isRequired,
      })
    ).isRequired
  }

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     cartTotalItems: this.cartTotalItems(),
  //   }
  //   // this.handleAddPropertyToCart = this.handleAddPropertyToCart.bind(this);
  //   // this.handleChangeQuantity = this.handleChangeQuantity.bind(this);
  // }

  // cartTotalItems() {
  //   const total = 0;
  //   // return this.props.cartItems.map((cartItem) => { return cartItem.qty } )
  //   console.log(this.props.cartItems);
  //   // const cartTotals = this.props.cartItems.map((cartItem) => { return cartItem.qty } )
  //   // console.log(cartTotals);
  //   // return cartTotals.reduce((0, itemTotal), 0);
  //   return this.props.cartItems.map((cartItem) => { return cartItem.qty } ).reduce((acc, val) => { return acc + val }, 0);
  // }
  // handleAddPropertyToCart(e) {
  //   e.preventDefault();
  //   this.props.addPropertyToCart(this.props.id, this.state.qty);
  // }

  // handleChangeQuantity(e) {
  //   console.log(e.target.value)
  //   this.setState({ qty: Number(e.target.value) })
  // }

  render() {
    return (
      <div className={'cart-container'}>
        <div className={'cart-indicator'}>
          <FontAwesomeIcon
            icon={faShoppingCart}
            className={'cart-icon'}
          >
          </FontAwesomeIcon>
          { this.props.cartItems.length > 0
            ? <div class={'cart-items-count'}>{this.props.cartItems.length}</div>
            : null
          }
        </div>
        <p>{JSON.stringify(this.props.cartItems)}</p>
      </div>
    )
  }
}

export default Cart;
