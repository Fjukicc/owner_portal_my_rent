import { StyleSheet, Text, View, Animated, Easing, Pressable, FlatList } from "react-native";
import React from "react";

//icons
import { Feather } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Objects = ({ obj, onObjectPress }) => {

  const animatedValue = new Animated.Value(0);

  const buttonScale = animatedValue.interpolate({
    inputRange: [0, 1, 1],
    outputRange: [1, 0.95, 0.9],
  });

  //Press In / Press Out
  const onPressIn = () => {
    Animated.timing(animatedValue, {
      toValue: 1,
      duration: 250,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start();
  };
  const onPressOut = () => {
    Animated.timing(animatedValue, {
      toValue: 0,
      duration: 100,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start();
  };

  // The animated style for scaling the button within the Animated.View
  const animatedScaleStyle = {
    transform: [{ scale: buttonScale }],
  };

  return (
    <Pressable onPressIn={onPressIn} onPressOut={onPressOut} onPress={() => onObjectPress(obj)}>
      <Animated.View style={[styles.objContainer, animatedScaleStyle]}>
      <View style={styles.firstRowContainer}>
        <View style={styles.objNameIconContainer}>
          <MaterialCommunityIcons
            name="cube-outline"
            size={24}
            color="#2176FF"
            style={{ marginRight: 4 }}
          />
          <Text style={styles.objectNameText}>{obj.object_name}</Text>
        </View>
        <Feather name="chevron-right" size={20} color="black" />
      </View>
      <View style={styles.secondRowContainer}>
        <View style={styles.ownerTextIconContainer}>
        <Feather
          name="user"
          size={18}
          style={{ marginRight: 4 }}
          color="#fff"
        />
        <Text style={styles.ownerText}>{obj.owner}</Text>
        </View>
      </View>
      <View
        style={[
          styles.secondRowContainer,
          { marginTop: 12, justifyContent: "flex-start" },
        ]}
      >
        <Text>{obj.type}</Text>
      </View>
      </Animated.View>
    </Pressable>
  );
};

const ObjectList = ({ data, onObjectPress }) => {
  const renderItem = ({ item }) => (
    <Objects onObjectPress={onObjectPress} obj={item} />
  );

  return (
    <>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(object) => object.id}
        ListHeaderComponent={
         <View style={{marginBottom: 16}} />
        }
      />
    </>
  );
};

export default ObjectList;

const styles = StyleSheet.create({
  objContainer: {
    height: "auto",
    padding: 14,
    backgroundColor: "#fff",
    marginBottom: 10,
    borderRadius: 4,
    paddingHorizontal: 12,
    paddingVertical: 16,
  },
  firstRowContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  objectNameText: {
    fontFamily: "Roboto_500Medium",
    fontSize: 17,
    color: "#03012D",
  },
  objNameIconContainer: {
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
    fontSize: 15,
    color: "#fff"
  },
  ownerTextIconContainer:{
    paddingVertical: 6,
    paddingHorizontal: 8,
    display: "flex",
    flexDirection: "row",
    backgroundColor: "#2176FF",
    borderRadius: 8,
  }
});
