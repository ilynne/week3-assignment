import React from 'react';
import PropTypes from 'prop-types';
import properties from '../_data/airbnbs.json';
import PropertyList from './propertyList';

class RentalApp extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      cartItems: [],
    }
  }

  addPropertyToCart = (id) => {
    console.log('add', id);
  }

  render() {
    return (
      <div className={'main-content'}>
        <PropertyList
          properties={properties}
          addPropertyToCart={this.addPropertyToCart}
        ></PropertyList>
      </div>
    )
  }
}

export default RentalApp;
