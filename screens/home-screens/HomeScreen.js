import { View, Text, Animated } from "react-native";
import React from "react";

//static
import { container } from "../../static/Container";
//components
import Header from "../../components/general-components/Header";
import Subheader from "../../components/general-components/Subheader";
import ReservationList from "../../components/general-components/ReservationsList";
//fake data
import { newReservations } from "../../fake-data";

const HomeScreen = () => {
  //HIDE DATES WHEN SCROLL
  const scrollY = new Animated.Value(0);
  const diffClamp = Animated.diffClamp(scrollY, 0, 20);
  const translateY = diffClamp.interpolate({
    inputRange: [0, 84],
    outputRange: [0, -84],
  });
  return (
    <>
      <Header title="Upcoming Reservations" />
      <View
        style={[
          container.defaultContainer,
          { paddingBottom: 0, paddingTop: 0 },
        ]}
      >
        <Subheader text="Search for reservation" isDropdownShown={true} />
        <View style={{ marginBottom: 16 }} />
        <ReservationList data={newReservations} scrollY={scrollY} />
      </View>
    </>
  );
};

export default HomeScreen;
