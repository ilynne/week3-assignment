import React from 'react';
import PropTypes from 'prop-types';

class Cart extends React.Component {
  static propTypes = {
    cartItems: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        qty: PropTypes.number.isRequired,
      })
    ).isRequired
  }

  constructor(props) {
    super(props);
    this.state = {
      qty: 1,
    }
    // this.handleAddPropertyToCart = this.handleAddPropertyToCart.bind(this);
    // this.handleChangeQuantity = this.handleChangeQuantity.bind(this);
  }

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
        {JSON.stringify(this.props.cartItems)}
      </div>
    )
  }
}

export default Cart;
