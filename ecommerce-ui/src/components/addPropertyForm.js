import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

class AddPropertyForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      houseType: 'Apartment',
      city: '',
      country: 'USA',
      cost: 0,
      description: '',
      name: '',
    }
    this.handleClickClose = this.handleClickClose.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
  }

  handleClickClose(e) {
    e.preventDefault();
    this.props.hideForm();
  }

  handleInputChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleCheckboxChange(e) {
    this.setState({
      [e.target.name]: e.target.checked ? e.target.value : '',
    })
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
            name={'title'}
            required={true}
            onChange={this.handleInputChange}
          >
          </input>

          <label htmlFor={'house-type'}>Property Type:</label>
          <select
            id={'house-type'}
            name={'houseType'}
            onChange={this.handleInputChange}
          >
            { houseTypes.map((houseType) => {
                return <option value={houseType} key={houseType}>{houseType}</option>
              })
            }
          </select>

          <label htmlFor={'city'}>City:</label>
          <input
            type={'text'}
            id={'city'}
            name={'city'}
            required={true}
            onChange={this.handleInputChange}
          >
          </input>

          <label htmlFor={'country'}>Country:</label>
          <select
            id={'country'}
            name={'country'}
            onChange={this.handleInputChange}
          >
            { countries.map((country) => {
                return <option value={country} key={country}>{country}</option>
              })
            }
          </select>

          <label htmlFor={'cost'}>Cost per night:</label>
          <input
            type={'number'}
            min={1}
            id={'cost'}
            name={'cost'}
            size={5}
            required={true}
            onChange={this.handleInputChange}
          >
          </input>

          <input
            type={'checkbox'}
            id={'description'}
            name={'description'}
            value={'Free Cancellation'}
            onChange={this.handleCheckboxChange}
          >
          </input>
          <label
            htmlFor={'description'}
            className={'checkbox'}
          >
            Free Cancellation
          </label>

          <label htmlFor={'name'}>Host:</label>
          <input
            type={'text'}
            id={'name'}
            name={'name'}
            required={true}
            onChange={this.handleInputChange}
          >
          </input>

          <button type={'submit'}>Add</button>
        </form>
      </div>
    )
  }
}

export default AddPropertyForm;
