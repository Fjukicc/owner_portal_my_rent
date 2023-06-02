import React from "react";
import { StyleSheet, Text, View } from "react-native";
//moment js
import moment from "moment";

//components
import NoteList from "../../../components/note-components/NoteListContainer";

const agnecyNotesFakeData = [
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
    {
      id: 4,
      date: moment(),
      header: "Nota 4",
      text: "Nota nosadasfyklyklykvta nota nota nova flota imao bota tanak ko kota iz rota",
    },
    {
      id: 5,
      date: moment(),
      header: "Nota 5",
      text: "Nota nota nota nota nova flota imao bota tanaklsdkjsfjklslksdjslkk ko kota iz rota",
    },
  ];

const AgencyNotes = () => {
  return (
    <View style={{ width: "100%", flex: 1 }}>
      <>
        <View style={{ paddingHorizontal: 16 }}>
          <View style={{ marginTop: 16 }} />
          <NoteList data={agnecyNotesFakeData} title={"Agency Notes"}/>
        </View>
      </>
    </View>
  );
};

export default AgencyNotes;

const styles = StyleSheet.create({});
