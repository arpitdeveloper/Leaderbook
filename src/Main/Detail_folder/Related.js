import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  SafeAreaView,
  Image,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;
import {
  MaterialCommunityIcons,
  FontAwesome,
  Feather,
} from "@expo/vector-icons";
import Loader from "../../constant/Loader";
import { Related_page_counter } from "../../Services";
import { Colors } from "../../constant/colors";
import { ScreenNames } from "../../constant/ScreenNames";

export default function Related({ data }) {
  const Id = data.id;
  const [DATA, setDATA] = useState([]);
  const [t, sett] = useState("");
  const [tc, settc] = useState("");
  const [a, seta] = useState("");
  const [ac, setac] = useState("");
  const [n, setn] = useState("");
  const [nc, setnc] = useState("");

  const [loading, setLoading] = React.useState(true);
  const navigation = useNavigation();

  useEffect(() => {
    (async () => {
      const user_data = await AsyncStorage.getItem("user_data");

      const d = JSON.parse(user_data);

      // console.log(dr)
      const data = {
        email: d.email,
        password: d.password,
        lead_id: Id,
      };
      Related_page_counter(data)
        .then((response) => response.json())
        .then((result) => {
          // console.log(result.data.related_page_counts)
          setDATA(result?.data?.related_page_counts);
          sett(result?.data?.related_page_counts.tasks.label);
          settc(result?.data?.related_page_counts.tasks.count);
          seta(result?.data?.related_page_counts.appointments.label);
          setac(result?.data?.related_page_counts.appointments.count);
          setn(result?.data?.related_page_counts.notes.label);
          setnc(result?.data?.related_page_counts.notes.count);

          setLoading(false);
        })

        .catch((error) => console.log("error", error));
    })();
  }, []);
  // console.log(t.length)
  return (
    <SafeAreaView style={styles.container}>
      {loading ? (
        <Loader loading={loading} />
      ) : t && t.length > 0 ? (
        <View>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate(ScreenNames.Page, {
                name: n,
                n: ScreenNames.NPage,
              });
            }}
          >
            <View style={styles.box}>
              <View style={styles.box1}>
                <View style={styles.circle}>
                  <MaterialCommunityIcons
                    name="message-text-outline"
                    size={24}
                    color="black"
                  />
                </View>

                <Text style={styles.txt}>{n}</Text>
              </View>

              <View style={styles.count}>
                <Text style={styles.count_txt}>{nc}</Text>
              </View>
            </View>
          </TouchableOpacity>

          <View style={styles.line}></View>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate(ScreenNames.Page, {
                name: t,
                n: ScreenNames.TPage,
              });
            }}
          >
            <View style={styles.box}>
              <View style={styles.box1}>
                <View style={styles.circle1}>
                  <Feather name="calendar" size={24} color="white" />
                </View>

                <Text style={styles.txt}>{t}</Text>
              </View>

              <View style={styles.count}>
                <Text style={styles.count_txt}>{tc}</Text>
              </View>
            </View>
          </TouchableOpacity>

          <View style={styles.line}></View>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate(ScreenNames.Page, {
                name: a,
                n: ScreenNames.APage,
              });
            }}
          >
            <View style={styles.box}>
              <View style={styles.box1}>
                <View style={styles.circle2}>
                  <FontAwesome name="calendar" size={24} color="#666666" />
                </View>

                <Text style={styles.txt}>{a}</Text>
              </View>

              <View style={styles.count}>
                <Text style={styles.count_txt}>{ac}</Text>
              </View>
            </View>
          </TouchableOpacity>

          <View style={styles.line}></View>
        </View>
      ) : (
        <View style={styles.null_txt}>
          <Text>"There is no related exist for this lead"</Text>
        </View>
      )}
      <TouchableOpacity
        onPress={() => setModalVisible(true)}
        style={styles.floating_btn}
      >
        <Image
          style={{
            height: height * 0.1,
            width: width * 0.2,
            resizeMode: "contain",
          }}
          source={require("../../../assets/note1.jpg")}
        ></Image>
      </TouchableOpacity>
      <View
        style={{
          width: "100%",
          height: height * 0.065,
          backgroundColor: Colors.MAIN_COLOR,
          justifyContent: "center",
          alignItems: "center",
          position: "absolute", 
          bottom: 0,
        }}
      >
        <Text
          // onPress={() => {
          //   navigation.navigate(ScreenNames.LEAD_ACTIVITY, {
          //     name: User_data.name,
          //     logo1: User_data.logo,

          //     id: User_data.id,
          //   });
          // }}
          style={{ color: "white", fontSize: 20 }}
        >
          View Lead Activity
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  floating_btn: {
    alignItems: "center",
    justifyContent: "center",

    position: "absolute",
    bottom: "8%",
    right: "1%",
  },
  null_txt: { flex: 1, alignItems: "center", justifyContent: "center" },
  box1: { flexDirection: "row", alignItems: "center" },
  box: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    margin: "2%",
  },
  txt: { fontSize: 16, color: "#666666", fontWeight: "normal" },
  count_txt: {
    color: "white",
    fontSize: 12,
    backgroundColor: Colors.MAIN_COLOR,
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  count: {
    // backgroundColor: Colors.MAIN_COLOR,
    // height: height * 0.02,
    // width: width * 0.085,
    // borderRadius: 30,
  },
  circle: {
    height: height * 0.055,
    marginRight: 20,
    width: width * 0.12,
    backgroundColor: "#009973",
    borderRadius: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  circle1: {
    height: height * 0.055,
    marginRight: 20,
    width: width * 0.12,
    backgroundColor: "#66ccff",
    borderRadius: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  circle2: {
    height: height * 0.055,
    marginRight: 20,
    width: width * 0.12,
    backgroundColor: "#e6e6e6",
    borderRadius: 40,
    alignItems: "center",
    justifyContent: "center",
  },

  line: {
    backgroundColor: "#e6e6e6",
    height: 2,
    marginVertical: "0.5%",
    width: "100%",
    marginStart: "19%",
  },

  container: { flex: 1, backgroundColor: "white" },
});
