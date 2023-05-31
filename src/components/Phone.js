import React, { useState } from "react";

import {
  Entypo,
  Ionicons,
  Feather,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import {
  Dimensions,
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
Image
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { useNavigation, useRoute } from "@react-navigation/native";
import { STYLES } from "../constant/styles";
import { Images } from "../constant/images";
// import Icon from 'react-native-vector-icons/FontAwesome';
const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;

function Phone() {
  const navigation = useNavigation();
  const [com, setcom] = useState("");
  return (
    <SafeAreaView style={styles.container}>
      <View style={STYLES.header_box}>
        <TouchableOpacity
          style={STYLES.back_button}
          onPress={() => navigation.toggleDrawer()}
        >
          <Image source={Images.menu} style={styles.icon}/>
        </TouchableOpacity>
        <Text style={{...STYLES.header,alignSelf:'center', marginRight:0}}>Phone</Text>
        <TouchableOpacity style={STYLES.save_touch} onPress={() => {}}>
          <Text style={STYLES.save_text}> SAVE </Text>
        </TouchableOpacity>
      </View>
      <Text
        style={{
          color: "black",
          fontSize: 19,
          marginTop: "10%",
          marginHorizontal: "6%",
        }}
      >
        Choose Calling Method
      </Text>
      <TouchableOpacity
        onPress={() => {
          setcom("By Twilio");
        }}
        style={styles.button}
        activeOpacity={1}
      >
        {com == "By Twilio" ? (
          <Text style={styles.circle2}>
            <MaterialCommunityIcons
              name="checkbox-marked-circle"
              size={31}
              color="black"
            />
          </Text>
        ) : (
          <Text style={styles.circle}></Text>
        )}

        <Text style={styles.login}>By Twilio</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          setcom("By Phone");
        }}
        style={styles.button}
        activeOpacity={1}
      >
        {com == "By Phone" ? (
          <Text style={styles.circle2}>
            <MaterialCommunityIcons
              name="checkbox-marked-circle"
              size={31}
              color="black"
            />
          </Text>
        ) : (
          <Text style={styles.circle}></Text>
        )}

        <Text style={styles.login}>By Phone</Text>
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
    height: height * 0.034,
    width: "8%",
    borderWidth: 1,
    borderRadius: 15,
  },
  circle2: {
    marginStart: "3%",

    width: "8%",

    borderRadius: 15,
    textAlign: "center",
    justifyContent: "center",
    alignContent: "center",
  },
  icon: {
    height: 22,
    width: 22,
    resizeMode: "contain",
  },
});

export default Phone;
