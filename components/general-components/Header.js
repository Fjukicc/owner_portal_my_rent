import { SafeAreaView, View, Text, StyleSheet } from "react-native";
import React from "react";

const Header = ({ title }) => {
  return (
    <SafeAreaView>
      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}>{title}</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    height: 40,
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  headerTitle: {
    fontSize: 18,
    fontFamily: "Roboto_700Bold",
  },
});

export default Header;
