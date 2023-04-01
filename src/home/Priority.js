import React, { useState, useEffect } from "react";
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

export default function Priority({ navigation }) {
  const [selected_data, setSelected_data] = useState([]);
  const [d, setd] = useState(false);

  const DATA = [
    {
      id: "0",
      name: "2 Leads",
      Number: "High",
      voicemail: "Voicemail",
      email: "praful.mishra121@gmail.com",
    },
    {
      id: "1",
      name: "13 Leads",
      Number: "Low",
      voicemail: "Voicemail",
      email: "praful.mishra121@gmail.com",
    },
    {
      id: "2",
      name: "0 Leads",
      Number: "Medium",
      voicemail: "Voicemail",
      email: "praful.mishra121@gmail.com",
    },
    {
      id: "3",
      name: "22 Leads",
      Number: "Low",
      voicemail: "Voicemail",
      email: "praful.mishra121@gmail.com",
    },
    {
      id: "4",
      name: "No Leads",
      Number: "Low",
      voicemail: "Voicemail",
      email: "praful.mishra121@gmail.com",
    },
    {
      id: "5",
      name: "0 Leads",
      Number: "Low",
      voicemail: "Voicemail",
      email: "praful.mishra121@gmail.com",
    },
    {
      id: "6",
      name: "12 Leads",
      Number: "Low",
      voicemail: "Voicemail",
      email: "praful.mishra121@gmail.com",
    },
    {
      id: "7",
      name: "James Test",
      Number: "Low",
      voicemail: "Voicemail",
      email: "praful.mishra121@gmail.com",
    },
    {
      id: "8",
      name: "James Test",
      Number: "HIGH",
      voicemail: "Voicemail",
      email: "praful.mishra121@gmail.com",
    },
    {
      id: "9",
      name: "James Test",
      Number: "Low",
      voicemail: "Voicemail",
      email: "praful.mishra121@gmail.com",
    },
    {
      id: "10",
      name: "James Test",
      Number: "Medium",
      voicemail: "Voicemail",
      email: "praful.mishra121@gmail.com",
    },
  ];

  return (
    // <ScrollView style={{  }}>
    <View style={styles.container}>
      <FlatList
        style={{}}
        data={DATA}
        keyExtractor={(item) => item.id}
        renderItem={({ item, index }) => (
          <View>
            <View style={{ flexDirection: "row" }}>
              <View
                style={{
                  width: "100%",

                  elevation: 5,
                  alignSelf: "center",
                  justifyContent: "center",
                }}
              >
                <View style={{ flexDirection: "row" }}>
                  <Text style={styles.number}>{item.Number}</Text>
                </View>
                <View style={{ flexDirection: "row", marginStart: "5%" }}>
                  <Text style={styles.name}>{item.name}</Text>

                  <Text style={{}}>
                    <Ionicons
                      name="ios-chevron-forward"
                      size={25}
                      color="#808080"
                    />
                  </Text>
                </View>
                <View style={styles.line}></View>
              </View>
            </View>
          </View>
        )}
      />
      <TouchableOpacity style={styles.floating_btn}>
        <Ionicons name="person-add" size={40} color="white" />
      </TouchableOpacity>
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
    fontSize: 22,

    color: "#808080",
    flex: 0.95,
    marginTop: "3%",
  },
  number: {
    fontSize: 25,

    fontWeight: "400",
    color: "black",
    marginLeft: "5%",
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
