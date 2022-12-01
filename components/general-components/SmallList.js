import { StyleSheet, Text, View, Pressable, FlatList } from "react-native";
import React from "react";

//icons
import { Feather } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";


const Objects = ({ obj, onObjectPress }) => {

  return (
    <Pressable style={styles.objContainer} onPress={()=>onObjectPress(obj)}>
      <View style={styles.firstRowContainer}>
        <View style={styles.objNameIconContainer}>
          <MaterialCommunityIcons
            name="cube-outline"
            size={20}
            color="#000"
            style={{marginRight: 4}}
          />
          <Text style={styles.objectNameText}>{obj.object_name}</Text>
        </View>
        <Feather name="chevron-right" size={20} color="black" />
      </View>
      <View style={styles.secondRowContainer}>
      <Feather name="user" size={18} style={{marginRight: 4}} color="black" />
        <Text style={styles.ownerText}>{obj.owner}</Text>
      </View>
      <View style={[styles.secondRowContainer, {marginTop: 8, justifyContent: "flex-start"}]}>
        <Text>{obj.type}</Text>
      </View>
    </Pressable>
  );
};

const SmallList = ({ data, onObjectPress }) => {
  const renderItem = ({ item }) => <Objects onObjectPress={onObjectPress} obj={item} />;

  return (
    <>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(object) => object.id}
      />
    </>
  );
};

export default SmallList;

const styles = StyleSheet.create({
  objContainer: {
    height: "auto",
    padding: 14,
    backgroundColor: "#fff",
    marginBottom: 10,
    borderRadius: 16,
    paddingHorizontal: 12,
    paddingVertical: 16,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.16,
    shadowRadius: 1.51,
    elevation: 2,
  },
  firstRowContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  objectNameText: {
    fontFamily: "Roboto_500Medium",
    fontSize: 16,
  },
  objNameIconContainer:{
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  secondRowContainer: {
    marginTop: 12,
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-end",
  },
  ownerText: {
    fontFamily: "Roboto_500Medium",
    fontSize: 14,
  },
});
