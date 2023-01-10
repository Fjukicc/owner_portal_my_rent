import React, { useState, useMemo } from "react";
import Select from "react-select";
import countryList from "react-select-country-list";

function SelectCountryDropdown({ value, setValue }) {
  const options = useMemo(() => countryList().getData(), []);

  const changeHandler = (value) => {
    setValue(value);
  };

  return <Select options={options} value={value} onChange={changeHandler} />;
}

export default SelectCountryDropdown;
