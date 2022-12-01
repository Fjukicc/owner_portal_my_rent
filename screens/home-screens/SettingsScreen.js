import { StyleSheet, SafeAreaView, View } from "react-native";
import React, { useContext } from "react";
//context
import { UserContext } from "../../context/UserProvider";

//components
import MainButton from "../../components/general-components/MainButton";
import Header from "../../components/general-components/Header";
import UserInfo from "../../components/general-components/UserInfo";

//static
import { container } from "../../static/Container";

const SettingsScreen = () => {
  //user context -> temp
  const { setIsLoggedIn } = useContext(UserContext);

  const onLogoutPress = () => {
    setIsLoggedIn(false);
  };
  return (
    <View style={container.defaultContainer}>
      <Header title="Settings" />
      <View style={{marginTop: 12}}/>
      <UserInfo/>
      <MainButton onButtonPress={onLogoutPress} text="Logout" />
    </View>
  );
};

export default SettingsScreen;

const styles = StyleSheet.create({});
