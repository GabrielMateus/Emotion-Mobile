import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  Button,
  TouchableOpacity,
} from "react-native";

export default function index({ resp, Pontuacao }) {
  return (
    <>
      <View style={styles.container}>
        {resp && (
          <View style={styles.containerResult}>
            <Text style={styles.Title}>{resp?.title}</Text>
            <Text style={styles.textVoce}>{resp?.textVoce}</Text>
            <Text style={styles.text}>{resp?.text}</Text>
          </View>
        )}

        <TouchableOpacity
          style={styles.btnResp}
          onPress={() => Pontuacao()}
        ></TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: "30%",
  },
  containerResult: {
    alignItems: "center",
    justifyContent: "center",
  },
  box: {
    marginTop: 10,
    backgroundColor: "#7D42CE",
    height: 180,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  Title: {
    color: "#000",
    fontSize: 20,
    fontWeight: "bold",
  },
  text: {
    color: "#000",
    fontSize: 18,
    textAlign: "justify",
    margin: 10,
    marginHorizontal: 50,
  },
  textVoce: {
    textAlign: "auto",
  },
  btnResp: {
    backgroundColor: "#C3A0F2",
    width: "78%",
    marginTop: 20,
    borderRadius: 5,
    padding: 20,
    alignItems: "center",
  },
  btnText: {
    color: "#fff",
    fontSize: 16,
  },
});
