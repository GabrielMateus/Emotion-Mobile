import AsyncStorage from "@react-native-community/async-storage";
import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import {
    VictoryPie,
    VictoryChart,
    VictoryTheme,
    VictoryBar,
    VictoryStack,
    VictoryArea
} from "victory-native";

export default function index() {
    const [emotion, setEmotion] = useState([])

    useEffect(() => {
        handleEmocao()
    }, [])

    const handleEmocao = async () => {
        const resp = JSON.parse(await AsyncStorage.getItem("@CodeApi:emotion"))
        setEmotion([
            { x: "Triste", y: resp.Triste ? resp.Triste : 0 },
            { x: "Apaixonado", y: resp.Apaixonado ? resp.Apaixonado : 0 },
            { x: "Feliz", y: resp.Feliz ? resp.Feliz : 0 },
            { x: "Nervoso", y: resp.Nervoso ? resp.Nervoso : 0 },
            { x: "Confuso", y: resp.Confuso ? resp.Confuso : 0 },
            // { x: "Simpatico", y: resp.Simpatico? resp.Simpatico: 0 },
            // { x: "Doente", y: resp.Doente? resp.Doente: 0 },
            // { x: "Desapontado", y: resp.Desapontado? resp.Desapontado: 0 },
            { x: "Surpreso", y: resp.Surpreso ? resp.Surpreso : 0 },
        ])

    }

    // const [data, setData] = useState([
    //   { x: "Triste", y: 20 },
    //   { x: "Animado", y: 55 },
    //   { x: "Feliz", y: 40 },
    //   { x: "Nervoso", y: 40 },
    //   { x: "Confuso", y: 40 },
    // ]);

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

                <VictoryBar

                    labels={({ datum }) => `${datum.x}`}
                    // animate={{
                    //   duration:2000,
                    //   onLoad:{duration:1000}
                    // }}

                    // labels={({datum}) => `${datum.x}`} 
                    style={{ data: { fill: "#7233f0" } }}
                    data={emotion}
                />

            </VictoryChart>

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
        marginTop: 80
    },
});