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
    const [show, setShow] = useState(false)

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
                >
                    <Text style={styles.txt}>Resultado</Text>
                </TouchableOpacity>

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
        paddingLeft: 10
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
        color: "#7D42CE",
        fontSize: 20,
        fontWeight: "bold",
        paddingLeft: 30
    },
    text: {
        color: "#000",
        fontSize: 18,
        textAlign: "justify",
        margin: 10,
        marginHorizontal: 50,
    },
    txt: {
        color: "#fff",
        fontSize: 18
    },
    textVoce: {
        textAlign: "auto",
    },
    btnResp: {
        backgroundColor: "#7233f0",
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