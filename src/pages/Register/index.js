import React, { useState } from 'react'
import { Alert, View, Text, TextInput, TouchableOpacity, Image } from 'react-native'
import styles from './styles'
import { useNavigation } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Logo from '../../../assets/logo.png'
import api from '../../services/api'

export default function Register({navigation}) {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function Cadastrar() {

    try {

      await api.post('/auth/register', {

        name,
        email,
        password

      });

      Alert.alert('Cadastrado com Sucesso');
      navigation.navigate('Login');

    } catch (error) {
      console.log(error);
      Alert.alert('Email já cadastrado');
    }

  }

    return (
    <View style={styles.container}>

      <View style={styles.image}>
        <Image source={Logo} style={styles.logo}></Image>
      </View>

      <View style={styles.sectionStyle}>
        <TextInput 
        selectionColor="#000" 
        style={styles.input} 
        placeholder='Digite seu Nome' 
        onChangeText = {(value) =>setName(value)}
        />
        <Icon style={styles.icon} name="account" size={20} color="#7233f0" />
      </View>

      <View style={styles.sectionStyle}>
        <TextInput 
        style={styles.input} 
        placeholder='Digite seu Email' 
        onChangeText = {(value) =>setEmail(value)}
        />
        <Icon style={styles.icon} name="email" size={20} color="#7233f0" />
      </View>

      <View style={styles.sectionStyle}>
        <TextInput 
        style={styles.input} 
        placeholder='Digite sua Senha' 
        onChangeText = {(value) =>setPassword(value)}
        />
        <Icon style={styles.icon} name="lock" size={20} color="#7233f0" />
      </View>

      <TouchableOpacity onPress={Cadastrar} style={styles.button}>
        <Text style={styles.txt}>Cadastrar</Text>
      </TouchableOpacity>

    </View>
  )
}