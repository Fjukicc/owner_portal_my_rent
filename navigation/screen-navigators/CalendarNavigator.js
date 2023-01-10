import React, { useState, useContext } from "react";

//navigation
import { createStackNavigator } from "@react-navigation/stack";
import {
  getFocusedRouteNameFromRoute,
  useNavigation,
  useRoute,
} from "@react-navigation/native";

//screens
import CalendarScreen from "../../screens/home-screens/CalendarScreen"
import ReservationDetailsScreen from "../../screens/shared-screens/ReservationDetailsScreen";

const Stack = createStackNavigator();

const CalendarNavigator = () => {
  const navigation = useNavigation();
  const route = useRoute();
  React.useLayoutEffect(() => {
    const routeName = getFocusedRouteNameFromRoute(route);
    if (routeName === "ReservationDetailsScreen") {
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
      <Stack.Screen name="CalendarScreen" component={CalendarScreen} />
      <Stack.Screen
        name="ReservationDetailsScreen"
        component={ReservationDetailsScreen}
      />
    </Stack.Navigator>
  );
};

export default CalendarNavigator;
