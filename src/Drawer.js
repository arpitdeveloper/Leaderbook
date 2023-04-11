import React from "react";
import { useNavigation, useRoute } from "@react-navigation/native";

import { SafeAreaView, StyleSheet, Dimensions } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Customdrawer from "./components/Custom_Drawer";

import Tag from "./components/Tag";
import Tasks from "./components/Tasks";
import Appointments from "./components/Appointments";
import Phone from "./components/Phone";
import Last_logged_users from "./components/home1_data/Last_logged_users";
import Most_active_users from "./components/home1_data/Most_active_users";
import Edit_profile from "./components/home1_data/Edit_profile";
import Main_Screen from "./Main/Main_screen";
import Home from "./components/Home";
import { ScreenNames } from "./constant/ScreenNames";
import Add_appointment from "./components/taglist/Appointment/Add_appointment";

const Drawer = createDrawerNavigator();

const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;

function Drawer_screen() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <Drawer.Navigator
        screenOptions={{ headerShown: false }}
        drawerContent={(props) => <Customdrawer {...props} />}
      >
        <Drawer.Screen name={ScreenNames.MAIN_SCREEN} component={Main_Screen} />
        <Drawer.Screen name={ScreenNames.HOME} component={Home} />
        <Drawer.Screen name={ScreenNames.TAG} component={Tag} />
        <Drawer.Screen name={ScreenNames.TASKS} component={Tasks} />
        <Drawer.Screen name={ScreenNames.APPOINTMENTS} component={Appointments}/>
        <Drawer.Screen name={ScreenNames.PHONE} component={Phone} />
        <Drawer.Screen name={ScreenNames.LAST_LOGGED_USERS}  component={Last_logged_users}  />
        <Drawer.Screen  name={ScreenNames.MOST_ACTIVE_USERS} component={Most_active_users}  />
        <Drawer.Screen  name={ScreenNames.EDIT_PROFILE}  component={Edit_profile}  />
        <Drawer.Screen  name={ScreenNames.ADD_APPOINTMENT}  component={Add_appointment}  />
      </Drawer.Navigator>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: height * 0.12,
    backgroundColor: "#003366",
    alignItems: "center",

    // marginTop: 25,
    flexDirection: "row",
  },
  headertxt1: {
    fontSize: 16,
    marginStart: "8%",
    marginTop: "7%",
    flex: 0.45,
  },

  headertxt2: {
    color: "white",
    fontWeight: "bold",
    fontSize: 25,
    marginTop: "7%",
    flex: 0.5,
  },
  headertxt3: {
    fontSize: 16,
    marginTop: "7%",
    flex: 0.2,
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
    fontWeight: "400",
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

export default Drawer_screen;
