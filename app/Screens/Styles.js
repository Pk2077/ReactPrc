import Constants from "expo-constants";
import { StyleSheet } from "react-native";
import { Colors } from "../colors";

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
    paddingTop: Constants.statusBarHeight,
  },
  profilesWrapper: {
    flex: 1,
    width: "100%",
  },
  buttonWrapper: {
    padding: 10,
    width: "100%",
    alignItems: "center",
    backgroundColor: Colors.background, // Assuming Colors.background is the desired background color
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
});

export default styles;
