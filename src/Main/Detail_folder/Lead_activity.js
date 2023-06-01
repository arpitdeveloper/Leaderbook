import React, { useState, useEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  FlatList,
  Modal,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  Entypo,
  Ionicons,
  MaterialCommunityIcons,
  Feather,
  MaterialIcons,
} from "@expo/vector-icons";
import { STYLES } from "../../constant/styles";
import { Colors } from "../../constant/colors";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { View_lead_activity } from "../../Services";
import { ScreenNames } from "../../constant/ScreenNames";
import { ScrollView } from "react-native-gesture-handler";
import Header from "../../components/header";
import { Images } from "../../constant/images";

const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;

function Lead_activity() {
  const navigation = useNavigation();

  const route = useRoute();
  const [com, setcom] = useState(false);
  const [d, setd] = useState(false);
  const [data, setdata] = useState([]);
  const [data1, setdata1] = useState([]);
  const [loading, setLoading] = React.useState(true);
  // const User_data = route.params.name;
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
  // console.log(route.params.logo1)
  return (
    <SafeAreaView>
      <View style={styles.container}>
<Header
leftIcon={Images.backArrow}
rightIcon={Images.filterVertical}
onLeftPress={() => navigation.goBack()}
onRightPress={() => {
              modalVisible ? setModalVisible(false) : setModalVisible(true);
            }}
/>
       
        <View style={styles.logo_header}>
          <View style={styles.logo}>
            <Text style={styles.logo_text}>{route.params.logo1}</Text>
          </View>
          <Text style={styles.logo_name}>{route.params.name}</Text>
        </View>

        <View style={styles.act}>
          <Text style={styles.act_text}>Lead Activity</Text>
        </View>
        {com == "All" ? (
          <View>
            {loading ? (
              <Loader loading={loading} />
            ) : data && data.length > 0 ? (
              <FlatList
                style={styles.flat_data}
                data={data}
                keyExtractor={(item) => item.id}
                renderItem={({ item, index }) => (
                  <View>
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
                      <Text style={styles.txt}>User Name</Text>
                      <Text style={styles.user_id}>: {item.user_id}</Text>
                    </View>
                    <View style={styles.second}>
                      <Text style={styles.txt}>{item.sent_by.label}</Text>
                      <Text style={styles.sent_by_value} numberOfLines={1}>
                        : {item.sent_by.value}
                      </Text>
                    </View>
                    <View style={styles.second}>
                      <Text style={styles.txt}>{item.recived_by.label}</Text>
                      <Text style={styles.rec_val}>
                        : {item.recived_by.value}
                      </Text>
                    </View>
                    {item.title == "eMail Sent" ? (
                      <View style={styles.second}>
                        <Text style={styles.txt}>{item.subject.label}: </Text>
                        <View
                          style={{ width: width * 0.54, height: height * 0.07 }}
                        >
                          <ScrollView>
                            <Text style={styles.sub_val}>
                              {item.subject.value}
                            </Text>
                          </ScrollView>
                        </View>
                      </View>
                    ) : (
                      <View style={styles.second}>
                        <Text style={styles.txt}>
                          {item.message_text.label}:{" "}
                        </Text>
                        <View style={styles.sub}>
                          <ScrollView>
                            <Text style={styles.sub_val}>
                              {item.message_text.value}
                            </Text>
                          </ScrollView>
                        </View>
                      </View>
                    )}

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
                      <Text style={styles.comment_txt}>View Comment</Text>
                    </TouchableOpacity>
                    <View style={styles.line}></View>
                  </View>
                )}
              />
            ) : null}
          </View>
        ) : com == "Call" ? (
          <View style={styles.show}>
            <Text>No Activity Found</Text>
          </View>
        ) : com == "SMS" ? (
          <View style={styles.show}>
            <Text>No Activity Found</Text>
          </View>
        ) : com == "Tasks" ? (
          <View style={styles.show}>
            <Text>No Activity Found</Text>
          </View>
        ) : com == "Notes" ? (
          <View style={styles.show}>
            <Text>No Activity Found</Text>
          </View>
        ) : com == "Mails" ? (
          <View style={styles.show}>
            <Text>No Activity Found</Text>
          </View>
        ) : com == "SSE" ? (
          <View style={styles.show}>
            <Text>No Activity Found</Text>
          </View>
        ) : com == "Appointment" ? (
          <View style={styles.show}>
            <Text>No Activity Found</Text>
          </View>
        ) : (
          setcom("All")
        )}

        {/* </View> */}
      </View>

      <Modal
        transparent={true}
        visible={modalVisible}
        avoidKeyboard={true}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <TouchableOpacity
          style={{ width: "100%", height: "100%" }}
          activeOpacity={0}
          onPress={() => setModalVisible(!modalVisible)}
        >
          <View style={styles.data1_view}>
            <ScrollView>
              <FlatList
                style={styles.flat_data1}
                data={data1}
                keyExtractor={(item) => item.id}
                renderItem={({ item, index }) => (
                  <View style={styles.modal_top}>
                    <TouchableOpacity style={{ marginTop: "8%" }}>
                      {item.label == "All" ? (
                        <TouchableOpacity
                          onPress={() => {
                            setcom("All");
                          }}
                        >
                          <View style={styles.icon_row}>
                            <Entypo
                              style={styles.modal_icn}
                              name="menu"
                              size={30}
                              color="grey"
                            />
                            <Text style={styles.modal_txt}>{item.label}</Text>
                          </View>
                        </TouchableOpacity>
                      ) : item.label == "Call" ? (
                        <TouchableOpacity
                          onPress={() => {
                            setcom("Call");
                          }}
                        >
                          <View style={styles.icon_row}>
                            <Ionicons
                              style={styles.modal_icn}
                              name="ios-call"
                              size={30}
                              color="grey"
                            />
                            <Text style={styles.modal_txt}>{item.label}</Text>
                          </View>
                        </TouchableOpacity>
                      ) : item.label == "SMS" ? (
                        <TouchableOpacity
                          onPress={() => {
                            setcom("SMS");
                          }}
                        >
                          <View style={styles.icon_row}>
                            <MaterialIcons
                              style={styles.modal_icn}
                              name="email"
                              size={30}
                              color="grey"
                            />
                            <Text style={styles.modal_txt}>{item.label}</Text>
                          </View>
                        </TouchableOpacity>
                      ) : item.label == "Tasks" ? (
                        <TouchableOpacity
                          onPress={() => {
                            setcom("Tasks");
                          }}
                        >
                          <View style={styles.icon_row}>
                            <MaterialIcons
                              style={styles.modal_icn}
                              name="textsms"
                              size={30}
                              color="grey"
                            />
                            <Text style={styles.modal_txt}>{item.label}</Text>
                          </View>
                        </TouchableOpacity>
                      ) : item.label == "Notes" ? (
                        <TouchableOpacity
                          onPress={() => {
                            setcom("Notes");
                          }}
                        >
                          <View style={styles.icon_row}>
                            <Ionicons
                              style={styles.modal_icn}
                              name="ios-call"
                              size={30}
                              color="grey"
                            />
                            <Text style={styles.modal_txt}>{item.label}</Text>
                          </View>
                        </TouchableOpacity>
                      ) : item.label == "Mails" ? (
                        <TouchableOpacity
                          onPress={() => {
                            setcom("Mails");
                          }}
                        >
                          <View style={styles.icon_row}>
                            <Feather
                              style={styles.modal_icn}
                              name="mail"
                              size={30}
                              color="grey"
                            />
                            <Text style={styles.modal_txt}>{item.label}</Text>
                          </View>
                        </TouchableOpacity>
                      ) : item.label == "Saved Search Emails" ? (
                        <TouchableOpacity
                          onPress={() => {
                            setcom("SSE");
                          }}
                        >
                          <View style={styles.icon_row}>
                            <MaterialCommunityIcons
                              style={styles.modal_icn}
                              name="calendar-month-outline"
                              size={30}
                              color="grey"
                            />
                            <Text style={styles.modal_txt}>{item.label}</Text>
                          </View>
                        </TouchableOpacity>
                      ) : item.label == "Appointments" ? (
                        <TouchableOpacity
                          onPress={() => {
                            setcom("Appointments");
                          }}
                        >
                          <View style={styles.icon_row}>
                            <Entypo
                              style={styles.modal_icn}
                              name="menu"
                              size={30}
                              color="grey"
                            />
                            <Text style={styles.modal_txt}>{item.label}</Text>
                          </View>
                        </TouchableOpacity>
                      ) : null}
                    </TouchableOpacity>
                  </View>
                )}
              />
            </ScrollView>
          </View>
        </TouchableOpacity>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  flat_data1: {
    backgroundColor: "white",
    height: height * 0.35,
    width: width * 0.65,
    borderRadius: 8,
    elevation: 10,
    borderWidth: 1,
    borderColor: "#666666",
  },
  data1_view: {
    alignSelf: "flex-end",
    marginEnd: "10%",
    marginTop: "13%",
  },
  icon_row: { flexDirection: "row" },
  sub: { width: width * 0.54, height: height * 0.07 },
  comment_txt: { paddingHorizontal: "1%", fontSize: 15 },
  txt: { fontSize: 14 },
  flat_data: {
    backgroundColor: "white",
    marginHorizontal: "3%",
    // marginBottom: "10%",
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    elevation: 10,
    height: height * 0.77,
  },
  show: { alignItems: "center", justifyContent: "center", flex: 1 },
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
    marginTop: "3%",
    color: "#666666",
    width: width * 0.5,
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
    fontSize: 21,
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
    height: height * 0.075,
    width: width * 0.15,

    borderRadius: 40,
    alignItems: "center",
    justifyContent: "center",
    marginStart: "7%",
    backgroundColor: "#666699",
    marginBottom: "1%",
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
    elevation: 10,
  },
  btn: {
    alignSelf: "flex-end",
    borderWidth: 1.5,
    marginTop: "1%",
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    marginEnd: "3%",
  },
  created: { fontSize: 11, color: "black" },
  rec_val: { fontSize: 15, color: "#666666" },
  sub_val: { fontSize: 14, color: "#666666" },
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
