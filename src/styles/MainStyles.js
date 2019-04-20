import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0066CC"
  },
  buttons: {
    width: 200,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFF",
    borderRadius: 5,
    marginTop: 5
  },
  buttonText: {
    color: "#0066CC",
    fontSize: 14,
    fontWeight: "bold"
  },
  input: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFF",
    fontSize: 16,
    borderRadius: 5,
    width: 200,
    height: 35,
    padding: 5,
    marginTop: 5
  }
});

export default styles;
