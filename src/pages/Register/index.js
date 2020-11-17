import React from 'react'
import { View, Text, TextInput, TouchableOpacity,Image } from 'react-native'
import styles from './styles'
import { useNavigation } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Logo from '../../../assets/logo.png'

export default function Register() {
    const navigation = useNavigation()

    function handleNavigationToLogin() {
        navigation.navigate('Login')
    }

    return (
        <View style={styles.container}>

            <View style={styles.image}>
                <Image source={Logo} style={styles.logo}></Image>
            </View>

            <View style={styles.sectionStyle}>
                <TextInput selectionColor="#000" style={styles.input} placeholder='Digite seu Nome' />
                <Icon style={styles.icon} name="account" size={20} color="#7233f0" />
            </View>

            <View style={styles.sectionStyle}>
                <TextInput style={styles.input} placeholder='Digite seu Email' />
                <Icon style={styles.icon} name="email" size={20} color="#7233f0" />
            </View>

            <View style={styles.sectionStyle}>
                <TextInput style={styles.input} placeholder='Digite sua Senha' />
                <Icon style={styles.icon} name="lock" size={20} color="#7233f0" />
            </View>

            <TouchableOpacity onPress={handleNavigationToLogin} style={styles.button}>
                <Text style={styles.txt}>Cadastrar</Text>
            </TouchableOpacity>

        </View>
    )
}