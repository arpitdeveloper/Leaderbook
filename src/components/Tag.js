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
      <View style={{}}>
        <View>
          <View style={styles.tab}>
            <TouchableOpacity
              style={styles.ord}
              onPress={() => {
                setcom("MY ORDERS");
              }}
            >
              <View style={styles.home_text}>
                <Text
                  style={{
                    fontSize: 18,
                    fontWeight: "600",
                    color: "white",
                    textAlign: "center",
                  }}
                >
                  USER TAGS
                </Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.add}
              onPress={() => {
                setcom("MY ADDRESSES");
              }}
            >
              <View style={styles.home_text}>
                <Text
                  style={{
                    fontSize: 18,
                    fontWeight: "600",
                    color: "white",
                    textAlign: "center",
                  }}
                >
                  SYSTEM TAGS
                </Text>
              </View>
              {/* <View
                  style={{
                    height: 2,
                    width: 100,
                    backgroundColor: com == "MY ADDRESSES" ? "#ffcc00" : "#003366",
                    marginTop: "10%",
                  }}
                ></View> */}
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.setting}
              onPress={() => {
                setcom("MY ADDRESSES");
              }}
            ></TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: "row",
              backgroundColor: "#003366",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <View
              style={{
                height: 3,
                width: width * 0.5,
                backgroundColor: com == "MY ORDERS" ? "#ffcc00" : "#003366",
                marginTop: "2%",
              }}
            ></View>

            <View
              style={{
                height: 3,
                width: width * 0.5,
                backgroundColor: com == "MY ADDRESSES" ? "#ffcc00" : "#003366",
                marginTop: "2%",
              }}
            ></View>
          </View>
        </View>
      </View>
      <View style={{ flex: 1 }}>
        {com == "MY ORDERS" ? (
          <User_tag />
        ) : com == "MY ADDRESSES" ? (
          <System_tag />
        ) : (
          setcom("MY ORDERS")
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  tab: {
    flexDirection: "row",
    backgroundColor: "#003366",
    alignItems: "center",
    justifyContent: "center",
  },
  ord: {
    backgroundColor: "#003366",
    marginTop: "0%",
    marginStart: "5%",
    flex: 0.5,
  },
  add: {
    backgroundColor: "#003366",
    marginTop: "0%",
    flex: 0.55,
  },
  setting: {
    backgroundColor: "#003366",
    marginTop: "5%",

    marginBottom: 0,
  },
});

export default Tag;
