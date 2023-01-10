import React, { useState, useContext } from "react";

//navigation
import { createStackNavigator } from "@react-navigation/stack";
import {
  getFocusedRouteNameFromRoute,
  useNavigation,
  useRoute,
} from "@react-navigation/native";

//screens
import ObjectsScreen from "../../screens/home-screens/ObjectsScreen";
import ObjectDetailsScreen from "../../screens/objects-screens/ObjectDetailsScreen";
import ReservationDetailsScreen from "../../screens/shared-screens/ReservationDetailsScreen";
import ReservationAddGuestScreen from "../../screens/shared-screens/ReservationAddGuestScreen";
import ReservationNotesScreen from "../../screens/shared-screens/ReservationNotesScreen";

const Stack = createStackNavigator();

const ObjectNavigator = () => {
  const navigation = useNavigation();
  const route = useRoute();
  React.useLayoutEffect(() => {
    const routeName = getFocusedRouteNameFromRoute(route);
    if (
      routeName === "ReservationDetailsScreen" ||
      routeName === "ObjectDetailsScreen"
    ) {
      navigation.setOptions({ tabBarStyle: { display: "none" } });
    } else {
      navigation.setOptions({ tabBarStyle: { display: "flex" } });
    }
  }, [navigation, route]);

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
      <Stack.Screen
        name="ReservationAddGuestScreen"
        component={ReservationAddGuestScreen}
      />
      <Stack.Screen name="ReservationNotesScreen" component={ReservationNotesScreen}/>
    </Stack.Navigator>
  );
};

export default ObjectNavigator;
