import { StyleSheet, Text, View } from "react-native";
import React from "react";

//icons
import { Ionicons } from "@expo/vector-icons";

const PriceInfo = () => {
  return (
    <View style={styles.priceInfoStyle}>
      <View style={styles.headerContainer}>
        <Ionicons name="md-pricetags" size={22} color="black" />
        <Text style={styles.headerText}>Info</Text>
      </View>
      <View style={styles.firstRowContainer}>
        <View>
          <Text>ADVANCE</Text>
          <Text>EUR</Text>
        </View>
        <View>
          <Text>600</Text>
        </View>
      </View>
      <View style={styles.secondRowContainer}>
        <Text>TOTAL</Text>
        <Text>1000.00</Text>
      </View>
      <View style={styles.secondRowContainer}>
        <View>
          <Text>EXTRA ITEMS</Text>
          <Text>0</Text>
          <Text>EUR</Text>
        </View>
        <View style={{alignItems: "flex-end"}}>
          <Text>PER NIGHT</Text>
          <Text>142.86</Text>
          <Text>EUR</Text>
        </View>
      </View>
    </View>
  );
};

export default PriceInfo;

const styles = StyleSheet.create({
  headerContainer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  headerText: {
    marginLeft: 4,
    fontSize: 16,
    fontFamily: "Roboto_500Medium",
  },
  priceInfoStyle: {
    width: "100%",
    display: "flex",
  },
  firstRowContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  secondRowContainer: {
    width: "100%",
    flexDirection: "row",
    display: "flex",
    marginVertical: 8,
    justifyContent: "space-between",
  },
});
