import React, { useState, useEffect } from 'react'
import { Modal, Text, View, TouchableOpacity, Alert } from 'react-native'
import Icon from '@expo/vector-icons/FontAwesome'
import Emotion from '@expo/vector-icons/Fontisto'
import AsyncStorage from '@react-native-community/async-storage'

const emot = {

    Feliz: 0,
    Confuso: 0,
    Nervoso: 0,
    Triste: 0,
    Doente: 0,
    Simpatico: 0,
    Surpreso: 0,
    Desapontado: 0,
    Apaixonado: 0

}


export default function ModalEm({ show, setShow }) {
    const [emocao, setEmocao] = useState([])


    useEffect(() => {
        emotion()
    }, [])

    const emotion = async () => {
        const resp = JSON.parse(await AsyncStorage.getItem("@CodeApi:emotion"))
        resp ? setEmocao(resp) : setEmocao(emot)

    }

    async function Submit() {
        const resp = await AsyncStorage.setItem("@CodeApi:emotion", JSON.stringify(emocao))
        setShow(false)

    }

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={show}
            onRequestClose={() => {
                Alert.alert("Modal has been closed.");
            }}
        >
            <View style={{ flex: 1, justifyContent: "center", borderRadius: 8, marginTop: '40%', marginBottom: '50%', marginHorizontal: 15, backgroundColor: "#E6E6F3" }}>
                <View style={{ paddingRight: 10, alignItems: 'flex-end', marginTop: 20 }}>
                    <TouchableOpacity
                        onPress={() => setShow(false)}
                    >
                        <Icon name="times-circle" size={25} color="#7233f0" />
                    </TouchableOpacity>

                </View>

                <View style={{ alignItems: "center" }}>
                    <Text style={{fontSize:20,color:"#7233f0"}}>Como esta se sentido ?</Text>
                </View>

                <View style={{ flex: 1, marginTop: 50, flexDirection: 'column' }}>

                    <View style={{ flexDirection: "row", justifyContent: 'space-around' }}>
                        <TouchableOpacity
                            style={{ alignItems: "center" }}
                            onPress={() => {
                                emocao.Confuso = emocao.Confuso + 1
                                Submit()
                            }}
                        >
                            <Emotion name="confused" size={25} color="#7233f0" />
                            <Text>Confuso</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={{ alignItems: "center" }}
                            onPress={() => {
                                emocao.Nervoso = emocao.Nervoso + 1
                                Submit()
                            }}
                        >
                            <Emotion name="nervous" size={25} color="#7233f0" />
                            <Text>Nervoso</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={{ alignItems: "center" }}
                            onPress={() => {
                                emocao.Triste = emocao.Triste + 1
                                Submit()
                            }}
                        >
                            <Emotion name="frowning" size={25} color="#7233f0" />
                            <Text>Triste</Text>
                        </TouchableOpacity>

                    </View>

                    <View style={{ flexDirection: "row", justifyContent: 'space-around', marginTop: 20 }}>
                        <TouchableOpacity
                            style={{ alignItems: "center" }}
                            onPress={() => {
                                emocao.Apaixonado = emocao.Apaixonado + 1
                                Submit()
                            }}
                        >
                            <Emotion name="heart-eyes" size={25} color="#7233f0" />
                            <Text>Apaixonado</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={{ alignItems: "center" }}
                            onPress={() => {
                                emocao.Feliz = emocao.Feliz + 1
                                Submit()
                            }}
                        >
                            <Emotion name="slightly-smile" size={25} color="#7233f0" />
                            <Text>Feliz</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={{ alignItems: "center" }}
                            onPress={() => {
                                emocao.Surpreso = emocao.Surpreso + 1
                                Submit()
                            }}
                        >
                            <Emotion name="surprised" size={25} color="#7233f0" />
                            <Text>Surpreso</Text>
                        </TouchableOpacity>

                    </View>

                </View>

            </View>




        </Modal>
    )
}