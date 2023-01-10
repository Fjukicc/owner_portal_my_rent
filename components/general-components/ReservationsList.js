import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Animated,
  Easing,
  Pressable,
} from "react-native";
import React from "react";
import moment from "moment";

//components
import ObjectDetailsHeader from "../object-components/ObjectDetailsHeader";
//countries
import CountryFlag from "react-native-country-flag";
//icons
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

//ONE RESERVATION
const Reservation = ({ reservation, onReservationPressHandler }) => {
  const animatedValue = new Animated.Value(0);

  const buttonScale = animatedValue.interpolate({
    inputRange: [0, 1, 1],
    outputRange: [1, 0.95, 0.9],
  });

  //Press In / Press Out
  const onPressIn = () => {
    Animated.timing(animatedValue, {
      toValue: 1,
      duration: 250,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start();
  };
  const onPressOut = () => {
    Animated.timing(animatedValue, {
      toValue: 0,
      duration: 100,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start();
  };

  // The animated style for scaling the button within the Animated.View
  const animatedScaleStyle = {
    transform: [{ scale: buttonScale }],
  };

  return (
    <Pressable
      onPressIn={onPressIn}
      onPress={onReservationPressHandler}
      onPressOut={onPressOut}
    >
      <Animated.View style={[styles.reservationContainer, animatedScaleStyle]}>
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
                color="#fff"
                style={{ marginRight: 4 }}
              />
              <Text style={{color: "#fff"}}>{reservation.howManyNight}</Text>
            </View>
            <View style={[styles.datesContainer, { marginLeft: 16 }]}>
              <Feather
                name="user"
                size={18}
                color="#fff"
                style={{ marginRight: 4 }}
              />
              <Text style={{color: "#fff"}}>{reservation.howMuchPeople}</Text>
            </View>
          </View>
          <Entypo name="chevron-small-right" size={24} color="black" />
        </View>
        <View style={styles.reservationThirdRow}>
          <Text style={[styles.dateTextStyle, { fontSize: 16 }]}>
            {reservation.apartmanName}
          </Text>
          <CountryFlag isoCode="hr" size={16} style={{borderRadius: 2}} />
        </View>
        <View style={styles.reservationForuthRow}>
          <Text style={{ fontSize: 14 }}>{reservation.name}</Text>
          <View style={styles.priceContainer}>
            <Text style={{ fontFamily: "Roboto_500Medium", fontSize: 15, color: "#fff" }}>
              {reservation.price}
            </Text>
            <FontAwesome
              name="euro"
              size={16}
              color="#fff"
              style={{ marginLeft: 4 }}
            />
          </View>
        </View>
      </Animated.View>
    </Pressable>
  );
};

const ReservationsList = ({
  data,
  areDatesShown = false,
  onReservationPressHandler,
  params,
  isCalendarShown = false,
}) => {
  const renderItem = ({ item }) => (
    <Reservation
      reservation={item}
      onReservationPressHandler={onReservationPressHandler}
    />
  );

  //check which header to generate for flat list
  const generateHeader = () => {
    if (areDatesShown) {
      return <View style={{marginBottom: 16}}/>
    }
    if (isCalendarShown) {
      return (
        <>
          <ObjectDetailsHeader params={params} />
        </>
      );
    }
  };

  return (
    <>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(reservation) => reservation.id}
        showsVerticalScrollIndicator={false}
        style={{ flex: 1 }}
        ListHeaderComponent={generateHeader}
        bounces={true}
      />
    </>
  );
};

export default ReservationsList;

const styles = StyleSheet.create({
  reservationContainer: {
    height: "auto",
    width: "100%",
    zIndex: 20,
    backgroundColor: "#fff",
    marginBottom: 12,
    borderRadius: 6,
    paddingHorizontal: 12,
    paddingVertical: 16,
    zIndex: 99,
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
    borderRadius: 8,
    paddingVertical: 6,
    paddingHorizontal: 8,
    backgroundColor: "#2176FF",
  },
  dateTextStyle: {
    fontFamily: "Roboto_500Medium",
    fontSize: 15,
  },
  reservationThirdRow: {
    width: "100%",
    marginTop: 12,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
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
    alignItems: "center",
    backgroundColor: "#23CE6B",
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 6,
  },
});
