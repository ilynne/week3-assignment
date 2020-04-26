import React from 'react';
import PropTypes from 'prop-types';
import AddPropertyForm from './addPropertyForm';


class AddProperty extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      displayForm: false,
      property: [],
    }
  }

  displayForm = (e) => {
    e.preventDefault();
    this.setState({
      displayForm: true,
    })
  }

  hideForm = (e) => {
    this.setState({
      displayForm: false,
    })
  }

  render() {
    return (
      <div className={'add-property-container'}>
        <a
          href={''}
          onClick={this.displayForm}
        >
          List a property
        </a>
        { this.state.displayForm
          ? <AddPropertyForm
              hideForm={this.hideForm}
            >
            </AddPropertyForm>
          : null
        }
      </div>
    )
  }
}

export default AddProperty;