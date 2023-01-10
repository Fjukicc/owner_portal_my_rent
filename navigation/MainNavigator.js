import React from "react";
//tab navigator
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

//icons
import { Feather } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";

//screens
import ObjectNavigator from "./screen-navigators/ObjectNavigator";
import HomeScreenNavigator from "./screen-navigators/HomeScreenNavigator";
// import NotesScreen from "../screens/home-screens/NotesScreen";
import NotesNavigator from "./screen-navigators/NotesNavigator";
import SettingsScreen from "../screens/home-screens/SettingsScreen";
import CalendarNavigator from "./screen-navigators/CalendarNavigator";
import AllReservationsNavigator from "./screen-navigators/AllReservationsNavigator";

const Tab = createBottomTabNavigator();

const MainNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="HomeScreenNavigator"
        component={HomeScreenNavigator}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <Feather name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="AllReservationsNavigator"
        component={AllReservationsNavigator}
        options={{
          tabBarLabel: "Reservations",
          tabBarIcon: ({ color, size }) => (
            <Feather name="list" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="ObjectNavigator"
        component={ObjectNavigator}
        options={{
          tabBarLabel: "Objects",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="cube-outline"
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="CalendarNavigator"
        component={CalendarNavigator}
        options={{
          tabBarLabel: "Calendar",
          tabBarIcon: ({ color, size }) => (
            <Feather name="calendar" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="NotesNavigator"
        component={NotesNavigator}
        options={{
          tabBarLabel: "My Notes",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="sticky-note" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="SettingsScreen"
        component={SettingsScreen}
        options={{
          tabBarLabel: "Settings",
          tabBarIcon: ({ color, size }) => (
            <Feather name="settings" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default MainNavigator;
