import React, { useState, useEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  FlatList,
  Modal,
} from "react-native";
import {
  Entypo,
  Ionicons,
  MaterialCommunityIcons,
  FontAwesome5,
  FontAwesome,
  Feather,
  MaterialIcons,
} from "@expo/vector-icons";
import { STYLES } from "../../constant/styles";
import { Colors } from "../../constant/colors";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { View_lead_activity } from "../../Services";
import { ScreenNames } from "../../constant/ScreenNames";
import { ScrollView } from "react-native-gesture-handler";

const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;

function Lead_activity() {
  const navigation = useNavigation();
  const route = useRoute();
  const [d, setd] = useState(false);
  const [data, setdata] = useState([]);
  const [data1, setdata1] = useState([]);
  const [loading, setLoading] = React.useState(true);
  const name = route.params.name;
  const [modalVisible, setModalVisible] = useState(false);
  // console.log(route.params.id)

  useEffect(() => {
    (async () => {
      const user_data = await AsyncStorage.getItem("user_data");
      const d = JSON.parse(user_data);
      const data = {
        email: d.email,
        password: d.password,
        id: route.params.id,
      };
      View_lead_activity(data)
        .then((response) => response.json())
        .then((result) => {
          var Array = [];
          var arr = [];

          var item = result.data.lead_timeline_activities;
          var item2 = result.data.activity_search_filters;
          arr.push(item2);
          Array.push(item);
          setdata1(arr[0]);
          setdata(Array[0]);
          setLoading(false);
        })
        .catch((error) => console.log("error", error));
    })();
  }, []);
  // const logo=route.params.logo
  // console.log(data1)
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={STYLES.header_box}>
          <TouchableOpacity
            style={STYLES.back_button}
            onPress={() => navigation.goBack()}
          >
            <Ionicons name="arrow-back-outline" size={35} color="white" />
          </TouchableOpacity>
          <Text style={STYLES.header}></Text>
          <TouchableOpacity
            // activeOpacity={1}
            style={STYLES.save_touch}
            TouchableOpacity
            onPress={() => setd(!d)}
          >
            <Ionicons
              style={{ transform: [{ rotate: "270deg" }] }}
              name="options-outline"
              size={35}
              color="white"
            />
          </TouchableOpacity>
        </View>
        <View style={styles.logo_header}>
          <View style={styles.logo}>
            <Text style={styles.logo_text}>
              {route.params.logo1}
              {route.params.logo2 ? route.params.logo2 : null}
            </Text>
          </View>
          <Text style={styles.logo_name}>{name}</Text>
        </View>

        <View style={styles.act}>
          <Text style={styles.act_text}>Lead Activity</Text>
        </View>

        {loading ? (
          <Loader loading={loading} />
        ) : data && data.length > 0 ? (
          <FlatList
            style={{ backgroundColor: "white", marginHorizontal: "3%" }}
            data={data}
            keyExtractor={(item) => item.id}
            renderItem={({ item, index }) => (
              <View>
                {/* <Text>{item.user_id}</Text>
              <Text>{item.sent_by.label}</Text> */}
                <View style={styles.first}>
                  <View style={styles.circle_email}>
                    <MaterialCommunityIcons
                      name="email-outline"
                      size={24}
                      color="white"
                    />
                  </View>
                  <Text style={styles.title}>{item.title}</Text>
                  <View style={{ flexDirection: "row" }}>
                    <Feather
                      style={{ marginRight: 2, marginTop: 2 }}
                      name="clock"
                      size={15}
                      color="black"
                    />
                    <Text style={styles.created}>{item.created}</Text>
                  </View>
                </View>
                <View style={styles.second}>
                  <Text style={{ fontSize: 14 }}>User Name</Text>
                  <Text style={styles.user_id}>: {item.user_id}</Text>
                </View>
                <View style={styles.second}>
                  <Text style={{ fontSize: 14 }}>{item.sent_by.label}</Text>
                  <Text style={styles.sent_by_value} numberOfLines={1}>
                    : {item.sent_by.value}
                  </Text>
                </View>
                <View style={styles.second}>
                  <Text style={{ fontSize: 14 }}>{item.recived_by.label}</Text>
                  <Text style={styles.rec_val}>: {item.recived_by.value}</Text>
                </View>
                <View style={styles.second}>
                  <Text style={{ fontSize: 14 }}>{item.subject.label}: </Text>
                  <Text style={styles.sub_val} numberOfLines={2}>
                    {item.subject.value}
                  </Text>
                </View>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate(ScreenNames.Comments, {
                      user: {
                        lead_activity_id: item.id,
                        lead_id: route.params.id,
                        activity_type: item.activity_type,
                      },
                    });
                  }}
                  style={styles.btn}
                >
                  <Text style={{ paddingHorizontal: "1%", fontSize: 15 }}>
                    View Comment
                  </Text>
                </TouchableOpacity>
                <View style={styles.line}></View>
              </View>
            )}
          />
        ) : null}
        {/* </View> */}
      </View>

      {d == true ? (
        <View style={styles.floating_btn}>
          <ScrollView>
            <FlatList
              style={{}}
              data={data1}
              keyExtractor={(item) => item.id}
              renderItem={({ item, index }) => (
                <View style={styles.modal_top}>
                  <TouchableOpacity style={{ marginTop: "8%" }}>
                    {item.label == "All" ? (
                      <Entypo
                        style={styles.modal_icn}
                        name="menu"
                        size={30}
                        color="grey"
                      />
                    ) : item.label == "Call" ? (
                      <Ionicons
                        style={styles.modal_icn}
                        name="ios-call"
                        size={30}
                        color="grey"
                      />
                    ) : item.label == "SMS" ? (
                      <MaterialIcons
                        style={styles.modal_icn}
                        name="email"
                        size={30}
                        color="grey"
                      />
                    ) : item.label == "Tasks" ? (
                      <MaterialIcons
                        style={styles.modal_icn}
                        name="textsms"
                        size={30}
                        color="grey"
                      />
                    ) : item.label == "Notes" ? (
                      <Ionicons
                        style={styles.modal_icn}
                        name="ios-call"
                        size={30}
                        color="grey"
                      />
                    ) : item.label == "Mails" ? (
                      <Feather
                        style={styles.modal_icn}
                        name="mail"
                        size={30}
                        color="grey"
                      />
                    ) : item.label == "Saved Search Emails" ? (
                      <MaterialCommunityIcons
                        style={styles.modal_icn}
                        name="calendar-month-outline"
                        size={30}
                        color="grey"
                      />
                    ) : item.label == "Appointments" ? (
                      <Entypo
                        style={styles.modal_icn}
                        name="menu"
                        size={30}
                        color="grey"
                      />
                    ) : null}
                  </TouchableOpacity>
                  <Text style={styles.modal_txt}>{item.label}</Text>
                </View>
              )}
            />
          </ScrollView>
        </View>
      ) : null}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  floating_btn: {
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.2)",

    position: "absolute",
    top: "10%",
    right: "8%",

    backgroundColor: "white",
    height: "35%",
    width: "55%",
    borderRadius: 8,
  },
  modal_icn: { marginHorizontal: 10 },
  modal_txt: {
    fontSize: 12,
    fontWeight: "400",
    marginTop: "8%",
    color: "#666666",
  },
  modal_top: {
    flexDirection: "row",

    alignItems: "center",
  },
  centeredView: {
    flex: 1,

    alignItems: "flex-end",
    marginEnd: "10%",
    marginTop: "12%",
  },
  modalView: {
    height: "30%",
    width: "70%",
    backgroundColor: "white",
    borderTopWidth: 0.5,
    borderColor: "grey",

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  logo_name: {
    fontSize: 22,
    marginStart: "3%",
    fontWeight: "500",
    color: "white",
  },
  logo_header: {
    flexDirection: "row",
    backgroundColor: Colors.MAIN_COLOR,
    marginTop: "-3%",
  },
  logo: {
    height: height * 0.07,
    width: width * 0.15,

    borderRadius: 40,
    alignItems: "center",
    justifyContent: "center",
    marginStart: "7%",
    backgroundColor: "#666699",
    marginBottom: "3%",
  },
  logo_text: { fontSize: 28, fontWeight: "bold", color: "white" },
  act_text: { color: "white", fontSize: 20, marginStart: "5%" },
  act: {
    height: "6%",
    backgroundColor: "#b3b3b3",
    justifyContent: "center",
    marginHorizontal: "3%",
    marginTop: "2%",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  btn: {
    alignSelf: "flex-end",
    borderWidth: 1.5,
    marginTop: "5%",
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    marginEnd: "3%",
  },
  created: { fontSize: 11, color: "black" },
  rec_val: { fontSize: 15, color: "#666666" },
  sub_val: { fontSize: 14, width: width * 0.45, color: "#666666" },
  sent_by_value: { fontSize: 15, width: width * 0.53, color: "#666666" },
  user_id: { fontSize: 15, color: "#666666" },
  title: {
    fontSize: 15,
    flex: 0.9,
    marginTop: "2%",
    marginStart: "2%",
    color: "#666666",
  },
  first: { flexDirection: "row", marginTop: "3%" },
  second: { flexDirection: "row", marginLeft: "17%" },

  line: {
    height: 0.5,
    width: "100%",
    backgroundColor: "#cccccc",
    marginTop: "7%",
  },
  circle_email: {
    height: height * 0.055,
    width: width * 0.12,

    borderRadius: 40,
    alignItems: "center",
    justifyContent: "center",
    marginStart: "2%",
    backgroundColor: "#0099cc",
    marginBottom: "1%",
  },
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
  container: { backgroundColor: "#f2f2f2", height: "100%" },
});

export default Lead_activity;
