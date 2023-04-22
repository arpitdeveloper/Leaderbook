import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  FlatList,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation, useRoute } from "@react-navigation/native";
const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;
import {
  Ionicons,
  Octicons,
} from "@expo/vector-icons";
import { get_leads_priorities } from "../Services";
import Loader from "../constant/Loader";
import { ScreenNames } from "../constant/ScreenNames";


export default function Priority() {
  const [DATA, setDATA] = useState([]);
  const [loading, setLoading] = React.useState(true);
  const navigation = useNavigation();
  useEffect(() => {
    (async () => {
      const user_data = await AsyncStorage.getItem("user_data");
      
      const d = JSON.parse(user_data);
     
      // console.log(dr)
      const data = {
        email: d.email,
        password: d.password,
      };
      get_leads_priorities(data)
        .then((response) => response.json())
        .then((result) => {
         
          setDATA(result?.data?.leadpriorities);
          setLoading(false);
        })
        .catch((error) => console.log("error", error));
    })();
  }, []);

  return (
    // <ScrollView style={{  }}>
    <View style={styles.container}>
       {loading?<Loader loading={loading}/>: DATA && DATA.length>0?
      <FlatList
        data={DATA}
        keyExtractor={(item) => item.id}
        renderItem={({ item, index }) => (
          <View>
            <View style={{ flexDirection: "row" ,}}>
              <View
                style={{
                  width: "100%",

                 
                  alignSelf: "center",
                  justifyContent: "center",backgroundColor:"white"
                }}
              >
                <View style={{ flexDirection: "row" ,marginTop:"2%"}}>
                  <Text style={styles.number}>{item.type}</Text>
                </View>
                <View style={{ flexDirection: "row", marginStart: "5%" }}>
                  <Text style={styles.name}>{item.totalcount} Leads</Text>

                  <Text style={{}}>
                    <Ionicons
                      name="ios-chevron-forward"
                      size={20}
                      color="#cccccc"
                    />
                  </Text>
                </View>
                <View style={styles.line}></View>
              </View>
            </View>
          </View>
        )}
      />
      :null}
      <TouchableOpacity 
      onPress={() => navigation.navigate(ScreenNames.NEW_LEADS)}
      style={styles.floating_btn}>
        <Ionicons name="person-add" size={30} color="white" />
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
  phone_icon: { flex: 0.95 },
  voice_icon: { flex: 0.14, marginStart: "5%", marginTop: "5%" },
  email_icon: { flex: 0.16, marginStart: "5%", marginTop: "5%" },
  icon: { marginTop: "5%" },
  icon1: { marginTop: "5%" },
  name: {
    fontSize: 19,

    color: "#808080",
    flex: 0.95,
    marginTop: "1%",fontWeight:"300"
  },
  number: {
    fontSize: 20,

    fontWeight: "500",
    color: "#737373",
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
    height: 0.5,
    marginTop: "5%",
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

  container: { flex: 1 ,backgroundColor:"white"},
});
