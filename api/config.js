import Constants from "expo-constants";
const { manifest } = Constants;
const resourse = `http://${manifest.debuggerHost
  .split(":")
  .shift()}/codehero/public`;
const base = `http://${manifest.debuggerHost.split(":").shift()}/codehero`;
export default {
  api: "",
  resource: resourse,
  base: base,
};
