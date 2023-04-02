import React from "react";
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import { useNavigation, useRoute } from "@react-navigation/native";
import Forgot_pasword from "../Password";
const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;

import {
  Entypo,
  Feather,
  AntDesign,
  SimpleLineIcons,
  Ionicons,
  Octicons,
  FontAwesome,
  FontAwesome5,
  EvilIcons,
  MaterialIcons,
  Foundation,
  MaterialCommunityIcons,
  Fontisto,
} from "@expo/vector-icons";

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

function Customdrawer(props) {
  const navigation = useNavigation();
  return (
    <DrawerContentScrollView style={{}} {...props}>
      <View style={styles.container}>
        <View style={styles.up}>
          <View style={{ marginTop: "10%", marginStart: "8%" }}>
            <View style={styles.circle}>
              <Text style={styles.circle_text}>GD</Text>
            </View>

            <Text style={styles.name_text}>Gurinderpal Dhaliwal </Text>
            <Text style={styles.name_text2}>Rival Solutions Websites</Text>
          </View>
        </View>
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate("h")}
        style={{ marginVertical: "10%" }}
      >
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.icon}>
            <Feather name="home" size={30} color="#bfbfbf" />
          </Text>
          <Text style={styles.text}>HOME</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("home")}
        style={{ marginVertical: "10%" }}
      >
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.icon}>
            <SimpleLineIcons name="people" size={30} color="#bfbfbf" />
          </Text>
          <Text style={styles.text}>LEADS</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("tag")}
        style={{ marginVertical: "10%" }}
      >
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.icon}>
            <FontAwesome5 name="tags" size={30} color="#bfbfbf" />
          </Text>
          <Text style={styles.text}>TAG SEARCH</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("tasks")}
        style={{ marginVertical: "10%" }}
      >
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.icon}>
            <Feather name="shopping-bag" size={30} color="#bfbfbf" />
          </Text>
          <Text style={styles.text}>TASKS</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("Appointments")}
        style={{ marginVertical: "10%" }}
      >
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.icon}>
            <Fontisto name="date" size={30} color="#bfbfbf" />
          </Text>
          <Text style={styles.text}>APPOINTMENTS</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("phone")}
        style={{ marginVertical: "10%" }}
      >
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.icon}>
            <MaterialCommunityIcons
              name="phone-classic"
              size={30}
              color="#bfbfbf"
            />
          </Text>
          <Text style={styles.text}>PHONE</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {}} style={{ marginVertical: "10%" }}>
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.icon}>
            <AntDesign name="poweroff" size={30} color="#bfbfbf" />
          </Text>
          <Text style={styles.text}>RECENT CHATS</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {}} style={{ marginVertical: "10%" }}>
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.icon}>
            <AntDesign name="poweroff" size={30} color="#bfbfbf" />
          </Text>
          <Text style={styles.text}>LOG OUT</Text>
        </View>
      </TouchableOpacity>
    </DrawerContentScrollView>
  );
}
const styles = StyleSheet.create({
  container: {},
  circle: {
    height: height * 0.12,
    width: width * 0.25,
    backgroundColor: "white",
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  circle_text: {
    fontSize: 50,
    fontWeight: "400",
    color: "#bfbfbf",
  },
  name_text: {
    fontSize: 23,
    fontWeight: "bold",
    color: "white",
    marginTop: "5%",
  },
  name_text2: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
  up: {
    height: height * 0.28,
    backgroundColor: "#666699",
  },
  text: {
    fontSize: 22,
    color: "black",
    fontWeight: "500",
    marginStart: "1%",
  },
  icon: {
    fontSize: 25,
    color: "#bfbfbf",
    marginStart: "10%",
  },
});

export default Customdrawer;
