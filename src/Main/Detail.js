import React, { useState, useEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  Image,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
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
import { Images } from "../constant/images";

const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;

export default function Detail({ navigation }) {
  const route = useRoute();
  const [com, setcom] = useState(false);
  const [ind, setInd] = useState(route.params.index);
  const [i, seti] = useState(route?.params?.user?.id);
  const [DATA, setDATA] = useState(route?.params?.DATA);
  const [key, setKey] = useState(Math.random());
  const [loading, setLoading] = React.useState(true);

  const [User_data, setUserData] = useState(route.params.DATA[ind]);
  React.useEffect(() => {
    (async () => {
      seti(route.params.user.id);
      setLoading(false);
    })();
  }, []);
  useEffect(() => {
    (async () => {
      console.log(route?.params?.DATA.length);
    })();
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.box}>
        <TouchableOpacity
          style={styles.back}
          onPress={() => navigation.goBack()}
        >
          <Image source={Images.backArrow} style={styles.icon}/>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            ...styles.nxt_view,
            display: ind > 0 ? "flex" : "none",
            marginRight: 5,
            paddingHorizontal: 5,
          }}
          // onPress={() => {seti(DATA)}}
          onPress={() => {
            if (ind > 0) {
              setUserData(route.params.DATA[ind - 1]);
              setInd(ind - 1);
              setKey(Math.random());
            }
          }}
        >
          <Image
            source={Images.backArrow}
            style={{ height: 15, width: 15, resizeMode: "contain" }}
          />
          <Text style={styles.nxt_txt}> Previous Lead</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            ...styles.nxt_view,
            paddingHorizontal: 5,
            display: DATA.length > ind + 1 ? "flex" : "none",
          }}
          // onPress={() => {seti(DATA)}}
          onPress={() => {
            if (DATA.length > ind + 1) {
console.log(DATA[ind])
              setUserData(route.params.DATA[ind + 1]);
              setInd(ind + 1);
              setKey(Math.random());
            }
          }}
        >
          <Text style={styles.nxt_txt}>Next Lead</Text>
          <Image
            source={Images.nextArrow}
            style={{ height: 15, width: 15, resizeMode: "contain" }}
          />

          {/* <Text style={styles.arrow}>
            <FontAwesome name="long-arrow-right" size={15} color="white" />
          </Text> */}
        </TouchableOpacity>
      </View>
      <View style={styles.in_box}>
        <View style={styles.circle}>
          <Text style={styles.circle_text}>{DATA[ind].name_initials}</Text>
        </View>
        <Text style={styles.name}>{DATA[ind].name}</Text>

        <TouchableOpacity
          onPress={() =>
            navigation.navigate(ScreenNames.EDIT_LEAD_DETAIL, {
              id: DATA[ind].id,
            })
          }
        >
          <Image
            style={styles.pencil}
            source={Images.editYellow}
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
            source={Images.delete}
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
          <Basic_detail data={User_data} key={key} />
        ) : com == "PRIORITY" ? (
          <Profile  data={User_data} key={key} />
        ) : com == "ALL"  ? (
          <Related data={User_data} key={key} />
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
 icon: {
    height: 25,
    width: 25,
    resizeMode: "contain",
  },
  arrow: { marginHorizontal: "3%", marginVertical: "3%" },
  nxt_txt: {
    fontSize: 12,
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
paddingBottom:8
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
