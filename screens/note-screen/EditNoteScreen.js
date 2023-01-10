import { StyleSheet, LogBox, Text, View, TextInput, ScrollView } from "react-native";
import React, { useState, useEffect } from "react";
//icons
import { FontAwesome } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

//components
import MainButton from "../../components/general-components/MainButton";
import Header from "../../components/general-components/Header";
import HideKeyboard from "../../components/general-components/HideKeyboard";
//static
import { container } from "../../static/Container";

const EditNoteScreen = ({ route }) => {
  LogBox.ignoreLogs([
    "Non-serializable values were found in the navigation state",
  ]);
  //get nav params
  const { params } = route.params;
  console.log(params);

  const [noteData, setNoteData] = useState({
    noteTitle: "",
    noteBody: "",
  });

  useEffect(() => {
    setNoteData({...noteData, noteTitle: params.header, noteBody: params.text})
  }, []);
  return (
    <>
      <Header
        title="Edit Note"
        icon={
          <Ionicons name="ios-arrow-back-outline" size={24} color="black" />
        }
      />
      <ScrollView style={{ flex: 1 }}>
        <View style={container.defaultContainer}>
          <View style={styles.headerContainer}>
            <FontAwesome name="sticky-note-o" size={24} color="black" />
            <Text style={styles.headerText}>Notes</Text>
          </View>
          <View style={{ marginBottom: 12 }}>
            <Text style={styles.inputLabel}>Title</Text>
            <TextInput style={styles.noteTitleInput} value={noteData.noteTitle} />
          </View>
          <View>
            <Text style={styles.inputLabel}>Note Body</Text>
            <TextInput style={styles.notesDescInput} multiline={true} value={noteData.noteBody}/>
          </View>
          <View style={{ marginVertical: 8 }} />
          <MainButton text="Save Note" />
        </View>
      </ScrollView>
    </>
  );
};

export default EditNoteScreen;

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
