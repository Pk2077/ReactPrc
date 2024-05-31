import Constants from "expo-constants";
import { StyleSheet } from "react-native";
import { Colors } from "../colors";
import { Platform } from "react-native";

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  background: {
    flex: 1,
    justifyContent: "space-between",
  },
  header: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: Platform.OS === "android" ? 10 : 0,
  },
  text: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 10,
  },
  footer: {
    padding: 20,
    width: "100%",
    alignItems: "center",
  },
  DashBoard: {
    flex: 1,
    paddingTop: Platform.OS == "android" ? 10 : 0,
  },
  profilesWrapper: {
    flex: 1,
    width: "100%",
  },
  card: {
    backgroundColor: "#f8f4f4",
    padding: 20,
    paddingTop: 80,
  },
  container: {
    flex: 1,
    justifyContent: "space-between",
    backgroundColor: "#fff",
  },
  centerContent: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  mainText: {
    fontSize: 35,
    fontWeight: "bold",
    color: "black",
    textAlign: "center",
  },
  bottomContent: {
    alignItems: "center",
    alignSelf: "center",
    marginBottom: 30,
    paddingBottom: 3,
    height: 30,
    width: "80%",
    borderRadius: 20,
    backgroundColor: "green",
  },
  bottomText: { color: "#fff", fontWeight: "bold", fontSize: 20 },
  profileScreen: { paddingTop: Platform.OS == "android" ? 10 : 0 },
});

export default styles;
