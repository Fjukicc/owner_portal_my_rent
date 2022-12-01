import { StyleSheet, Pressable, Text, View } from "react-native";
import React from "react";

const MainButton = ({ onButtonPress, text, icon }) => {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.buttonContainer,
        { opacity: pressed ? "0.7" : "1" },
      ]}
      onPress={onButtonPress}
    >
        {icon}
        <Text style={styles.buttonText}>{text}</Text>
    </Pressable>
  );
};

export default MainButton;

const styles = StyleSheet.create({
  buttonContainer: {
    width: "100%",
    height: 44,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000",
    borderRadius: 40,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "800",
    fontFamily: "Roboto_700Bold",
    fontSize: 14,
    marginLeft: 8,
  },
});
