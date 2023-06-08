import React, { useState, useEffect } from "react";
import { useFonts } from 'expo-font';
import {
  Dimensions,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,Modal,Pressable,KeyboardAvoidingView,TextInput
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { useNavigation, useRoute } from "@react-navigation/native";
import { Images } from "../../constant/images";
import { Colors } from "../../constant/colors";
import {
  Entypo,
 
} from "@expo/vector-icons";
import { ScreenNames } from "../../constant/ScreenNames";

const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;

function Profile({data}) {
  const [fontsLoaded] = useFonts({
    'Inter-Black': require('../../../assets/fonts/Mulish-SemiBold.ttf'),
    'Inter-Black2': require('../../../assets/fonts/Mulish-Bold.ttf'),
    'Inter-Black3': require('../../../assets/fonts/Mulish-ExtraBold.ttf'),
    'Inter-Black4': require('../../../assets/fonts/Mulish-Regular.ttf'),
   
  });
  const User_data = data
  console.log(User_data)
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  
  const [d, setd] = useState(data?.pined_note == "Yes" ? 3 : 0);
  const [note, setnote] = useState(data?.pined_note_text);
  const [n, setn] = useState("");
  const [pin_date, setpin_date] = useState(data?.pinned_date);
  const [icon_note, seticon_note] = useState(data?.pined_note);
  const [modalTitle2, setModalTitle2] = useState(data?.pinned_by);
  // console.log(icon_note)
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.box1}
         onPress={() => {navigation.navigate("Saved_searches",{data:User_data})}}
      >
        <Image
          source={Images.search}
          style={styles.img}
        />
        <Text style={styles.txt}>View Saved Searches</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.box}
         onPress={() => {navigation.navigate("Edit_searches",{data:User_data})}}
      >
        <Image
          source={Images.search}
          style={styles.img}
        />
        <Text style={styles.txt}>Edit Saved Searches</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.box}
         onPress={() => {}}
      >
        <Image
          source={Images.Home}
          style={styles.img}
        />
        <Text style={styles.txt}>View Favorite Properties</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.box2}
         onPress={() => {}}
      >
        <Image
         source={Images.Home}
          style={styles.img}
        />
        <Text style={styles.txt}>Send Hot Listing Email</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.box2}
         onPress={() => {}}
      >
        <Image
          source={Images.people}
          style={styles.img}
        />
        <Text style={styles.txt}>View Number of Visits</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.box2}
         onPress={() => {}}
      >
        <Image
          source={Images.state}
          style={styles.img}
        />
        <Text style={styles.txt}>Properties Viewed</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => setModalVisible(true)}
        style={styles.floating_btn}
      >
        { icon_note == "Yes" ? (
          <Image
            style={{
              height: height * 0.07,
              width: width * 0.2,
              resizeMode: "contain",
            }}
            source={Images.pencil_box}
          ></Image>
        ) : (
          <Image
            style={{
              height: height * 0.07,
              width: width * 0.2,
              resizeMode: "contain",
            }}
            source={Images.plus_box}
          ></Image>
        )}
      </TouchableOpacity>
      
      <View style={styles.bottom_btn}>
        <Text
          onPress={() => {
            navigation.navigate(ScreenNames.LEAD_ACTIVITY, {
              name: User_data.name,
              logo1: User_data.name_initials,

              id: User_data.id,
            });
          }}
          style={{ color: "white", fontSize: 20 ,fontFamily:"Inter-Black"}}
        >
          View Lead Activity
        </Text>
      </View>
      
      {d == 1 ? (
                <Modal
                  animationType="slide"
                  transparent={true}
                  visible={modalVisible}
                  onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                    setModalVisible(!modalVisible);
                  }}
                >
                  <View style={styles.modal_page}>
                    <View style={styles.modalView1}>
                      <View style={styles.pin2}>
                        <Text style={styles.modalText1}>{modalTitle2}</Text>
                        <Pressable
                          onPress={() => (
                            setModalVisible(!modalVisible), setd(0)
                          )}
                        >
                          <Entypo name="cross" size={30} color="black" />
                        </Pressable>
                      </View>
                      <View style={styles.line2}></View>

                      <KeyboardAvoidingView enabled>
                        <View style={styles.input}>
                          <TextInput
                            //  value={""}
                            onChangeText={(txt) => (setnote(txt), setn(txt))}
                          />
                        </View>
                      </KeyboardAvoidingView>
                      <View style={styles.modal_btn_box}>
                        {n.length > 0 ? (
                          <TouchableOpacity
                            onPress={() => {
                              setd(3);
                            }}
                            style={styles.modal_btn}
                          >
                            <Text style={styles.modal_btn_txt}>Save</Text>
                          </TouchableOpacity>
                        ) : (
                          <TouchableOpacity
                            onPress={() => {}}
                            activeOpacity={1}
                            style={styles.modal_btn}
                          >
                            <Text style={styles.modal_btn_txt}>Save</Text>
                          </TouchableOpacity>
                        )}

                        <TouchableOpacity
                          onPress={() => {
                            {
                              setd(0);
                            }
                          }}
                          style={styles.modal_btn}
                        >
                          <Text style={styles.modal_btn_txt}>Close</Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>
                </Modal>
              ) : d == 4 ? (
                <Modal
                  animationType="slide"
                  transparent={true}
                  visible={modalVisible}
                  onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                    setModalVisible(!modalVisible);
                  }}
                >
                  <View style={styles.modal_page}>
                    <View style={styles.modalView1}>
                      <View style={styles.pin2}>
                        <Text style={styles.modalText1}>Pin Note</Text>
                        <Pressable onPress={() => setd(3)}>
                          <Entypo name="cross" size={30} color="black" />
                        </Pressable>
                      </View>
                      <View style={styles.line2}></View>

                      <KeyboardAvoidingView enabled>
                        <View style={styles.input}>
                          <TextInput
                            value={note}
                            onChangeText={(txt) => setnote(txt)}
                          />
                        </View>
                      </KeyboardAvoidingView>
                      <View style={styles.modal_btn_box}>
                        <TouchableOpacity
                          onPress={() => {
                            setd(3);
                          }}
                          style={styles.modal_btn}
                        >
                          <Text style={styles.modal_btn_txt}>Save</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                          onPress={() => {
                            {
                              setd(3);
                            }
                          }}
                          style={styles.modal_btn}
                        >
                          <Text style={styles.modal_btn_txt}>Close</Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>
                </Modal>
              ) : d == 0 ? (
                <Modal
                  animationType="slide"
                  transparent={true}
                  visible={modalVisible}
                  onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                    setModalVisible(!modalVisible);
                  }}
                >
                  <View style={styles.modal_page}>
                    <View style={styles.modalView}>
                      <View style={styles.pin}>
                        <Text style={styles.modalText}>Pin note</Text>
                        <Pressable
                          style={{}}
                          onPress={() => setModalVisible(!modalVisible)}
                        >
                          <Entypo name="cross" size={30} color="black" />
                        </Pressable>
                      </View>

                      <Text
                        style={{
                          color: "black",
                          marginLeft: "4%",
                          marginTop: "12%",
                        }}
                      >
                        No note added yet.
                      </Text>
                      <TouchableOpacity
                        onPress={() => {
                          setd(1);
                        }}
                        style={styles.add_note}
                      >
                        <Text style={{ color: "white" }}>Add Note</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </Modal>
              ) : d == 3 ? (
                <Modal
                  animationType="slide"
                  transparent={true}
                  visible={modalVisible}
                  onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                    setModalVisible(!modalVisible);
                  }}
                >
                  <View style={styles.modal_page}>
                    <View style={styles.modalView2}>
                      <View style={styles.pin}>
                        <Text style={styles.modalText}>{modalTitle2}</Text>
                        <Pressable
                          style={{}}
                          onPress={() => (
                            setModalVisible(!modalVisible)
                            // , setd(0), setn("")
                          )}
                        >
                          <Entypo name="cross" size={30} color="black" />
                        </Pressable>
                      </View>
                      <Text style={styles.date}>{pin_date}</Text>
                      <Text style={styles.note3}>{note}</Text>
                      <TouchableOpacity
                        onPress={() => {
                          setd(4);
                        }}
                        style={styles.update_note}
                      >
                        <Text style={styles.update_txt}>Update</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </Modal>
              ) : null}
          
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
 
  update_txt: { color: "white", fontSize: 17 ,fontFamily:"Inter-Black"},
  note3: { color: "black", margin: "4%", fontSize: 14 ,fontFamily:"Inter-Black"},
  date: {
    color: "black",
    marginLeft: "4%",
    marginVertical: "1%",
    fontSize: 15,fontFamily:"Inter-Black"
  },
  set: {
    flexDirection: "row",
    padding: "3%",
    alignItems: "center",
    justifyContent: "center",
  },
  circle_box: {
    flexDirection: "row",
    paddingVertical: "0%",
    alignItems: "center",
    justifyContent: "space-between",
  },
  flat_view: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  pin2: {
    flexDirection: "row",

    margin: "4%",
    alignSelf: "flex-end",
    justifyContent: "center",
  },
  modal_btn_box: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: "10%",
    marginVertical: "4%",
  },
  line2: {
    backgroundColor: "#f2f2f2",
    height: 1.5,

    width: "100%",
  },
  modal_btn_txt: { color: "white", fontSize: 17,fontFamily:"Inter-Black" },
  modal_btn: {
    height: height * 0.05,
    width: "45%",
    backgroundColor: "#d8524f",
    alignSelf: "center",

    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
  },
  modal_page: {
    flex: 1,
    backgroundColor: "rgba(52, 52, 52, 0.7)",
    marginTop: "10%",
  },
  pin: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: "4%",
  },
  add_note: {
    height: height * 0.05,
    width: width * 0.3,
    backgroundColor: "#5bbfdf",
    alignSelf: "center",
    marginTop: "52%",
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
  update_note: {
    height: height * 0.05,
    width: width * 0.3,
    backgroundColor: "#5bbfdf",
    alignSelf: "center",
    marginTop: "48%",
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
  tag_box: {
    width: "100%",
    height: height * 0.065,
    backgroundColor: Colors.MAIN_COLOR,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 0,
  },
  note: {
    height: height * 0.07,
    width: width * 0.2,
    resizeMode: "contain",
  },
  note2: {
    height: height * 0.057,
    width: width * 0.2,
    resizeMode: "contain",
  },
  tag_view: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  tag_touch: { alignItems: "center" },
  tag: { color: "white", fontSize: 18 },
  flat: { backgroundColor: "#f2f2f2", padding: 10, marginBottom: 40 },
  input: {
    height: height * 0.25,
    margin: 12,

    padding: 10,
    backgroundColor: "#f2f2f2",
    borderRadius: 8,
  },
  modalText: {
    fontSize: 20,
    fontFamily:"Inter-Black2"
  },
  modalText1: {
    fontSize: 20,
    marginHorizontal: "30%",fontFamily:"Inter-Black4"
  },
  centeredView: {
    flex: 1,
  },
  modalView: {
    // height: height * 0.44,
    width: "90%",
    backgroundColor: "#fcf5bf",
    borderRadius: 10,

    elevation: 5,
    alignSelf: "center",
  },
  modalView2: {
    // height: height * 0.44,
    width: "90%",
    backgroundColor: "#feb6c1",
    borderRadius: 10,

    elevation: 5,
    alignSelf: "center",
  },
  modalView1: {
    // height: height * 0.44,
    width: "90%",
    backgroundColor: "white",
    borderRadius: 10,

    elevation: 20,
    alignSelf: "center",
  },
  container: {
    flex: 1,
    backgroundColor:"white"
  },
  bottom_btn: {
    width: "100%",
    height: height * 0.065,
    backgroundColor: Colors.MAIN_COLOR,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 0,
  },
  
  floating_btn: {
    alignItems: "center",
    justifyContent: "center",

    position: "absolute",
    bottom: "10%",
    right: "1%",
  },
  txt: { fontSize: 17, color: "white", fontFamily:"Inter-Black3" },
  img:{
    height: height * 0.06,
    width: width * 0.11,
    resizeMode: "contain",
    marginHorizontal: "5%",
  },
  box: {
    height: "10%",
    width: "90%",
    flexDirection: "row",
    borderRadius: 6,
    backgroundColor: "#32b0d6",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "flex-start",marginBottom:"3%"
  },
  box2: {
    height: "10%",
    width: "90%",
    flexDirection: "row",
    borderRadius: 6,
    backgroundColor: Colors.MAIN_COLOR,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "flex-start",marginBottom:"3%"
  },
  box1: {
    height: "10%",
    width: "90%",
    flexDirection: "row",
    borderRadius: 6,
    backgroundColor: Colors.MAIN_COLOR,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "flex-start",marginBottom:"3%",marginTop:"6%"
  },
});

export default Profile;
