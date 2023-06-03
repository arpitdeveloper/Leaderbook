import React from "react";
import {
  Dimensions,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { useNavigation, useRoute } from "@react-navigation/native";
import { Images } from "../../constant/images";
import { Colors } from "../../constant/colors";
// import Icon from 'react-native-vector-icons/FontAwesome';
const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;

function Profile() {
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.box}
         onPress={() => {}}
      >
        <Image
          source={Images.search}
          style={styles.img}
        />
        <Text style={styles.txt}>View Saved Searches</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.box}
         onPress={() => {}}
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
      <TouchableOpacity style={styles.box}
         onPress={() => {}}
      >
        <Image
         source={Images.Home}
          style={styles.img}
        />
        <Text style={styles.txt}>Send Hot Listing Email</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.box}
         onPress={() => {}}
      >
        <Image
          source={Images.people}
          style={styles.img}
        />
        <Text style={styles.txt}>View Number of Visits</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.box}
         onPress={() => {}}
      >
        <Image
          source={Images.state}
          style={styles.img}
        />
        <Text style={styles.txt}>Properties Viewed</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: "6%",
  },
  txt: { fontSize: 17, color: "white", fontWeight: "bold" },
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
    backgroundColor: Colors.MAIN_COLOR,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "flex-start",marginBottom:"3%"
  },
});

export default Profile;
