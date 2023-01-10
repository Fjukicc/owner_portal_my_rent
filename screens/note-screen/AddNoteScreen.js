import { StyleSheet, Text, View, TextInput, ScrollView } from "react-native";
import React from "react";
//icons
import { FontAwesome } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

//components
import MainButton from "../../components/general-components/MainButton";
import Header from "../../components/general-components/Header";
import HideKeyboard from "../../components/general-components/HideKeyboard";
//static
import { container } from "../../static/Container";

const AddNoteScreen = () => {
  return (
    <>
      <Header
        title="Add Note"
        icon={
          <Ionicons name="ios-arrow-back-outline" size={24} color="black" />
        }
      />
      <ScrollView style={{flex: 1}}>
      <View style={container.defaultContainer}>
        <View style={styles.headerContainer}>
          <FontAwesome name="sticky-note-o" size={24} color="black" />
          <Text style={styles.headerText}>Notes</Text>
        </View>
        <View style={{ marginBottom: 12 }}>
          <Text style={styles.inputLabel}>Note Title</Text>
          <TextInput style={styles.noteTitleInput} placeholder="Note Title" />
        </View>
        <View>
          <Text style={styles.inputLabel}>Note Body</Text>
          <TextInput style={styles.notesDescInput} multiline={true} placeholder="Note Body"/>
        </View>
        <View style={{ marginVertical: 8 }} />
        <MainButton text="Save Note" />
      </View>
      </ScrollView>
    </>
  );
};

export default AddNoteScreen;

const styles = StyleSheet.create({
  headerContainer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  headerText: {
    marginLeft: 4,
    fontSize: 20,
    fontFamily: "Roboto_500Medium",
  },
  inputLabel: {
    fontSize: 15,
    marginBottom: 6,
    fontFamily: "Roboto_500Medium",
  },
  notesDescInput: {
    width: "100%",
    backgroundColor: "#fff",
    height: 250,
    borderColor: "#dfdede",
    borderWidth: 0.5,
    padding: 8,
    fontSize: 15,
  },
  noteTitleInput: {
    width: "100%",
    backgroundColor: "#fff",
    height: 40,
    borderColor: "#dfdede",
    borderWidth: 0.5,
    padding: 8,
    fontSize: 16,
    fontFamily: "Roboto_500Medium",
  },
});
