import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useState } from "react";
//country picker
import CountryPicker from "react-native-country-picker-modal";

const SelectCountryDropdown = ({ show, setShow, value, setValue }) => {
  const [countryCode, setCountryCode] = useState(null);
  const [country, setCountry] = useState(null);

  //button
  const [withCountryNameButton, setWithCountryNameButton] = useState(true);
  const [withFlag, setWithFlag] = useState(true);

  const onCountryPickerPressHandler = (value) => {
    setCountry(value);
    setCountryCode(value.cca2);
  };

  return (
    <>
      <CountryPicker
        withFilter={true}
        containerButtonStyle={[styles.countryButtonContainer, {justifyContent: (country!==null && countryCode!==null) ? "center" : "flex-start", paddingLeft: (country!==null && countryCode!==null) ? 0 : 8,}]}
        {...{
          countryCode,
          withCountryNameButton,
          withFlag,
        }}
        onSelect={(value) => onCountryPickerPressHandler(value)}
      />
    </>
  );
};

export default SelectCountryDropdown;

const styles = StyleSheet.create({
  countryButtonContainer: {
    borderColor: "#dfdede",
    borderWidth: 0.5,
    width: "100%",
    backgroundColor: "#fff",
    borderRadius: 4,
    display: "flex",
    flexDirection: "row",
    height: 44,
    alignItems: "center",
  },
});
