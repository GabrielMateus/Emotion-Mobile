import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import {
  VictoryPie,
  VictoryChart,
  VictoryTheme,
  VictoryBar,
} from "victory-native";

export default function index() {
  const [data, setData] = useState([
    { x: "Triste", y: 20 },
    { x: "Depressivo", y: 20 },
    { x: "Animado", y: 55 },
    { x: "Feliz", y: 40 },
  ]);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Grafico de Emoções Semanais</Text>
      {/* <VictoryPie
        domainPadding={10}
        theme={VictoryTheme.material}
        labels={({ datum }) => `${datum.x}: ${datum.y}`}
        labelRadius={({ innerRadius }) => {
          return innerRadius + 70;
        }}
        data={data}
        style={{ labels: { fill: "black", fontSize: 15 } }}
      /> */}
      <VictoryChart theme={VictoryTheme.material} domainPadding={10}>
        <VictoryBar style={{ data: { fill: "#c43a31" } }} data={data} />
      </VictoryChart>
      <Text>Estamos Feliz com o seu resultado da semana!</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5fcff",
    alignSelf: "center",
    marginBottom: "50%",
    width: "90%",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#7233f0",
  },
});
