import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  FlatList,
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

import BouncyCheckbox from "react-native-bouncy-checkbox";

export default function Recent({ navigation }) {
  const [selected_data, setSelected_data] = useState([]);
  const [d, setd] = useState(false);

  const DATA = [
    {
      id: "0",
      name: "James Test",
      Number: "123567891",
      voicemail: "Voicemail",
      email: "praful.mishra121@gmail.com",
    },
    {
      id: "1",
      name: "Test Goldrushlead",
      Number: "123567891",
      voicemail: "Voicemail",
      email: "praful.mishra121@gmail.com",
    },
    {
      id: "2",
      name: "James Test",
      Number: "123567891",
      voicemail: "Voicemail",
      email: "praful.mishra121@gmail.com",
    },
    {
      id: "3",
      tname: "James Test",
      Number: "123567891",
      voicemail: "Voicemail",
      email: "praful.mishra121@gmail.com",
    },
    {
      id: "4",
      name: "James Test",
      Number: "123567891",
      voicemail: "Voicemail",
      email: "praful.mishra121@gmail.com",
    },
    {
      id: "5",
      name: "James Test",
      Number: "123567891",
      voicemail: "Voicemail",
      email: "praful.mishra121@gmail.com",
    },
    {
      id: "6",
      name: "James Test",
      Number: "123567891",
      voicemail: "Voicemail",
      email: "praful.mishra121@gmail.com",
    },
    {
      id: "7",
      name: "James Test",
      Number: "123567891",
      voicemail: "Voicemail",
      email: "praful.mishra121@gmail.com",
    },
    {
      id: "8",
      name: "James Test",
      Number: "123567891",
      voicemail: "Voicemail",
      email: "praful.mishra121@gmail.com",
    },
  ];

  const selectAlldata = () => {
    if (selected_data.length < DATA.length) {
      setSelected_data([...new Set(DATA.map((item) => item.id))]);
      setd(!d);
    }

    if (selected_data.length === DATA.length) {
      setSelected_data([]);
      setd(!d);
    }
  };

  const hasAlldataselected = DATA.length === selected_data.length;
  return (
    // <ScrollView style={{  }}>
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          alignSelf: "center",
          height: height * 0.04,
          width: width * 0.45,
          backgroundColor: d == true ? "orange" : null,
          margin: "3%",
          alignItems: "center",
          justifyContent: "center",
          borderWidth: 1,
          borderRadius: 20,
        }}
      >
        <TouchableOpacity
          style={{ alignItems: "center" }}
          onPress={selectAlldata}
        >
          <Text style={{ color: d == true ? "white" : "#b3b3b3", fontSize: 20 }}>
            Select All
          </Text>
        </TouchableOpacity>
        {/* <BouncyCheckbox
          disableBuiltInState
          isChecked={hasAlldataselected}
          fillColor={"green"}
          unfillColor={"#FFFFFF"}
          onPress={selectAlldata}
        /> */}
      </View>

      <FlatList
        style={{ backgroundColor: "#f2f2f2", padding: 10 }}
        data={DATA}
        keyExtractor={(item) => item.id}
        renderItem={({ item, index }) => (
          <View>
            <View style={{ flexDirection: "row" }}>
              {d == true ? (
                <BouncyCheckbox
                  style={styles.bouncy}
                  disableBuiltInState
                  isChecked={selected_data.includes(item.id)}
                  fillColor={"blue"}
                  unfillColor={"#f2f2f2"}
                  size={25}
                  innerIconStyle={{ borderWidth: 1, borderColor: "#a6a6a6" }}
                  onPress={() => {
                    if (selected_data.includes(item.id)) {
                      setSelected_data(
                        selected_data.filter((value) => value !== item.id)
                        // console.log(selected_data)
                      );
                    } else {
                      setSelected_data([
                        ...new Set([...selected_data, item.id]),
                      ]);
                      console.log(selected_data);
                    }
                  }}
                />
              ) : null}
              <View
                style={{
                  backgroundColor: "white",
                  padding: 10,

                  width: d == true ? width * 0.8 : width * 0.95,
                  marginTop: "0%",
                  marginBottom: "0%",

                  elevation: 5,
                  alignSelf: "center",
                  justifyContent: "center",
                }}
              >
                <View style={{ flexDirection: "row" }}>
                  <View style={styles.circleview}>
                    <View style={styles.circle}>
                      <Text style={styles.circle_text}>GD</Text>
                    </View>
                  </View>
                  <Text style={styles.name}>{item.name}</Text>
                  <Text style={styles.icon1}>
                    <SimpleLineIcons name="note" size={30} color="black" />
                  </Text>
                </View>
                <View style={styles.line2}></View>
                <View style={{ flexDirection: "row" }}>
                  <View style={styles.phone_icon}>
                    <Feather name="phone" size={28} color="black" />
                  </View>
                  <Text style={styles.number}>{item.Number}</Text>
                  <Text style={styles.icon}>
                    <FontAwesome5 name="sms" size={30} color="black" />
                  </Text>
                </View>
                <View style={styles.line2}></View>
                <View style={{ flexDirection: "row" }}>
                  <View style={styles.email_icon}>
                    <MaterialCommunityIcons
                      name="email-outline"
                      size={28}
                      color="black"
                    />
                  </View>
                  <Text style={styles.email}>{item.email}</Text>
                </View>
                <View style={styles.line2}></View>
                <View style={{ flexDirection: "row" }}>
                  <View style={styles.voice_icon}>
                    <Entypo name="voicemail" size={28} color="black" />
                  </View>
                  <Text style={styles.voicemail}>{item.voicemail}</Text>
                </View>
              </View>
            </View>
            <View style={styles.line}></View>
          </View>
        )}
      />
      <TouchableOpacity style={styles.floating_btn}>
        <Ionicons name="person-add" size={40} color="white" />
      </TouchableOpacity>
      <View
        style={{
          height: height * 0.08,
          backgroundColor: "#003366",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {d == true ? (
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <View style={styles.btn1}>
              <TouchableOpacity
                style={{ alignItems: "center" }}
                // onPress={selectAlldata}
              >
                <Text style={{ color: "white", fontSize: 18 }}>Select All</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.btn1}>
              <TouchableOpacity
                style={{ alignItems: "center" }}
                // onPress={selectAlldata}
              >
                <Text style={{ color: "white", fontSize: 18 }}>Select All</Text>
              </TouchableOpacity>
            </View>
          </View>
        ) : null}
      </View>
    </View>
    // </ScrollView>
  );
}

