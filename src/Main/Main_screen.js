import React, { useState, useEffect } from "react";

import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { Entypo, Ionicons } from "@expo/vector-icons";
import Recent from "./Recent";
import Priority from "./Priority";
import All from "./All";
import { Colors } from "../constant/colors";

const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;

export default function Main_Screen({ navigation }) {
  const [com, setcom] = useState(false);

  return (
    <SafeAreaView style={{ flex: 1 }}>
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
                setcom("RECENT");
              }}
            >
              <View style={styles.home_text}>
                <Text style={styles.text}>RECENT</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.add}
              onPress={() => {
                setcom("PRIORITY");
              }}
            >
              <View style={styles.home_text}>
                <Text style={styles.text}>PRIORITY</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.setting}
              onPress={() => {
                setcom("ALL");
              }}
            >
              <View style={styles.home_text}>
                <Text style={styles.text}>ALL</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View
            style={{ flexDirection: "row", backgroundColor: Colors.MAIN_COLOR }}
          >
            <View
              style={{
                height: 2,
                width: width * 0.3,
                backgroundColor:
                  com == "RECENT" ? Colors.LINE : Colors.MAIN_COLOR,
                marginTop: "5%",
              }}
            ></View>

            <View
              style={{
                height: 2,
                width: width * 0.3,
                backgroundColor:
                  com == "PRIORITY" ? Colors.LINE : Colors.MAIN_COLOR,
                marginTop: "5%",
                marginStart: "10%",
              }}
            ></View>
            <View
              style={{
                height: 2,
                width: width * 0.3,
                backgroundColor: com == "ALL" ? Colors.LINE : Colors.MAIN_COLOR,
                marginTop: "5%",
                marginStart: "5%",
              }}
            ></View>
          </View>
        </View>
      </View>
      <View style={{ flex: 1 }}>
        {com == "RECENT" ? (
          <Recent />
        ) : com == "PRIORITY" ? (
          <Priority />
        ) : com == "ALL" ? (
          <All navigation={navigation} />
        ) : (
          setcom("RECENT")
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {},
  text: {
    fontSize: 18,
    fontWeight: "500",
    color: "white",
    textAlign: "center",
  },
  header: {
    height: height * 0.12,
    backgroundColor: Colors.MAIN_COLOR,
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
    backgroundColor: "red",
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

  tab: { flexDirection: "row", backgroundColor: Colors.MAIN_COLOR },
  ord: {
    backgroundColor: Colors.MAIN_COLOR,
    marginTop: "5%",
    marginStart: "5%",
    flex: 0.3,
  },
  add: {
    backgroundColor: Colors.MAIN_COLOR,
    marginTop: "5%",
    flex: 0.55,
  },
  setting: {
    backgroundColor: Colors.MAIN_COLOR,
    marginTop: "5%",

    marginBottom: 0,
  },
});
