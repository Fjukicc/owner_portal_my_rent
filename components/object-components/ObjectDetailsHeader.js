import { StyleSheet, Text, View } from "react-native";
import React from "react";

//components
import ObjectCalendar from "./ObjectCalendar";
import MainButton from "../general-components/MainButton";
import { Divider } from "@rneui/base";

const ObjectDetailsHeader = ({ params }) => {
  return (
    <View style={{ marginBottom: 16 }}>
      <View style={styles.objectDetailsHeader}>
        <View></View>
        <Text style={styles.objectName}>{params.object_name}</Text>
        <Text style={styles.objectAddress}>{params.address}</Text>
        <ObjectCalendar />
      </View>
      <MainButton text="Save" />
      <Divider style={{marginTop: 20}}/>
      <View style={{ marginBottom: 24 }} />
        <Text style={[styles.objectName, { fontSize: 18 }]}>
          Object Active Rents
        </Text>
    </View>
  );
};

export default ObjectDetailsHeader;

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
