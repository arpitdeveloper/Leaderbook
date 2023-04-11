import React, { useEffect, useState } from "react";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import moment from "moment";
import {
  Entypo,
  Ionicons,
  MaterialCommunityIcons,
  AntDesign,
  FontAwesome,
  MaterialIcons,
  Octicons,
} from "@expo/vector-icons";
import {
  SafeAreaView,
  Dimensions,
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Button,
  Modal,
  Pressable,
} from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import { useNavigation, useRoute } from "@react-navigation/native";
import { ScreenNames } from "../../../constant/ScreenNames";
import { ScrollView } from "react-native-gesture-handler";

const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;

const dt = [
  { label: "ghj", value: "1" },
  { label: "", value: "2" },
];

function Add_appointment() {
  const navigation = useNavigation();
  const [value, setValue] = useState();
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [istimePickerVisible, settimePickerVisibility] = useState(false);

  const [modalVisible, setModalVisible] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    // console.warn("A date has been picked: ", date);
    hideDatePicker();
  };
  const showtimePicker = () => {
    settimePickerVisibility(true);
  };

  const hidetimePicker = () => {
    settimePickerVisibility(false);
  };

  const handleConfirm2 = (date) => {
    // console.warn("A date has been picked: ", date);
    hidetimePicker();
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.headertxt1}
          onPress={() => navigation.navigate(ScreenNames.APPOINTMENTS)}
        >
          <MaterialCommunityIcons
            name="keyboard-backspace"
            size={30}
            color="white"
          />
        </TouchableOpacity>
        <Text style={styles.headertxt2}>Add Appointment</Text>
        <TouchableOpacity style={styles.headertxt3} onPress={() => {}}>
          <Text style={styles.add}>Add</Text>
        </TouchableOpacity>
      </View>
      <ScrollView>
        <View
          style={{
            paddingHorizontal: "5%",
            marginBottom: "5%",
            // paddingStart: "15%",
          }}
        >
          <Text style={styles.name_txt}>Subject</Text>
          <TextInput
            placeholder="Subject"
            style={styles.input}
            //   value={text_sign}
            //   onChangeText={(txt) => setText_sign(txt)}
          ></TextInput>
          <View style={styles.line2}></View>
          <Text style={styles.name_txt}>Location</Text>
          <TextInput
            placeholder="Location"
            style={styles.input}
            //   value={text_sign}
            //   onChangeText={(txt) => setText_sign(txt)}
          ></TextInput>
          <View style={styles.line2}></View>
          <Text style={styles.name_txt}>Site</Text>
          <Dropdown
            style={[styles.dropdown]}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            // inputSearchStyle={styles.inputSearchStyle}
            // iconStyle={styles.iconStyle}
            data={dt}
            search={false}
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder={value}
            value={value}
            //   onFocus={() => setIsFocus(true)}
            //   onBlur={() => setIsFocus(false)}
            onChange={(i) => {
              setValue(i.value);
            }}
            renderRightIcon={() => (
              <AntDesign
                style={{ paddingHorizontal: "5%" }}
                color="#003366"
                name="downsquare"
                size={30}
              />
            )}
          />
          <View style={styles.line2}></View>
          <Text style={styles.name_txt}>Search Lead</Text>
          <TextInput
            placeholder="Search Lead"
            style={styles.input}
            //   value={text_sign}
            //   onChangeText={(txt) => setText_sign(txt)}
          ></TextInput>
          <View style={styles.line2}></View>
          <Text style={styles.name_txt}>Selected Lead</Text>
          <TextInput
            // placeholder="Subject"
            style={styles.input}
            //   value={text_sign}
            //   onChangeText={(txt) => setText_sign(txt)}
          ></TextInput>
          <View style={styles.line2}></View>
          <Text style={styles.name_txt}>All Day Event</Text>
          <Dropdown
            style={[styles.dropdown]}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            // inputSearchStyle={styles.inputSearchStyle}
            // iconStyle={styles.iconStyle}
            data={dt}
            search={false}
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder={value}
            value={value}
            //   onFocus={() => setIsFocus(true)}
            //   onBlur={() => setIsFocus(false)}
            onChange={(i) => {
              setValue(i.value);
            }}
            renderRightIcon={() => (
              <AntDesign
                style={{ paddingHorizontal: "5%" }}
                color="#003366"
                name="downsquare"
                size={30}
              />
            )}
          />
          <View style={styles.line2}></View>
          <View style={{ flexDirection: "row" }}>
            <FontAwesome
              style={styles.icon2}
              color="#8c8c8c"
              name="calendar"
              size={24}
            />
            <Text style={styles.name_txt2}>Start Date</Text>
          </View>

          <Pressable style={styles.input} onPress={() => setModalVisible(true)}>
            <TextInput placeholder={"Start Date"} editable={false}></TextInput>
          </Pressable>
          <View style={styles.line2}></View>
          <View style={{ flexDirection: "row" }}>
            <FontAwesome
              style={styles.icon2}
              color="#8c8c8c"
              name="calendar"
              size={24}
            />
            <Text style={styles.name_txt2}>End Date</Text>
          </View>

          <TextInput
            placeholder="Due Date"
            style={styles.input2}
            //   value={text_sign}
            //   onChangeText={(txt) => setText_sign(txt)}
          ></TextInput>
          <View style={styles.line2}></View>
          <View style={{ flexDirection: "row" }}>
            <MaterialIcons
              style={styles.icon3}
              color="#8c8c8c"
              name="alarm"
              size={28}
            />
            <Text style={styles.name_txt2}>Enable Reminder</Text>
          </View>

          <Dropdown
            style={[styles.dropdown2]}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            // inputSearchStyle={styles.inputSearchStyle}
            // iconStyle={styles.iconStyle}
            data={dt}
            search={false}
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder={value}
            value={value}
            //   onFocus={() => setIsFocus(true)}
            //   onBlur={() => setIsFocus(false)}
            onChange={(i) => {
              setValue(i.value);
            }}
            renderRightIcon={() => (
              <AntDesign
                style={{ paddingHorizontal: "5%" }}
                color="#003366"
                name="downsquare"
                size={30}
              />
            )}
          />
          <View style={styles.line2}></View>
          <View style={{ flexDirection: "row" }}>
            <Octicons
              style={styles.icon2}
              color="#8c8c8c"
              name="clock"
              size={24}
            />
            <Text style={styles.name_txt2}>Reminder</Text>
          </View>

          <TextInput
            placeholder="Reminder"
            style={styles.input2}
            //   value={text_sign}
            //   onChangeText={(txt) => setText_sign(txt)}
          ></TextInput>
          <View style={styles.line2}></View>
          <Text style={styles.name_txt}>Time Unit</Text>
          <Dropdown
            style={[styles.dropdown]}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            // inputSearchStyle={styles.inputSearchStyle}
            // iconStyle={styles.iconStyle}
            data={dt}
            search={false}
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder={value}
            value={value}
            //   onFocus={() => setIsFocus(true)}
            //   onBlur={() => setIsFocus(false)}
            onChange={(i) => {
              setValue(i.value);
            }}
            renderRightIcon={() => (
              <AntDesign
                style={{ paddingHorizontal: "5%" }}
                color="#003366"
                name="downsquare"
                size={30}
              />
            )}
          />
          <View style={styles.line2}></View>
          <Text style={styles.name_txt}>Show Time As</Text>
          <Dropdown
            style={[styles.dropdown]}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            // inputSearchStyle={styles.inputSearchStyle}
            // iconStyle={styles.iconStyle}
            data={dt}
            search={false}
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder={value}
            value={value}
            //   onFocus={() => setIsFocus(true)}
            //   onBlur={() => setIsFocus(false)}
            onChange={(i) => {
              setValue(i.value);
            }}
            renderRightIcon={() => (
              <AntDesign
                style={{ paddingHorizontal: "5%" }}
                color="#003366"
                name="downsquare"
                size={30}
              />
            )}
          />
          <View style={styles.line2}></View>

          <Text style={styles.name_txt}>Notes</Text>
          <TextInput
            // placeholder="Subject"
            style={styles.input2}
            //   value={text_sign}
            //   onChangeText={(txt) => setText_sign(txt)}
          ></TextInput>
          <View style={{ flexDirection: "row" }}>
            <FontAwesome
              style={styles.icon_notes}
              color="#8c8c8c"
              name="calendar"
              size={24}
            />
            <View style={styles.line3}></View>
          </View>
        </View>
        <View style={{}}>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              Alert.alert("Modal has been closed.");
              setModalVisible(!modalVisible);
            }}
          >
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <View style={styles.modal_top}>
                  <Text style={{ flex: 0.9 }}></Text>
                  <Text style={styles.date}>Start Date</Text>
                  <TouchableOpacity
                    onPress={() => setModalVisible(!modalVisible)}
                    style={styles.done}
                  >
                    <Text style={{ fontSize: 18, fontWeight: "600" }}>
                      Done
                    </Text>
                  </TouchableOpacity>
                </View>
                <View style={{ flexDirection: "row" }}>
                  <TouchableOpacity
                    style={styles.modal_btn}
                    onPress={showDatePicker}
                  >
                    <Text style={{ fontSize: 16, fontWeight: "500" }}>
                      {moment().utcOffset("+05:30").format("DD-MMM-YYYY ")}
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.modal_btn}
                    onPress={showtimePicker}
                  >
                    <Text style={{ fontSize: 16, fontWeight: "500" }}>
                      {moment().utcOffset("+05:30").format(" hh:mm a")}
                    </Text>
                  </TouchableOpacity>
                  <DateTimePickerModal
                    isVisible={isDatePickerVisible}
                    mode="date"
                    onConfirm={handleConfirm}
                    onCancel={hideDatePicker}
                    pickerStyleIOS
                  />
                  <DateTimePickerModal
                    isVisible={istimePickerVisible}
                    mode="time"
                    onConfirm={handleConfirm2}
                    onCancel={hidetimePicker}
                    pickerStyleIOS
                  />
                </View>
              </View>
            </View>
          </Modal>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  done: { flex: 0.4, fontSize: 18, fontWeight: "bold" },
  date: { flex: 0.8, fontSize: 14, color: "#cccccc" },
  datePickerStyle: {
    width: 200,
    marginTop: 20,
  },
  modal_top: {
    flexDirection: "row",
    height: "13%",
    width: "100%",
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  textStyle1: { fontSize: 17, fontWeight: "bold" },
  textStyle2: { fontSize: 14 },
  textStyle3: { fontSize: 17, color: "blue" },

  centeredView: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    marginTop: 0,
    marginBottom: -20,
  },
  modalView: {
    height: "50%",
    width: "100%",

    backgroundColor: "#e6e6e6",
    borderTopWidth: 0.5,
    borderColor: "grey",

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  selectedTextStyle: { color: "#8c8c8c" },
  icon2: { marginTop: "8%", flex: 0.15 },
  icon3: { marginTop: "8%", flex: 0.19 },
  icon_notes: {},
  dropdown: {
    height: "2.6%",
    marginStart: "12%",
    marginTop: "4%",
  },
  dropdown2: {
    height: "2.6%",
    marginStart: "12%",
    marginTop: "1%",
  },
  line: {
    backgroundColor: "grey",
    height: 1,
    marginTop: "2%",

    width: "90%",
    marginStart: "12%",
  },
  line3: {
    backgroundColor: "grey",
    height: 1,
    marginTop: "8%",

    width: "85%",
    marginStart: "6%",
  },
  line2: {
    backgroundColor: "grey",
    height: 1,
    marginTop: "1%",

    width: "86%",
    marginStart: "12%",
  },
  name_txt: {
    fontSize: 17,
    paddingTop: "5%",
    paddingStart: "12%",
    color: "#595959",
  },
  name_txt2: { fontSize: 17, paddingTop: "5%", color: "#595959" },
  input: {
    color: "#8c8c8c",

    fontSize: 17,
    marginTop: "4%",
    marginStart: "12%",
  },
  input3: {
    color: "#8c8c8c",

    fontSize: 17,
  },
  input2: {
    color: "#8c8c8c",

    fontSize: 17,
    marginStart: "12%",
    marginTop: "-1%",
  },
  button: {
    height: height * 0.075,
    width: width * 0.9,
    marginTop: "5%",

    alignSelf: "center",
    backgroundColor: "#003366",
    elevation: 1,
    borderRadius: 8,
    justifyContent: "center",
  },

  header: {
    height: height * 0.12,
    backgroundColor: "#003366",
    alignItems: "center",

    // marginTop: 25,
    flexDirection: "row",
    marginBottom: "3%",
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
    paddingHorizontal: "13%",
    borderRadius: 20,
    fontWeight: "500",
    fontSize: 16,
  },
  modal_btn: {
    backgroundColor: "#d9d9d9",

    height: height * 0.05,
    width: width * 0.35,
    alignContent: "center",
    justifyContent: "center",
    borderRadius: 10,
    marginTop: "15%",
    alignItems: "center",
    marginEnd: "2%",
  },
});

export default Add_appointment;