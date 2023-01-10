import { StyleSheet, Text, View } from "react-native";
import React from "react";
//dropdown
import { Dropdown } from "react-native-element-dropdown";
//components
import { Feather } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";

const RentSourceDropdown = ({
  setRentSourceValue,
  isRentSourceFocus,
  rentSourceData,
  setIsRentSourceFocus,
  rentSourceValue,
}) => {
  return (
    <>
      <Dropdown
        style={[
          styles.dropdown,
          isRentSourceFocus && { borderColor: "#2176FF", borderWidth: 1 },
        ]}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={rentSourceData}
        search={false}
        labelField="label"
        valueField="value"
        placeholder={!isRentSourceFocus ? "Select item" : "..."}
        value={rentSourceValue}
        onFocus={() => setIsRentSourceFocus(true)}
        onBlur={() => setIsRentSourceFocus(false)}
        onChange={(item) => {
          setRentSourceValue(item.value);
          setIsRentSourceFocus(false);
        }}
        renderLeftIcon={() => (
          <Fontisto
            name="sourcetree"
            size={20}
            style={{ marginRight: 8 }}
            color="black"
          />
        )}
      />
    </>
  );
};

export default RentSourceDropdown;

const styles = StyleSheet.create({
  dropdown: {
    height: 46,
    borderColor: "transparent",
    backgroundColor: "#fff",
    borderWidth: 1,
    borderRadius: 4,
    paddingHorizontal: 8,
    width: "100%",

    shadowColor: "#918f8f",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.19,
    shadowRadius: 5.62,
    elevation: 6,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: "absolute",
    backgroundColor: "white",
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
    fontFamily: "Roboto_700Bold",
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
});
