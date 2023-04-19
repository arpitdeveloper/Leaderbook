import React, { useEffect, useState } from "react";
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import { useNavigation, useRoute } from "@react-navigation/native";
const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;

import {
  Feather,
  AntDesign,
  SimpleLineIcons,
  FontAwesome5,
  MaterialCommunityIcons,
  Fontisto,
} from "@expo/vector-icons";

import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { ScreenNames } from "../constant/ScreenNames";
import { Colors } from "../constant/colors";
import { STYLES } from "../constant/styles";
import AsyncStorage from "@react-native-async-storage/async-storage";
function Customdrawer(props) {
  const navigation = useNavigation();
  const [First_name, setFirst_name] = React.useState("");
  const [last_name, setLast_name] = React.useState("");

  const [company, setCompany] = React.useState("");

  useEffect(() => {
    (async () => {
      const user = await AsyncStorage.getItem("userInfo");
      const d = JSON.parse(user);
      setCompany(d?.userinfo?.company);
      setFirst_name(d?.userinfo?.first_name);
      setLast_name(d?.userinfo?.last_name);
      //  console.log(d)
    })();
  }, []);
  // console.log(company)
  return (
    <DrawerContentScrollView style={{}} {...props}>
      <View style={styles.up}>
        <View style={{ marginTop: "8%", marginStart: "8%" }}>
          <View style={styles.circle}>
            <Text style={styles.circle_text}>
              {First_name[0]}
              {last_name[0]}
            </Text>
          </View>

          <Text style={styles.name_text}>
            {First_name} {last_name}
          </Text>
          <Text style={styles.name_text2}>{company}</Text>
        </View>
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate(ScreenNames.HOME)}
        style={styles.gap}
      >
        <View style={styles.icon}>
          <Feather name="home" size={35} color={Colors.ICON} />
          <Text style={STYLES.ICON_TEXT}>HOME</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate(ScreenNames.MAIN_SCREEN)}
        style={styles.gap}
      >
        <View style={styles.icon}>
          <SimpleLineIcons name="people" size={35} color={Colors.ICON} />
          <Text style={STYLES.ICON_TEXT}>LEADS</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate(ScreenNames.TAG)}
        style={styles.gap}
      >
        <View style={styles.icon}>
          <FontAwesome5 name="tags" size={28} color={Colors.ICON} />
          <Text style={STYLES.ICON_TEXT}>TAG SEARCH</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate(ScreenNames.TASKS)}
        style={styles.gap}
      >
        <View style={styles.icon}>
          <Feather name="shopping-bag" size={35} color={Colors.ICON} />
          <Text style={STYLES.ICON_TEXT}>TASKS</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate(ScreenNames.APPOINTMENTS)}
        style={styles.gap}
      >
        <View style={styles.icon}>
          <Fontisto name="date" size={35} color={Colors.ICON} />
          <Text style={STYLES.ICON_TEXT}>APPOINTMENTS</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate(ScreenNames.PHONE)}
        style={styles.gap}
      >
        <View style={styles.icon}>
          <MaterialCommunityIcons
            name="phone-classic"
            size={35}
            color={Colors.ICON}
          />

          <Text style={STYLES.ICON_TEXT}>PHONE</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate(ScreenNames.RECENT_CHATS)}
        style={styles.gap}
      >
        <View style={styles.icon}>
          <AntDesign name="poweroff" size={35} color={Colors.ICON} />
          <Text style={STYLES.ICON_TEXT}>RECENT CHATS</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => {}} style={styles.gap}>
        <View style={styles.icon}>
          <AntDesign name="poweroff" size={35} color={Colors.ICON} />
          <Text style={STYLES.ICON_TEXT}>LOG OUT</Text>
        </View>
      </TouchableOpacity>
    </DrawerContentScrollView>
  );
}
const styles = StyleSheet.create({
  
  gap: { marginVertical: "10%" },
  circle: {
    height: height * 0.11,
    width: width * 0.23,
    backgroundColor: "white",
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",elevation:30,
  },
  circle_text: {
    fontSize: 50,
    fontWeight: "500",
    color: "#bfbfbf",
  },
  name_text: {
    fontSize: 23,
    fontWeight: "500",
    color: "white",
    marginTop: "5%",
  },
  name_text2: {
    fontSize: 20,
    fontWeight: "500",
    color: "white",
    width: width * 0.5,
  },
  up: {
    height: height * 0.28,
    backgroundColor: "#666699",
  },

  icon: {
    flexDirection: "row",
    marginStart: "7%",
  },
});

export default Customdrawer;
