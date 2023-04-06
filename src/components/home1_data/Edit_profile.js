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
  const [address, setaddress] = React.useState("");
  const [city, setcity] = React.useState("");
  const [province, setprovince] = React.useState("");
  const [address_tag, setaddress_tag] = React.useState("");

  useEffect(() => {
    (async () => {
      const u = await AsyncStorage.getItem("userInfo");
      const d = JSON.parse(u);
      // console.log(d);

      var array = [];
      array.push(d);

      setdata(array);
    })();
  }, []);

  const postdata = async () => {
    try {
      user_update(
        First_name,
        last_name,
        email,
        title,
        country,
        address,
        address_tag,
        city,
        phone,
        province,
        company
      ).then((response) => {
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
          onPress={() => navigation.navigate("h")}
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
                <Text style={styles.name_txt}> First Name</Text>
                <TextInput
                  placeholder="Firstname"
                  style={styles.input}
                  defaultValue={item.userinfo.first_name}
                  onChangeText={(txt) => setFirst_name(txt)}
                ></TextInput>
                {/* {console.log(First_name)} */}
                <Text style={styles.name_txt}> Last Name</Text>
                <TextInput
                  placeholder="Lastname"
                  style={styles.input}
                  defaultValue={item.userinfo.last_name}
                  onChangeText={(txt) => setlast_name(txt)}
                ></TextInput>
                <Text style={styles.name_txt}> Email</Text>
                <TextInput
                  placeholder="Email"
                  style={styles.input}
                  defaultValue={item.userinfo.email}
                  onChangeText={(txt) => setemail(txt)}
                ></TextInput>
                <Text style={styles.name_txt}> Job Title/Designation</Text>
                <TextInput
                  placeholder="Job title"
                  style={styles.input}
                  defaultValue={item.userinfo.title}
                  onChangeText={(txt) => settitle(txt)}
                ></TextInput>
                <Text style={styles.name_txt}> Company Name</Text>
                <TextInput
                  placeholder="Company name"
                  style={styles.input}
                  defaultValue={item.userinfo.company}
                  onChangeText={(txt) => setcompany(txt)}
                ></TextInput>
                <Text style={styles.name_txt}> Phone</Text>
                <TextInput
                  placeholder="Phone"
                  style={styles.input}
                  defaultValue={item.userinfo.phone}
                  onChangeText={(txt) => setphone(txt)}
                ></TextInput>
                <Text style={styles.name_txt}> Office Street Address</Text>
                <TextInput
                  placeholder="Address"
                  style={styles.input}
                  defaultValue={item.userinfo.address}
                  onChangeText={(txt) => setaddress(txt)}
                ></TextInput>
                <Text style={styles.name_txt}> City</Text>
                <TextInput
                  placeholder="City"
                  style={styles.input}
                  defaultValue={item.userinfo.city}
                  onChangeText={(txt) => setcity(txt)}
                ></TextInput>
                <Text style={styles.name_txt}> Province/State/Postal Code</Text>
                <TextInput
                  placeholder="Province/State/Postal Code"
                  style={styles.input}
                  defaultValue={item.userinfo.affiliate_code}
                  onChangeText={(txt) => setprovince(txt)}
                ></TextInput>
                <Text style={styles.name_txt}> Country</Text>
                {/* {renderLabel()} */}
                <Dropdown
                  style={[styles.dropdown, isFocus && { borderColor: "blue" }]}
                  placeholderStyle={styles.placeholderStyle}
                  selectedTextStyle={styles.selectedTextStyle}
                  // inputSearchStyle={styles.inputSearchStyle}
                  // iconStyle={styles.iconStyle}
                  data={dt}
                  search={false}
                  maxHeight={300}
                  labelField="label"
                  valueField="value"
                  // placeholder={!isFocus ? "Select item" : "..."}
                  // searchPlaceholder="Search..."
                  value={value}
                  // onFocus={() => setIsFocus(true)}
                  // onBlur={() => setIsFocus(false)}
                  onChange={(item) => {
                    setValue(item.value);
                    // setIsFocus(false);
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
                <Text style={styles.name_txt}> Address Tag Line</Text>
                <TextInput
                  placeholder="name"
                  style={styles.input}
                  defaultValue={item.userinfo.text_sign}
                  onChangeText={(txt) => setaddress_tag(txt)}
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
