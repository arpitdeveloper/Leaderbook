import React from "react";
import { useNavigation, useRoute } from "@react-navigation/native";

import base64 from "react-native-base64";

import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
  Dimensions,
  TouchableOpacity,
  Alert,
} from "react-native";
import { LOGIN, send_sign_up } from "./Services";
import AsyncStorage from "@react-native-async-storage/async-storage";

const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;

function Login_screen() {
  const navigation = useNavigation();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  React.useEffect(()=>{
(async()=>{
const user = await AsyncStorage.getItem("userInfo")
if(user){
navigation.navigate("drawer")
}
})()
},[])


  const login_method = async () => {
    if (email == "") {
      alert("Please enter email");
    } else if (password == "") {
      alert("Please enter password");
    } else {
      try {
        setLoading(true);
const pwd = await  base64.encode(password)
        const data = {
          email: email,
          password: pwd,
        };
        LOGIN(data)
          .then((response) => response.json())
          .then((result) => {
            setLoading(false);
if(result.status == 1){
            AsyncStorage.setItem("userInfo", JSON.stringify(result.data))
              .then(() => {
                navigation.navigate("drawer");
              })
              .catch((e) => alert(e));
         
      }else{
alert(result.message)
}
 });
      } catch (error) {
        console.log("error==>" + error);
        alert(error);
      }
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <View style={styles.header}>
          <Text style={styles.login}>Login</Text>
        </View>
        <TextInput
          style={styles.input}
          placeholder="Email"
          onChangeText={(txt) => setEmail(txt)}
          value={email}
          placeholderTextColor={"#bfbfbf"}
          maxLength={40}
          keyboardType="email-address"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          onChangeText={(value2) => setPassword(value2)}
          placeholderTextColor={"#bfbfbf"}
          secureTextEntry={true}
          value={password}
        />
        <TouchableOpacity
          // onPress={() => navigation.navigate("drawer")}
          onPress={login_method}
          style={styles.button}
        >
          <Text style={styles.login1}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate("Forgot_password")}
          style={styles.fp}
        >
          <Text style={styles.fp_text}>Forgot Password?</Text>
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
    color: "#808080",
    fontSize: 20,
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
    fontWeight: "500",
    marginTop: "5%",
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
