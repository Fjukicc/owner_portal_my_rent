import { StyleSheet, Text, View } from "react-native";
import React from "react";
//dropdown
import { Dropdown } from "react-native-element-dropdown";

const UniversalDropdown = ({
  dropdownValue,
  setDropdownValue,
  isDropdownFocus,
  setIsDropdownFocus,
  data,
  labelText,
  icon,
  isLabelShown = true,
}) => {
  return (
    <>
      {isLabelShown === true ? (
        <Text
          style={{
            fontSize: 16,
            fontFamily: "Roboto_500Medium",
            marginBottom: 6,
          }}
        >
          {labelText}
        </Text>
      ) : null}
      <Dropdown
        style={[styles.dropdown, isDropdownFocus && { borderColor: "#2176FF" }]}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={data}
        search={false}
        maxHeight={200}
        labelField="label"
        valueField="value"
        placeholder={!isDropdownFocus ? "Select item" : "..."}
        value={dropdownValue}
        onFocus={() => setIsDropdownFocus(true)}
        onBlur={() => setIsDropdownFocus(false)}
        onChange={(item) => {
          setDropdownValue(item.value);
          setIsDropdownFocus(false);
        }}
        renderLeftIcon={() => icon}
      />
    </>
  );
};

export default UniversalDropdown;

const styles = StyleSheet.create({
  dropdown: {
    height: 44,
    borderColor: "transparent",
    backgroundColor: "#fff",
    borderWidth: 1,
    borderRadius: 4,
    paddingHorizontal: 8,
    width: "100%",

    // shadowColor: "#918f8f",
    // shadowOffset: {
    //   width: 0,
    //   height: 4,
    // },
    // shadowOpacity: 0.19,
    // shadowRadius: 5.62,
    // elevation: 6,
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
    fontSize: 15,
    fontFamily: "Roboto_500Medium",
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
});
