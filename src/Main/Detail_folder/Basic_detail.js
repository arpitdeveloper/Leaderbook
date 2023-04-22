import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
  ActivityIndicator,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation, useRoute } from "@react-navigation/native";
import * as Linking from "expo-linking";
const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;
import {
  Ionicons,
  Octicons,
  Entypo,
  FontAwesome,
  AntDesign,
  MaterialCommunityIcons,
  Zocial,
  FontAwesome5,
  Feather,
} from "@expo/vector-icons";
import { get_leads_basic_detail } from "../../Services";
import Loader from "../../constant/Loader";
import { Colors } from "../../constant/colors";
import { ScreenNames } from "../../constant/ScreenNames";
const dt = [
  { label: "Canada", value: "1" },
  { label: "Canada", value: "1" },
  { label: "Canada", value: "1" },
  { label: "Canada", value: "1" },
  { label: "Canada", value: "1" },
  { label: "Canada", value: "1" },
  { label: "Canada", value: "1" },
  { label: "Canada", value: "1" },
  { label: "Canada", value: "1" },
];

function Basic_detail({ data }) {
  const Id = data.id;
  const navigation = useNavigation();
  // console.log(Id)
  const [DATA, setDATA] = useState([]);
  const [tag, settag] = useState([]);
  const [loading, setLoading] = React.useState(true);

  useEffect(() => {
    (async () => {
      const user_data = await AsyncStorage.getItem("user_data");

      const d = JSON.parse(user_data);

      const data = {
        email: d.email,
        password: d.password,
        id: Id,
      };
      get_leads_basic_detail(data)
        .then((response) => response.json())
        .then((result) => {
          var k = [];

          k.push(result?.data?.lead_detail);
          var t = result?.data?.lead_detail?.Lead?.lead_tags;
          // console.log(result?.data?.leads)
          setDATA(k);
          setLoading(false);
          settag(t);

          // setLoading(false);
        })
        .catch((error) => console.log("error", error));
    })();
  }, []);
  // console.log(tag);
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
                <View style={{ padding: "5%" }}>
                  <Text style={styles.number}>{item.Lead.email.label}</Text>

                  <View style={styles.row}>
                    <Text style={styles.name}>{item.Lead.email.value}</Text>
                    <Text
                    onPress={() => {
                      Linking.openURL(`mailto:${item.Lead.email.value}`);
                    }}
                    ><Zocial name="email" size={22} color={Colors.MAIN_COLOR} /></Text>
                    
                  </View>
                </View>
                <View style={styles.line}></View>
                <View style={{ padding: "5%", flexDirection: "row" }}>
                  <View style={{ flex: 1 }}>
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
                     style={{ marginHorizontal: 10 }}
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
                    <Text
                    
                    onPress={() => {
                      Linking.openURL(`sms:${item.Lead.phone.value}`);
                    }}
                    >
                    <FontAwesome5
                      name="sms"
                      size={28}
                      color={Colors.MAIN_COLOR}
                    />
                    </Text>
                   
                    
                  </View>
                </View>
                <View style={styles.line}></View>
                <View style={{ padding: "5%" }}>
                  <Text style={styles.number}>{item.Lead.comments.label}</Text>
                  <Text style={styles.name}>{item.Lead.comments.value}</Text>
                </View>
                <View style={styles.line}></View>
                <View style={{ padding: "5%" }}>
                  <Text style={styles.number}>{item.Lead.user_id.label}</Text>
                  <Text style={styles.name}>{item.Lead.user_id.value}</Text>
                </View>
                <View style={styles.line}></View>
                <View style={{ padding: "5%" }}>
                  <Text style={styles.number}>
                    {item.Lead.lead_type_id.label}
                  </Text>
                  <Text style={styles.name}>
                    {item.Lead.lead_type_id.value}
                  </Text>
                </View>
                <View style={styles.line}></View>
                <View style={{ padding: "5%" }}>
                  <Text style={styles.number}>{item.Lead.site_id.label}</Text>
                  <Text style={styles.name}>{item.Lead.site_id.value}</Text>
                </View>
                <View style={styles.line}></View>
                <View style={{ padding: "5%" }}>
                  <Text style={styles.number}>
                    {item.Lead.is_grl_crea_lead.label}
                  </Text>
                  <Text style={styles.name}>
                    {item.Lead.is_grl_crea_lead.value}
                  </Text>
                </View>
                <View style={styles.line}></View>

                <View style={{ padding: "5%" }}>
                  <Text style={styles.number}>{item.Lead.month.label}</Text>
                  <Text style={styles.name}>{item.Lead.month.value}</Text>
                </View>
                <View style={styles.line}></View>
                <View
                  style={{
                    paddingHorizontal: "5%",
                    paddingTop: "2%",
                    paddingBottom: "4%",
                  }}
                >
                  <View style={styles.row}>
                    <Text style={styles.number}>Lead Tags</Text>
                    <View style={{ flexDirection: "row", marginTop: "2%" }}>
                      <AntDesign
                        name="plus"
                        size={17}
                        color={Colors.MAIN_COLOR}
                      />
                      <FontAwesome
                        name="tags"
                        size={17}
                        color={Colors.MAIN_COLOR}
                      />
                    </View>
                  </View>
                  <FlatList
                    style={{  marginTop: "2%" }}
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
                <View style={{ padding: "5%" }}>
                  <Text style={styles.number}>
                    {item.Lead.new_grouped_date.label}
                  </Text>
                  <Text style={styles.name}>
                    {item.Lead.new_grouped_date.value}
                  </Text>
                </View>
                <View style={styles.line}></View>
                <View style={{ padding: "5%" }}>
                  <Text style={styles.number}>
                    {item.Lead.company_name.label}
                  </Text>
                  <Text style={styles.name}>
                    {item.Lead.company_name.value}
                  </Text>
                </View>
                <View style={styles.line}></View>
                <View style={{ padding: "5%" }}>
                  <Text style={styles.number}>{item.Lead.city.label}</Text>
                  <Text style={styles.name}>{item.Lead.city.value}</Text>
                </View>
                <View style={styles.line}></View>
                <View style={{ padding: "5%" }}>
                  <Text style={styles.number}>{item.Lead.state.label}</Text>
                  <Text style={styles.name}>{item.Lead.state.value}</Text>
                </View>
                <View style={styles.line}></View>
              </>
            )}
          />
          <TouchableOpacity
            onPress={() => {
              navigation.navigate(ScreenNames.LEAD_ACTIVITY, {
                name: data.name,
                logo1: data.logo1,
                logo2: data.logo2,
              });
            }}
            style={styles.floating_btn}
          >
            <MaterialCommunityIcons
              style={{}}
              name="note-plus"
              size={60}
              color="orange"
            />
          </TouchableOpacity>
          <View
            style={{
              height: height * 0.08,
              backgroundColor: "#003366",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text style={{ color: "white", fontSize: 20 }}>
              View Lead Activity
            </Text>
          </View>
        </>
      ) : null}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  floating_btn: {
    alignItems: "center",
    justifyContent: "center",

    position: "absolute",
    bottom: "12%",
    right: "5%",
  },
  tag: { fontSize: 18, marginLeft: 5, color: "white", fontWeight: "300" },
  box: {
    flexDirection: "row",
    height: height * 0.04,
    width: width * 0.18,
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
    fontSize: 17,

    color: "#808080",

    marginTop: "3%",
    fontWeight: "300",
  },
  number: {
    fontSize: 17,

    fontWeight: "400",
    color: "#737373",
  },

  line: {
    backgroundColor: "#cccccc",
    height: 0.5,

    width: "100%",
  },
  line2: {
    backgroundColor: "#cccccc",
    height: 1,
    marginVertical: "4%",
    width: "95%",
    marginStart: "5%",
  },

  container: { flex: 1, backgroundColor: "white" },
});

export default Basic_detail;
