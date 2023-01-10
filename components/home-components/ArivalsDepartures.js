import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
//react router
import { useNavigation } from "@react-navigation/native";
//design
import { Divider } from "@rneui/base";

const ArivalsDepartures = ({ headerText, todayNumber, tommorowNumber, isArrivals }) => {
  const navigation = useNavigation();
  const onTodayPressHandler = () =>{
    if(isArrivals){
      navigation.navigate("TodayArrivals");
    }else{
      navigation.navigate("TodayDepartures");
    }
  }
  const onTomorrowPressHandler = () =>{
    if(isArrivals){
      navigation.navigate("TomorrowArrivals");
    }else{
      navigation.navigate("TomorrowDepartures");
    }
  }
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerTextContainer}>
          <Text style={styles.headerText}>{headerText}</Text>
        </View>
      </View>
      <Divider style={{ marginVertical: 12 }} />
      <View style={styles.contentContainer}>
        <Pressable onPress={onTodayPressHandler} style={({pressed})=>[styles.buttonContainer, {backgroundColor: pressed ? "lightgray":null}]}>
          <Text style={styles.numberStyles}>{todayNumber}</Text>
          <Text style={styles.whenStyles}>TODAY</Text>
        </Pressable>
        <Pressable onPress={onTomorrowPressHandler} style={({pressed})=>[styles.buttonContainer, {backgroundColor: pressed ? "lightgray":null}]}>
          <Text style={styles.numberStyles}>{tommorowNumber}</Text>
          <Text style={styles.whenStyles}>TOMORROW</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default ArivalsDepartures;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "#fff",
    borderRadius: 4,
    padding: 14,
    marginVertical: 8,
  },
  header: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  headerTextContainer:{
    padding: 6,
    borderRadius: 4,
  },
  headerText: {
    fontFamily: "Roboto_500Medium",
    fontSize: 16,
    color: "#000",
  },
  contentContainer: {
    marginTop: 12,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 6,
  },
  numberStyles: {
    fontSize: 26,
    fontFamily: "Roboto_500Medium",
    marginBottom: 6,
  },
  whenStyles: {
    fontSize: 16,
    fontFamily: "Roboto_500Medium",
  },
});
