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
import { STYLES } from "../constant/styles";

const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;

export default function Main_Screen({ navigation }) {
  const [com, setcom] = useState(false);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={STYLES.header_box}>
        <TouchableOpacity
          style={STYLES.back_button}
          onPress={() => navigation.toggleDrawer()}
        >
          <Entypo name="menu" size={35} color="white" />
        </TouchableOpacity>
        <Text style={STYLES.header}>Leads</Text>
        <TouchableOpacity
          style={STYLES.save_touch}
          // onPress={() => navigation.toggleDrawer()}
        >
          <Ionicons name="ios-search" size={26} color="white" />
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
                height: 3,
                width: width * 0.3,
                backgroundColor:
                  com == "RECENT" ? Colors.LINE : Colors.MAIN_COLOR,
                marginTop: "2%",
              }}
            ></View>

            <View
              style={{
                height: 3,
                width: width * 0.3,
                backgroundColor:
                  com == "PRIORITY" ? Colors.LINE : Colors.MAIN_COLOR,
                marginTop: "2%",
                marginStart: "5%",
              }}
            ></View>
            <View
              style={{
                height: 3,
                width: width * 0.3,
                backgroundColor: com == "ALL" ? Colors.LINE : Colors.MAIN_COLOR,
                marginTop: "2%",
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
  text: {
    fontSize: 18,
    fontWeight: "500",
    color: "white",
    textAlign: "center",
  },

  tab: { flexDirection: "row", backgroundColor: Colors.MAIN_COLOR },
  ord: {
    backgroundColor: Colors.MAIN_COLOR,

    flex: 0.25,
    marginStart: "5%",
  },
  add: {
    backgroundColor: Colors.MAIN_COLOR,
    flex: 0.4,
  },
  setting: {
    backgroundColor: Colors.MAIN_COLOR,

    flex: 0.3,
  },
});
