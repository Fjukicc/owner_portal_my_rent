import React, { useState, useContext } from "react";

//navigation
import { createStackNavigator } from "@react-navigation/stack";

//screens
import ObjectsScreen from "../../screens/home-screens/ObjectsScreen";
import AddObjectScreen from "../../screens/objects-screens/AddObjectScreen";
import ObjectDetailsScreen from "../../screens/objects-screens/ObjectDetailsScreen";

const Stack = createStackNavigator();

const ObjectNavigator = () => {
  return (
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="ObjectsScreen" component={ObjectsScreen} />
        <Stack.Screen name="AddObjectScreen" component={AddObjectScreen} />
        <Stack.Screen name="ObjectDetailsScreen" component={ObjectDetailsScreen} />
      </Stack.Navigator>
  );
};

export default ObjectNavigator;
