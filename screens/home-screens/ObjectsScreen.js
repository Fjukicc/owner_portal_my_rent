import { StyleSheet, Pressable, ScrollView, Text, View } from "react-native";
import React, { useContext } from "react";
//navigation
import { useNavigation } from "@react-navigation/native";

//icons
import { Feather } from "@expo/vector-icons";

//static
import { container } from "../../static/Container";

//components
import SmallList from "../../components/general-components/SmallList";
import ActionButton from "../../components/general-components/ActionButton";
import Header from "../../components/general-components/Header";
import Subheader from "../../components/general-components/Subheader";

//fake data
import { listOfObjects } from "../../fake-data";


const ObjectsScreen = () => {
  const navigation = useNavigation();

  //navigate to screen that adds object
  const onAddNewObjectPressHandler = () => {
    navigation.navigate("AddObjectScreen");
  };

  //navigate to object details
  const onObjectPressHandler = (object) => {
    navigation.navigate("ObjectDetailsScreen", {
      screen: 'objectInfo',
      params: object,
    });
  };

  return (
    <View style={container.defaultContainer}>
      <Header title="List of Objects" hasPadding={true} />
      <View
        style={styles.subHeaderContainer}
      >
        <Text style={styles.subtitle}>All Objects</Text>
        <ActionButton
          onButtonPress={onAddNewObjectPressHandler}
          text="Add New"
          isIconLeft={false}
          icon={<Feather name="plus" size={20} color="#000" style={{marginLeft: 4}} />}
        />
      </View>
      <Subheader text="Search for objects" isDropdownShown={false}/>
      <View style={{marginBottom: 16}}/>
      <SmallList data={listOfObjects} onObjectPress={onObjectPressHandler}/>
    </View>
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
    alignItems: 'center',
  },
  subtitle:{
    fontFamily:"Roboto_700Bold",
    fontSize: 16,
  }
});
