import React from "react";
import {
  SafeAreaView,
  Dimensions,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,TextInput
} from "react-native";
import {
  MaterialCommunityIcons,
  FontAwesome,
  EvilIcons,
  Ionicons,
} from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Colors } from "../../../constant/colors";
import { STYLES } from "../../../constant/styles";
// import Icon from 'react-native-vector-icons/FontAwesome';
const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;

function Npage() {
  const navigation = useNavigation();
  const route = useRoute();

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          height: height * 0.08,
          backgroundColor: Colors.MAIN_COLOR,
          alignItems: "center",

          // marginTop: 25,
          flexDirection: "row",
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <TouchableOpacity
            style={{ marginStart: "5%",   }}
            onPress={() => navigation.goBack()}
          >
            <MaterialCommunityIcons
              name="keyboard-backspace"
              size={50}
              color="white"
            />
          </TouchableOpacity>
          <Text
            style={{
              color: "white",
              fontWeight: "500",
              fontSize: 22,
              flex:0.95,marginStart:10
            }}
          >
            {route.params.name}
          </Text>
          <TouchableOpacity
            style={{
              
              
              alignItems: "center",
              justifyContent: "center",
            }}
            onPress={() => {}}
          >
            <Text
              style={{
                color: "yellow",
                borderWidth: 1,
                borderColor: "yellow",
                padding: "2%",
                borderRadius: 12,
                fontWeight: "500",
                fontSize: 14,
              }}
            >
              SAVE
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={{}}>
      <TextInput
        style={styles.input}
        placeholder="Note"
        // onChangeText={onChangeText}
        // value={text}
      />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    
    
    padding: 20,
    
    
    color: "#808080",
    fontSize: 17,
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
    justifyContent: "center",
  },
  headertxt1: {
    fontSize: 16,
    marginStart: "8%",
    marginTop: "7%",
    flex: 0.5,
  },

  headertxt2: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
    marginTop: "7%",
    textAlign: "center",
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

export default Npage;
