import { ScrollView, StyleSheet, Text, View, TextInput } from "react-native";
import React, { useState } from "react";
//icons
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
//rn elements
import { CheckBox, Divider } from "@rneui/themed";

//components
import Header from "../../components/general-components/Header";
import UniversalDropdown from "../../components/rent-details-components/UniversalDropdown";
import SelectCountryDropdown from "../../components/rent-details-components/SelectCountryDropdown";
import DatePicker from "../../components/rent-details-components/DatePicker";
import BirthPicker from "../../components/rent-details-components/BirthPicker";

//static
import { container } from "../../static/Container";
import MainButton from "../../components/general-components/MainButton";


//fake data for rent sources
const typeOfDocumentData = [
  { label: "Osobna iskaznica (strana)", value: "1" },
  { label: "Putovnica (strana)", value: "2" },
  { label: "Osobna iskaznica (domaća)", value: "3" },
  { label: "Putovnica (domaća)", value: "4" },
];

const ReservationAddGuestScreen = () => {
  const [checkboxIndex, setCheckboxIndex] = useState(0);

  //type of document dropdown
  const [typeOfDocumentValue, setTypeOfDocumentValue] = useState("1");
  const [isTypeOfDocumentFocus, setIsTypeOfDocumentFocus] = useState(false);

  //country of residence state
  const [countryOfResidence, setCountryOfResidence] = useState("");
  const [countryOfResidenceDropdownShow, setCountryOfResidenceDropdownShow] =
    useState(false);

  //citizenship state
  const [citizenship, setCitizenship] = useState("");
  const [citizenshipDropdownShow, setCitizenshipDropdownShow] = useState(false);

  //country staste
  const [country, setCountry] = useState("");
  const [countryDropdownShow, setCountryDropdownShow] = useState(false);

  return (
    <>
      <Header
        title="Reservation Add Guest"
        icon={
          <Ionicons name="ios-arrow-back-outline" size={24} color="black" />
        }
      />
      <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
        <View style={container.defaultContainer}>
          {/* User date */}
          <DatePicker title="Date From/Until"/>
          <Divider style={{ marginVertical: 16 }} />
          {/* First Name */}
          <View style={styles.inputContainer}>
            <Text style={styles.labelStyle}>First Name</Text>
            <TextInput style={styles.inputStyle} />
          </View>
          {/* Last Name */}
          <View style={styles.inputContainer}>
            <Text style={styles.labelStyle}>Last Name</Text>
            <TextInput style={styles.inputStyle} />
          </View>
          {/* City */}
          <View style={styles.inputContainer}>
            <Text style={styles.labelStyle}>City</Text>
            <TextInput style={styles.inputStyle} />
          </View>
          {/* Country */}
          <View style={styles.inputContainer}>
            <Text style={styles.labelStyle}>Country</Text>
            <SelectCountryDropdown
              value={country}
              setValue={setCountry}
              show={countryDropdownShow}
              setShow={setCountryDropdownShow}
            />
          </View>
          {/* Date of Birth */}
          <View style={styles.inputContainer}>
            <Text style={styles.labelStyle}>Date of Birth</Text>
            <BirthPicker/>
          </View>
          {/* Gender */}
          <View style={[styles.inputContainer, { marginTop: 14 }]}>
            <Text style={styles.labelStyle}>Gender</Text>
            <View style={styles.checkboxContainer}>
              <CheckBox
                checked={checkboxIndex === 0}
                title="Male"
                onPress={() => setCheckboxIndex(0)}
                containerStyle={{ backgroundColor: "transparent" }}
                textStyle={{ fontSize: 15, fontFamily: "Roboto_500Medium" }}
                checkedIcon={
                  <MaterialCommunityIcons
                    name="radiobox-marked"
                    size={24}
                    color="#2176FF"
                  />
                }
                uncheckedIcon={
                  <MaterialCommunityIcons
                    name="radiobox-blank"
                    size={24}
                    color="#2176FF"
                  />
                }
              />
              <CheckBox
                checked={checkboxIndex === 1}
                containerStyle={{ backgroundColor: "transparent" }}
                onPress={() => setCheckboxIndex(1)}
                title="Female"
                textStyle={{ fontSize: 15, fontFamily: "Roboto_500Medium" }}
                checkedIcon={
                  <MaterialCommunityIcons
                    name="radiobox-marked"
                    size={24}
                    color="#2176FF"
                    icon
                  />
                }
                uncheckedIcon={
                  <MaterialCommunityIcons
                    name="radiobox-blank"
                    size={24}
                    color="#2176FF"
                  />
                }
              />
            </View>
          </View>
          {/* Type of Document */}
          <View style={styles.inputContainer}>
            <Text style={styles.labelStyle}>Type of Document</Text>
            <UniversalDropdown
              data={typeOfDocumentData}
              labelText="Type Of Document"
              isLabelShown={false}
              icon={
                <FontAwesome5
                  name="address-card"
                  size={24}
                  color="black"
                  style={{ marginRight: 4 }}
                />
              }
              dropdownValue={typeOfDocumentValue}
              setDropdownValue={setTypeOfDocumentValue}
              isDropdownFocus={isTypeOfDocumentFocus}
              setIsDropdownFocus={setIsTypeOfDocumentFocus}
            />
          </View>
          {/* Document Number */}
          <View style={styles.inputContainer}>
            <Text style={styles.labelStyle}>Document Number</Text>
            <TextInput style={styles.inputStyle} />
          </View>
          {/* Citizenship */}
          <View style={styles.inputContainer}>
            <Text style={styles.labelStyle}>Citizenship</Text>
            <SelectCountryDropdown
              value={country}
              setValue={setCountry}
              show={countryDropdownShow}
              setShow={setCountryDropdownShow}
            />
          </View>
          <View style={[styles.inputContainer, {marginVertical: 22}]}>
            <MainButton text="Save" />
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default ReservationAddGuestScreen;

const styles = StyleSheet.create({
  inputStyle: {
    backgroundColor: "#fff",
    borderColor: "#dfdede",
    borderWidth: 0.5,
    width: "100%",
    height: 44,
    borderRadius: 4,
  },
  inputContainer: {
    display: "flex",
    flexDirection: "column",
    marginVertical: 8,
    width: "100%",
  },
  labelStyle: {
    marginBottom: 6,
    fontSize: 15,
    fontFamily: "Roboto_400Regular",
  },
  checkboxContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
});
