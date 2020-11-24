import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    backgroundColor: "#f5fcff",
  },
  imgContainer: {
    marginTop: 80,
    marginLeft: 10,
    marginBottom: 10,
  },
  img: {
    width: 100,
    height: 100,
    borderRadius: 8,
  },
  input: {
    marginTop: 10,
    marginBottom: 20,
    fontSize: 15,
    borderRadius: 5,
    width: "80%",
    borderBottomColor: "#7233f0",
    borderBottomWidth: 1,
    fontFamily: "Poppins_400Regular",
    marginLeft: 35,
  },
  sectionStyle: {
    marginTop: 10,
    width: "100%",
    position: "relative",
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    position: "absolute",
    height: 20,
    width: 20,
    top: 15,
    left: 28,
  },
  button: {
    marginLeft: 55,
    marginTop: 40,
    alignItems: "center",
    width: "70%",
    padding: 3,
    backgroundColor: "#7233f0",
    borderRadius: 5,
  },
  txt: {
    fontSize: 20,
    color: "#fff",
    fontFamily: "Poppins_400Regular",
  },
});

export default styles;
