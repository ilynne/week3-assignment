import React from 'react';
import PropTypes from 'prop-types';

const Host = (props) => {
  const { name, isSuperhost } = props.host

  return (
    <div className={'host-container'}>
      <p><b>Host:</b> {name}</p>
    </div>
  )
}

Host.propTypes = {
  host: PropTypes.shape({
    name: PropTypes.string.isRequired,
    isSuperhost: PropTypes.bool.isRequired,
  }).isRequired,
}

export default Host;
