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
} from "@expo/vector-icons";

import { createDrawerNavigator } from "@react-navigation/drawer";
import Customdrawer from "./components/Custom_Drawer";
import Home from "./home/Home_screen";
import Home1 from "./components/Home1";
import Tag from "./components/Tag";
import Tasks from "./components/Tasks";
import Appointments from "./components/Appointments";
import Phone from "./components/Phone";

const Drawer = createDrawerNavigator();

const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;

// function NotificationsScreen({ navigation }) {
//   return (
//     // <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
//     //   <Button onPress={() => navigation.toggleDrawer()} title="Go back home" />
//     // </View>
//     <View style={styles.header}>
//         <TouchableOpacity
//           style={styles.headertxt1}
//           onPress={() => navigation.toggleDrawer()}
//         >
//           <Entypo name="menu" size={30} color="white" />
//         </TouchableOpacity>
//         <Text style={styles.headertxt2}>Leads</Text>
//         <TouchableOpacity
//           style={styles.headertxt3}
//           onPress={() => navigation.toggleDrawer()}
//         >
//           <Ionicons name="search" size={30} color="white" />
//         </TouchableOpacity>
//       </View>
//   );
// }

function Drawer_screen() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <Drawer.Navigator
        screenOptions={{ headerShown: false }}
        drawerContent={(props) => <Customdrawer {...props} />}
      >
        <Drawer.Screen name="home" component={Home} />
        <Drawer.Screen name="h" component={Home1} />
        <Drawer.Screen name="tag" component={Tag} />
        <Drawer.Screen name="tasks" component={Tasks} />
        <Drawer.Screen name="Appointments" component={Appointments} />
        <Drawer.Screen name="phone" component={Phone} />
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


