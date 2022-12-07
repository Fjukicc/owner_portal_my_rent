import React, { useState, useContext } from "react";

//navigation
import { createStackNavigator } from "@react-navigation/stack";

//screens
import ObjectsScreen from "../../screens/home-screens/ObjectsScreen";
import ObjectDetailsScreen from "../../screens/objects-screens/ObjectDetailsScreen";
import ReservationDetailsScreen from "../../screens/shared-screens/ReservationDetailsScreen";

const Stack = createStackNavigator();

const ObjectNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="ObjectsScreen" component={ObjectsScreen} />
      <Stack.Screen
        name="ObjectDetailsScreen"
        component={ObjectDetailsScreen}
      />
      <Stack.Screen
        name="ReservationDetailsScreen"
        component={ReservationDetailsScreen}
      />
    </Stack.Navigator>
  );
};

export default ObjectNavigator;
