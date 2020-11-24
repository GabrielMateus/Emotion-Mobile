import React, { useState } from 'react';
import { Alert,View, Text, TextInput, TouchableOpacity,Image, Button } from "react-native";
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Logo from '../../../assets/logo.png'
import api from '../../services/api'
import AsyncStorage from '@react-native-community/async-storage'

export default function Login({navigation}) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function Logar() {

        try {
    
          const response = await api.post('/auth/authenticate', {
    
            email,
            password
    
          });

          const {token, user} = response.data;

          await AsyncStorage.setItem("@CodApi:token", token);
          await AsyncStorage.setItem("@CodApi:user",JSON.stringify(user));

          navigation.navigate('Main');
    
        } catch (error) {
          console.log(error);
          Alert.alert('Erro', 'Email e/ou Senha Incorreta');
        }
    
      }

   /* const navigation = useNavigation()

    function handleNavigateToMain() {
        navigation.navigate("Main")
    }
    */
    function handleNavigateToRegister() {
        navigation.navigate("Register")
    }

    return (
        <View style={styles.container}>

            <View style={styles.image}>
                <Image source={Logo} style={styles.logo}></Image>
            </View>

            <View style={styles.sectionStyle}>
                <TextInput 
                style={styles.input} 
                placeholder='Digite seu E-mail' 
                selectionColor='#7233f0'
                onChangeText = {(value) =>setEmail(value)}
                />
                <Icon style={styles.icon} name="email" size={20} color="#7233f0" />
            </View>

            <View style={styles.sectionStyle}>
                <TextInput 
                style={styles.input} 
                placeholder='Digite sua Senha' 
                selectionColor="#7233f0"
                secureTextEntry={true}
                onChangeText = {(value) =>setPassword(value)}
                />
                <Icon style={styles.icon} name="lock" size={20} color="#7233f0" />
            </View>

            <View style={styles.sectionSenha}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Forgot')}
                    style={styles.buttonSenha}
                >
                    <Text style={styles.txtSenha}>Esqueci minha Senha</Text>
                </TouchableOpacity>
            </View>

            <TouchableOpacity onPress={Logar} style={styles.button}>
                <Text style={styles.txt}>Login</Text>

            </TouchableOpacity>

            <TouchableOpacity onPress={handleNavigateToRegister} style={styles.button}>
                <Text style={styles.txt}>Criar Conta</Text>
            </TouchableOpacity>
        </View>
    )
};

