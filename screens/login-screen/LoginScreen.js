import { View, TextInput, Text, StyleSheet } from "react-native";
import React, { useState, useContext } from "react";
//context
import { UserContext } from "../../context/UserProvider";

//components
import Button from "../../components/general-components/MainButton";
//static
import { container } from "../../static/Container";
//icons
import { Feather } from "@expo/vector-icons";

const LoginScreen = () => {
  //user context
  const { setIsLoggedIn } = useContext(UserContext);

  //login states
  const [usernameText, setUsernameText] = useState("");
  const [password, setPassword] = useState("");

  const onLoginButtonPress = () => {
    setIsLoggedIn(true);
  };

  return (
    <View style={[container.defaultContainer, { justifyContent: "center" }]}>
      <TextInput
        style={styles.input}
        onChangeText={setUsernameText}
        placeholder="Username"
        value={usernameText}
      />
      <TextInput
        secureTextEntry={true}
        style={[styles.input, { marginBottom: 24 }]}
        onChangeText={setPassword}
        value={password}
        placeholder="Password"
      />
      <Button
        text="Login"
        onButtonPress={onLoginButtonPress}
        icon={<Feather name="log-in" size={18} color="#fff" />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    width: "100%",
    height: 48,
    marginBottom: 16,
    padding: 10,
    borderRadius: 12,
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
});

export default LoginScreen;
