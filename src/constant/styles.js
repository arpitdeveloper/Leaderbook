import { Dimensions } from "react-native";
import { Colors } from "./colors";

const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;

export const STYLES = {
  back_button: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
    marginTop: "7%",
    textAlign: "center",
    flex: 0.2,
    marginStart: "6%",
  },

  header: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
    marginTop: "7%",
    textAlign: "center",
    flex: 0.5,
  },

  save_touch: {
    marginTop: "8%",
    flex: 0.3,
    alignItems: "center",
    justifyContent: "center",
  },

  save_text: {
    color: "yellow",
    borderWidth: 1.3,
    borderColor: "yellow",
    paddingHorizontal: "2%",
    borderRadius: 20,
    fontWeight: "500",
    fontSize: 16,
  },
  add_text: {
    color: "yellow",
    borderWidth: 1.3,
    borderColor: "yellow",
    paddingHorizontal: "13%",
    borderRadius: 20,
    fontWeight: "500",
    fontSize: 16,
  },

  side_bar: {
    // fontSize: 16,
    marginStart: "5%",
    marginTop: "7%",
    flex: 0.5,
  },

  bar_header: {
    color: "white",
    fontWeight: "500",
    fontSize: 22,
    marginTop: "7%",
  },
  header_box: {
    height: height * 0.12,
    backgroundColor: Colors.MAIN_COLOR,
    alignItems: "center",

    // marginTop: 25,
    flexDirection: "row",
  },
  login_box: {
    height: height * 0.12,
    backgroundColor: Colors.MAIN_COLOR,
    alignItems: "center",

    // marginTop: 25,
    flexDirection: "row",
    justifyContent: "center",
  },
 ICON_TEXT: {
    fontSize: 18,
    color: "black",
    fontWeight: "500",
    marginStart: "1%",marginTop:"2%"
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
