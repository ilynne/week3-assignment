import React from 'react';
import PropTypes from 'prop-types';

const PolaroidPhoto = (props) => {
  const { alt, src, caption } = props

  return (
    <div className={'polaroid-container'}>
      <img
        src={src}
        alt={alt}
      />
      <p className={'caption'}>{caption}</p>
    </div>
  )
}

PolaroidPhoto.propTypes = {
  alt: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  caption: PropTypes.string.isRequired,
}

export default PolaroidPhoto;
