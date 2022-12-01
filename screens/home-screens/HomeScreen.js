import { View, Text } from "react-native";
import React from "react";

//static
import { container } from "../../static/Container";
//components
import Header from "../../components/general-components/Header";
import Subheader from "../../components/general-components/Subheader";
import ReservationList from "../../components/general-components/ReservationsList"
//fake data
import { newReservations } from "../../fake-data";

const HomeScreen = () => {
  return (
    <View style={[container.defaultContainer, {paddingBottom: 0}]}>
      <Header title="Upcoming Reservations"/>
      <Subheader text="Search for reservation" isDropdownShown={true}/>
      <View style={{marginBottom: 16}}/>
      <ReservationList data={newReservations}/>
    </View>
  );
};

export default HomeScreen;
