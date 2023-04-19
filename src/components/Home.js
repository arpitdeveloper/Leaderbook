import React from "react";

import { Entypo, Ionicons } from "@expo/vector-icons";
import {
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

import { useNavigation } from "@react-navigation/native";
import { ScreenNames } from "../constant/ScreenNames";
import { STYLES } from "../constant/styles";

function Home() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <View style={STYLES.header_box}>
        <TouchableOpacity
          style={STYLES.side_bar}
          onPress={() => navigation.toggleDrawer()}
        >
          <Entypo name="menu" size={35} color="white" />
        </TouchableOpacity>
        <Text style={STYLES.bar_header}>Home</Text>
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
