import { LogBox, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
//moment js
import moment from "moment";
//components
import Header from "../../components/general-components/Header";
import ObjectCalendar from "../../components/general-components/ObjectCalendar";
import MainButton from "../../components/general-components/MainButton";

//components
import { container } from "../../static/Container";
import ObjRentsList from "../../components/general-components/ObjRentsList";
//navigation
import { useNavigation } from "@react-navigation/native";

const fakeData = [
  {
    id: "1",
    startDate: moment(),
    endDate: moment(),
  },
  {
    id: "2",
    startDate: moment(),
    endDate: moment(),
  },
  {
    id: "3",
    startDate: moment(),
    endDate: moment(),
  },
  {
    id: "4",
    startDate: moment(),
    endDate: moment(),
  },
  {
    id: "5",
    startDate: moment(),
    endDate: moment(),
  },
];

const ObjectDetailsScreen = ({ route }) => {
  LogBox.ignoreLogs([
    'Non-serializable values were found in the navigation state',
  ]);
  const { params } = route.params;
  const navigation = useNavigation();

  const onObjectActiveRentPressHandler = (reservation) => {
    navigation.navigate("ReservationDetailsScreen", {
      screen: "objectInfo",
      params: { reservation },
    });
  };

  return (
    <>
      <Header title="Object Details" />
      <View style={[container.defaultContainer, { paddingVertical: 0 }]}>
        <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1 }}>
          <View style={styles.objectDetailsHeader}>
            <Text style={styles.objectName}>{params.object_name}</Text>
            <Text style={styles.objectAddress}>{params.address}</Text>
            <ObjectCalendar />
          </View>
          <MainButton text="Save" />
          <View style={{ marginBottom: 24 }} />
          <Text style={[styles.objectName, { fontSize: 18 }]}>
            Object Active Rents
          </Text>
          <ObjRentsList
            data={fakeData}
            onObjectActiveRentPressHandler={onObjectActiveRentPressHandler}
          />
        </ScrollView>
      </View>
    </>
  );
};

export default ObjectDetailsScreen;

const styles = StyleSheet.create({
  objectDetailsHeader: {
    marginTop: 16,
    display: "flex",
    width: "100%",
    justifyContent: "flex-start",
    marginBottom: 16,
  },
  objectName: {
    fontFamily: "Roboto_700Bold",
    fontSize: 22,
    marginBottom: 4,
  },
  objectAddress: {
    fontFamily: "Roboto_400Regular",
    fontSize: 17,
  },
});
