import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";

import moment from "moment";
//icons
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome } from '@expo/vector-icons';

//ONE RESERVATION
const Reservation = ({ reservation }) => {
  return (
    <View style={styles.reservationContainer}>
      <View style={styles.reservationFirstRow}>
        <View style={styles.datesContainer}>
          <MaterialCommunityIcons
            name="calendar-arrow-right"
            size={24}
            color="black"
            style={{ marginRight: 4 }}
          />
          <Text style={styles.dateTextStyle}>
            {moment(reservation.arrivalDate).format("DD/MM/YYYY")}
          </Text>
        </View>
        <View style={styles.datesContainer}>
          <MaterialCommunityIcons
            name="calendar-arrow-left"
            size={24}
            color="black"
            style={{ marginRight: 4 }}
          />
          <Text style={styles.dateTextStyle}>
            {moment(reservation.endDate).format("DD/MM/YYYY")}
          </Text>
        </View>
      </View>
      <View style={styles.reservationsSecondRow}>
        <View style={styles.reservationsSubSecondRow}>
          <View style={styles.datesContainer}>
            <FontAwesome5
              name="moon"
              size={18}
              color="black"
              style={{ marginRight: 4 }}
            />
            <Text>{reservation.howManyNight}</Text>
          </View>
          <View style={[styles.datesContainer, { marginLeft: 16 }]}>
            <Feather
              name="user"
              size={18}
              color="black"
              style={{ marginRight: 4 }}
            />
            <Text>{reservation.howMuchPeople}</Text>
          </View>
        </View>
        <Entypo name="chevron-small-right" size={24} color="black" />
      </View>
      <View style={styles.reservationThirdRow}>
        <Text style={[styles.dateTextStyle, { fontSize: 16 }]}>
          {reservation.apartmanName}
        </Text>
      </View>
      <View style={styles.reservationForuthRow}>
        <Text style={{fontSize: 14}}>{reservation.name}</Text>
        <View style={styles.priceContainer}>
          <Text style={{ fontFamily: "Roboto_500Medium", fontSize: 15 }}>
            {reservation.price}
          </Text>
          <FontAwesome name="euro" size={16} color="black" style={{marginLeft: 4}}/>
        </View>
      </View>
    </View>
  );
};

const ReservationsList = ({ data }) => {
  const renderItem = ({ item }) => <Reservation reservation={item} />;

  return (
    <>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(reservation) => reservation.id}
      />
    </>
  );
};

export default ReservationsList;

const styles = StyleSheet.create({
  reservationContainer: {
    height: "auto",
    width: "100%",
    backgroundColor: "#fff",
    marginBottom: 12,
    shadowColor: "#d6d6d6",
    borderRadius: 16,
    paddingHorizontal: 12,
    paddingVertical: 16,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.16,
    shadowRadius: 1.51,
    elevation: 2,
  },
  reservationFirstRow: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  datesContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  reservationsSecondRow: {
    marginTop: 12,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  reservationsSubSecondRow: {
    display: "flex",
    flexDirection: "row",
  },
  dateTextStyle: {
    fontFamily: "Roboto_500Medium",
  },
  reservationThirdRow: {
    width: "100%",
    marginTop: 12,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  reservationForuthRow: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 12,
  },
  priceContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: 'center',
  },
});