const styles = StyleSheet.create({
  floating_btn: {
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.2)",
    alignItems: "center",
    justifyContent: "center",
    width: 60,
    position: "absolute",
    bottom: "10%",
    right: "8%",
    height: 60,
    backgroundColor: "orange",
    borderRadius: 30,
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
  phone_icon: { flex: 0.17, marginStart: "5%", marginTop: "5%" },
  voice_icon: { flex: 0.17, marginStart: "5%", marginTop: "5%" },
  email_icon: { flex: 0.16, marginStart: "5%", marginTop: "5%" },
  icon: { marginTop: "5%" },
  icon1: { marginTop: "5%" },
  name: {
    fontSize: 20,
    marginTop: "5%",
    color: "#808080",
    fontWeight: "400",
    flex: 1.1,
  },
  number: {
    fontSize: 17,
    flex: 0.9,
    marginTop: "5%",
    fontWeight: "600",
    color: "#808080",
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

  circleview: { marginStart: "1%", marginEnd: "3%" },
  circle: {
    height: height * 0.08,
    width: width * 0.17,
    backgroundColor: "#e6e6e6",
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  circle_text: {
    fontSize: 30,
    fontWeight: "600",
    color: "#bfbfbf",
  },
  bouncy: { marginStart: "10%", marginRight: "-4%" },
  line: {
    backgroundColor: "#cccccc",
    height: 2,
    marginVertical: "2%",
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
    backgroundColor: "white",
    padding: 10,

    width: width * 0.8,
    marginTop: "0%",
    marginBottom: "0%",
    marginEnd: "5%",
    elevation: 5,
  },

  container: { backgroundColor: "#e6e6e6", flex: 1 },
});
