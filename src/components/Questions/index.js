import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";

export default function PageHeader({
  item,
  setChoose,
  choose,
  pontuacao,
  setPontuacao,
}) {
  const handleResp = (ponto) => {
    setPontuacao(pontuacao + ponto);
    setChoose(choose + 1);
  };

  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.Title}>{item?.title}</Text>
      </View>

      <TouchableOpacity
        style={styles.btnResp}
        onPress={() => handleResp(item.questions?.resp1.pontuacao)}
      >
        <Text style={styles.btnText}>{item.questions?.resp1.nome}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.btnResp}
        onPress={() => handleResp(item.questions?.resp2.pontuacao)}
      >
        <Text style={styles.btnText}>{item.questions?.resp2.nome}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.btnResp}
        onPress={() => handleResp(item.questions?.resp3.pontuacao)}
      >
        <Text style={styles.btnText}>{item.questions?.resp3.nome}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.btnResp}
        onPress={() => handleResp(item.questions?.resp4.pontuacao)}
      >
        <Text style={styles.btnText}>{item.questions?.resp4.nome}</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
  btnResp: {
    backgroundColor: "#C3A0F2",
    width: "95%",
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
