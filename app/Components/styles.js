import { StyleSheet } from "react-native";
import { Colors } from "../colors";

const styles = StyleSheet.create({
  button: {
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    width: "100%",
    marginVertical: 10,
  },
  text: {
    color: Colors.white,
    fontSize: 18,
    textTransform: "capitalize",
    fontWeight: "bold",
  },
  card: {
    borderRadius: 15,
    backgroundColor: Colors.white,
    marginBottom: 20,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 100,
    marginBottom: 10,
  },

  details: {
    padding: 20,
  },
  title: {
    marginBottom: 7,
    fontSize: 30,
  },
  subTitle: {
    color: Colors.primary,
    fontSize: 20,
    fontWeight: "bold",
  },
  card2: {
    borderRadius: 15,
    backgroundColor: Colors.white,
    marginBottom: 20,
    overflow: "hidden",
    elevation: 20,
    width: 400,
  },
  details2: {
    flexDirection: "row",
    padding: 20,
    justifyContent: "space-evenly",
  },
  menuItem2: {
    margin: 20,
    alignItems: "center",
  },
  container2: {
    flexDirection: "row",
    paddingLeft: 10,
    width: "100%",
  },
  image2: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 10,
  },
  detailsContainer: {},
  title2: {
    fontSize: 25,
    fontWeight: "bold",
  },
  subTitle2: {
    fontSize: 18,
    fontStyle: "italic",
  },
  text2: {
    fontSize: 18,
    fontWeight: "bold",
    alignSelf: "center",
    paddingBottom: 30,
  },
  bar2: {
    flex: 0.1,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  Profile2: {
    flexDirection: "row",
  },
  bottomMenu: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    width: "100%",
    backgroundColor: "#fff",
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: "#ccc",
  },
  bottomMenuItem: {
    justifyContent: "center",
    alignItems: "center",
  },
  bottomMenuItemText: {
    marginTop: 4,
    fontSize: 12,
  },
});

export default styles;
