import {
  Pressable,
  StyleSheet,
  Easing,
  Text,
  View,
  Animated,
} from "react-native";
import React from "react";
//rn elements
import { Divider } from "@rneui/base";
//icons
import { FontAwesome5 } from "@expo/vector-icons";
//navigation
import { useNavigation } from "@react-navigation/native";
//icons
import { Feather } from "@expo/vector-icons";
//moment js
import moment from "moment";

const NoteList = ({ data, title }) => {
  //initilalize navigation
  const navigation = useNavigation();

  //on note press
  const OnNotePressHandler = (data) => {
    navigation.navigate("EditNoteScreen", {
      screen: "objectInfo",
      params: data,
    });
  };
  return (
    <View style={styles.notesContainer}>
      <View style={styles.headerContainer}>
        <FontAwesome5
          name="sticky-note"
          size={24}
          color="black"
          style={{ marginRight: 8 }}
        />
        <Text style={styles.sectionHeader}>{title}</Text>
      </View>
      <Divider style={{ marginTop: 14 }} />
      <View style={styles.firstRowContainer}>
        {data.map((note) => {
          return (
            <View key={note.id}>
              <Pressable
                onPress={() => OnNotePressHandler(note)}
                style={({ pressed }) => [
                  styles.oneNoteContainer,
                  { backgroundColor: pressed ? "lightgray" : null },
                ]}
              >
                <View>
                  <Text style={styles.noteHeaderStyle}>{note.header}</Text>
                  <Text>{moment(note.date).format("LL").toString()}</Text>
                </View>
                <Feather name="chevron-right" size={20} color="black" />
              </Pressable>
              <Divider style={{ marginVertical: 8 }} />
            </View>
          );
        })}
      </View>
    </View>
  );
};

export default NoteList;

const styles = StyleSheet.create({
  notesContainer: {
    width: "100%",
    backgroundColor: "#fff",
    padding: 14,
    borderRadius: 4,
  },
  sectionHeader: {
    fontFamily: "Roboto_500Medium",
    fontSize: 16,
  },
  noteHeaderStyle: {
    fontFamily: "Roboto_500Medium",
    fontSize: 16,
  },
  headerContainer: {
    width: "100%",
    display: "flex",
    justifyContent: "flex-start",
    flexDirection: "row",
    alignItems: "center",
  },
  firstRowContainer: {
    marginTop: 8,
    display: "flex",
  },
  oneNoteContainer: {
    display: "flex",
    justifyContent: "space-between",
    padding: 14,
    flexDirection: "row",
  },
});
