import { StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";

import { FontAwesome } from "@expo/vector-icons";
import MainButton from "../general-components/MainButton";

const Notes = () => {
  return (
    <View>
      <View style={styles.headerContainer}>
        <FontAwesome name="sticky-note-o" size={22} color="black" />
        <Text style={styles.headerText}>Notes</Text>
      </View>
      <TextInput style={styles.notesInput} multiline={true} />
      <View style={{ marginVertical: 8 }} />
      <MainButton text="Save Note" />
    </View>
  );
};

export default Notes;

const styles = StyleSheet.create({
  headerContainer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  headerText: {
    marginLeft: 4,
    fontSize: 16,
    fontFamily: "Roboto_500Medium",
  },
  notesInput: {
    width: "100%",
    backgroundColor: "#fff",
    height: 150,
    borderColor: "#dfdede",
    borderWidth: 0.5,
    padding: 14,
  },
});
