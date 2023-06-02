import React from "react";
import { View, Text } from "react-native";
//react native elements
import { SpeedDial } from "@rneui/themed";
//navigation
import { useNavigation } from "@react-navigation/native";
//moment js
import moment from "moment";

//components
import NoteList from "../../../components/note-components/NoteListContainer";

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

const MyNotes = () => {
  //initilalize navigation
  const navigation = useNavigation();

  //for opening speed dial
  const [open, setOpen] = React.useState(false);
  //on add note speed dial press
  const AddNoteSpeedDialPressHandler = () => {
    navigation.navigate("AddNoteScreen");
    setOpen(false);
  };

  return (
    <>
      <View style={{ paddingHorizontal: 16, flex: 1 }}>
        <View style={{ marginTop: 16 }} />
        <NoteList data={myNotesFakeData} title={"My Notes"}/>
      </View>
      <SpeedDial
        color="#388D9F"
        isOpen={open}
        icon={{ name: "add", color: "#fff" }}
        openIcon={{ name: "close", color: "#fff" }}
        onOpen={() => setOpen(!open)}
        onClose={() => setOpen(!open)}
      >
        <SpeedDial.Action
          color="#388D9F"
          icon={{ name: "add", color: "#fff" }}
          title="Add"
          onPress={AddNoteSpeedDialPressHandler}
        />
      </SpeedDial>
    </>
  );
};

export default MyNotes;
