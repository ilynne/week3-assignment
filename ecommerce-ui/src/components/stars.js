import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';
import StarHalf from './starHalf';

const Stars = (props) => {
  const { id, stars } = props

  const starIcons = () => {
    let iconArray = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= stars) {
        iconArray.push(<FontAwesomeIcon
          icon={faStar}
          key={`star-${id}-${i}`}
        >
        </FontAwesomeIcon>);
      } else if (i === Math.ceil(stars)) {
        iconArray.push(<StarHalf index={i} id={id} key={`star-${id}-${i}`}></StarHalf>)
      } else {
        iconArray.push(<FontAwesomeIcon
          icon={farStar}
          key={`star-${id}-${i}`}
        >
        </FontAwesomeIcon>);
      }
    }
    return iconArray;
  }


  return (
    <span className={'stars-container'}>
      {starIcons()}
    </span>
  )
}

Stars.propTypes = {
  id: PropTypes.number.isRequired,
  stars: PropTypes.number.isRequired,
}

export default Stars;
