import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

class AddPropertyForm extends React.Component {
  constructor(props) {
    super(props)
    this.houseTypes = ['Apartment', 'Entire House', 'Sleeping Bag', 'Yurt'];
    this.countries = ['USA', 'Canada', 'Sweden'];
    this.images = [
      'jan-jakub-nanista-UHyrjKPsshk-unsplash.jpg',
      'bantersnaps-sejLyCD2UQE-unsplash.jpg',
      'felix-m-dorn-hcti0k5E2Iw-unsplash.jpg',
      'annie-spratt-0mElfGrF8EM-unsplash.jpg'
    ]
    this.state = {
      title: '',
      houseType: this.houseTypes[0],
      image: this.images[0],
      location: {
        city: '',
        country: this.countries[0],
      },
      payment: {
        cost: 0,
        description: '',
      },
      host: {
        name: '',
        isSuperhost: false,
      },
      rating: {
        stars: 0,
        reviews: 0,
      }
    }
    this.handleClickClose = this.handleClickClose.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleHouseTypeChange = this.handleHouseTypeChange.bind(this);
    this.handleCityCountryChange = this.handleCityCountryChange.bind(this);
    this.handleCostChange = this.handleCostChange.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
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
      payment: {
        ...this.state.payment,
        [e.target.name]: e.target.checked ? 'Free Cancellation' : '',
      }
    })
  }

  handleFormSubmit(e) {
    e.preventDefault();
    this.props.addPropertyListing(this.state);
  }

  handleHouseTypeChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
      image: this.images[e.target.selectedIndex],
    })
  }

  handleCityCountryChange(e) {
    this.setState({
      location: {
        ...this.state.location,
        [e.target.name]: e.target.value,
      }
    })
  }

  handleCostChange(e) {
    this.setState({
      payment: {
        ...this.state.payment,
        [e.target.name]: e.target.value,
      }
    })
  }

  handleNameChange(e) {
    this.setState({
      host: {
        ...this.state.host,
        [e.target.name]: e.target.value,
      }
    })
  }

  render() {
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
        <form
          className={'add-property-form'}
          onSubmit={this.handleFormSubmit}
          method={'post'}
        >
          <label htmlFor={'title'}>Title:</label>
          <input
            type={'text'}
            id={'title'}
            name={'title'}
            value={this.state.title}
            required={true}
            onChange={this.handleInputChange}
          >
          </input>

          <label htmlFor={'house-type'}>Property Type:</label>
          <select
            id={'house-type'}
            name={'houseType'}
            selected={this.state.houseType}
            onChange={this.handleHouseTypeChange}
          >
            { this.houseTypes.map((houseType) => {
                return <option value={houseType} key={houseType}>{houseType}</option>
              })
            }
          </select>

          <label htmlFor={'city'}>City:</label>
          <input
            type={'text'}
            id={'city'}
            name={'city'}
            value={this.state.location.city}
            required={true}
            onChange={this.handleCityCountryChange}
          >
          </input>

          <label htmlFor={'country'}>Country:</label>
          <select
            id={'country'}
            name={'country'}
            selected={this.state.location.country}
            onChange={this.handleCityCountryChange}
          >
            { this.countries.map((country) => {
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
            value={this.state.payment.cost}
            size={5}
            required={true}
            onChange={this.handleCostChange}
          >
          </input>

          <input
            type={'checkbox'}
            id={'description'}
            name={'description'}
            value={this.state.payment.description}
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
            value={this.state.host.name}
            required={true}
            onChange={this.handleNameChange}
          >
          </input>

          <button type={'submit'}>Add</button>
        </form>
      </div>
    )
  }
}

export default AddPropertyForm;
