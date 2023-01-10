import { SafeAreaView, View, Text, StyleSheet, Pressable } from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";
import SearchBarInput from "./SearchBarInput";

const Header = ({
  title,
  icon,
  isFilterShown = false,
  setIsFilterClicked,
  filterClicked,
  isSearchShown = false,
  searchBarPlaceholder,
}) => {
  return (
    <SafeAreaView
      style={{
        backgroundColor: "#fff",
        zIndex: 20,
        borderBottomColor: "lightgray",
        borderBottomWidth: 1,
      }}
    >
      <View style={styles.headerContainer}>
        <View
          style={{
            width: "100%",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View style={styles.iconContainer}>{icon}</View>
          <View style={styles.headerTextContainer}>
            <Text style={styles.headerTitle}>{title}</Text>
          </View>
          {isFilterShown ? (
            <Pressable
              onPress={() => setIsFilterClicked(!filterClicked)}
              style={styles.filterContainer}
            >
              {<Feather name="filter" size={24} color="#388D9F" />}
            </Pressable>
          ) : null}
        </View>
      </View>
      {isSearchShown ? (
        <View style={{ width: "100%", paddingHorizontal: 16 }}>
          <SearchBarInput placeholder={searchBarPlaceholder} />
        </View>
      ) : null}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    height: 54,
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    backgroundColor: "#fff",
    marginLeft: 0,
    zIndex: 100,
  },
  headerTitle: {
    fontSize: 18,
    color: "#000",
    fontFamily: "Roboto_700Bold",
  },
  headerTextContainer:{
    paddingVertical: 8,
    paddingHorizontal: 12,
    backgroundColor: "transparent",
    borderRadius: 4,
  },
  iconContainer: {
    position: "absolute",
    left: 20,
  },
  filterContainer: {
    position: "absolute",
    right: 20,
    padding: 4,
  },
});

export default Header;
