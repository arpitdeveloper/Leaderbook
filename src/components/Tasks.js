import React from "react";

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
import {
  SafeAreaView,
  Dimensions,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

import { useNavigation, useRoute } from "@react-navigation/native";
// import Icon from 'react-native-vector-icons/FontAwesome';
const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;

function Tasks() {
    const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.headertxt1}
          onPress={() => navigation.toggleDrawer()}
        >
           <Entypo name="menu" size={30} color="white" />
        </TouchableOpacity>
        <Text style={styles.headertxt2}>Home</Text>
      
      </View>
      <TouchableOpacity
        // onPress={() => navigation.navigate("drawer")}
        style={styles.button}>
            <View style={{flexDirection:"row",marginStart:"2%"}}>
            <Ionicons name="md-person-sharp" size={30} color="white" />
          <Text style={styles.login}>Last Logged Users</Text>
            </View>
             
        </TouchableOpacity>
        <TouchableOpacity
        // onPress={() => navigation.navigate("drawer")}
        style={styles.button}>
            <View style={{flexDirection:"row",marginStart:"2%"}}>
            <Ionicons name="md-person-sharp" size={30} color="white" />
          <Text style={styles.login}>Most Active Users</Text>
            </View>
             
        </TouchableOpacity>
        <TouchableOpacity
        // onPress={() => navigation.navigate("drawer")}
        style={styles.button}>
            <View style={{flexDirection:"row",marginStart:"2%"}}>
            <Ionicons name="md-person-sharp" size={30} color="white" />
          <Text style={styles.login}>Recent Leads</Text>
            </View>
             
        </TouchableOpacity>
        <TouchableOpacity
        // onPress={() => navigation.navigate("drawer")}
        style={styles.button}>
            <View style={{flexDirection:"row",marginStart:"2%"}}>
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
  
  button: {
    height: height * 0.075,
    width: width * 0.9,
    marginTop: "5%",

    
    alignSelf: "center",
    backgroundColor: "#003366",
    elevation: 1,
    borderRadius: 8,
    justifyContent: "center",
    
  },
  login: {
    textAlign: "center",
    color: "white",
    fontSize: 21,marginStart:"3%",fontWeight:"400"
    
  },
//   header: {
//     height: height * 0.1,
//     backgroundColor: "#003366",
//     justifyContent: "space-between",
//     alignItems: "center",flexDirection:"row",
//   },
header: {
    height: height * 0.12,
    backgroundColor: "#003366",
    alignItems: "center",
   
    // marginTop: 25,
    flexDirection: "row",marginBottom:"3%"
  },
  headertxt1: {
   
    fontSize: 16,
    marginStart: "8%",marginTop:"7%",flex:0.5
  },

  headertxt2: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
    marginTop:"7%"
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

export default Tasks;
