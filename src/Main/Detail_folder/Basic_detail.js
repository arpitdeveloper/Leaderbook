import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
  Modal,
  Pressable,
  TextInput,
  KeyboardAvoidingView,
  Image,
  SectionList,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation, useRoute } from "@react-navigation/native";
import * as Linking from "expo-linking";
const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;
import {
  Entypo,
  FontAwesome,
  AntDesign,
  MaterialCommunityIcons,
  Zocial,
  FontAwesome5,
} from "@expo/vector-icons";
import { get_leads_basic_detail } from "../../Services";
import Loader from "../../constant/Loader";
import { Colors } from "../../constant/colors";
import { ScreenNames } from "../../constant/ScreenNames";

function Basic_detail({ data }) {
  const User_data = data;
  const navigation = useNavigation();

  const [DATA, setDATA] = useState([]);
  const [DATA1, setDATA1] = useState([]);
  const [DATA2, setDATA2] = useState([]);
  const [tag, settag] = useState([]);
  const [loading, setLoading] = React.useState(true);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisible1, setModalVisible1] = useState(false);
  const [d, setd] = useState(false);
  // console.log(User_data)

  useEffect(() => {
    (async () => {
      const user_data = await AsyncStorage.getItem("user_data");

      const d = JSON.parse(user_data);

      const data = {
        email: d.email,
        password: d.password,
        id: User_data.id,
      };
      get_leads_basic_detail(data)
        .then((response) => response.json())
        .then((result) => {
          var k = [];

          k.push(result?.data?.lead_detail);
          var t = result?.data?.lead_detail?.Lead?.lead_tags;
          var a = result?.data?.tags?.user_tags;
          var b = result?.data?.tags?.system_tags;
          var a = [];
          result?.data?.tags?.user_tags.map((i) => {
            a.push({
              ...i,

              isChecked: false,
            });
          });
          var b = [];
          result?.data?.tags?.system_tags.map((i) => {
            b.push({
              ...i,

              isChecked: false,
            });
          });
          // console.log(result?.data?.leads)
          setDATA(k);
          setDATA1(a);
          setDATA2(b);
          setLoading(false);
          settag(t);

          // setLoading(false);
        })
        .catch((error) => console.log("error", error));
    })();
  }, []);

  const handleChange = (value) => {
    let temp = DATA1.map((product) => {
      if (value === product.value) {
        return { ...product, isChecked: !product.isChecked };
      }
      return product;
    });
    setDATA1(temp);
  };

  const handleChange1 = (value) => {
    let temp = DATA2.map((product) => {
      if (value === product.value) {
        return { ...product, isChecked: !product.isChecked };
      }
      return product;
    });
    setDATA2(temp);
  };

  let selected = DATA1.filter((product) => product.isChecked);
  let selected1 = DATA2.filter((product) => product.isChecked);
  selected.push(...selected1);

  // console.log(selected)

  // console.log(DATA2);

  return (
    <SafeAreaView style={styles.container}>
      {loading ? (
        <Loader loading={loading} />
      ) : DATA && DATA.length > 0 ? (
        <>
          <FlatList
            data={DATA}
            // keyExtractor={(item) => item.id}
            renderItem={({ item, index }) => (
              <>
                <View style={styles.pad}>
                  <Text style={styles.number}>{item.Lead.email.label}</Text>

                  <View style={styles.row}>
                    <Text style={styles.name}>{item.Lead.email.value}</Text>
                    <Text
                      onPress={() => {
                        Linking.openURL(`mailto:${item.Lead.email.value}`);
                      }}
                    >
                      <Zocial
                        name="email"
                        size={22}
                        color={Colors.MAIN_COLOR}
                      />
                    </Text>
                  </View>
                </View>
                <View style={styles.line}></View>
                <View
                  style={{
                    paddingRight: "2%",
                    flexDirection: "row",
                    paddingVertical: "2%",
                    paddingLeft: "5%",
                  }}
                >
                  <View style={{ flex: 1.4 }}>
                    <Text style={styles.number}>{item.Lead.phone.label}</Text>
                    <Text style={styles.name}>{item.Lead.phone.value}</Text>
                  </View>
                  <View style={{ flexDirection: "row", marginTop: "3%" }}>
                    <Entypo
                      style={{}}
                      name="voicemail"
                      size={28}
                      color={Colors.MAIN_COLOR}
                    />
                    <Text
                      style={{ marginLeft: 10 }}
                      onPress={() => {
                        Linking.openURL(`tel:${item.Lead.phone.value}`);
                      }}
                    >
                      <FontAwesome5
                        name="phone-alt"
                        size={25}
                        color={Colors.MAIN_COLOR}
                      />
                    </Text>

                    <TouchableOpacity
                      onPress={() => {
                        Linking.openURL(`sms:${item.Lead.phone}`);
                      }}
                    >
                      <Image
                        style={{
                          height: height * 0.032,
                          width: width * 0.15,
                          resizeMode: "contain",
                        }}
                        source={require("../../../assets/sms.jpg")}
                      ></Image>
                    </TouchableOpacity>
                  </View>
                </View>
                <View style={styles.line}></View>
                <View style={styles.pad}>
                  <Text style={styles.number}>{item.Lead.comments.label}</Text>
                  <Text style={styles.name}>
                    {item.Lead.comments.value
                      ? item.Lead.comments.value
                      : "No Comment"}
                  </Text>
                </View>
                <View style={styles.line}></View>
                <View style={styles.pad}>
                  <Text style={styles.number}>{item.Lead.user_id.label}</Text>
                  <Text style={styles.name}>{item.Lead.user_id.value}</Text>
                </View>
                <View style={styles.line}></View>
                <View style={styles.pad}>
                  <Text style={styles.number}>
                    {item.Lead.lead_type_id.label}
                  </Text>
                  <Text style={styles.name}>
                    {item.Lead.lead_type_id.value}
                  </Text>
                </View>
                <View style={styles.line}></View>
                <View style={styles.pad}>
                  <Text style={styles.number}>{item.Lead.site_id.label}</Text>
                  <Text style={styles.name}>{item.Lead.site_id.value}</Text>
                </View>
                <View style={styles.line}></View>
                <View style={styles.pad}>
                  <Text style={styles.number}>
                    {item.Lead.is_grl_crea_lead.label}
                  </Text>
                  <Text style={styles.name}>
                    {item.Lead.is_grl_crea_lead.value}
                  </Text>
                </View>
                <View style={styles.line}></View>

                <View style={styles.pad}>
                  <Text style={styles.number}>{item.Lead.month.label}</Text>
                  <Text style={styles.name}>{item.Lead.month.value}</Text>
                </View>
                <View style={styles.line}></View>
                <View style={styles.pad}>
                  <View style={styles.row}>
                    <Text style={styles.number}>Lead Tags</Text>

                    <TouchableOpacity
                      onPress={() => setModalVisible1(true)}
                      style={{ flexDirection: "row" }}
                    >
                      <AntDesign
                        name="plus"
                        size={17}
                        color={Colors.MAIN_COLOR}
                      />
                      <FontAwesome
                        name="tags"
                        size={20}
                        color={Colors.MAIN_COLOR}
                      />
                    </TouchableOpacity>
                  </View>
                  <FlatList
                    style={{ marginTop: "2%" }}
                    data={item.Lead.lead_tags}
                    numColumns={4}
                    keyExtractor={(item) => "#" + item.id}
                    renderItem={({ item, index }) => (
                      <View style={styles.box}>
                        <Text style={styles.tag}>{item.label}</Text>
                        <TouchableOpacity>
                          <Entypo name="cross" size={28} color="white" />
                        </TouchableOpacity>
                      </View>
                    )}
                  />
                </View>
                <View style={styles.line}></View>
                <View style={styles.pad}>
                  <Text style={styles.number}>
                    {item.Lead.new_grouped_date.label}
                  </Text>
                  <Text style={styles.name}>
                    {item.Lead.new_grouped_date.value}
                  </Text>
                </View>
                <View style={styles.line}></View>
                <View style={styles.pad}>
                  <Text style={styles.number}>
                    {item.Lead.company_name.label}
                  </Text>
                  <Text style={styles.name}>
                    {item.Lead.company_name.value
                      ? item.Lead.company_name.value
                      : "No Company"}
                  </Text>
                </View>
                <View style={styles.line}></View>
                <View style={styles.pad}>
                  <Text style={styles.number}>{item.Lead.address.label}</Text>
                  <Text style={styles.name}>
                    {item.Lead.address.value
                      ? item.Lead.address.value
                      : "No Address"}
                  </Text>
                </View>
                <View style={styles.line}></View>
                <View style={styles.pad}>
                  <Text style={styles.number}>{item.Lead.city.label}</Text>
                  <Text style={styles.name}>
                    {item.Lead.city.value ? item.Lead.city.value : "No City"}
                  </Text>
                </View>
                <View style={styles.line}></View>
                <View style={styles.pad}>
                  <Text style={styles.number}>State/Province</Text>
                  <Text style={styles.name}>
                    {item.Lead.state.value ? item.Lead.state.value : "No State"}
                  </Text>
                </View>
                <View style={styles.line}></View>
              </>
            )}
          />
          <View style={styles.centeredView}>
            {d ? (
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
                      <Pressable
                        onPress={() => (
                          setModalVisible(!modalVisible), setd(false)
                        )}
                      >
                        <Entypo name="cross" size={30} color="black" />
                      </Pressable>
                    </View>
                    <View style={styles.line}></View>
                    <KeyboardAvoidingView enabled>
                      <View style={styles.input}>
                        <TextInput
                          // onChangeText={onChangeNumber}
                          // value={number}
                          placeholder=""
                        />
                      </View>
                    </KeyboardAvoidingView>
                    <View style={styles.modal_btn_box}>
                      <TouchableOpacity
                        onPress={() => {}}
                        style={styles.modal_btn_txt1}
                      >
                        <Text style={styles.modal_btn_txt}>Save</Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                        onPress={() => {
                          setd(!d);
                        }}
                        style={styles.modal_btn}
                      >
                        <Text style={styles.modal_btn_txt}>Close</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </Modal>
            ) : (
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
                      <Text style={styles.modalText}>Pin Note</Text>
                      <Pressable
                        style={{}}
                        onPress={() => (
                          setModalVisible(!modalVisible), setd(false)
                        )}
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
                      onPress={() => setd(!d)}
                      style={styles.add_note}
                    >
                      <Text style={{ color: "white" }}>Add Note</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </Modal>
            )}
          </View>
          <View style={styles.centeredView}>
            <Modal
              animationType="slide"
              transparent={true}
              visible={modalVisible1}
              onRequestClose={() => {
                Alert.alert("Modal has been closed.");
                setModalVisible1(!modalVisible1);
              }}
            >
              <View
                style={{
                  flex: 1,
                  backgroundColor: "rgba(52, 52, 52, 0.7)",
                  marginTop: "8%",
                }}
              >
                <View style={styles.modalView2}>
                  <View
                    style={{
                      flexDirection: "row",

                      margin: "4%",
                      alignItems: "center",
                    }}
                  >
                    <Text style={styles.modalText2}>Add Tags To Leads</Text>

                    <Pressable
                      style={{}}
                      onPress={() => setModalVisible1(!modalVisible1)}
                    >
                      <Text style={styles.modalText3}>X</Text>
                    </Pressable>
                  </View>
                  <View style={styles.line}></View>
                  <KeyboardAvoidingView enabled>
                    <View style={styles.input2}>
                      <TextInput
                        // onChangeText={onChangeNumber}
                        // value={number}
                        placeholder="Search Tags"
                      />
                    </View>
                  </KeyboardAvoidingView>
                  <View style={styles.line}></View>

                  <SectionList
                    renderSectionHeader={({ section: { title } }) => (
                      <Text
                        style={{
                          fontWeight: "400",
                          fontSize: 20,
                          margin: "3%",
                        }}
                      >
                        {title}
                      </Text>
                    )}
                    sections={[
                      {
                        title: "User Tags",
                        data: DATA1,
                        renderItem: ({
                          item,
                          index,
                          section: { title, data },
                        }) => (
                          <TouchableOpacity
                            style={{
                              paddingHorizontal: "6%",
                              flexDirection: "row",
                              justifyContent: "space-between",
                              alignItems: "center",
                            }}
                            onPress={() => {}}
                          >
                            <Text
                              style={{
                                fontSize: 16,
                                fontWeight: "normal",
                                marginBottom: "5%",
                              }}
                            >
                              {item.label}
                            </Text>
                            <Pressable onPress={() => handleChange(item.value)}>
                              <MaterialCommunityIcons
                                name={
                                  item.isChecked
                                    ? "checkbox-marked"
                                    : "checkbox-blank-outline"
                                }
                                size={24}
                                color="#000"
                              />
                            </Pressable>
                          </TouchableOpacity>
                        ),
                      },
                      {
                        title: "System Tags",
                        data: DATA2,
                        renderItem: ({
                          item,
                          index,
                          section: { title, data },
                        }) => (
                          <View
                            style={{
                              paddingHorizontal: "6%",
                              flexDirection: "row",
                              justifyContent: "space-between",
                              alignItems: "center",
                            }}
                          >
                            <Text
                              style={{
                                fontSize: 16,
                                fontWeight: "normal",
                                marginBottom: "5%",
                              }}
                            >
                              {item.label}
                            </Text>
                            <Pressable
                              onPress={() => handleChange1(item.value)}
                            >
                              <MaterialCommunityIcons
                                name={
                                  item.isChecked
                                    ? "checkbox-marked"
                                    : "checkbox-blank-outline"
                                }
                                size={24}
                                color="#000"
                              />
                            </Pressable>
                          </View>
                        ),
                      },
                    ]}
                    // keyExtractor={(item, index) => item.name + index}
                  />

                  <TouchableOpacity
                    style={{
                      height: height * 0.045,

                      backgroundColor: Colors.float_btn,
                      alignSelf: "center",
                      marginTop: "5%",
                      borderRadius: 25,
                      justifyContent: "center",
                      alignItems: "center",
                      marginBottom: 10,
                      padding: 3,
                    }}
                  >
                    <Text style={{ color: "white" }}>Save Lead To Tag</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </Modal>
          </View>
          <TouchableOpacity
            onPress={() => setModalVisible(true)}
            style={styles.floating_btn}
          >
            
            <Image
              style={{
                height: height * 0.1,
                width: width * 0.2,
                resizeMode: "contain",
              }}
              source={require("../../../assets/note1.jpg")}
            ></Image>
          </TouchableOpacity>
          <View
            style={{
              width: "100%",
              height: height * 0.065,
              backgroundColor: Colors.MAIN_COLOR,
              justifyContent: "center",
              alignItems: "center",
              position: "absolute", 
              bottom: 0,
            }}
          >
            <Text
              onPress={() => {
                navigation.navigate(ScreenNames.LEAD_ACTIVITY, {
                  name: User_data.name,
                  logo1: User_data.name_initials,

                  id: User_data.id,
                });
              }}
              style={{ color: "white", fontSize: 20 }}
            >
              View Lead Activity
            </Text>
          </View>
        </>
      ) : null}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  pin: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: "4%",
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
  modal_btn_txt: { color: "white", fontSize: 17 },
  modal_btn_txt1: {
    height: height * 0.05,
    width: "45%",
    backgroundColor: "#347ab6",
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
  modal_btn: {
    height: height * 0.05,
    width: "45%",
    backgroundColor: "#d8524f",
    alignSelf: "center",

    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
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
  item: {
    backgroundColor: "#f9c2ff",
    padding: 5,
    marginVertical: 4,
  },
  header: {
    fontSize: 32,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
  },
  pad: { paddingVertical: "3%", paddingHorizontal: "5%" },
  input: {
    height: height * 0.25,
    margin: 12,

    padding: 10,
    backgroundColor: "#f2f2f2",
    borderRadius: 8,
  },
  input2: {
    height: height * 0.05,
    margin: "2%",

    padding: 10,
    borderWidth: 1,
    borderRadius: 20,
  },
  modalText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  modalText3: {
    fontSize: 18,
    fontWeight: "normal",
    color: "#666666",
  },
  modalText2: {
    fontSize: 18,
    fontWeight: "normal",
    flex: 0.95,
    marginStart: "25%",
    color: "#666666",
  },
  modalText1: {
    fontSize: 18,
    marginHorizontal: "25%",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(52, 52, 52, 0.3)",
  },
  modalView: {
    // height: height * 0.44,
    width: "90%",
    backgroundColor: "#fcf5bf",
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
  modalView2: {
    // height: height*0.55,
    width: "95%",
    backgroundColor: "white",
    borderRadius: 6,

    elevation: 20,
    alignSelf: "center",
    height: "93%",
  },
  floating_btn: {
    alignItems: "center",
    justifyContent: "center",

    position: "absolute",
    bottom: "8%",
    right: "1%",
  },
  tag: { fontSize: 18, marginLeft: 5, color: "white", fontWeight: "300" },
  box: {
    flexDirection: "row",
    height: height * 0.04,

    backgroundColor: "grey",
    alignItems: "center",
    justifyContent: "center",
    alignContent: "center",
    borderRadius: 6,
    marginEnd: "2%",
    marginTop: "2%",
  },
  row: {
    flexDirection: "row",
    alignContent: "space-between",
    justifyContent: "space-between",
  },
  name: {
    fontSize: 15,

    color: "#808080",

    marginTop: "2%",
    fontWeight: "300",
  },
  number: {
    fontSize: 15,

    fontWeight: "400",
    color: Colors.MAIN_COLOR,
  },

  line: {
    backgroundColor: "#cccccc",
    height: 1,

    width: "100%",
  },

  container: { flex: 1, backgroundColor: "white" },
});

export default Basic_detail;
