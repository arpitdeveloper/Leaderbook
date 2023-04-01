import React, { useState, useEffect, useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  Image,
  ScrollView,
  Linking,
  FlatList,
  Modal,
  Pressable,
  TextInput,
} from "react-native";

const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;
import {
  Entypo,
  Feather,
  AntDesign,
  SimpleLineIcons,
  Ionicons,
  Octicons,
  FontAwesome,
  FontAwesome5,
  EvilIcons,
  MaterialIcons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

import { Keyboard } from "react-native";

import BouncyCheckbox from "react-native-bouncy-checkbox";

export default function User_tag({ navigation }) {
  const [d, setd] = useState();
  const [modalVisible, setModalVisible] = useState(false);

  const DATA = [
    {
      id: 0,
      name: "Morining",
      Number: "0",
      voicemail: "Voicemail",
      description:
        "This tag will be automatically added to leads who visits mostly in mornings to view listings.",
      s: false,
    },
    {
      id: 1,
      name: "Noon",
      Number: "0",
      voicemail: "Voicemail",
      description:
        "This tag will be automatically added to leads who visits mostly in mornings to view listings.",
      s: false,
    },
    {
      id: 2,
      name: "Evening",
      Number: "0",
      voicemail: "Voicemail",
      description:
        "This tag will be automatically added to leads who visits mostly in mornings to view listings.",
      s: false,
    },
    {
      id: 3,
      name: "6 AM To 9 AM",
      Number: "0",
      voicemail: "Voicemail",
      description:
        "This tag will be automatically added to leads who visits mostly in mornings to view listings.",
      s: false,
    },
    {
      id: 4,
      name: "6 AM To 9 AM",
      Number: "0",
      voicemail: "Voicemail",
      description:
        "This tag will be automatically added to leads who visits mostly in mornings to view listings.",
      s: false,
    },
    {
      id: 5,
      name: "6 AM To 9 AM",
      Number: "0",
      voicemail: "Voicemail",
      description:
        "This tag will be automatically added to leads who visits mostly in mornings to view listings.",
      s: false,
    },
    {
      id: 6,
      name: "6 AM To 9 AM",
      Number: "0",
      voicemail: "Voicemail",
      description:
        "This tag will be automatically added to leads who visits mostly in mornings to view listings.",
      s: false,
    },
    {
      id: 7,
      name: "Google Ads",
      Number: "0",
      voicemail: "Voicemail",
      description:
        "This tag will be automatically added to leads who visits mostly in mornings to view listings.",
      s: false,
    },
    {
      id: 8,
      name: "Facebook Buyer",
      Number: "0",
      voicemail: "Voicemail",
      description:
        "This tag will be automatically added to leads who visits mostly in mornings to view listings.",
      s: false,
    },
    {
      id: 9,
      name: "Facebook Seller",
      Number: "0",
      voicemail: "Voicemail",
      description:
        "This tag will be automatically added to leads who visits mostly in mornings to view listings.",
      s: false,
    },
    {
      id: 10,
      name: "Facebook Seller",
      Number: "0",
      voicemail: "Voicemail",
      description:
        "This tag will be automatically added to leads who visits mostly in mornings to view listings.",
      s: false,
    },
  ];
  const [selected_data, setSelected_data] = useState(DATA);
  const [search, setsearch] = useState("");
  const [arr, setarr] = useState(DATA);
  const [notes, setmynotes] = useState("");
  const searchref = useRef();
  const [keyboardIsVisible, setKeyboardIsVisible] = useState(false);

  useEffect(() => {
    const showListener = Keyboard.addListener("keyboardDidShow", () => {
      setKeyboardIsVisible(false);
    });
    const hideListener = Keyboard.addListener("keyboardDidHide", () => {
      setKeyboardIsVisible(true);
    });

    return () => {
      showListener.remove();
      hideListener.remove();
    };
  }, []);
  
  const up_down = (item) => {
    const newitem = selected_data.map((val) => {
      if (val.id == item.id) {
        return { ...val, s: !val.s };
      } else {
        return val;
      }
    });
    setSelected_data(newitem);
  };
  const Delete = (i) => {
    const newPeople = selected_data.filter((person) => person.id !== i.id);

    setSelected_data(newPeople);
    setarr(newPeople);
  };

  const onsearch = (text) => {
    if (text == "") {
      setSelected_data(arr);
    } else {
      let temp = selected_data.filter((item) => {
        return item.name.toLowerCase().indexOf(text.toLowerCase()) > -1;
      });
      setSelected_data(temp);
    }
  };

  const submit = () => {
    var newdata = {
      id: new Date(),
      name: notes,
      s: false,
    };
    arr.push(newdata);
    //  setSelected_data([...arr,newdata]);
  };

  return (
    // <ScrollView style={{  }}>
    <View style={styles.container}>
      <View style={styles.input}>
        <TextInput
          ref={searchref}
          style={{}}
          onChangeText={(text) => {
            onsearch(text), setsearch(text);
          }}
          value={search}
          underlineColorAndroid="transparent"
          placeholder="Search Here"
        />
        <EvilIcons name="search" size={24} color="black" />
      </View>

      <FlatList
        style={{ height: "100%" }}
        data={selected_data}
        keyExtractor={(item, index) => item.id}
        renderItem={({ item, index }) => (
          <View>
            <View
              style={{
                flexDirection: "row",
                marginHorizontal: "3%",
                marginVertical: "1%",
              }}
            >
              <View
                style={{
                  width: "100%",

                  elevation: 2,
                  alignSelf: "center",
                  justifyContent: "center",
                  backgroundColor: "white",
                  borderRadius: 8,
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    marginStart: "3%",
                    marginTop: "2%",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Text style={styles.name}>{item.name}</Text>
                  <View style={{ flexDirection: "row" }}>
                    <TouchableOpacity
                      style={{ padding: 5 }}
                      onPress={() => {
                        setModalVisible(true);
                      }}
                    >
                      <View
                        style={{
                          padding: 2,
                          borderWidth: 1,
                          borderColor: "#808080",
                          borderRadius: 6,
                        }}
                      >
                        <MaterialCommunityIcons
                          name="pencil"
                          size={20}
                          color="orange"
                        />
                      </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={{ padding: 5 }}
                      onPress={() => Delete(item)}
                    >
                      <View
                        style={{
                          padding: 2,
                          borderWidth: 1,
                          borderColor: "#808080",
                          borderRadius: 6,
                        }}
                      >
                        <MaterialCommunityIcons
                          name="delete-outline"
                          size={20}
                          color="black"
                        />
                      </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={{ padding: 5 }}
                      onPress={() => up_down(item)}
                    >
                      {item.s ? (
                        <Ionicons
                          name="ios-chevron-up"
                          size={25}
                          color="#808080"
                        />
                      ) : (
                        <Ionicons
                          name="ios-chevron-down"
                          size={30}
                          color="#808080"
                        />
                      )}
                    </TouchableOpacity>
                  </View>
                </View>
                <View style={{ flexDirection: "row", marginStart: "3%" }}>
                  <Text style={styles.number}>Total Leads ({item.Number})</Text>
                </View>
                {item.s ? (
                  <View style={{ flexDirection: "row", marginStart: "3%" }}>
                    <Text style={styles.number}>
                      Description: ({item.description})
                    </Text>
                  </View>
                ) : null}
              </View>
            </View>
          </View>
        )}
      />
      {keyboardIsVisible && (
        <TouchableOpacity
          onPress={() => {
            setModalVisible(true);
          }}
          style={styles.floating_btn}
        >
          <Ionicons name="person-add" size={40} color="white" />
        </TouchableOpacity>
      )}

      <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <View style={styles.input}>
                <TextInput
                  // ref={searchref}
                  style={{}}
                  onChangeText={(value) => {
                    setmynotes(value);
                  }}
                  value={notes}
                  underlineColorAndroid="transparent"
                  placeholder="Search Here"
                />
                <EvilIcons name="search" size={24} color="black" />
              </View>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => {
                  setModalVisible(!modalVisible), submit();
                }}
              >
                <Text style={styles.textStyle}>Hide Modal</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
      </View>
    </View>

    // </ScrollView>
  );
}

const styles = StyleSheet.create({
  input: {
    height: height * 0.048,
    width: width * 0.95,
    marginVertical: "2%",

    alignSelf: "center",
    backgroundColor: "white",
    elevation: 1,
    borderRadius: 6,
    color: "#808080",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 15,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 0,
    backgroundColor: "rgba(52, 52, 52, 0.7)",
  },
  modalView: {
    margin: 0,
    backgroundColor: "white",
    borderRadius: 6,
    paddingHorizontal: "20%",
    paddingVertical: "35%",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
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
  floating_btn: {
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.2)",
    alignItems: "center",
    justifyContent: "center",
    width: "19%",
    position: "absolute",
    bottom: "10%",
    right: "8%",
    height: "11%",
    backgroundColor: "orange",
    borderRadius: 100,
  },
  btn1: {
    flexDirection: "row",
    alignSelf: "center",
    height: height * 0.045,
    width: width * 0.32,
    backgroundColor: "orange",
    margin: "5%",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderRadius: 20,
  },
  phone_icon: { flex: 0.95 },
  voice_icon: { flex: 0.14, marginStart: "5%", marginTop: "5%" },
  email_icon: { flex: 0.16, marginStart: "5%", marginTop: "5%" },
  icon: { marginTop: "5%" },
  icon1: { marginTop: "5%" },
  name: {
    borderRadius: 20,
    paddingVertical: "1%",
    fontSize: 15,
    fontWeight: "bold",
    color: "black",
  },
  number: {
    fontSize: 15,

    fontWeight: "400",
    color: "black",

    marginBottom: "3%",
  },
  email: {
    fontSize: 16,
    flex: 0.9,
    marginTop: "5%",
    fontWeight: "600",
    color: "#808080",
  },
  voicemail: {
    fontSize: 17,
    flex: 0.9,
    marginTop: "5%",
    fontWeight: "600",
    color: "#808080",
  },

  circleview: { marginStart: "1%", marginEnd: "7%" },
  circle: {
    height: height * 0.1,
    width: width * 0.2,
    backgroundColor: "#e6e6e6",
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  circle_text: {
    fontSize: 25,
    fontWeight: "400",
    color: "gray",
  },
  bouncy: { marginStart: "10%", marginRight: "-4%" },
  line: {
    backgroundColor: "#cccccc",
    height: 2,
    marginVertical: "5%",
    width: "100%",
  },
  line2: {
    backgroundColor: "#cccccc",
    height: 1,
    marginVertical: "4%",
    width: "95%",
    marginStart: "5%",
  },
  button: {
    height: height * 0.025,
    width: width * 0.5,

    padding: 10,
    alignSelf: "center",
    backgroundColor: "#003366",
    elevation: 1,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: "10%",
  },
  login: {
    textAlign: "center",
    color: "white",
    fontSize: 30,
    fontWeight: "500",
  },
  item: {
    padding: 10,

    marginTop: "0%",
    marginBottom: "0%",

    elevation: 5,
  },

  container: { flex: 1, marginTop: "3%" },
});
