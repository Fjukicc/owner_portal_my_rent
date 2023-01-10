import React, { useState, useContext } from "react";

//navigation
import { createStackNavigator } from "@react-navigation/stack";
import {
  getFocusedRouteNameFromRoute,
  useNavigation,
  useRoute,
} from "@react-navigation/native";

//screens
import NotesScreen from "../../screens/home-screens/NotesScreen";
import AddNoteScreen from "../../screens/note-screen/AddNoteScreen";
import EditNoteScreen from "../../screens/note-screen/EditNoteScreen";

const Stack = createStackNavigator();

const NotesNavigator = () => {
  const navigation = useNavigation();
  const route = useRoute();
  React.useLayoutEffect(() => {
    const routeName = getFocusedRouteNameFromRoute(route);
    if (routeName === "AddNoteScreen" || routeName === "EditNoteScreen") {
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
      <Stack.Screen name="NotesScreen" component={NotesScreen} />
      <Stack.Screen
        name="AddNoteScreen"
        component={AddNoteScreen}
      />
      <Stack.Screen
        name="EditNoteScreen"
        component={EditNoteScreen}
      />
    </Stack.Navigator>
  );
};

export default NotesNavigator;
