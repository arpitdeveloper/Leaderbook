import React, { useState, useEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
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
  MaterialCommunityIcons,
  FontAwesome5,FontAwesome
} from "@expo/vector-icons";
import Recent from "./Recent";
import Priority from "./Priority";
import All from "./All";
import { Colors } from "../constant/colors";
import { STYLES } from "../constant/styles";
import Basic_detail from "./Detail_folder/Basic_detail";
import Profile from "./Detail_folder/Profile";
import Related from "./Detail_folder/Related";
import { ScreenNames } from "../constant/ScreenNames";

const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;

export default function Detail({ navigation }) {
  const [com, setcom] = useState(false);
  const route =useRoute()
  const a= route.params.user

  // console.log(route.params.user.logo1,route.params.user.logo2,)

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={STYLES.header_box}>
        <TouchableOpacity
          style={STYLES.back_button}
          onPress={() => navigation.goBack()}
        >
          <MaterialCommunityIcons
            name="keyboard-backspace"
            size={30}
            color="white"
          />
        </TouchableOpacity>
        <Text style={STYLES.header}></Text>
        <TouchableOpacity
          style={STYLES.save_touch}
          // onPress={() => navigation.toggleDrawer()}
        >
          <View
            style={{
              flexDirection: "row",
              borderWidth: 1.5,
              borderColor: "white",
              borderRadius: 20,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                fontSize: 10,
                color: "white",
                marginVertical: "3%",
                marginStart: "2%",
                fontWeight: "bold",
              }}
            >
              Next Level
            </Text>
            <Text style={{ marginHorizontal: "3%", marginVertical: "3%" }}>
            <FontAwesome name="long-arrow-right" size={15} color="white" />
              
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      <View
        style={{
          flexDirection: "row",
          backgroundColor: Colors.MAIN_COLOR,
        }}
      >
        <View
          style={{
            height: height * 0.07,
            width: width * 0.15,

            borderRadius: 40,
            alignItems: "center",
            justifyContent: "center",
            marginStart: "5%",
            backgroundColor: "#666699",
            marginBottom: "3%",
          }}
        >
          <Text style={{ fontSize: 28, fontWeight: "bold", color: "white" }}>
            {route.params.user.logo1}{route.params.user.logo2? route.params.user.logo2 : null}
          </Text>
        </View>
        <Text
          style={{
            fontSize: 22,
            marginStart: "3%",
            fontWeight: "500",
            color: "white",
          }}
        >
          {route.params.user.name}
        </Text>
        <Text style={{ marginStart: "3%" }}
        onPress={() => navigation.navigate(ScreenNames.EDIT_LEAD_DETAIL,{id:route.params.user.id})}
        >
          <FontAwesome5 name="pencil-alt" size={25} color="yellow" />
        </Text>
        <Text style={{ marginStart: "3%" }}>
          <MaterialCommunityIcons name="delete" size={30} color="red" />
        </Text>
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
              <Text style={styles.text}>BASIC DETAIL</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.add}
              onPress={() => {
                setcom("PRIORITY");
              }}
            >
              <Text style={styles.text}>PROFILE</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.setting}
              onPress={() => {
                setcom("ALL");
              }}
            >
              <Text style={styles.text}>RELATED</Text>
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
          <Basic_detail data={a}/>
        ) : com == "PRIORITY" ? (
          <Profile />
        ) : com == "ALL" ? (
          <Related />
        ) : (
          setcom("RECENT")
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  circle: {
    alignItems: "center",
    justifyContent: "center",
    elevation: 30,
  },
  circle_text: {
    fontSize: 10,
    fontWeight: "500",
    color: "#bfbfbf",
  },
  text: {
    fontSize: 17,
    fontWeight: "500",
    color: "white",
    textAlign: "center",
  },

  tab: { flexDirection: "row", backgroundColor: Colors.MAIN_COLOR },
  ord: {
    backgroundColor: Colors.MAIN_COLOR,

    flex: 0.35,
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
