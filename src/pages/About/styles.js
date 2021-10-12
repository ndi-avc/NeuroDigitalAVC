import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  buttonImageIconStyle: {
    width: 13,
    height: 20,
    top: 31,
    left: 359,
  },

  logoStyle: {
    position: "absolute",
    top: 107,
    width: 83.31,
    height: 86.56,
    alignSelf: "center",
  },

  textAbout: {
    top: 274,
    textAlign: "center",
    textAlignVertical: "center",
    width: 328,
    fontStyle: "italic",
    fontWeight: "400",
    fontSize: 18,
    alignSelf: "center",
    color: "#1F234B",
  },

  textVersion: {
    top: 350,
    textAlign: "center",
    textAlignVertical: "center",
    fontWeight: "700",
    lineHeight: 16.44,
    color: "#1F234B",
  },

  textVersionSub: {
    top: 355,
    textAlign: "center",
    textAlignVertical: "center",
    fontWeight: "700",
    lineHeight: 16.44,
    color: "gray",
  },

  sectionHeader: {
    fontWeight: "800",
    fontSize: 18,
    color: "#1F234B",
    marginTop: 500,
    marginBottom: 30,
  },

  item: {
    marginTop: 0,
    margin: 23,
    height: 240,
    width: 170,
    padding: 30,
    backgroundColor: "#fff",
    borderRadius: 10,
    elevation: 7,
  },

  itemPhoto: {
    width: 100,
    height: 100,
    borderRadius: 100,
    alignItems: "center",
  },

  itemText: {
    color: "#1F234B",
    textAlign: "center",
    marginTop: 25,
    fontSize: 13,
  },

  itemCargo: {
    textAlign: "center",
    color: "gray",
    fontSize: 10,
    marginTop: 15,
  },
});
