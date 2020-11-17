import React from 'react';
import { View, Text, TextInput, TouchableOpacity,Image, Button } from "react-native";
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Logo from '../../../assets/logo.png'

export default function Login() {
    const navigation = useNavigation()

    function handleNavigateToMain() {
        navigation.navigate("Main")
    }

    function handleNavigateToRegister() {
        navigation.navigate("Register")
    }

    return (
        <View style={styles.container}>

            <View style={styles.image}>
                <Image source={Logo} style={styles.logo}></Image>
            </View>

            <View style={styles.sectionStyle}>
                <TextInput style={styles.input} placeholder='Digite seu E-mail' selectionColor='#7233f0'/>
                <Icon style={styles.icon} name="email" size={20} color="#7233f0" />
            </View>

            <View style={styles.sectionStyle}>
                <TextInput style={styles.input} placeholder='Digite sua Senha' selectionColor="#7233f0"/>
                <Icon style={styles.icon} name="lock" size={20} color="#7233f0" />
            </View>

            <TouchableOpacity onPress={handleNavigateToMain} style={styles.button}>
                <Text style={styles.txt}>Login</Text>

            </TouchableOpacity>

            <TouchableOpacity onPress={handleNavigateToRegister} style={styles.button}>
                <Text style={styles.txt}>Criar Conta</Text>
            </TouchableOpacity>
        </View>
    )
};

