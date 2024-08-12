// import React from 'react';
import Select from 'react-select';
import countryList from 'react-select-country-list';
import '../styles/contact.css'
import { SingleValue } from 'react-select/animated';

const Country = () => {
  const options = countryList().getData();

  const customStyles = {
    control: (provided) => ({
      ...provided,
      padding: '5px',
      fontSize: '14px',
      minHeight: '35px',
      width: '20em',
      border: '1px solid #d3d9de', 
      borderRadius:'10px',
    }),
    menu: (provided) => ({
      ...provided,
    //   zIndex: 9999, // Ensure the dropdown appears above other elements
    }),

    SingleValue:(provided) => ({
      ...provided,
      backgroundColor:'red',
    })
  };
  const customComponents = {
    A11yText: () => null,
  };

  const handleChange = (selectedOption) => {
    console.log(`Selected country: ${selectedOption.label}`);
  };


  return (
    <div className='inputBox'>
      <Select
        options={options}
        className='inputData'
        styles={customStyles}
        onChange={handleChange}
        placeholder="Select a country"
        isSearchable={true}
        components={customComponents}
      />
    </div>
  );
};

export default Country;
