import React, { useState } from "react";
import {
  SafeAreaView,
  Dimensions,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  StatusBar,
} from "react-native";

import {
  Entypo,
  FontAwesome,
  AntDesign,
  MaterialCommunityIcons,
  Zocial,
  FontAwesome5,
} from "@expo/vector-icons";

import { useNavigation, useRoute } from "@react-navigation/native";
import { Colors } from "../../../constant/colors";
import { Images } from "../../../constant/images";

const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;

function Edit_searches() {
  const navigation = useNavigation();
  const route = useRoute();
  const [mark, setmark] = useState(false);
  const [mark1, setmark1] = useState(false);
  //   console.log(route.params.data.data.email)
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header_box}>
        <View style={styles.box_items}>
          <TouchableOpacity
            style={styles.backimage}
            onPress={() => navigation.goBack()}
          >
            <Image source={Images.backArrow} style={styles.back_img} />
          </TouchableOpacity>
          <Text style={styles.header}>Edit Saved Searches</Text>
        </View>
      </View>
      <ScrollView style={styles.scrollView}>
        <View>
          <View style={styles.box1}>
            <View style={styles.img_set}>
              <Image source={Images.user} style={styles.img} />
              <Text style={styles.txt1}>MY ACCOUNT</Text>
            </View>
            <View style={styles.circle}>
              <Entypo name="menu" size={24} color="white" />
            </View>
          </View>
          <Text style={styles.txt4}>Create New Search</Text>
          <Text style={styles.txt2}>Welcome {route.params.data.data.name}</Text>
          <View style={styles.set1}>
            <Text style={styles.set_txt}>Edit Profile</Text>

            <Text style={{}}>|</Text>
            <Text style={styles.set_txt}>0 Favorite Properties</Text>
          </View>
          <View style={styles.set1}>
            <Text style={styles.set_txt}>1 Saved Searche</Text>

            <Text style={{}}>|</Text>
            <Text style={styles.set_txt}>0 Postal Code Search</Text>
          </View>
          <Text style={styles.set_txt2}>Sign out</Text>
          <View style={styles.box2}></View>

          <Text style={styles.set_txt2}>Sign out</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  img_set: { flexDirection: "row", marginStart: "30%", flex: 0.9 },
  set_txt: {
    fontSize: 10,
    color: "#0080ff",
    fontWeight: "bold",
    flex: 0.5,
    paddingLeft: "10%",
  },
  set_txt2: {
    fontSize: 10,
    color: "#0080ff",
    fontWeight: "bold",
    paddingLeft: "10%",
  },
  set1: {
    flexDirection: "row",
    alignItems: "center",
  },
  txt4: {
    fontSize: 15,
    backgroundColor: Colors.MAIN_COLOR,
    color: "white",
    textAlign: "center",
    padding: 10,
    width: "50%",
    alignSelf: "center",
  },
  back_img: {
    height: height * 0.028,
    width: width * 0.1,
    resizeMode: "contain",
  },
  circle: {
    backgroundColor: Colors.MAIN_COLOR,
    height: height * 0.05,
    width: width * 0.1,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 30,
  },
  box1: {
    backgroundColor: "rgba(52, 52, 52, 0.5)",

    height: height * 0.08,
    alignItems: "center",
    flexDirection: "row",
    marginBottom: "5%",
  },
  box2: {
    height: height * 0.9,
    alignItems: "center",

    marginTop: "15%",
    borderWidth: 0.5,
    borderColor: "#666666",
    borderRadius: 6,
    marginHorizontal: "2%",
  },

  backimage: { flex: 0.65, marginStart: "5%" },
  box_items: { flexDirection: "row", alignItems: "center" },
  img: {
    height: height * 0.02,
    width: width * 0.05,
    resizeMode: "contain",
    alignSelf: "center",
  },
  img2: {
    height: height * 0.02,
    width: width * 0.05,
    resizeMode: "contain",
  },
  header_box: {
    height: height * 0.08,
    backgroundColor: Colors.MAIN_COLOR,
    alignItems: "center",

    // marginTop: 25,
    flexDirection: "row",
  },
  container: {
    flex: 1,
  },
  scrollView: {
    marginBottom: 20,
  },

  header: {
    color: "white",
    fontWeight: "500",
    fontSize: 21,
  },
  txt1: {
    color: "black",
    fontWeight: "bold",
    fontSize: 14,
  },
  txt2: {
    fontWeight: "bold",
    fontSize: 14,
    textAlign: "center",
    color: "#666666",
  },
  txt3: {
    fontWeight: "500",
    fontSize: 15,
  },
});

export default Edit_searches;
