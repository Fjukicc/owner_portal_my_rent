import React, { useState, useContext } from "react";
//context
import { UserContext } from "../context/UserProvider";

//navigation
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

//screens
import MainNavigator from "./MainNavigator";
import LoginScreen from "../screens/login-screen/LoginScreen";

const Stack = createStackNavigator();

const LoginNavigator = () => {
  //context
  const { isLoggedIn } = useContext(UserContext);

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        {isLoggedIn ? (
          <Stack.Screen name="MainNavigator" component={MainNavigator} />
        ) : (
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default LoginNavigator;
