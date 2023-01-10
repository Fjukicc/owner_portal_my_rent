import { StyleSheet, Pressable, Text, View } from "react-native";
import React from "react";

const MainButton = ({ onButtonPress, text, icon }) => {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.buttonContainer,
        { opacity: pressed ? 0.7 : 1 },
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
    height: 42,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2176FF",
    borderRadius: 4,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "800",
    fontFamily: "Roboto_700Bold",
    fontSize: 16,
    marginLeft: 8,
  },
});
