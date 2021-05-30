import { StyleSheet } from "react-native";
import { color } from "react-native-reanimated";
const styles = StyleSheet.create({
  flex: {},
  container: {
    width: "100%",

    // paddingVertical: 10,
    // marginBottom: 20,
    // paddingHorizontal: 10,
  },
  headD: {
    width: "100%",
    height: 200,
    borderRadius: 10,
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 10,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  hL: {
    width: "38%",
    height: "100%",
    backgroundColor: "white",
    justifyContent: "center",
  },
  hR: {
    width: "60%",
    height: "100%",
    backgroundColor: "white",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  value: {
    fontSize: 100,
    width: "100%",
    textAlign: "center",
    height: "70%",
  },
  sl: {
    fontSize: 16,
    width: "100%",
    textAlign: "center",
  },
  item: {
    width: "100%",
    height: "20%",
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 5,
    paddingHorizontal: 5,
  },
  num: {
    fontSize: 18,
    width: "10%",
  },
  prog: {
    marginTop: 5,
    height: 12,
    borderRadius: 20,
    width: "90%",
    backgroundColor: "#ddd",
  },
  itemCmt: {
    width: "100%",
    // height: 150,
    borderRadius: 10,
    backgroundColor: "white",
    flexDirection: "column",
    // justifyContent: "space-between",
    paddingVertical: 10,
    paddingHorizontal: 10,
    marginBottom: 8,
  },
  av: {
    width: "100%",
    // height: "30%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  name: {
    width: "90%",
    textAlign: "left",
    paddingVertical: 5,
    fontSize: 18,
    fontWeight: "700",
  },
  rating: {
    width: "100%",
    // height: "15%",
  },
  date: {
    left: 110,
    fontSize: 16,
  },
  contentCmt: {
    width: "100%",
    // height: "50%",
  },
  TxCon: {
    fontSize: 17,
  },
});
export default styles;
