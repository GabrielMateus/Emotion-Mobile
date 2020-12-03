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
    quarta,
    questionLideranca
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
                onPress={!questionLideranca ? () => handleResp(item.questions?.resp1.pontuacao) : () => {
                    questionLideranca.a += 1
                    setChoose(choose + 1);
                }}
            >
                <Text style={styles.btnText}>{item.questions?.resp1.nome}</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.btnResp}
                onPress={!questionLideranca ? () => handleResp(item.questions?.resp2.pontuacao) : () => {
                    questionLideranca.b += 1
                    setChoose(choose + 1);
                }}
            >
                <Text style={styles.btnText}>{item.questions?.resp2.nome}</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.btnResp}
                onPress={!questionLideranca ? () => handleResp(item.questions?.resp3.pontuacao) : () => {
                    questionLideranca.c += 1
                    setChoose(choose + 1);
                }}
            >
                <Text style={styles.btnText}>{item.questions?.resp3.nome}</Text>
            </TouchableOpacity>
            { !quarta && <TouchableOpacity
                style={styles.btnResp}
                onPress={() => handleResp(item.questions?.resp4.pontuacao)}
            >
                <Text style={styles.btnText}>{item.questions?.resp4.nome}</Text>
            </TouchableOpacity>}
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
        paddingLeft: 20,
        marginTop: 10,
        backgroundColor: "#e6e6fe",
        height: 180,
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
    },
    Title: {
        color: "#7233f0",
        fontSize: 20,
        fontWeight: "bold",
    },
    btnResp: {
        backgroundColor: "#e6e6fe",
        width: "95%",
        marginTop: 20,
        borderRadius: 5,
        padding: 20,
        alignItems: "center",
    },
    btnText: {
        color: "#7233f0",
        fontSize: 16,
    },
});