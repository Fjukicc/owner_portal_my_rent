import { StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";
//icons
import { Ionicons } from "@expo/vector-icons";
//react router
import { useNavigation } from "@react-navigation/native";

//components
import Header from "../../components/general-components/Header";
import ReservationsList from "../../components/general-components/ReservationsList";
//static
import { container } from "../../static/Container";

const newReservations = [
  {
    id: "1",
    apartmanName: "Ime_apartmana",
    name: "Ime",
    arrivalDate: new Date(),
    endDate: new Date(),
    price: "200",
    howMuchPeople: 3,
    howManyNight: 7,
  },
  {
    id: "2",
    apartmanName: "Ime_apartmana",
    name: "Ime",
    arrivalDate: new Date(),
    endDate: new Date(),
    price: "200",
    howMuchPeople: 3,
    howManyNight: 7,
  },
];

const TomorrowArrivals = () => {
  const navigation = useNavigation();
  const onReservationPressHandler = () => {
    navigation.navigate("ReservationDetailsScreen");
  };
  return (
    <>
      <Header
        title="Tomorrow Arrivals"
        icon={
          <Ionicons name="ios-arrow-back-outline" size={24} color="black" />
        }
      />
        <View style={container.defaultContainer}>
          <ReservationsList
            onReservationPressHandler={onReservationPressHandler}
            data={newReservations}
            areDatesShown={true}
          />
        </View>
    </>
  );
};

export default TomorrowArrivals;

const styles = StyleSheet.create({});
