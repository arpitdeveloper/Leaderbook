import React, { useEffect, useState } from "react";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import {
  SafeAreaView,
  Dimensions,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  FlatList,
} from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import AntDesign from "@expo/vector-icons/AntDesign";

const dt = [
  { label: "Canada", value: "1" },
  { label: "USA", value: "2" },
];

import { useNavigation, useRoute } from "@react-navigation/native";
import { ScrollView } from "react-native-gesture-handler";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { edit_profile } from "../../Services";
import { ScreenNames } from "../../constant/ScreenNames";
const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;
function Edit_profile() {
  const navigation = useNavigation();
  const [data, setdata] = useState([]);
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);
  const [First_name, setFirst_name] = React.useState("");
  const [last_name, setlast_name] = React.useState("");
  const [email, setemail] = React.useState("");
  const [title, settitle] = React.useState("");
  const [company, setcompany] = React.useState("");
  const [phone, setphone] = React.useState("");
  const [state, setstate] = React.useState("");
  const [city, setcity] = React.useState("");
  const [text_sign, settext_sign] = React.useState("");
  const [country_id, setcountry_id] = React.useState("");
  const [address, setaddress] = React.useState("");
  const [drop, setdrop] = React.useState("");

  useEffect(() => {
    (async () => {
      const user_data = await AsyncStorage.getItem("user_data");
      const drop_data = await AsyncStorage.getItem("dropdown_data");
      const d = JSON.parse(user_data);
      const dr = JSON.parse(drop_data);
      setdrop(dr);
      // console.log(dr)
      const data = {
        email: d.email,
        password: d.password,
      };
      edit_profile(data)
        .then((response) => response.json())
        .then((result) => {
          var Array = [];

          Array.push(result.data.profile_data_arr.Profile);
          setdata(Array);

          // console.log(result.data.profile_data_arr.Profile.country_id)
          setcountry_id(result.data.profile_data_arr.Profile.country_id);
        })
        .catch((error) => console.log("error", error));

      // console.log(d);

      // var array = [];
      // array.push(d);

      // setdata(array);
    })();
  }, []);

  // console.log(typeof(country_id))

  const postdata = async () => {
    try {
      const data = {
        "first_name": First_name,
        "last_name": last_name,
        "email": email,
        "title": title,
        "country_id": country_id,
        "state": state,
        "address_tag": address_tag,
        "city": city,
        "phone": phone,
        "text_sign": text_sign,
        "company": company,
        "address": address,
      };
      user_update(data).then((response) => {
        response.json().then((data) => {
          console.log(data);
          // Alert.alert(data.msg);
          // navigation.goBack();
        });
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.headertxt1}
          onPress={() => navigation.navigate(ScreenNames.HOME)}
        >
          <MaterialCommunityIcons
            name="keyboard-backspace"
            size={30}
            color="white"
          />
        </TouchableOpacity>
        <Text style={styles.headertxt2}>Profile</Text>
        <TouchableOpacity
          style={styles.headertxt3}
          // onPress={() => navigation.navigate("h")}
        >
          <Text style={styles.save}>save</Text>
        </TouchableOpacity>
      </View>
      <ScrollView>
        <FlatList
          style={{ backgroundColor: "#f2f2f2", padding: 10 }}
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={({ item, index }) => (
            <View>
              <View style={{ paddingHorizontal: "6%", marginBottom: "5%" }}>
                <Text style={styles.name_txt}> {item.first_name.label}</Text>
                <TextInput
                  placeholder="Firstname"
                  style={styles.input}
                  defaultValue={item.first_name.value}
                  onChangeText={(txt) => setFirst_name(txt)}
                ></TextInput>
                {/* {console.log(First_name)} */}
                <Text style={styles.name_txt}> {item.last_name.label}</Text>
                <TextInput
                  placeholder="Lastname"
                  style={styles.input}
                  defaultValue={item.last_name.value}
                  onChangeText={(txt) => setlast_name(txt)}
                ></TextInput>
                <Text style={styles.name_txt}> {item.email.label}</Text>
                <TextInput
                  placeholder="Email"
                  style={styles.input}
                  defaultValue={item.email.value}
                  onChangeText={(txt) => setemail(txt)}
                ></TextInput>
                <Text style={styles.name_txt}> {item.title.label}</Text>
                <TextInput
                  placeholder="Job title"
                  style={styles.input}
                  defaultValue={item.title.value}
                  onChangeText={(txt) => settitle(txt)}
                ></TextInput>
                <Text style={styles.name_txt}> {item.company.label}</Text>
                <TextInput
                  placeholder="Company name"
                  style={styles.input}
                  defaultValue={item.company.value}
                  onChangeText={(txt) => setcompany(txt)}
                ></TextInput>
                <Text style={styles.name_txt}> {item.phone.label}</Text>
                <TextInput
                  placeholder="Phone"
                  style={styles.input}
                  defaultValue={item.phone.value}
                  onChangeText={(txt) => setphone(txt)}
                ></TextInput>
                <Text style={styles.name_txt}> Office Street Address</Text>
                <TextInput
                  placeholder="Address"
                  style={styles.input}
                  defaultValue={item.address.value}
                  onChangeText={(txt) => setaddress(txt)}
                ></TextInput>
                <Text style={styles.name_txt}> {item.city.label}</Text>
                <TextInput
                  placeholder="City"
                  style={styles.input}
                  defaultValue={item.city.value}
                  onChangeText={(txt) => setcity(txt)}
                ></TextInput>
                <Text style={styles.name_txt}>{item.state.label}</Text>
                <TextInput
                  placeholder="Province/State/Postal Code"
                  style={styles.input}
                  defaultValue={item.state.value}
                  onChangeText={(txt) => setstate(txt)}
                ></TextInput>
                <Text style={styles.name_txt}> {item.country_id.label}</Text>
                {/* {renderLabel()} */}
                <Dropdown
                  style={[styles.dropdown, isFocus && { borderColor: "blue" }]}
                  placeholderStyle={styles.placeholderStyle}
                  selectedTextStyle={styles.selectedTextStyle}
                  // inputSearchStyle={styles.inputSearchStyle}
                  // iconStyle={styles.iconStyle}
                  data={item.country_id.dropdown_arr}
                  search={false}
                  maxHeight={300}
                  labelField="label"
                  valueField="value"
                  placeholder={drop}
                  value={value}
                  onFocus={() => setIsFocus(true)}
                  onBlur={() => setIsFocus(false)}
                  onChange={(i) => {
                    setValue(i.value);
                    AsyncStorage.setItem(
                      "dropdown_data",
                      JSON.stringify(i.label)
                    );
                    setIsFocus(false);
                  }}
                  renderRightIcon={() => (
                    <AntDesign
                      style={styles.icon}
                      color="#003366"
                      name="downsquare"
                      size={30}
                    />
                  )}
                />
                <Text style={styles.name_txt}> {item.text_sign.label}</Text>
                <TextInput
                  placeholder="name"
                  style={styles.input}
                  defaultValue={item.text_sign.value}
                  onChangeText={(txt) => settext_sign(txt)}
                ></TextInput>
              </View>
            </View>
          )}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  save: {
    fontSize: 20,
    color: "yellow",
    borderWidth: 1.5,
    borderColor: "yellow",
    borderRadius: 15,
    paddingHorizontal: 2,
    textAlign: "center",
  },
  dropdown: {
    height: 50,

    borderRadius: 8,
    paddingHorizontal: 8,
    backgroundColor: "white",
  },
  icon: {
    marginRight: 5,
  },
  label: {
    // position: "absolute",
    // backgroundColor: "white",
    // left: 22,
    // top: 8,
    // zIndex: 999,
    // paddingHorizontal: 8,
    // fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 15,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },

  name_txt: { fontSize: 17, marginBottom: "2%", paddingTop: "5%" },
  input: {
    backgroundColor: "white",
    color: "black",
    paddingHorizontal: "2%",
    fontSize: 17,
    height: 50,
    borderRadius: 6,
  },
  button: {
    height: height * 0.085,
    width: width * 0.9,
    marginTop: 50,

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
    fontSize: 20,
    fontWeight: "bold",
  },
  //   header: {
  //     height: height * 0.1,
  //     backgroundColor: "#003366",
  //     justifyContent: "space-between",
  //     alignItems: "center",flexDirection:"row",
  //   },
  header: {
    height: height * 0.12,
    backgroundColor: "#003366",
    alignItems: "center",

    // marginTop: 25,
    flexDirection: "row",
  },
  headertxt3: {
    fontSize: 16,
    marginStart: "8%",
    marginTop: "7%",
    flex: 0.3,
    alignItems: "center",
    justifyContent: "center",
  },

  headertxt2: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
    marginTop: "7%",
    textAlign: "center",
    flex: 0.8,
  },
  headertxt1: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
    marginTop: "7%",
    textAlign: "center",
    flex: 0.4,
    marginStart: "8%",
  },
  fp_text: {
    fontSize: 15,
    color: "black",
    textAlign: "right",
    fontWeight: "500",
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
});

export default Edit_profile;
