import React, { useState, useEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  Image,
} from "react-native";
import {
  Entypo,
  Ionicons,
  MaterialCommunityIcons,
  FontAwesome5,
  FontAwesome,
} from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Colors } from "../constant/colors";
import { STYLES } from "../constant/styles";
import Basic_detail from "./Detail_folder/Basic_detail";
import Profile from "./Detail_folder/Profile";
import Related from "./Detail_folder/Related";
import { ScreenNames } from "../constant/ScreenNames";
import { get_leads_basic_detail } from "../Services";


const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;

export default function Detail({ navigation }) {
  const route = useRoute();
  const [com, setcom] = useState(false);

  const [i, seti] = useState(route.params.user.id);
  const [DATA, setDATA] = useState("");

  const [loading, setLoading] = React.useState(true);

  const User_data = route.params.user;
  React.useEffect(() => {
    (async () => {
      seti(route.params.user.id);
      setLoading(false);
    })();
  }, []);
  useEffect(() => {
    (async () => {
      const user_data = await AsyncStorage.getItem("user_data");

      const d = JSON.parse(user_data);

      const data = {
        email: d.email,
        password: d.password,
        id: User_data.id,
      };
      get_leads_basic_detail(data)
        .then((response) => response.json())
        .then((result) => {
          var k = result?.data?.next_lead_id;

          setDATA(k);
          setLoading(false);
        })
        .catch((error) => console.log("error", error));
    })();
  }, []);
  console.log(DATA);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.box}>
        <TouchableOpacity
          style={styles.back}
          onPress={() => navigation.goBack()}
        >
          <MaterialCommunityIcons
            name="keyboard-backspace"
            size={30}
            color="white"
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.nxt}
          // onPress={() => {seti(DATA)}}
        >
          <View style={styles.nxt_view}>
            <Text style={styles.nxt_txt}>Next Lead</Text>
            <Text style={styles.arrow}>
              <FontAwesome name="long-arrow-right" size={15} color="white" />
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.in_box}>
        <View style={styles.circle}>
          <Text style={styles.circle_text}>{route.params.user.logo}</Text>
        </View>
        <Text style={styles.name}>{route.params.user.name}</Text>

        <TouchableOpacity
          onPress={() =>
            navigation.navigate(ScreenNames.EDIT_LEAD_DETAIL, {
              id: route.params.user.id,
            })
          }
        >
          <Image
            style={styles.pencil}
            source={require("../../assets/pencil.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate(ScreenNames.EDIT_LEAD_DETAIL, {
              id: route.params.user.id,
            })
          }
        >
          <Image
            style={styles.delete}
            source={require("../../assets/delete.png")}
          />
        </TouchableOpacity>
      </View>

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
      <View style={styles.line_box}>
        <View
          style={{
            height: 3,
            width: width * 0.3,
            backgroundColor: com == "RECENT" ? Colors.LINE : Colors.MAIN_COLOR,
            marginTop: "3%",
          }}
        ></View>

        <View
          style={{
            height: 3,
            width: width * 0.3,
            backgroundColor:
              com == "PRIORITY" ? Colors.LINE : Colors.MAIN_COLOR,
            marginTop: "3%",
            marginStart: "5%",
          }}
        ></View>
        <View
          style={{
            height: 3,
            width: width * 0.3,
            backgroundColor: com == "ALL" ? Colors.LINE : Colors.MAIN_COLOR,
            marginTop: "3%",
            marginStart: "5%",
          }}
        ></View>
      </View>

      <View style={{ flex: 1 }}>
        {com == "RECENT" ? (
          <Basic_detail data={User_data} />
        ) : com == "PRIORITY" ? (
          <Profile />
        ) : com == "ALL" ? (
          <Related data={i} />
        ) : (
          setcom("RECENT")
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  line_box: { flexDirection: "row", backgroundColor: Colors.MAIN_COLOR },
  delete: {
    height: height * 0.035,
    width: width * 0.08,
    resizeMode: "contain",
  },
  pencil: {
    height: height * 0.035,
    width: width * 0.12,
    resizeMode: "contain",
  },
  arrow: { marginHorizontal: "3%", marginVertical: "3%" },
  nxt_txt: {
    fontSize: 10,
    color: "white",

    fontWeight: "normal",
    marginEnd: 2,
  },
  nxt_view: {
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    padding: 2,
  },
  nxt: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: "4%",
  },
  back: {
    color: "white",
    fontWeight: "bold",

    marginTop: "3%",
    textAlign: "center",
    flex: 0.95,
    marginStart: "3%",
  },
  in_box: {
    flexDirection: "row",
    backgroundColor: Colors.MAIN_COLOR,
  },
  box: {
    backgroundColor: Colors.MAIN_COLOR,
    alignItems: "center",

    // marginTop: 25,
    flexDirection: "row",
  },
  circle: {
    height: height * 0.075,
    width: width * 0.15,

    borderRadius: 40,
    alignItems: "center",
    justifyContent: "center",
    marginStart: "5%",
    backgroundColor: "#666699",
    marginBottom: "3%",
  },
  circle_text: { fontSize: 28, fontWeight: "bold", color: "white" },
  name: {
    fontSize: 20,
    marginStart: "3%",
    fontWeight: "bold",
    color: "white",
  },
  text: {
    fontSize: 14,
    fontWeight: "500",
    color: "white",
    marginStart: "3%",
    // textAlign: "center",
  },

  tab: { flexDirection: "row", backgroundColor: Colors.MAIN_COLOR },
  ord: {
    backgroundColor: Colors.MAIN_COLOR,

    flex: 0.48,
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
