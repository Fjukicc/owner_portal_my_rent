import { LogBox, StyleSheet, View } from "react-native";
import React from "react";
//navigation
import { useNavigation } from "@react-navigation/native";
//icons
import { Ionicons } from '@expo/vector-icons';

//components
import Header from "../../components/general-components/Header";
import { container } from "../../static/Container";
import ReservationsList from "../../components/general-components/ReservationsList";
//fake data
import { newReservations } from "../../fake-data";

const ObjectDetailsScreen = ({ route }) => {
  LogBox.ignoreLogs([
    "Non-serializable values were found in the navigation state",
  ]);

  //get nav params
  const { params } = route.params;
  const navigation = useNavigation();

  const onReservationPressHandler = () => {
    navigation.navigate("ReservationDetailsScreen");
  };

  return (
    <>
      <Header title="Object Details" icon={<Ionicons name="ios-arrow-back-outline" size={24} color="black" />} />
      <View style={[container.defaultContainer, { paddingVertical: 0 }]}>
        <ReservationsList
          params={params}
          isCalendarShown={true}
          data={newReservations}
          onReservationPressHandler={onReservationPressHandler}
        />
      </View>
    </>
  );
};

export default ObjectDetailsScreen;

const styles = StyleSheet.create({

});
