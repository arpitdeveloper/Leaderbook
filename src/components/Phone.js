import React from "react";

import { Entypo, Ionicons, Feather } from "@expo/vector-icons";
import {
  SafeAreaView,
  Dimensions,
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

import { useNavigation, useRoute } from "@react-navigation/native";
import { STYLES } from "../constant/styles";
// import Icon from 'react-native-vector-icons/FontAwesome';
const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;

function Phone() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <View style={STYLES.header_box}>
        <TouchableOpacity
          style={STYLES.back_button}
          onPress={() => navigation.toggleDrawer()}
        >
          <Entypo name="menu" size={35} color="white" />
        </TouchableOpacity>
        <Text style={STYLES.header}>Phone</Text>
        <TouchableOpacity style={STYLES.save_touch} onPress={() => {}}>
          <Text style={STYLES.save_text}>SAVE</Text>
        </TouchableOpacity>
      </View>
      <Text style={{color:"black",fontSize:19,marginTop:"10%",marginHorizontal:"6%"}}>Choose Calling Method</Text>
      <TouchableOpacity onPress={() => {}} style={styles.button}>
        <Text style={styles.circle}>
          {/* <Feather name="circle" size={24} color="black" /> */}
        </Text>

        <Text style={styles.login}>By Twilio</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {}} style={styles.button}>
        <Text style={styles.circle}>
          {/* <Feather name="circle" size={24} color="black" /> */}
        </Text>

        <Text style={styles.login}>By Twilio</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },

  button: {
    height: "7%",
    width: "90%",
    marginVertical: "2%",
    borderRadius: 8,
    alignSelf: "center",
    borderWidth: 1.5,
    flexDirection: "row",
    alignItems: "center",
  },
  login: {
    textAlign: "center",
    color: "black",
    fontSize: 19,
    marginStart: "5%",
    fontWeight: "500",
  },
  circle: {
    marginStart: "3%",
    height: height * 0.035,
    width: "8%",
    borderWidth: 1,
    borderRadius: 15,
  },
});

export default Phone;
