import { StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";

//components
import ActionButton from "./ActionButton";
import { Entypo } from '@expo/vector-icons';

const Subheader = ({ text, isDropdownShown }) => {

  return (
    <>
    <View style={{marginTop: 8}}/>
      {isDropdownShown ? (
        <View style={styles.secondRowContainer}>
            <Text style={styles.subtitle}>Filter Reservations</Text>
          <ActionButton
            text="In Week"
            icon={<Entypo name="chevron-down" size={20} color="black" />}
            isIconLeft={false}
          />
        </View>
      ) : null}
      <View style={{marginBottom: 8}}/>
      <View style={styles.firstRowContainer}>
        <View style={{ width: "100%" }}>
          <Text style={styles.sortByDateLabel}>{text}</Text>
          <TextInput
            placeholder={text}
            placeholderTextColor="#000"
            style={styles.searchReservation}
          />
        </View>
      </View>
    </>
  );
};

export default Subheader;

const styles = StyleSheet.create({
  firstRowContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 8,
  },
  secondRowContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 8,
  },
  sortByDateLabel: {
    marginBottom: 6,
    fontFamily: "Roboto_500Medium",
  },
  searchReservation: {
    width: "100%",
    paddingHorizontal: 8,
    borderColor: "#000",
    borderWidth: 2,
    height: 40,
    borderRadius: 8,
  },
  subtitle:{
    fontFamily:"Roboto_700Bold",
    fontSize: 16,
  }
});
