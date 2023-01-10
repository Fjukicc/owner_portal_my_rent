import React, { useState, useContext } from "react";

//navigation
import { createStackNavigator } from "@react-navigation/stack";
import {
  getFocusedRouteNameFromRoute,
  useNavigation,
  useRoute,
} from "@react-navigation/native";

//screens
import AllReservations from "../../screens/home-screens/AllReservations";
import ReservationDetailsScreen from "../../screens/shared-screens/ReservationDetailsScreen";
import ReservationAddGuestScreen from "../../screens/shared-screens/ReservationAddGuestScreen";

const Stack = createStackNavigator();

const AllReservationsNavigator = () => {
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
      <Stack.Screen name="AllReservations" component={AllReservations} />
      <Stack.Screen
        name="ReservationDetailsScreen"
        component={ReservationDetailsScreen}
      />
      <Stack.Screen name="ReservationAddGuestScreen" component={ReservationAddGuestScreen}/>
    </Stack.Navigator>
  );
};

export default AllReservationsNavigator;
