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
  TextInput,
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
  const [com, setcom] = useState(false);
  const [First_name, setFirst_name] = React.useState(
    route.params?.data?.first_name
  );
  const [last_name, setLast_name] = React.useState(
    route.params?.data?.last_name
  );
  const [email, setEmail] = React.useState(route.params?.data?.email);

  const [phone, setPhone] = React.useState(route.params?.data?.phone);

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
          <Text style={styles.txt2}>Welcome {route.params.data.name}</Text>
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
          <View style={styles.box2}>
            <View style={styles.box3}>
              <View style={styles.view1}>
                <TouchableOpacity
                  style={{
                    height: 30,

                    flexDirection: "row",
                    borderRadius: 4,
                    backgroundColor:
                      com == "Your Profile" ? "white" : Colors.btn,

                    alignItems: "center",
                    padding: 5,
                    marginRight: "2%",
                  }}
                  onPress={() => {
                    setcom("Your Profile");
                  }}
                >
                  <Text style={styles.txt5}>Your Profile</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    height: 30,

                    flexDirection: "row",
                    borderRadius: 4,
                    backgroundColor: com == "Favorites" ? "white" : Colors.btn,

                    alignItems: "center",
                    padding: 5,
                    marginRight: "2%",
                  }}
                  onPress={() => {
                    setcom("Favorites");
                  }}
                >
                  <Text style={styles.txt5}>Favorites</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    height: 30,

                    flexDirection: "row",
                    borderRadius: 4,
                    backgroundColor:
                      com == "Saved Searches" ? "white" : Colors.btn,

                    alignItems: "center",
                    padding: 5,
                    marginRight: "2%",
                  }}
                  onPress={() => {
                    setcom("Saved Searches");
                  }}
                >
                  <Text style={styles.txt5}>Saved Searches</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.view2}>
                <TouchableOpacity
                  style={{
                    height: 30,

                    flexDirection: "row",
                    borderRadius: 4,
                    backgroundColor: com == "News Feeds" ? "white" : Colors.btn,

                    alignItems: "center",
                    padding: 5,
                    marginRight: "2%",
                  }}
                  onPress={() => {
                    setcom("News Feeds");
                  }}
                >
                  <Text style={styles.txt5}>News Feeds</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    height: 30,

                    flexDirection: "row",
                    borderRadius: 4,
                    backgroundColor:
                      com == "Change Password" ? "white" : Colors.btn,

                    alignItems: "center",
                    padding: 5,
                    marginRight: "2%",
                  }}
                  onPress={() => {
                    setcom("Change Password");
                  }}
                >
                  <Text style={styles.txt5}>Change Password</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    height: 30,

                    flexDirection: "row",
                    borderRadius: 4,
                    backgroundColor:
                      com == "Cancel Account" ? "white" : Colors.btn,

                    alignItems: "center",
                    padding: 5,
                    marginRight: "2%",
                  }}
                  onPress={() => {
                    setcom("Cancel Account");
                  }}
                >
                  <Text style={styles.txt5}>Cancel Account</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={{}}>
              {com == "Your Profile" ? (
                <View style={styles.contct_view}>
                  <Text style={styles.cnct}>Contact Information</Text>
                  <Text style={styles.first_name}>First Name*</Text>
                  <TextInput
                    placeholder="James"
                    style={styles.input}
                    value={First_name}
                    onChangeText={(txt) => setFirst_name(txt)}
                    placeholderTextColor={"#666666"}
                  ></TextInput>
                  <Text style={styles.first_name}>Last Name*</Text>
                  <TextInput
                    placeholder="James"
                    style={styles.input}
                    value={last_name}
                    onChangeText={(txt) => setLast_name(txt)}
                    placeholderTextColor={"#666666"}
                  ></TextInput>
                  <Text style={styles.first_name}>Email*</Text>
                  <TextInput
                    placeholder="James"
                    style={styles.input}
                    value={email}
                    onChangeText={(txt) => setEmail(txt)}
                    placeholderTextColor={"#666666"}
                  ></TextInput>
                  <Text style={styles.first_name}>Cell / Phone Number*</Text>
                  <TextInput
                    placeholder="James"
                    style={styles.input}
                    value={phone}
                    onChangeText={(txt) => setPhone(txt)}
                    placeholderTextColor={"#666666"}
                  ></TextInput>
                  <TouchableOpacity style={styles.btn}>
                    <Text style={styles.save}>Save</Text>
                  </TouchableOpacity>
                </View>
              ) : com == "Favorites" ? (
                <View>
                  <Text>aman2</Text>
                </View>
              ) : com == "Saved Searches" ? (
                <View style={{paddingHorizontal:"6%"}}>
                  <View style={styles.box4}>
                  <Text style={styles.notify}>Notifications</Text>
                  </View>
                  <View style={{flexDirection:"row",marginTop:5}}>
                    <View style={styles.menu}>
                    <Text style={styles.menu_txt}>Daily</Text>
                    <Text style={styles.notify}>+</Text>
                    </View>
                    <Text style={styles.txt6}>Edit</Text>
                    <Text style={styles.txt6}>View</Text>
                    <Text style={styles.txt6}>Delete</Text>
                  </View>
                  <View style={{flexDirection:"row",marginVertical:"1%"}}>
                    <Text style={styles.saved_search}>Saved Search - </Text>
                    <Text style={styles.saved_txt}>May 24 2023</Text>
                </View>
                <Text style={styles.saved_txt}>Search in the city All Areas</Text>
                <View style={styles.line}></View>
                </View>
              ) : com == "News Feeds" ? (
                <View>
                  <Text>aman4</Text>
                </View>
              ) : com == "Change Password" ? (
                <View></View>
              ) : com == "Cancel Account" ? (
                <View></View>
              ) : (
                setcom("Saved Searches")
              )}
            </View>
          </View>

          <Text style={styles.set_txt2}>Sign out</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  line:{height:1,backgroundColor:"#666666",marginTop:"8%",marginBottom:"15%"},
  saved_search:{fontSize:15,fontWeight:"bold",color:"blue",},
  saved_txt:{fontSize:15,fontWeight:"normal",},
  txt6: {
    fontSize: 13,
    backgroundColor: Colors.MAIN_COLOR,
    color: "white",
    textAlign: "center",
    paddingHorizontal: "3%",paddingVertical:"1.5%",borderRadius:2,
   
    alignSelf: "center",marginHorizontal:"1%"
  },
  menu:{flexDirection:"row",alignItems:"center",justifyContent:"space-between",borderWidth:0.5,
  height:25,borderColor:"#999999",width:"40%",borderRadius:20,paddingHorizontal:"2%",marginEnd:"6%",marginStart:"2%"

},
menu_txt: {
  fontSize: 14,
  fontWeight: "normal",
  color: "blue",
},
  save: {
    fontSize: 15,
    fontWeight: "bold",
    color: "white",
  },
  notify: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#666666",marginStart:"2%"
  },
  contct_view: { marginTop: "8%", paddingHorizontal: "6%" },
  btn: {
    backgroundColor: "#32b0d6",

    height: height * 0.035,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: "15%",
  },
  input: {
    borderWidth: 0.5,
    color: "#666666",
    paddingHorizontal: "2%",
    fontSize: 14,
    // height: height * 0.06,
    borderRadius: 4,
    borderColor: "#999999",
    marginVertical: "4%",
    width: "95%",
  },
  cnct: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#666666",
    marginVertical: "8%",
  },
  first_name: { fontSize: 15, fontWeight: "bold", color: "#666666" },
  view2: { flexDirection: "row", marginTop: "2%" },
  view1: { flexDirection: "row" },
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
    // height: height * 0.9,
    // alignItems: "center",

    marginTop: "15%",
    borderWidth: 0.5,
    borderColor: "#666666",
    borderRadius: 6,
    marginHorizontal: "2%",
    padding: 5,
    paddingBottom: "10%",
  },
  box3: {
    // alignItems: "center",

    borderWidth: 0.8,
    borderColor: "#666666",
    borderRadius: 6,
    width: "100%",
    backgroundColor: "#cccccc",
    paddingHorizontal: "2%",
    paddingTop: "2%",
  },
  box4: {
    // alignItems: "center",

    
    
    width: "100%",
    backgroundColor: "#cccccc",
    marginTop:"15%",height:45,alignItems:"center",justifyContent:"flex-start",flexDirection:"row"
  },
  tch: {
    backgroundColor: "white",
    margin: "2%",
    borderRadius: 4,
    height: 30,
    width: 80,
    alignItems: "center",
    justifyContent: "center",
  },
  txt5: {
    textAlign: "center",
    fontSize: 12,
  },
  touch_box: {
    height: 30,

    flexDirection: "row",
    borderRadius: 4,
    backgroundColor: "white",

    alignItems: "center",
    padding: 5,
    marginRight: "2%",
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
