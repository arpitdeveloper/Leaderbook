import React, { useState, useEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import {
  Entypo,
  Ionicons,
  MaterialCommunityIcons,
  FontAwesome5,
  FontAwesome,
} from "@expo/vector-icons";
import { STYLES } from "../../constant/styles";
import { Colors } from "../../constant/colors";

const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;

function Lead_activity({ navigation }) {
  const route = useRoute();
    const name= route.params.name
    // const logo=route.params.logo
// console.log(logo)
  return (
    <SafeAreaView style={styles.container}>
      <View style={STYLES.header_box}>
        <TouchableOpacity
          style={STYLES.back_button}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="arrow-back-outline" size={40} color="white" />
        </TouchableOpacity>
        <Text style={STYLES.header}></Text>
        <TouchableOpacity
          style={STYLES.save_touch}
          // onPress={() => navigation.toggleDrawer()}
        >
          <Ionicons
            style={{ transform: [{ rotate: "270deg" }] }}
            name="options-outline"
            size={40}
            color="white"
          />
        </TouchableOpacity>
      </View>
      <View
        style={{
          flexDirection: "row",
          backgroundColor: Colors.MAIN_COLOR,
          marginTop: "-3%",
        }}
      >
        <View
          style={{
            height: height * 0.07,
            width: width * 0.15,

            borderRadius: 40,
            alignItems: "center",
            justifyContent: "center",
            marginStart: "7%",
            backgroundColor: "#666699",
            marginBottom: "3%",
          }}
        >
          <Text style={{ fontSize: 28, fontWeight: "bold", color: "white" }}>
          {route.params.logo1}{route.params.logo2? route.params.logo2 : null}
          </Text>
        </View>
        <Text
          style={{
            fontSize: 22,
            marginStart: "3%",
            fontWeight: "500",
            color: "white",
          }}
        >
          {name}
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  circle: {
    alignItems: "center",
    justifyContent: "center",
    elevation: 30,
  },
  circle_text: {
    fontSize: 10,
    fontWeight: "500",
    color: "#bfbfbf",
  },
  text: {
    fontSize: 17,
    fontWeight: "500",
    color: "white",
    textAlign: "center",
  },

  tab: { flexDirection: "row", backgroundColor: Colors.MAIN_COLOR },
  ord: {
    backgroundColor: Colors.MAIN_COLOR,

    flex: 0.35,
  },
  add: {
    backgroundColor: Colors.MAIN_COLOR,
    flex: 0.4,
  },
  setting: {
    backgroundColor: Colors.MAIN_COLOR,

    flex: 0.3,
  },
});

export default Lead_activity;
