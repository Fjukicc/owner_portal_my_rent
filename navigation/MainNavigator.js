import React from "react";
//tab navigator
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

//icons
import { Feather } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

//screens
import ObjectNavigator from "./screen-navigators/ObjectNavigator";
import HomeScreen from "../screens/home-screens/HomeScreen";
import InvoicesScreen from "../screens/home-screens/InvoicesScreen";
import SettingsScreen from "../screens/home-screens/SettingsScreen";
import AllReservations from "../screens/home-screens/AllReservations";

const Tab = createBottomTabNavigator();

const MainNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarLabel: "Upcoming",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
            name="calendar-arrow-right"
            size={size}
            color={color}
          />
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
        name="AllReservationsScreen"
        component={AllReservations}
        options={{
          tabBarLabel: "Reservations",
          tabBarIcon: ({ color, size }) => (
            <Feather name="list" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="InvoicesScreen"
        component={InvoicesScreen}
        options={{
          tabBarLabel: "Invoices",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="account-balance" size={size} color={color} />
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
