import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

class AddPropertyForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      property: [],
    }
    this.handleClickClose = this.handleClickClose.bind(this);
  }

  handleClickClose(e) {
    e.preventDefault();
    this.props.hideForm();
  }

  render() {
    const houseTypes = ['Apartment', 'Entire House', 'Sleeping Bag', 'Yurt'];
    const countries = ['USA', 'Canada', 'Sweden'];

    return (
      <div className={'add-property-form-container'}>
        <div className={'cancel'}>
          <FontAwesomeIcon
            icon={faTimes}
            className={'close-box'}
            onClick={this.handleClickClose}
          >
          </FontAwesomeIcon>
        </div>
        <form className={'add-property-form'}>
          <label htmlFor={'title'}>Title:</label>
          <input
            type={'text'}
            id={'title'}
            required={true}
          >
          </input>

          <label htmlFor={'house-type'}>Property Type:</label>
          <select id={'house-type'}>
            { houseTypes.map((houseType) => {
                return <option value={houseType}>{houseType}</option>
              })
            }
          </select>

          <label htmlFor={'city'}>City:</label>
          <input
            type={'text'}
            id={'city'}
            required={true}
          >
          </input>

          <label htmlFor={'country'}>Country:</label>
          <select id={'country'}>
            { countries.map((country) => {
                return <option value={country}>{country}</option>
              })
            }
          </select>

          <label htmlFor={'cost'}>Cost per night:</label>
          <input
            type={'number'}
            min={1}
            id={'cost'}
            size={5}
            required={true}
          >
          </input>

          <input
            type={'checkbox'}
            id={'free-cancellation'}
          >
          </input>
          <label
            htmlFor={'free-cancellation'}
            className={'checkbox'}
          >
            Free Cancellation
          </label>

          <label htmlFor={'host'}>Host:</label>
          <input
            type={'text'}
            id={'host'}
            required={true}
          >
          </input>

          <button type={'submit'}>Add</button>
        </form>
      </div>
    )
  }
}

export default AddPropertyForm;
