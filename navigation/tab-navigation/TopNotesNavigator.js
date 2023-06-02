import React from "react";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

//pages
import MyNotes from "../../screens/home-screens/notes-screens/MyNotes";
import AgencyNotes from "../../screens/home-screens/notes-screens/AgencyNotes";
//components
import Header from "../../components/general-components/Header";

const Tab = createMaterialTopTabNavigator();

const TopNotesNavigator = () => {
  return (
    <>
      <Header title="Notes" />
      <Tab.Navigator>
        <Tab.Screen name="My Notes" component={MyNotes}/>
        <Tab.Screen name="Agency Notes" component={AgencyNotes}/>
      </Tab.Navigator>
    </>
  );
};

export default TopNotesNavigator;
