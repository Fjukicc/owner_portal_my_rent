import React from "react";
import { StyleSheet, View, Dimensions } from "react-native";
import { Overlay, Text } from "@rneui/themed";

//fake data
import { modalDemoReservations } from "../../fake-data";

const Modal = ({ toggleModal, modalVisible, title }) => {
  return (
    <Overlay isVisible={modalVisible} onBackdropPress={toggleModal}>
      <View style={styles.modalContainer}>
        <Text>{title}</Text>
      </View>
    </Overlay>
  );
};

export default Modal;

const styles = StyleSheet.create({
  modalContainer: {
    width: Dimensions.get("screen").width * 0.9,
  },
});
