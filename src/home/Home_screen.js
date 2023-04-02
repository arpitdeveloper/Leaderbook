import React, { useState, useEffect } from "react";

import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import {
  Entypo,
  Ionicons,
} from "@expo/vector-icons";
import Recent from "./Recent";
import Priority from "./Priority";
import All from "./All";

const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;

export default function Home({ navigation }) {
  const [com, setcom] = useState(false);

  return (
    <SafeAreaView style={{flex:1}}>
     
      <View style={styles.header}>
          <TouchableOpacity
            style={styles.headertxt1}
            onPress={() => navigation.toggleDrawer()}
          >
            <Entypo name="menu" size={30} color="white" />
          </TouchableOpacity>
          <Text style={styles.headertxt2}>Leads</Text>
          <TouchableOpacity
            style={styles.headertxt3}
            // onPress={() => navigation.toggleDrawer()}
          >
            <Ionicons name="search" size={30} color="white" />
          </TouchableOpacity>
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
                      fontWeight: "500",
                      color: "white",
                      textAlign: "center",
                    }}
                  >
                    RECENT
                  </Text>
                </View>
                {/* <View
                  style={{
                    height: 2,
                    width: width*0.5,
                    backgroundColor: com == "MY ORDERS" ? "#ffcc00" : "#003366",
                    marginTop: "10%",
                  }}
                ></View> */}
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
                      fontWeight: "500",
                      color: "white",
                      textAlign: "center",
                    }}
                  >
                    PRIORITY
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
                  setcom("ALL SETTINGS");
                }}
              >
                <View style={styles.home_text}>
                  <Text
                    style={{
                      fontSize: 18,
                      fontWeight: "500",
                      color: "white",
                      textAlign: "center",
                    }}
                  >
                    ALL
                  </Text>
                </View>
                {/* <View
                  style={{
                    height: 2,
                    width: 100,
                    backgroundColor: com == "ALL SETTINGS" ? "#ffcc00" : "#003366",
                    marginTop: "10%",
                  }}
                ></View> */}
              </TouchableOpacity>
            </View>
            <View style={{ flexDirection: "row",backgroundColor: "#003366", }}>
              <View
                style={{
                  height: 2,
                  width: width * 0.3,
                  backgroundColor:
                   com == "MY ORDERS" ? "#ffcc00" : "#003366",
                  marginTop: "5%",
                }}
              ></View>
              
              <View
                style={{
                  height: 2,
                  width: width * 0.3,
                  backgroundColor:
                    com == "MY ADDRESSES" ? "#ffcc00" : "#003366",
                  marginTop: "5%",marginStart:"10%",
                }}
              ></View>
              <View
                style={{
                  height: 2,
                  width: width * 0.3,
                  backgroundColor:
                    com == "ALL SETTINGS" ? "#ffcc00" : "#003366",
                  marginTop: "5%",marginStart:"5%",
                }}
              ></View>
            </View>
          </View>
        </View>
      <View style={{flex:1}}>
        {com == "MY ORDERS" ? (

          <Recent />

        ) : com == "MY ADDRESSES" ? (
          <Priority  />
        ) : com == "ALL SETTINGS" ? (
          <All navigation={navigation}  />
        ) : (
          setcom("MY ORDERS")
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    
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
  top: { backgroundColor: "white" },

  tab: { flexDirection: "row", backgroundColor: "#003366" },
  ord: {
    backgroundColor: "#003366",
    marginTop: "5%",
    marginStart: "5%",
    flex: 0.3,
  },
  add: {
    backgroundColor: "#003366",
    marginTop: "5%",
    flex: 0.55,
  },
  setting: {
    backgroundColor: "#003366",
    marginTop: "5%",

    marginBottom: 0,
  },
});
