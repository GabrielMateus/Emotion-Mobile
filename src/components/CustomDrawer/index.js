import React, { useState, useEffect } from 'react'
import { View, Text, Image, StyleSheet,TouchableOpacity } from 'react-native'
import { DrawerItemList } from '@react-navigation/drawer'
import AsyncStorage from '@react-native-community/async-storage'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

const CustomDrawer = ({ ...props }) => {
    // const [user, setUser] = useState('')

    // useEffect(async () => {
    //     const usuario = await JSON.parse(await AsyncStorage.getItem("@CodeApi:user"))
    //     console.log(usuario)
    // }, [AsyncStorage]);


    return (
        <View style={styles.container}>
            <View style={styles.userArea}>
                <Image
                    style={styles.user}
                    source={require('../../../assets/user.png')}
                />
                <Text style={styles.nome}>Emotion App</Text>
                <Text style={styles.email}>Olá Seja Bem-vindo</Text>                
            </View>

            <DrawerItemList {...props} />
            <TouchableOpacity
                  
            >
                 
                
            </TouchableOpacity>

            <Text style={styles.direitos}>Todos os Direitos reservados a {'\n'} Gabriel Mateus 
            e Sergio Apostolo @2020</Text>

           

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    userArea: {
        marginTop: 30,
        marginLeft: 10,
        marginBottom: 10
    },
    user: {
        width: 55,
        height: 55
    },
    nome: {
        marginTop: 20,
        fontSize: 18,
        fontWeight: 'bold',
        color:'#000'
    },
    email: {
        fontSize: 15
    },
    direitos: {
        paddingLeft:20,
        marginTop: 300,
        fontSize: 15,
        fontWeight: 'bold',
        color:'#7233f0',
        textAlign:"left"
    }
})

export default CustomDrawer;
