import { Dimensions } from "react-native";
import { Colors } from "./colors";

const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;

export const STYLES = {
  back_button: {
    color: "white",
    fontWeight: "bold",
    
    // marginTop: "8%",
    textAlign: "center",
    flex: 0.23,
    marginStart: "4%",
  },

  header: {
    color: "white",
    fontWeight: "normal",
    fontSize: 19,
    // marginTop: "7%",
    textAlign: "center",
    flex: 0.9,
  },
  header1: {
    color: "white",
    fontWeight: "500",
    fontSize: 22,
    // marginTop: "7%",
    textAlign: "center",
    flex: 0.9,
  },

  save_touch: {
    // marginTop: "8%",
    flex: 0.3,
    alignItems: "center",
    justifyContent: "center",
  },
  save_touch1: {
    marginTop: "2%",
    flex: 0.3,
    alignItems: "center",
    justifyContent: "center",
  },

  save_text: {
    color: "yellow",
    borderWidth: 1.3,
    borderColor: "yellow",
    paddingHorizontal: "4%",
    borderRadius: 20,
    fontWeight: "normal",
    fontSize: 14,
  },
  add_text: {
    color: "yellow",
    borderWidth: 1,
    borderColor: "yellow",
    padding: "6%",
    borderRadius: 12,
    fontWeight: "500",
    fontSize: 14,
  },

  side_bar: {
    // fontSize: 16,
    marginStart: "5%",
    marginTop: "0%",
    flex: 0.5,
  },

  bar_header: {
    color: "white",
    fontWeight: "500",
    fontSize: 22,
    marginTop: "0%",
  },
  header_box: {
    height: height * 0.08,
    backgroundColor: Colors.MAIN_COLOR,
    alignItems: "center",

    // marginTop: 25,
    flexDirection: "row",
  },
  login_box: {
    height: height * 0.10,
    backgroundColor: Colors.MAIN_COLOR,
    alignItems: "center",

    // marginTop: 25,
    flexDirection: "row",
    justifyContent: "center",
  },
 ICON_TEXT: {
    fontSize: 16,
    color: "black",
    fontWeight: "normal",
    marginStart: "3%",marginTop:"1%"
  },
  button: {
    height: "7%",
    width: "90%",
    marginTop: "5%",

    alignSelf: "center",
    backgroundColor: "#003366",
    elevation: 1,
    borderRadius: 8,
    justifyContent: "center",
  },
};
