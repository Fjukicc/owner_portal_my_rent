import React, { useState, useContext } from "react";

//navigation
import { createStackNavigator } from "@react-navigation/stack";
import {
  getFocusedRouteNameFromRoute,
  useNavigation,
  useRoute,
} from "@react-navigation/native";

//screens
import HomeScreen from "../../screens/home-screens/HomeScreen";
import ReservationDetailsScreen from "../../screens/shared-screens/ReservationDetailsScreen";
import TomorrowArrivals from "../../screens/home-subscreens/TomorrowArrivals";
import TodayArrivals from "../../screens/home-subscreens/TodayArrivals";
import TomorrowDepartures from "../../screens/home-subscreens/TomorrowDepartures";
import TodayDepartures from "../../screens/home-subscreens/TodayDepartures";
import EditNoteScreen from "../../screens/note-screen/EditNoteScreen";

const Stack = createStackNavigator();

const HomeScreenNavigator = () => {
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
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="TomorrowArrivals" component={TomorrowArrivals} />
      <Stack.Screen name="TodayArrivals" component={TodayArrivals} />
      <Stack.Screen name="TomorrowDepartures" component={TomorrowDepartures} />
      <Stack.Screen name="TodayDepartures" component={TodayDepartures} />
      <Stack.Screen name="EditNoteScreen" component={EditNoteScreen}/>
      <Stack.Screen
        name="ReservationDetailsScreen"
        component={ReservationDetailsScreen}
      />
    </Stack.Navigator>
  );
};

export default HomeScreenNavigator;
