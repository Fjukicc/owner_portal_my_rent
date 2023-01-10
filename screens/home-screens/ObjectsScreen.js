import { StyleSheet, Pressable, ScrollView, Text, View } from "react-native";
import React, { useContext } from "react";
//navigation
import { useNavigation } from "@react-navigation/native";

//static
import { container } from "../../static/Container";
//components
import ObjectList from "../../components/object-components/ObjectList";
import Header from "../../components/general-components/Header";
//fake data
import { listOfObjects } from "../../fake-data";

const ObjectsScreen = () => {
  const navigation = useNavigation();

  //navigate to object details
  const onObjectPressHandler = (object) => {
    navigation.navigate("ObjectDetailsScreen", {
      screen: "objectInfo",
      params: object,
    });
  };

  return (
    <>
      <Header title="List of Objects" hasPadding={true} isSearchShown={true} searchBarPlaceholder="Search for object.."/>
      <View style={[container.defaultContainer, { paddingVertical: 0 }]}>
        <ObjectList data={listOfObjects} onObjectPress={onObjectPressHandler} />
      </View>
    </>
  );
};

export default ObjectsScreen;

const styles = StyleSheet.create({
  scrollViewStyle: {
    flex: 1,
    padding: 16,
  },
  subHeaderContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 16,
    alignItems: "center",
  },
  subtitle: {
    fontFamily: "Roboto_700Bold",
    fontSize: 16,
  },
});
