import { StyleSheet, View, Text } from "react-native";
import React, { useState } from "react";
//navigation
import { useNavigation } from "@react-navigation/native";
//elements rn
import { BottomSheet, Button } from "@rneui/themed";

//components
import Header from "../../components/general-components/Header";
import ReservationsList from "../../components/general-components/ReservationsList";
//fake data
import { newReservations } from "../../fake-data";
//static
import { container } from "../../static/Container";

const AllReservations = () => {
  const navigation = useNavigation();
  const [isVisible, setIsVisible] = useState(false);

  //navigatie to reservation details
  const onReservationPressHandler = () => {
    navigation.navigate("ReservationDetailsScreen");
  };

  return (
    <>
      <Header
        title="All Reservations"
        isFilterShown={true}
        setIsFilterClicked={setIsVisible}
        filterClicked={isVisible}
        isSearchShown={true}
        searchBarPlaceholder="Search for reservation.."
      />
      <View style={[container.defaultContainer, { paddingVertical: 0 }]}>
        <View style={{ flex: 1 }}>
          <ReservationsList
            onReservationPressHandler={onReservationPressHandler}
            data={newReservations}
            areDatesShown={true}
          />
          <BottomSheet
            onBackdropPress={()=>setIsVisible(false)}
            modalProps={{}}
            isVisible={isVisible}
          >
            <View style={styles.bottomSheetContainer}>

            </View>
          </BottomSheet>
        </View>
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
  bottomSheetContainer:{
    height: 444,
    width: "100%",
    backgroundColor: "#fff",
  }
});
