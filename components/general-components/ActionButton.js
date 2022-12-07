import { StyleSheet, Pressable, Text, View } from "react-native";
import React from "react";

const ActionButton = ({ onButtonPress, text, icon, isIconLeft=true }) => {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.buttonContainer,
        { opacity: pressed ? "0.7" : "1" },
      ]}
      onPress={onButtonPress}
    >
      {isIconLeft ? icon : null}
      <Text style={styles.buttonText}>{text}</Text>
      {isIconLeft ? null : icon}
    </Pressable>
  );
};

export default ActionButton;

const styles = StyleSheet.create({
  buttonContainer: {
    width: "35%",
    height: 40,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
    borderColor: "#000",
    borderWidth: 2,
    borderRadius: 12,
  },
  buttonText: {
    color: "#000",
    fontWeight: "800",
    fontFamily: "Roboto_700Bold",
    fontSize: 14,
    marginLeft: 8,
  },
});
