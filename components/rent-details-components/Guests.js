import { Pressable, StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";

//icons
import { Octicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

const IncreaseDecreaseButton = ({ onPlusPress, onMinusPress }) => {
  return (
    <View style={styles.increaserContainer}>
      <Pressable style={({pressed})=>[styles.increaserButtonContainer, {opacity: pressed ? 0.7 : 1}]}>
        <Feather name="minus" size={24} color="white" />
      </Pressable>
      <View style={styles.inputIncreaserStyle}>
        <Text style={styles.numOfGuests}>3</Text>
      </View>
      <Pressable style={({pressed})=>[styles.increaserButtonContainer, {opacity: pressed ? 0.7 : 1}]}>
      <Feather name="plus" size={24} color="white" />
      </Pressable>
    </View>
  );
};

const Guests = () => {
  return (
    <View>
      <View style={styles.headerContainer}>
        <Octicons name="people" size={22} color="black" />
        <Text style={styles.headerText}>Guests</Text>
      </View>
      <View style={styles.subheaderContainer}></View>
      <View style={styles.contentContainer}>
        <View style={styles.rowContainer}>
          <Text>Adults</Text>
          <IncreaseDecreaseButton />
        </View>
        <View style={styles.rowContainer}>
          <Text>Children</Text>
          <IncreaseDecreaseButton />
        </View>
        <View style={styles.rowContainer}>
          <Text>Pets</Text>
          <IncreaseDecreaseButton />
        </View>
      </View>
    </View>
  );
};

export default Guests;

const styles = StyleSheet.create({
  headerContainer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  subheaderContainer: {
    width: "100%",
    marginBottom: 12,
  },
  headerText: {
    marginLeft: 4,
    fontSize: 16,
    fontFamily: "Roboto_500Medium",
  },
  contentContainer: {
    width: "100%",
  },
  rowContainer: {
    width: "100%",
    display: "flex",
    marginVertical: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  inputIncreaserStyle: {
    backgroundColor: "#fff",
    width: 50,
    marginHorizontal: 10,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
  },
  increaserContainer: {
    display: "flex",
    flexDirection: "row",
  },
  increaserButtonContainer:{
    padding: 8,
    backgroundColor: "#2176FF",
    borderRadius: "100%",
  },
  numOfGuests:{
    fontFamily: "Roboto_400Regular",
    fontSize: 16,
  }
});
