import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
//icons
import { Feather } from "@expo/vector-icons";
//moment js
import moment from "moment";


const ObjRentsList = ({onObjectActiveRentPressHandler, data}) => {
  return (
    <View style={styles.objRentsListContainer}>
      {data.map((reservation) => {
        return (
          <Pressable onPress={()=>onObjectActiveRentPressHandler(reservation)} key={reservation.id} style={styles.reservationContainer}>
            <View style={styles.dateContainer}>
              <Text style={styles.rentDate}>
                {moment(reservation.startDate).format("DD.MM").toString()}
              </Text>
              <Text style={{ marginHorizontal: 2 }}>-</Text>
              <Text style={styles.rentDate}>
                {moment(reservation.endDate).format("DD.MM.YYYY").toString()}
              </Text>
            </View>
            <View style={styles.detailsButton}>
              <Feather name="chevron-right" size={20} color="black" />
            </View>
          </Pressable>
        );
      })}
    </View>
  );
};

export default ObjRentsList;

const styles = StyleSheet.create({
  objRentsListContainer: {
    backgroundColor: "transparent",
    marginBottom: 16,
    marginTop: 12,
  },
  reservationContainer: {
    padding: 12,
    paddingVertical: 24,
    marginBottom: 10,
    backgroundColor: "#fff",
    borderRadius: 12,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    shadowColor: "#C6CEE3",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 1,
  },
  dateContainer: {
    display: "flex",
    flexDirection: "row",
  },
  rentDate: {
    fontFamily: "Roboto_400Regular",
    fontSize: 15,
  },
});
