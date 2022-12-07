import { View, TextInput, Text, StyleSheet } from "react-native";
import React, { useState, useContext } from "react";
//context
import { UserContext } from "../../context/UserProvider";
//axios
import axios from "axios";

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
    console.log(usernameText);
    console.log(password);
    // fetch('https://apit.my-rent.net/owners_app/rents_rent_add', {
    //   method: 'POST',
    //   headers: {
    //     "Authorization": "735df8e5-df46-11e6-84e2-0050563c3009",
    //     "Content-Type": "application/json"
    //   },
    //   body: JSON.stringify({
    //     u: usernameText,
    //     p: password,
    //   })
    // }).then((res)=>console.log(JSON.stringify(res))).catch((err)=>console.log(JSON.stringify(err)))

    axios
      .post(
        `https:/apit.my-rent.net/owners_app/get_guid?u=${usernameText}&p=${password}`
      )
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
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
