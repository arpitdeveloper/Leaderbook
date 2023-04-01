import React, { useState, useEffect } from "react";

import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
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
    Foundation,
    MaterialCommunityIcons,
  } from "@expo/vector-icons";




import { SafeAreaView } from "react-native-safe-area-context";
import All_Settings from "./l";
const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;


export default function Profile({ navigation }) {
  const [com, setcom] = useState(false);



  return (
    <SafeAreaView style={{flex:1}}>
     
      <View style={styles.header}>
          <TouchableOpacity
            style={styles.headertxt1}
            onPress={() => navigation.navigate("Login")}
          >
            <Entypo name="menu" size={30} color="white" />
          </TouchableOpacity>
          <Text style={styles.headertxt2}>Leads</Text>
          <TouchableOpacity
            style={styles.headertxt3}
            // onPress={() => navigation.toggleDrawer()}
          >
            <Ionicons name="search" size={30} color="white" />
          </TouchableOpacity>
        </View>
        <View style={{}}>
          <View>
            <View style={styles.tab}>
              <TouchableOpacity
                style={styles.ord}
                onPress={() => {
                  setcom("MY ORDERS");
                }}
              >
                <View style={styles.home_text}>
                  <Text
                    style={{
                      fontSize: 18,
                      fontWeight: "500",
                      color: "white",
                      textAlign: "center",
                    }}
                  >
                    RECENT
                  </Text>
                </View>
                {/* <View
                  style={{
                    height: 2,
                    width: width*0.5,
                    backgroundColor: com == "MY ORDERS" ? "#ffcc00" : "#003366",
                    marginTop: "10%",
                  }}
                ></View> */}
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.add}
                onPress={() => {
                  setcom("MY ADDRESSES");
                }}
              >
                <View style={styles.home_text}>
                  <Text
                    style={{
                      fontSize: 18,
                      fontWeight: "500",
                      color: "white",
                      textAlign: "center",
                    }}
                  >
                    PRIORITY
                  </Text>
                </View>
                {/* <View
                  style={{
                    height: 2,
                    width: 100,
                    backgroundColor: com == "MY ADDRESSES" ? "#ffcc00" : "#003366",
                    marginTop: "10%",
                  }}
                ></View> */}
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.setting}
                onPress={() => {
                  setcom("ALL SETTINGS");
                }}
              >
                <View style={styles.home_text}>
                  <Text
                    style={{
                      fontSize: 18,
                      fontWeight: "500",
                      color: "white",
                      textAlign: "center",
                    }}
                  >
                    ALL
                  </Text>
                </View>
                {/* <View
                  style={{
                    height: 2,
                    width: 100,
                    backgroundColor: com == "ALL SETTINGS" ? "#ffcc00" : "#003366",
                    marginTop: "10%",
                  }}
                ></View> */}
              </TouchableOpacity>
            </View>
            <View style={{ flexDirection: "row",backgroundColor: "#003366", }}>
              <View
                style={{
                  height: 2,
                  width: width * 0.3,
                  backgroundColor:
                   com == "MY ORDERS" ? "#ffcc00" : "#003366",
                  marginTop: "5%",
                }}
              ></View>
              
              <View
                style={{
                  height: 2,
                  width: width * 0.3,
                  backgroundColor:
                    com == "MY ADDRESSES" ? "#ffcc00" : "#003366",
                  marginTop: "5%",marginStart:"10%",
                }}
              ></View>
              <View
                style={{
                  height: 2,
                  width: width * 0.3,
                  backgroundColor:
                    com == "ALL SETTINGS" ? "#ffcc00" : "#003366",
                  marginTop: "5%",marginStart:"5%",
                }}
              ></View>
            </View>
          </View>
        </View>
      <View style={{flex:1}}>
        {com == "MY ORDERS" ? (

          <All_Settings />

        ) : com == "MY ADDRESSES" ? (
          <All_Settings  />
        ) : com == "ALL SETTINGS" ? (
          <All_Settings navigation={navigation}  />
        ) : (
          setcom("MY ORDERS")
        )}
      </View>
    </SafeAreaView>
  );
  // return (
  //   <>
  // <View style={styles.top}>
  //   <View style={{ flexDirection: "row" }}>
  //     <View style={{ margin: 20 }}>
  //       <Image
  //         style={styles.img1}
  //         source={{
  //           uri:
  //             "data:image/jpeg;base64,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",
  //         }}
  //       />
  //     </View>
  //     <View style={{ marginTop: 20 }}>
  //       <Text style={styles.name}>Akshay Pruthi</Text>
  //       <Text style={styles.email}>akshat.reachme@gmail.com</Text>
  //     </View>
  //     <View style={styles.img2}>
  //       <Image
  //         style={styles.img2v}
  //         source={{
  //           uri:
  //             "data:image/png;base64,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",
  //         }}
  //       />
  //     </View>
  //   </View>
  //   <View
  //     style={{
  //       backgroundColor: "#cccccc",
  //       height: 1,
  //       width: "100%",

  //       marginLeft: 0,
  //     }}
  //   ></View>
  // </View>

  //     <NavigationContainer independent={true}>
  //       <Tab.Navigator
  //         screenOptions={{
  //           tabBarLabelStyle: { fontSize: 14, fontWeight: "700" },
  //           tabBarItemStyle: { marginTop: 0 },
  //           tabBarIndicatorStyle: {
  //             backgroundColor: "black",
  //             width: 100,
  //             marginLeft: 15,
  //           },
  //           tabBarStyle: { marginTop: 0, height: 60 },
  //         }}
  //       >
  //         <Tab.Screen name="MY ORDERS" component={MY_ORDERS} />
  //         <Tab.Screen name="MY ADDRESSES" component={MY_addresses} />
  //         <Tab.Screen name="All SETTINGS" component={All_Settings} />
  //         {/* <Tab.Screen name="AD" component={ADD_new_address} /> */}
  //       </Tab.Navigator>

  //     </NavigationContainer>

  //   </>
  // );
}
const styles = StyleSheet.create({
    header: {
        height: height * 0.12,
        backgroundColor: "#003366",
        alignItems: "center",
    
        // marginTop: 25,
        flexDirection: "row",
      },
      headertxt1: {
        fontSize: 16,
        marginStart: "8%",
        marginTop: "7%",
        flex: 0.45,
      },
    
      headertxt2: {
        color: "white",
        fontWeight: "bold",
        fontSize: 25,
        marginTop: "7%",
        flex: 0.5,
      },
      headertxt3: {
        fontSize: 16,
        marginTop: "7%",
        flex: 0.2,
      },
      input: {
        height: height * 0.075,
        width: width * 0.9,
        marginTop: 30,
    
        padding: 10,
        alignSelf: "center",
        backgroundColor: "white",
        elevation: 1,
        borderRadius: 6,
        color: "#808080",
        fontSize: 20,
      },
      button: {
        height: height * 0.085,
        width: width * 0.9,
        marginTop: 30,
    
        padding: 10,
        alignSelf: "center",
        backgroundColor: "#003366",
        elevation: 1,
        borderRadius: 8,
        justifyContent: "center",
        alignItems: "center",
      },
      login: {
        textAlign: "center",
        color: "white",
        fontSize: 30,
        fontWeight: "400",
      },
    
      fp: {},
      fp_text: {
        fontSize: 15,
        color: "black",
        textAlign: "right",
        fontWeight: "500",
        paddingHorizontal: 20,
        paddingVertical: 10,
      },
      top: { backgroundColor: "white" },
    
      tab: { flexDirection: "row", backgroundColor: "#003366" },
      ord: {
        backgroundColor: "#003366",
        marginTop: "5%",
        marginStart: "5%",
        flex: 0.3,
      },
      add: {
        backgroundColor: "#003366",
        marginTop: "5%",
        flex: 0.55,
      },
      setting: {
        backgroundColor: "#003366",
        marginTop: "5%",
    
        marginBottom: 0,
      },
});
