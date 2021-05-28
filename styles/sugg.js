import { StyleSheet } from "react-native";
import { color } from "react-native-reanimated";
const styles = StyleSheet.create({
  divPrdItem: {
    width: "100%",
    height: 125,
    backgroundColor: "white",
    display: "flex",
    position: "relative",
    marginBottom: 10,
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  imgPrc: {
    width: "30%",
    height: "100%",
    borderRadius: 15,
    backgroundColor: "#ddd",
  },
  img: {
    height: "100%",
    width: "100%",
    borderRadius: 15,
  },
  Citem: {
    width: "68%",
    height: "100%",
    flexDirection: "column",
    // paddingVertical:10,
    paddingHorizontal: 10,
  },
  title: {
    // height: "40%",
    fontSize: 15,
    fontWeight: "600",
    textAlign: "left",
    marginBottom: 5,
  },
  desc: {
    width: "100%",
    // height: "55%",
    borderRadius: 10,
    // backgroundColor:"#ddd",
    paddingVertical: 5,
  },
  descTx: {
    fontSize: 13,
    textAlign: "left",
    lineHeight: 23,
    marginBottom: 10,
  },
  rating: {
    width: 200,
    // float: "left",
  },
});
export default styles;
