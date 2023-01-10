import { StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";
//icons
import { Ionicons } from "@expo/vector-icons";

//components
import Header from "../../components/general-components/Header";
import { container } from "../../static/Container";

const TomorrowArrivals = () => {
  return (
    <>
      <Header
        title="Tomorrow Arrivals"
        icon={
          <Ionicons name="ios-arrow-back-outline" size={24} color="black" />
        }
      />
      <ScrollView style={{ flex: 1 }}>
        <View style={container.defaultContainer}>
          <Text>TomorrowArrivals</Text>
        </View>
      </ScrollView>
    </>
  );
};

export default TomorrowArrivals;

const styles = StyleSheet.create({});
