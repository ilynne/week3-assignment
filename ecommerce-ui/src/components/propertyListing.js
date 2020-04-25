import React from 'react';
import PropTypes from 'prop-types';
import PolaroidPhoto from './polaroidPhoto';
import Payment from './payment';
import Host from './host';

const PropertyListing = (props) => {
  const { id, property, addPropertyToCart } = props;
  const { title, houseType, image, location, payment, host, rating } = property;

  return (
    <div className={'property-listing-container'}>
      <PolaroidPhoto
        image={image}
        location={location}
      >
      </PolaroidPhoto>
      <div className='details-container'>
        <h2>{title}</h2>
        <p>{houseType}</p>
        <Payment payment={payment}></Payment>
        <Host host={host}></Host>
        <p>{JSON.stringify(rating)}</p>
        <button onClick={addPropertyToCart}>Add to cart</button>
      </div>
    </div>
  )
}

PropertyListing.propTypes = {
  id: PropTypes.number.isRequired,
  addPropertyToCart: PropTypes.func.isRequired,
  property: PropTypes.shape({
    title: PropTypes.string.isRequired,
    houseType: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    location: PropTypes.shape({
      city: PropTypes.string.isRequired,
      country: PropTypes.string.isRequired,
    }).isRequired,
    payment: PropTypes.shape({
      cost: PropTypes.number.isRequired,
      description: PropTypes.string,
    }).isRequired,
    host: PropTypes.shape({
      name: PropTypes.string.isRequired,
      isSuperhost: PropTypes.bool.isRequired,
    }).isRequired,
    rating: PropTypes.shape({
      stars: PropTypes.number.isRequired,
      reviews: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
}

export default PropertyListing;
