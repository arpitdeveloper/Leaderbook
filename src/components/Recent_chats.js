import React from "react";

import { Entypo } from "@expo/vector-icons";
import {
  SafeAreaView,
  Dimensions,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from "react-native";

import { useNavigation } from "@react-navigation/native";
import { Colors } from "../constant/colors";
import { ScreenNames } from "../constant/ScreenNames";
import { STYLES } from "../constant/styles";

const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;

const DATA = [
  {
    id: "0",
    name: "test4",
    Number: "James Test",
    voicemail: "5 May 14:02",
    email: "praful.mishra121@gmail.com",
  },
  {
    id: "1",
    name: "test4",
    Number: "Manjeet 12 Kumar",
    voicemail: "5 May 14:02",
    email: "praful.mishra121@gmail.com",
  },
  {
    id: "2",
    name: "test4",
    Number: "James Test",
    voicemail: "5 May 14:02",
    email: "praful.mishra121@gmail.com",
  },
  {
    id: "3",
    name: "test4",
    Number: "Test 3 Test",
    voicemail: "5 May 14:02",
    email: "praful.mishra121@gmail.com",
  },
  {
    id: "4",
    name: "test4",
    Number: "James & Testing",
    voicemail: "5 May 14:02",
    email: "praful.mishra121@gmail.com",
  },
  {
    id: "5",
    name: "test4",
    Number: "James Test",
    voicemail: "5 May 14:02",
    email: "praful.mishra121@gmail.com",
  },
  {
    id: "6",
    name: "test4",
    Number: "James Test",
    voicemail: "5 May 14:02",
    email: "praful.mishra121@gmail.com",
  },
  {
    id: "7",
    name: "test4",
    Number: "James Test",
    voicemail: "5 May 14:02",
    email: "praful.mishra121@gmail.com",
  },
  {
    id: "8",
    name: "test4",
    Number: "James Test",
    voicemail: "5 May 14:02",
    email: "praful.mishra121@gmail.com",
  },
];

function Recent_chats() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <View style={STYLES.header_box}>
        <TouchableOpacity
          style={STYLES.side_bar}
          onPress={() => navigation.toggleDrawer()}
        >
          <Entypo name="menu" size={40} color="white" />
        </TouchableOpacity>
        <Text style={STYLES.bar_header}>Recent chats</Text>
      </View>
      <FlatList
        style={{}}
        data={DATA}
        keyExtractor={(item) => item.id}
        renderItem={({ item, index }) => (
          <View>
            <TouchableOpacity
              // onPress={() => navigation.navigate(ScreenNames.MSG)}
            >
              <View
                style={{
                  flexDirection: "row",
                  marginBottom: "5%",
                  marginTop: "5%",
                }}
              >
                <View style={{ flex: 0.35 }}>
                  <View style={styles.circle}>
                    <Text style={styles.circle_text}>T</Text>
                  </View>
                </View>

                <View style={{ flex: 0.55 }}>
                  <Text style={styles.text2} numberOfLines={1}>
                    {item.Number}
                  </Text>
                  <Text style={styles.text1}>{item.name}</Text>
                </View>
                <Text style={styles.text3}>{item.voicemail}</Text>
              </View>

              <View style={styles.line}></View>
            </TouchableOpacity>
          </View>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },

  text1: {
    fontSize: 15,
    marginTop: "2%",
    color: "#8c8c8c",
    fontWeight: "500",

    // color: "black",
  },
  text2: {
    fontSize: 20,
    marginTop: "2%",
    // color: "#808080",
    fontWeight: "900",

    color: "black",
    width: width * 0.355,
  },
  text3: {
    fontSize: 14,
    marginTop: "2%",
    // color: "#808080",

    color: "#8c8c8c",
    fontWeight: "400",
  },

  circle: {
    height: height * 0.08,
    width: width * 0.17,
    backgroundColor: Colors.MAIN_COLOR,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    marginStart: 20,
  },
  circle_text: {
    fontSize: 30,
    fontWeight: "600",
    color: "white",
  },

  line: {
    backgroundColor: "#cccccc",
    height: 0.5,
    marginVertical: "2%",
    width: "100%",
  },
});

export default Recent_chats;
