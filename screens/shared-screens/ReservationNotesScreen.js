import { StyleSheet, Text, View } from "react-native";
import React from "react";
import moment from "moment";
//icons
import { Ionicons } from "@expo/vector-icons";

//components
import Header from "../../components/general-components/Header";
import NoteListContainer from "../../components/note-components/NoteListContainer";
//static
import { container } from "../../static/Container";

const myNotesFakeData = [
  {
    id: 1,
    date: moment(),
    header: "Nota 1",
    text: "Nota nota nota nota nova flota imao bota tanak ko kota iz rota",
  },
  {
    id: 2,
    date: moment(),
    header: "Nota 2",
    text: "Nota nota nota nota dsfdsdfgsdfgg nova flota imao bota tanak ko kota iz rota",
  },
  {
    id: 3,
    date: moment(),
    header: "Nota 3",
    text: "Nota nota sdgahk<lčl<č nota nota nova flota imao bota tanak ko kota iz rota",
  },
];

const ReservationNotesScreen = () => {
  return (
    <>
      <Header
        title="All Reservation Notes"
        icon={
          <Ionicons name="ios-arrow-back-outline" size={24} color="black" />
        }
      />
      <View style={container.defaultContainer}>
        <NoteListContainer data={myNotesFakeData} />
      </View>
    </>
  );
};

export default ReservationNotesScreen;

const styles = StyleSheet.create({});
