import { StyleSheet, Animated, Text, View } from "react-native";
import React from "react";

//components
import Header from "../../components/general-components/Header";
import ReservationsList from "../../components/general-components/ReservationsList";
//fake data
import { newReservations } from "../../fake-data";
//static
import { container } from "../../static/Container";

const AllReservations = () => {
  return (
    <>
      <Header title="All Reservations" />
      <View style={[container.defaultContainer, { paddingVertical: 0 }]}>
        <Animated.View style={{ marginTop: 16, flex: 1 }}>
          <ReservationsList data={newReservations}/>
        </Animated.View>
      </View>
    </>
  );
};

export default AllReservations;

const styles = StyleSheet.create({
  scrollViewStyle: {
    flex: 1,
    padding: 20,
  },
});
