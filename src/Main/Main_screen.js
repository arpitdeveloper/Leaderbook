import React, { useState, useEffect } from "react";

import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  Modal,
  Image,
  ImageBackground,
  Alert,
} from "react-native";
import { Entypo, Ionicons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Recent from "./Recent";
import Priority from "./Priority";
import All from "./All";
import { Colors } from "../constant/colors";
import { STYLES } from "../constant/styles";
import { BackHandler } from "react-native";
import { ScreenNames } from "../constant/ScreenNames";
const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;

export default function Main_Screen({ navigation }) {
  const [com, setcom] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisible1, setModalVisible1] = useState(false);

  const [loading, setLoading] = React.useState(true);
  // useEffect(() => {
  //   setModalVisible(true);
  // }, []);
  React.useEffect(() => {
    (async () => {
      const user = await AsyncStorage.getItem("fm");
      console.log(user);
      if (user == 1) {
        setModalVisible(true);
      }
    })();
  }, []);
  const showAlert = () =>
    Alert.alert(
      "Closing Appplication",
      "Are you sure wants to exit",
      [
        { text: "Yes", onPress: () => navigation.navigate(ScreenNames.LOGIN) },
        {
          text: "",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        { text: "NO", onPress: () => console.log("OK Pressed") },
      ],
      { cancelable: true }
    );

  function handleBackButtonClick() {
    setModalVisible1(true);
    // navigation.navigate(ScreenNames.PRIORITY);
    return true;
  }

  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", handleBackButtonClick);
    return () => {
      BackHandler.removeEventListener(
        "hardwareBackPress",
        handleBackButtonClick
      );
    };
  }, []);
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

      <Modal
        transparent={true}
        visible={modalVisible}
        avoidKeyboard={true}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <ImageBackground
            style={styles.modalView}
            source={require("E:/React_native_demo/Leaderbook/assets/sms.png")}
          >
            <View style={{}}>
              <Text style={{ fontSize: 12, color: "white" }}>
                Press and hold any lead for multi calling
              </Text>
              <Text
                onPress={() => (
                  setModalVisible(!modalVisible), AsyncStorage.removeItem("fm")
                )}
                style={styles.modal_txt}
              >
                Ok,Got It!
              </Text>
            </View>
          </ImageBackground>
        </View>
      </Modal>

      <Modal
        transparent={true}
        visible={modalVisible1}
        avoidKeyboard={true}
        onRequestClose={() => {
          setModalVisible(!modalVisible1);
        }}
      >
        <View
          style={{
            backgroundColor: "rgba(52, 52, 52, 0.7)",
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <View style={styles.modalView1}>
            <View style={{}}>
              <Text
                style={{
                  fontSize: 20,
                  color: "#33d6ff",
                  marginStart: "5%",
                  marginVertical: "6%",
                }}
              >
                Closing Appplication
              </Text>
              <View
                style={{ backgroundColor: "#33d6ff", height: 2, width: "100%" }}
              ></View>
              <Text
                style={{
                  fontSize: 17,
                  color: "black",
                  marginVertical: "5%",
                  marginStart: "6%",
                }}
              >
                Are you sure wants to exit ?
              </Text>
              <View
                style={{
                  backgroundColor: "#d9d9d9",
                  height: 1,
                  width: "100%",
                  marginTop: "4%",
                }}
              ></View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text
                  onPress={() => setModalVisible1(!modalVisible1)}
                  style={styles.modal_txt1}
                >
                  No
                </Text>
                <View
                  style={{
                    backgroundColor: "#d9d9d9",
                    width: 1,
                    marginBottom: "-3%",
                  }}
                ></View>
                <Text
                  onPress={() => navigation.navigate(ScreenNames.LOGIN)}
                  style={styles.modal_txt1}
                >
                  Yes
                </Text>
              </View>
            </View>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    backgroundColor: "transparent",
    marginVertical: "50%",
  },
  centeredView1: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 0,
    backgroundColor: "rgba(52, 52, 52, 0.7)",
  },
  modal_txt: {
    fontSize: 14,
    color: "black",
    textAlign: "center",
    marginVertical: "4%",
    fontWeight: "bold",
    marginHorizontal: "20%",
  },
  modal_txt1: {
    fontSize: 14,
    color: "black",
    textAlign: "center",
    marginVertical: "4%",
    marginHorizontal: "20%",
  },
  modalView: {
    height: "98%",
    width: "100%",
    resizeMode: "contain",
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  modalView1: {
    backgroundColor: "white",

    elevation: 10,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
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
