import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },


  buttonImageIconStyle: {
    width: 13,
    height: 20,
    top: 31,
    left:359,
  },

  logoStyle: {
    position: 'absolute',
    top: 107,
    width: 83.31,
    height: 86.56,
    alignItems: 'center',
    left: 165,
    right: 165,
  },

  textAbout: { 
    top: 274,
    textAlign: 'center',
    textAlignVertical: "center",
    width: 328,
    fontStyle: 'italic',
    fontWeight: '400',
    fontSize: 18,
    marginLeft: 43,
    color: '#1F234B', 
  },

  textVersion: {
    top: 350,
    textAlign: 'center',
    textAlignVertical: "center",
    fontWeight: '700',
    lineHeight: 16.44,
    color: '#1F234B', 
  },
  textVersionSub: {
    top: 355,
    textAlign: 'center',
    textAlignVertical: "center",
    fontWeight: '700',
    lineHeight: 16.44,
    color: 'gray',
  },

  sectionHeader: {
    fontWeight: '800',
    fontSize: 18,
    color: '#1F234B',
    marginTop: 500,
    marginBottom: 57,
  },

  item: {
    margin: 23,
  },

  itemPhoto: {
    width: 100,
    height: 100,
    borderRadius: 100,
  },

  itemText: {
    color: '#1F234B',
    marginTop: 10,
  },


});