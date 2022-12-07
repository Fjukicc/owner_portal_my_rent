import { StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";

//components
import Header from "../../components/general-components/Header";
//static
import { container } from "../../static/Container";

const EditObjectReservationScreen = ({route}) => {
  const { params } = route.params;
  return (
    <>
      <Header title="Rent Details" />
      <View style={container.defaultContainer}>
        <Text style={styles.rentId}>Rent | {params.reservation.id}</Text>
        <View style={{marginBottom: 20}}/>
        <TextInput placeholder="Name" style={styles.inputStyle}/>
        <TextInput placeholder="Phone" style={styles.inputStyle}/>
        <TextInput placeholder="Email" style={styles.inputStyle}/>
        <TextInput placeholder="Select Country" style={styles.inputStyle}/>
        <TextInput placeholder="Note to owner" style={[styles.inputStyle, {height: 120}]}/>
      </View>
    </>
  );
};

export default EditObjectReservationScreen;

const styles = StyleSheet.create({
  rentId: {
    fontFamily: "Roboto_700Bold",
    fontSize: 20,
    marginBottom: 4,
  },
  inputStyle:{
    width: "100%",
    paddingHorizontal: 8,
    borderColor: "#000",
    borderWidth: 2,
    height: 40,
    borderRadius: 4,
    marginBottom: 12,
  }
});
