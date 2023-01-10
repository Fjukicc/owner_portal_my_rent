import { StyleSheet, Text, View, TextInput } from "react-native";
import React, { useState } from "react";
//icons
import { Feather } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";

//components
import UniversalDropdown from "./UniversalDropdown";
import MainButton from "../general-components/MainButton";

//fake data for countries
const countriesData = [
  { label: "Croatia", value: "1" },
  { label: "France", value: "2" },
  { label: "Spain", value: "3" },
];

const RentGuestInfo = ({onAddGuestPressHandler}) => {
  //countries dropdown state
  const [countriesValue, setCountriesValue] = useState("1");
  const [isCountriesFocus, setIsCountriesFocus] = useState(false);

  return (
    <View>
      <View style={styles.headerContainer}>
        <Feather name="info" size={22} color="black" />
        <Text style={styles.headerText}>Info</Text>
      </View>
      <View style={styles.inputContainer}>
        <Feather name="user" size={20} color="black" />
        <TextInput
          placeholder="Guest name"
          placeholderTextColor="#000"
          style={styles.inputStyle}
        />
      </View>
      <View style={styles.inputContainer}>
        <Feather name="phone" size={20} color="black" />
        <TextInput
          placeholder="Guest telephone"
          placeholderTextColor="#000"
          style={styles.inputStyle}
        />
      </View>
      <View style={styles.inputContainer}>
        <Feather name="mail" size={20} color="black" />
        <TextInput
          placeholder="Guest email"
          placeholderTextColor="#000"
          style={styles.inputStyle}
        />
      </View>
      <UniversalDropdown
        data={countriesData}
        labelText="Country"
        icon={
          <Fontisto
            name="world-o"
            size={20}
            color="black"
            style={{ marginRight: 8 }}
          />
        }
        dropdownValue={countriesValue}
        setDropdownValue={setCountriesValue}
        isDropdownFocus={isCountriesFocus}
        setIsDropdownFocus={setIsCountriesFocus}
      />
      <View style={{marginVertical: 12}}/>
      <MainButton text="Add guest" onButtonPress={onAddGuestPressHandler}/>
    </View>
  );
};

export default RentGuestInfo;

const styles = StyleSheet.create({
  headerContainer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  headerText: {
    marginLeft: 4,
    fontSize: 16,
    fontFamily: "Roboto_500Medium",
  },
  inputContainer: {
    borderColor: "gray",
    flexDirection: "row",
    borderColor: "#dfdede",
    paddingHorizontal: 8,
    borderWidth: 0.5,
    marginVertical: 8,
    width: "100%",
    borderRadius: 4,
    backgroundColor: "#fff",
    height: 44,
    alignItems: "center",
  },
  inputStyle: {
    display: "flex",
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    height: "100%",
    marginHorizontal: 8,
  },
});
