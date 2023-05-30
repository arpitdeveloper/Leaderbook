import { Entypo } from "@expo/vector-icons";
import React, { useState, useEffect } from "react";
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
import User_tag from "./taglist/User_tag";
import System_tag from "./taglist/System_tag";
import { STYLES } from "../constant/styles";
import { Colors } from "../constant/colors";
// import Icon from 'react-native-vector-icons/FontAwesome';
const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;

function Tag() {
  const [com, setcom] = useState(false);
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
        <Text style={STYLES.bar_header}>Tags</Text>
      </View>
      
          <View style={styles.tab}>
            <TouchableOpacity
              style={styles.ord}
              onPress={() => {
                setcom("User_tag");
              }}
            >
             
                <Text
                  style={styles.home_text}
                >
                  USER TAGS
                </Text>
             
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.ord}
              onPress={() => {
                setcom("System_tag");
              }}
            >
              
                <Text
                  style={styles.home_text}
                >
                  SYSTEM TAGS
                </Text>
            
              
            </TouchableOpacity>
            
          </View>
          <View
            style={{
              flexDirection: "row",
              
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <View
              style={{
                height: 3,
                width: width * 0.5,
                backgroundColor: com == "User_tag" ? "#ffcc00" : "#003366",
                
              }}
            ></View>

            <View
              style={{
                height: 3,
                width: width * 0.5,
                backgroundColor: com == "System_tag" ? "#ffcc00" : "#003366",
                
              }}
            ></View>
          </View>
       
      <View style={{ flex: 1 }}>
        {com == "User_tag" ? (
          <User_tag />
        ) : com == "System_tag" ? (
          <System_tag />
        ) : (
          setcom("User_tag")
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  home_text:{
    fontSize: 17,
    fontWeight: "600",
    color: "white",
    textAlign: "center",paddingVertical:"3%"
  },

  tab: {
    flexDirection: "row",
    backgroundColor: Colors.MAIN_COLOR,
    alignItems: "center",
    justifyContent: "space-between",paddingHorizontal:"10%"
  },
  ord: {
    backgroundColor: Colors.MAIN_COLOR,
    marginTop: "0%",
    // marginStart: "0%",
    // flex: 0.5,
  },
  add: {
    backgroundColor: Colors.MAIN_COLOR,
    marginTop: "0%",
    
  },
  
});

export default Tag;
