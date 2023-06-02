import { StyleSheet, Text, View, ScrollView } from "react-native";
import React, { useState } from "react";
//react elements
import { SpeedDial, Divider } from "@rneui/themed";
//icons
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
//react navigation
import { useNavigation } from "@react-navigation/native";

//components
import Header from "../../components/general-components/Header";
import RentSourceDropdown from "../../components/rent-details-components/RentSourceDropdown";
import RentGuestInfo from "../../components/rent-details-components/RentGuestInfo";
import DatePicker from "../../components/rent-details-components/DatePicker";
import MainButton from "../../components/general-components/MainButton";
import Guests from "../../components/rent-details-components/Guests";
import UniversalDropdown from "../../components/rent-details-components/UniversalDropdown";
import Notes from "../../components/rent-details-components/Notes";

//static
import { container } from "../../static/Container";

//list of obj
import { listOfObjects } from "../../fake-data";

//fake data for rent sources
const rentSourceData = [
  { label: "Syncbeds", value: "1" },
  { label: "Agoda", value: "2" },
  { label: "AirBNB", value: "3" },
];

const EditObjectReservationScreen = () => {
  //initialize navigation
  const navigation = useNavigation();

  //are bottom actions opened
  const [isSpeedDialOpen, setIsSpeedDialOpen] = useState(false);
  //rent source
  const [rentSourceValue, setRentSourceValue] = useState("1");
  const [isRentSourceFocus, setIsRentSourceFocus] = useState(false);

  //countries dropdown state
  const [listOfObjectsValue, setListOfObjectsValue] = useState("1");
  const [isListOfObjectsFocus, setIsListOfObjectsFocus] = useState(false);

  const onAddGuestPressHandler = () =>{
    navigation.navigate("ReservationAddGuestScreen");
    setIsSpeedDialOpen(false);
  }

  const onReservationNotesPressHandler = () =>{
    console.log("dodo")
    navigation.navigate("ReservationNotesScreen");
    setIsSpeedDialOpen(false);
  }

  return (
    <>
      <Header
        title="Rent Details"
        icon={
          <Ionicons name="ios-arrow-back-outline" size={24} color="black" />
        }
      />
      <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
        <View style={container.defaultContainer}>
          <View style={styles.subheaderContainer}>
            <Text style={styles.rentId}>Rent | 5</Text>
            <Text>Object_name</Text>
          </View>
          <View style={{ marginBottom: 20 }} />
          <RentSourceDropdown
            setRentSourceValue={setRentSourceValue}
            rentSourceValue={rentSourceValue}
            setIsRentSourceFocus={setIsRentSourceFocus}
            isRentSourceFocus={isRentSourceFocus}
            rentSourceData={rentSourceData}
          />
          <Divider style={{ marginVertical: 16 }} />
          <DatePicker title="Dates"/>
          <Divider style={{ marginVertical: 16 }} />
          <RentGuestInfo onAddGuestPressHandler={onAddGuestPressHandler}/>
          <Divider style={{ marginVertical: 16 }} />
          <UniversalDropdown
            data={listOfObjects}
            labelText="Object"
            icon={
              <Ionicons
                name="cube-outline"
                size={24}
                color="black"
                style={{ marginRight: 4 }}
              />
            }
            dropdownValue={listOfObjectsValue}
            setDropdownValue={setListOfObjectsValue}
            isDropdownFocus={isListOfObjectsFocus}
            setIsDropdownFocus={setIsListOfObjectsFocus}
          />
          <Divider style={{ marginVertical: 16 }} />
          <Notes />
          <Divider style={{ marginVertical: 16 }} />
          <Guests />
          <Divider style={{ marginVertical: 16 }} />
          <MainButton text="Save" />
          <View style={{ marginBottom: 16 }} />
        </View>
      </ScrollView>
      <SpeedDial
        isOpen={isSpeedDialOpen}
        color="#388D9F"
        icon={{ name: "edit", color: "#fff" }}
        openIcon={{ name: "close", color: "#fff" }}
        onOpen={() => setIsSpeedDialOpen(!isSpeedDialOpen)}
        onClose={() => setIsSpeedDialOpen(!isSpeedDialOpen)}
      >
        <SpeedDial.Action
          color="#388D9F"
          icon={{ name: "person-add", color: "#fff" }}
          title="Add Guest"
          onPress={onAddGuestPressHandler}
        />
        <SpeedDial.Action
          color="#388D9F"
          icon={<FontAwesome5 name="sticky-note" size={20} color="white" />}
          title="Reservation Notes"
          onPress={onReservationNotesPressHandler}
        />
        <SpeedDial.Action
          color="#388D9F"
          icon={{ name: "delete", color: "#fff" }}
          title="Delete"
          onPress={() => console.log("Delete Something")}
        />
      </SpeedDial>
    </>
  );
};

export default EditObjectReservationScreen;

const styles = StyleSheet.create({
  subheaderContainer: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  rentId: {
    fontFamily: "Roboto_700Bold",
    fontSize: 20,
    marginBottom: 4,
  },
  inputStyle: {
    width: "100%",
    paddingHorizontal: 8,
    borderColor: "#000",
    borderWidth: 2,
    height: 40,
    borderRadius: 4,
    marginBottom: 12,
  },
  cancellationContainer: {
    marginTop: 16,
    display: "flex",
    flexDirection: "column",
  },
});
