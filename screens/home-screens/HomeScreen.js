import { View, StyleSheet, ScrollView, Pressable } from "react-native";
import React, { useState } from "react";
//navigation
import { useNavigation } from "@react-navigation/native";
//moment js
import moment from "moment";

//components
import Header from "../../components/general-components/Header";
import TodayNotes from "../../components/home-components/TodayNotes";
//static
import { container } from "../../static/Container";
import ArivalsDepartures from "../../components/home-components/ArivalsDepartures";

const notesFakeData = [
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
  {
    id: 6,
    date: moment(),
    header: "Nota 6",
    text: "Nota nota nota nota kvjklxvjylkkjxyckxcyckyxl6666666nova flota imao bota tanak ko kota iz rota",
  },
  {
    id: 7,
    date: moment(),
    header: "Nota 7",
    text: "Nota nota nota nota nova flota777777777777 imao bota tanak ko kota iz rota",
  },
];

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <>
      <Header title="Home" />
      <ScrollView style={{ flex: 1 }}>
        <View style={container.defaultContainer}>
          <ArivalsDepartures isArrivals={true} headerText="Arrivals" todayNumber={1} tommorowNumber={4}/>
          <ArivalsDepartures isArrivals={false} headerText="Departures" todayNumber={0} tommorowNumber={1}/>
          <View style={{ marginVertical: 16 }} />
          <TodayNotes data={notesFakeData} />
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  cardButtonTextContainer: {
    width: "50%",
    padding: 8,
    display: "flex",
    alignItems: "center",
  },
  buttonsContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  numberStyle: {
    fontFamily: "Roboto_500Medium",
    fontSize: 28,
    marginBottom: 4,
  },
  dayStyle: {
    fontFamily: "Roboto_400Regular",
    fontSize: 16,
  },
});

export default HomeScreen;
