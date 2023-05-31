import React from "react";

import { Entypo, Ionicons } from "@expo/vector-icons";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { useNavigation } from "@react-navigation/native";
import { ScreenNames } from "../constant/ScreenNames";
import { STYLES } from "../constant/styles";
import { Dimensions } from "react-native";
import Header from "./header";
import { Images } from "../constant/images";

function Home() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <Header
        label="Home"
        leftIcon={Images.menu}
        rightIcon={Images.search}
        onLeftPress={() => navigation.toggleDrawer()}
        onRightPress={() => navigation.navigate(ScreenNames.LAST_LOGGED_USERS)}
      />
      <View
        style={{
          ...STYLES.header_box,
          width: Dimensions.get("window").width,
          display: "none",
        }}
      >
        <TouchableOpacity
          style={{ ...STYLES.side_bar, flex: 1 }}
          onPress={() => navigation.toggleDrawer()}
        >
          <Entypo name="menu" size={35} color="white" />
        </TouchableOpacity>
        <Text style={{ ...STYLES.bar_header, flex: 1 }}>Home</Text>
        <Text style={{ flex: 1 }}></Text>
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate(ScreenNames.LAST_LOGGED_USERS)}
        style={STYLES.button}
      >
        <View style={{ flexDirection: "row", marginStart: "2%" }}>
          <Ionicons name="md-person-sharp" size={30} color="white" />
          <Text style={styles.login}>Last Logged Users</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate(ScreenNames.MOST_ACTIVE_USERS)}
        style={STYLES.button}
      >
        <View style={{ flexDirection: "row", marginStart: "2%" }}>
          <Ionicons name="md-person-sharp" size={30} color="white" />
          <Text style={styles.login}>Most Active Users</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={STYLES.button}
      >
        <View style={{ flexDirection: "row", marginStart: "2%" }}>
          <Ionicons name="md-person-sharp" size={30} color="white" />
          <Text style={styles.login}>Recent Leads</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate(ScreenNames.EDIT_PROFILE)}
        style={STYLES.button}
      >
        <View style={{ flexDirection: "row", marginStart: "2%" }}>
          <Ionicons name="md-person-sharp" size={30} color="white" />
          <Text style={styles.login}>Edit Profile</Text>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  login: {
    textAlign: "center",
    color: "white",
    fontSize: 21,
    marginStart: "3%",
    fontWeight: "400",
  },
});

export default Home;
