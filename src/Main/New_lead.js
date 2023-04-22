import React, { useEffect, useState } from "react";

import { MaterialCommunityIcons ,FontAwesome} from "@expo/vector-icons";
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
  
];
const calender = [
    { label: "No Tag", value: "1" },
    { label: "Jan1", value: "2" },
    { label: "Jan2", value: "3" },
    { label: "Jan3", value: "4" },
    { label: "Jan4", value: "5" },
    { label: "Feb1", value: "6" },
    { label: "Feb2", value: "7" },
    { label: "Feb3", value: "8" },
    { label: "Feb4", value: "9" },
    
  ];

import { useNavigation, useRoute } from "@react-navigation/native";
import { ScrollView } from "react-native-gesture-handler";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { STYLES } from "../constant/styles";
import { ScreenNames } from "../constant/ScreenNames";
const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;
function New_lead() {
  const navigation = useNavigation();
  const [data, setdata] = useState([]);
  const [value, setValue] = useState(0);
  const [isFocus, setIsFocus] = useState(false);
  const [First_name, setFirst_name] = React.useState("");
  const [last_name, setLast_name] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [title, setTitle] = React.useState("");
  const [company, setCompany] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [state, setstate] = React.useState("");
  const [city, setCity] = React.useState("");
  const [text_sign, setText_sign] = React.useState("");
  const [country_id, setCountry_id] = React.useState("");
  const [address, setAddress] = React.useState("");
  const [drop, setDrop] = React.useState("");
  const [id, setId] = React.useState("");

 

  // console.log(value)

  return (
    <SafeAreaView style={styles.container}>
      <View style={STYLES.header_box}>
        <TouchableOpacity
          style={STYLES.back_button}
          onPress={() => navigation.goBack()}
        >
          <MaterialCommunityIcons
            name="keyboard-backspace"
            size={30}
            color="white"
          />
        </TouchableOpacity>
        <Text style={STYLES.header}>New lead</Text>
        <TouchableOpacity style={STYLES.save_touch} onPress={() => {}}>
          <Text style={STYLES.save_text}>save</Text>
        </TouchableOpacity>
      </View>
      <ScrollView
      nestedScrollEnabled={true}
      >
        <FlatList
          style={{ backgroundColor: "#f2f2f2", padding: 10 }}
          data={dt}
          keyExtractor={(item) => item.id}
          renderItem={({ item, index }) => (
            <View>
              <View style={{ paddingHorizontal: "6%", marginBottom: "5%" }}>
                <Text style={styles.name_txt}>Firstname</Text>
                <TextInput
                  placeholder=""
                  style={styles.input}
                  value={First_name}
                  onChangeText={(txt) => setFirst_name(txt)}
                ></TextInput>
                {/* {console.log(First_name)} */}
                <Text style={styles.name_txt}>Last name</Text>
                <TextInput
                  placeholder=""
                  style={styles.input}
                  value={last_name}
                  onChangeText={(txt) => setLast_name(txt)}
                ></TextInput>
                 <Text style={styles.name_txt}>Choose Site</Text>
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
                  placeholder={drop}
                  value={value}
                  onFocus={() => setIsFocus(true)}
                  onBlur={() => setIsFocus(false)}
                  onChange={(i) => {
                    setValue(i.value);
                   
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
                <Text style={styles.name_txt}>Email</Text>
                <TextInput
                  placeholder=""
                  style={styles.input}
                  value={email}
                  onChangeText={(txt) => setEmail(txt)}
                ></TextInput>
                
                <Text style={styles.name_txt}>Phone</Text>
                <TextInput
                  placeholder=""
                  style={styles.input}
                  value={company}
                  onChangeText={(txt) => setCompany(txt)}
                ></TextInput>
                <Text style={styles.name_txt}>Comments</Text>
                <TextInput
                  placeholder=""
                  style={styles.input}
                  value={phone}
                  onChangeText={(txt) => setPhone(txt)}
                ></TextInput>
                
                
                <Text style={styles.name_txt}>Assigned To</Text>
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
                  placeholder={drop}
                  value={value}
                  onFocus={() => setIsFocus(true)}
                  onBlur={() => setIsFocus(false)}
                  onChange={(i) => {
                    setValue(i.value);
                   
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
                <Text style={styles.name_txt}>Lead Type</Text>
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
                  placeholder={drop}
                  value={value}
                  onFocus={() => setIsFocus(true)}
                  onBlur={() => setIsFocus(false)}
                  onChange={(i) => {
                    setValue(i.value);
                   
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
                
                <Text style={styles.name_txt}>Lead Status</Text>
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
                  placeholder={drop}
                  value={value}
                  onFocus={() => setIsFocus(true)}
                  onBlur={() => setIsFocus(false)}
                  onChange={(i) => {
                    setValue(i.value);
                   
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
                <Text style={styles.name_txt}>Follow Up</Text>
                {/* {renderLabel()} */}
                <Dropdown
                
                  style={[styles.dropdown, isFocus && { borderColor: "blue" }]}
                  placeholderStyle={styles.placeholderStyle}
                  selectedTextStyle={styles.selectedTextStyle}
                  // inputSearchStyle={styles.inputSearchStyle}
                  // iconStyle={styles.iconStyle}
                  data={calender}
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
                   
                    setIsFocus(false);
                  }}
                  renderRightIcon={() => (
                   
                    <FontAwesome style={styles.icon} name="calendar" size={30} color="grey" />
                  )}
                />
                <Text style={styles.name_txt}>Company Name</Text>
                <TextInput
                  placeholder="name"
                  style={styles.input}
                  value={text_sign}
                  onChangeText={(txt) => setText_sign(txt)}
                ></TextInput>
                <Text style={styles.name_txt}>Address</Text>
                <TextInput
                  placeholder="name"
                  style={styles.input}
                  value={text_sign}
                  onChangeText={(txt) => setText_sign(txt)}
                ></TextInput>
                <Text style={styles.name_txt}>City</Text>
                <TextInput
                  placeholder="name"
                  style={styles.input}
                  value={text_sign}
                  onChangeText={(txt) => setText_sign(txt)}
                ></TextInput>
                <Text style={styles.name_txt}>State/Province</Text>
                <TextInput
                  placeholder="name"
                  style={styles.input}
                  value={text_sign}
                  onChangeText={(txt) => setText_sign(txt)}
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
    marginTop: "8%",
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
    flex: 0.5,
  },
  headertxt1: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
    marginTop: "7%",
    textAlign: "center",
    flex: 0.2,
    marginStart: "8%",
  },
  add: {
    color: "yellow",
    borderWidth: 1.3,
    borderColor: "yellow",
    paddingHorizontal: "2%",
    borderRadius: 20,
    fontWeight: "400",
    fontSize: 20,
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

export default New_lead;
