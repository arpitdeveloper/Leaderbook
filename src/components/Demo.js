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

function Demo() {
    const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      
      <View style={styles.header}>
        
        <Text style={styles.headertxt2}>demo</Text>
      
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    marginTop: 50,

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
    fontSize: 20,
    fontWeight: "bold",
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
    flexDirection: "row",justifyContent:"center"
  },
  headertxt1: {
   
    fontSize: 16,
    marginStart: "8%",marginTop:"7%",flex:0.5
  },

  headertxt2: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
    marginTop:"7%",textAlign:"center"
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

export default Demo;
