import { StyleSheet } from "react-native";
import { color } from "react-native-reanimated";
const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  active: {
    backgroundColor: "#1ABDEE",
  },
  headV: {
    width: "100%",
    height: 270,
    backgroundColor: "#ddd",
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginBottom: 10,
  },
  headC: {
    width: "100%",
    position: "relative",
    height: "100%",
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row",
  },
  Cate: {
    width: "100%",
    height: 30,
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 10,
  },
  itemCate: {
    width: "48%",
    marginBottom: 5,
    marginRight: 5,
    height: 40,
    display: "flex",
    alignItems: "center",

    // textAlign: "center",
    // paddingHorizontal: 8,
    backgroundColor: "#fff",
    borderRadius: 50,
  },
  wh100: {
    width: "100%",
    height: "100%",
  },
  Tx: {
    fontSize: 16,
    alignSelf: "center",
    fontWeight: "bold",
    color: "#3f3f3f",
  },
  botItem: {
    width: "100%",
    height: 220,
    backgroundColor: "white",
    borderRadius: 10,
    marginBottom: 10,
    paddingHorizontal: 10,
    paddingVertical: 10,
    flexDirection: "column",
    elevation: 7,
    // justifyContent: "space-between"
  },
  bHead: {
    width: "100%",
    height: 65,
    borderRadius: 20,

    // backgroundColor:"#ddd",
    marginBottom: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  imgV: {
    width: "15%",
    // backgroundColor: "#ddd",
  },
  title: {
    width: "83%",
    fontSize: 30,
    fontWeight: "600",
    textAlign: "left",
    backgroundColor: "#FFC300",

    borderRadius: 5,
    // borderColor: "#000",
    // borderStyle: "solid",
    // borderWidth: 1,
    padding: 4,
  },
  desc: {
    width: "100%",
    height: 80,
    // backgroundColor:"#ddd",
    marginBottom: 10,
  },
  Txdes: {
    fontSize: 17,
    textAlign: "left",
  },
  botb: {
    width: "100%",
    height: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  btnL: {
    width: "40%",
    backgroundColor: "white",
    borderWidth: 2,
    borderStyle: "solid",
    borderColor: "#5edbff",
    borderRadius: 5,
    height: 40,
  },
  btnR: {
    width: "40%",
    backgroundColor: "white",
    borderWidth: 2,
    borderStyle: "solid",
    borderColor: "orange",
    borderRadius: 5,
    height: 40,
  },
  Txbtn: {
    height: 40,
    textAlign: "center",
    fontSize: 17,
  },
});
export default styles;
