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
import ReservationNotesScreen from "../../screens/shared-screens/ReservationNotesScreen";
import EditNoteScreen from "../../screens/note-screen/EditNoteScreen";

const Stack = createStackNavigator();

const AllReservationsNavigator = () => {
  const navigation = useNavigation();
  const route = useRoute();
  React.useLayoutEffect(() => {
    const routeName = getFocusedRouteNameFromRoute(route);
    if (routeName === "ReservationDetailsScreen" || routeName==="ReservationAddGuestScreen" || routeName==="ReservationNotesScreen" || routeName==="EditNoteScreen") {
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
      <Stack.Screen name="ReservationNotesScreen" component={ReservationNotesScreen}/>
      <Stack.Screen name="EditNoteScreen" component={EditNoteScreen}/>
    </Stack.Navigator>
  );
};

export default AllReservationsNavigator;
