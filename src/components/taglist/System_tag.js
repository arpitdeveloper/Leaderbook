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

export default function System_tag({ navigation }) {
  
  const [d, setd] = useState();

  const DATA = [
    {
      id: 0,
      name: "Morining",
      Number: "0",
      voicemail: "Voicemail",
      description:
        "This tag will be automatically added to leads who visits mostly in mornings to view listings.",
        s:false
    },
    {
      id: 1,
      name: "Noon",
      Number: "0",
      voicemail: "Voicemail",
      description:
        "This tag will be automatically added to leads who visits mostly in mornings to view listings.", s:false
    },
    {
      id: 2,
      name: "Evening",
      Number: "0",
      voicemail: "Voicemail",
      description:
        "This tag will be automatically added to leads who visits mostly in mornings to view listings.", s:false
    },
    {
      id: 3,
      name: "6 AM To 9 AM",
      Number: "0",
      voicemail: "Voicemail",
      description:
        "This tag will be automatically added to leads who visits mostly in mornings to view listings.", s:false
    },
    {
      id: 4,
      name: "6 AM To 9 AM",
      Number: "0",
      voicemail: "Voicemail",
      description:
        "This tag will be automatically added to leads who visits mostly in mornings to view listings.", s:false
    },
    {
      id: 5,
      name: "6 AM To 9 AM",
      Number: "0",
      voicemail: "Voicemail",
      description:
        "This tag will be automatically added to leads who visits mostly in mornings to view listings.", s:false
    },
    {
      id: 6,
      name: "6 AM To 9 AM",
      Number: "0",
      voicemail: "Voicemail",
      description:
        "This tag will be automatically added to leads who visits mostly in mornings to view listings.", s:false
    },
    {
      id: 7,
      name: "Google Ads",
      Number: "0",
      voicemail: "Voicemail",
      description:
        "This tag will be automatically added to leads who visits mostly in mornings to view listings.", s:false
    },
    {
      id: 8,
      name: "Facebook Buyer",
      Number: "0",
      voicemail: "Voicemail",
      description:
        "This tag will be automatically added to leads who visits mostly in mornings to view listings.", s:false
    },
    {
      id: 9,
      name: "Facebook Seller",
      Number: "0",
      voicemail: "Voicemail",
      description:
        "This tag will be automatically added to leads who visits mostly in mornings to view listings.", s:false
    },
    {
      id: 10,
      name: "Facebook Seller",
      Number: "0",
      voicemail: "Voicemail",
      description:
        "This tag will be automatically added to leads who visits mostly in mornings to view listings.", s:false
    },
  ];
  const [selected_data, setSelected_data] = useState(DATA);
  const press =(item)=>{
    const temp=[]
     selected_data.map((val)=>{
     if(val.id == item.id)
     {
         temp.push({...val,s:!val.s})
     }
     else{temp.push({...val,s:false})}
    });
    setSelected_data(temp)
   }
// console.log((selected_data))
  return (
    // <ScrollView style={{  }}>
    <View style={styles.container}>
      <FlatList
        style={{}}
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

                    <TouchableOpacity onPress={() =>  press(item)  }>
                      {item.s ?<Ionicons
                        name="ios-chevron-up"
                        size={25}
                        color="#808080"
                      />:<Ionicons
                      name="ios-chevron-down"
                      size={25}
                      color="#808080"
                    />}
                      
                    </TouchableOpacity>
                  </View>
                  <View style={{ flexDirection: "row" }}>
                    <Text style={styles.number}>
                      Total Leads ({item.Number})
                    </Text>
                  </View>
                  {   item.s  ?<View style={{ flexDirection: "row" }}>
                    <Text style={styles.number}>
                      Description: ({item.description})
                    </Text>
                  </View>:null}
                  
                </View>
              </View>
            
          </View>
        )}
      />
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
    backgroundColor: "grey",
    paddingHorizontal: "4%",
    borderRadius: 20,
    paddingVertical: "1%",
    fontSize: 15,
    fontWeight: "bold",
    color: "white",
  },
  number: {
    fontSize: 15,

    fontWeight: "400",
    color: "black",
    marginLeft: "6%",
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
