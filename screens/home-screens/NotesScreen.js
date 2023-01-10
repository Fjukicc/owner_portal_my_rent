import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
//react native elements
import { Tab, TabView, SpeedDial } from "@rneui/themed";
//navigation
import { useNavigation } from "@react-navigation/native";
//moment js
import moment from "moment";
//icons
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";

//components
import Header from "../../components/general-components/Header";
import NoteListContainer from "../../components/note-components/NoteListContainer";

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

const InvoicesScreen = () => {
  //initilalize navigation
  const navigation = useNavigation();

  //setting index of tabs
  const [index, setIndex] = React.useState(0);

  //for opening speed dial
  const [open, setOpen] = React.useState(false);

  //on add note speed dial press
  const AddNoteSpeedDialPressHandler = () => {
    navigation.navigate("AddNoteScreen");
    setOpen(false);
  };

  return (
    <>
      <Header title="Notes" />
      <Tab
        value={index}
        onChange={(e) => setIndex(e)}
        indicatorStyle={{
          backgroundColor: "black",
          height: 0,
        }}
      >
        <Tab.Item
          title="My Notes"
          titleStyle={(active) => ({
            fontSize: 12,
            color: active ? "#fff" : "#000",
          })}
          icon={(active) => (
            <FontAwesome5
              name="sticky-note"
              size={28}
              color={active ? "#fff" : "#000"}
            />
          )}
          containerStyle={(active) => ({
            backgroundColor: active ? "#2176FF" : "transparent",
          })}
        />
        <Tab.Item
          title="Agency Notes"
          titleStyle={(active) => ({
            fontSize: 12,
            color: active ? "#fff" : "#000",
          })}
          icon={(active) => (
            <MaterialCommunityIcons
              name="face-agent"
              size={28}
              color={active ? "#fff" : "#000"}
            />
          )}
          containerStyle={(active) => ({
            backgroundColor: active ? "#2176FF" : "transparent",
          })}
        />
      </Tab>
      <TabView
        style={{ height: "100%" }}
        value={index}
        onChange={setIndex}
        animationType="spring"
      >
        <TabView.Item
          style={{
            backgroundColor: "transparent",
            width: "100%",
            flex: 1,
          }}
        >
          <>
            <View style={{ paddingHorizontal: 16, flex: 1 }}>
              <View style={{ marginTop: 16 }} />
              <NoteListContainer data={myNotesFakeData} />
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
        </TabView.Item>
        <TabView.Item
          style={{ backgroundColor: "transparent", width: "100%", flex: 1 }}
        >
          <>
            <View style={{ paddingHorizontal: 16 }}>
              <View style={{ marginTop: 16 }} />
              <NoteListContainer data={agnecyNotesFakeData} />
            </View>
          </>
        </TabView.Item>
      </TabView>
    </>
  );
};

export default InvoicesScreen;

const styles = StyleSheet.create({
  tabsContainer: {
    backgroundColor: "#2176FF",
  },
});
