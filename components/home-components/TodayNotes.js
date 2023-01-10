import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
//rn elements
import { Divider } from "@rneui/base";
//react navigation
import { useNavigation } from "@react-navigation/native";
//icons
import { FontAwesome5 } from "@expo/vector-icons";

//icons
import { Feather } from "@expo/vector-icons";
import moment from "moment";

const TodayNotes = ({ data }) => {
  const navigation = useNavigation();

  //navigate to edit note
  const onNotePresshandler = (data) => {
    navigation.navigate("EditNoteScreen", {
      screen: "objectInfo",
      params: data,
    });
  };

  //navigate to my notes all notes tab
  const allSeeAllNotesPressHandler = () => {
    navigation.navigate("NotesNavigator");
  };
  return (
    <View style={styles.notesContainer}>
      <View style={styles.headerContainer}>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <FontAwesome5
            name="sticky-note"
            size={24}
            color="black"
            style={{ marginRight: 8 }}
          />
          <Text style={styles.sectionHeader}>Today Notes</Text>
        </View>
        <Pressable
          onPress={allSeeAllNotesPressHandler}
          style={({ pressed }) => [
            { padding: 6, backgroundColor: "#2176FF", borderRadius: 4 },
            { opacity: pressed ? 0.7 : 1 },
          ]}
        >
          <Text style={{ fontFamily: "Roboto_400Regular", color: "#fff" }}>
            All notes
          </Text>
        </Pressable>
      </View>
      <Divider style={{ marginTop: 14 }} />
      <View style={styles.firstRowContainer}>
        {data.map((note) => {
          return (
            <View key={note.id}>
              <Pressable
                onPress={()=>onNotePresshandler(note)}
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

export default TodayNotes;

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
    justifyContent: "space-between",
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
