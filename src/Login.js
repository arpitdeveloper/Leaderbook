

import React from "react";
import { useNavigation, useRoute } from "@react-navigation/native";

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  View,
  Dimensions,
  Button,
  TouchableOpacity,
} from "react-native";


const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;

function Login_screen() {
    const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <View style={styles.header}>
          <Text style={styles.login}>Login</Text>
        </View>
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor={"#bfbfbf"}
          maxLength={40}
        keyboardType="email-address"
          // onChangeText={onChangeText}
          // value={text}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor={"#bfbfbf"}
          maxLength={5}
       
        secureTextEntry={true}
          // onChangeText={onChangeText}
          // value={text}
        />
        <TouchableOpacity
        onPress={() => navigation.navigate("drawer")}
        style={styles.button}>
          <Text style={styles.login1}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity 
        onPress={() => navigation.navigate("Forgot_password")}
        style={styles.fp}
         
        >
          <Text style={styles.fp_text}
          
          >Forgot Password?</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
      },
  input: {
    height: height * 0.075,
    width: width * 0.9,
    marginTop: 30,

    padding: 10,
    alignSelf: "center",
    backgroundColor: "white",
    elevation: 1,
    borderRadius: 6,
    color: "#808080",fontSize:20
  },
  button: {
    height: height * 0.085,
    width: width * 0.9,
    marginTop: 30,

    padding: 10,
    alignSelf: "center",
    backgroundColor: "#003366",
    elevation: 1,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  login: {
    textAlign: "center",
    color: "white",
    fontSize: 30,
    fontWeight: "500",marginTop:"5%"
  },
  login1: {
    textAlign: "center",
    color: "white",
    fontSize: 30,
    fontWeight: "500",
  },
  header: {
    height: height * 0.12,
    backgroundColor: "#003366",
    justifyContent: "center",
    alignItems: "center",
  },
  fp: {},
  fp_text: {
    fontSize: 15,
    color: "black",
    textAlign: "right",
    fontWeight: "500",
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
});

export default Login_screen;
