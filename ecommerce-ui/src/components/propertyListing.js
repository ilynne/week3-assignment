import React from 'react';
import PropTypes from 'prop-types';
import PolaroidPhoto from './polaroidPhoto';

const PropertyListing = (props) => {
  const { property } = props;
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
        <p>{JSON.stringify(payment)}</p>
        <p>{JSON.stringify(host)}</p>
        <p>{JSON.stringify(rating)}</p>
      </div>
    </div>
  )
}

PropertyListing.propTypes = {
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
