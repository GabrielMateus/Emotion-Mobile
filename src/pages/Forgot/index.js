import React, { useState } from 'react'
import { View, TextInput, Text, TouchableOpacity, Alert, ScrollView, Image } from 'react-native'
import { NavigationContainer, useNavigation } from '@react-navigation/native'
import styles from './styles'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Logo from '../../../assets/logo.png'
import api from '../../services/api'
import { Value } from 'react-native-reanimated'

export default function Forgot({navigation}) {
  const [show, setShow] = useState(true);
  const [email, setEmail] = useState();
  const [senha, setSenha] = useState();
  const [confirm, setConfirm] = useState();
  const [token, setToken] = useState();

  const handleNavigate = () => {
    setShow(!show)

  }

  async function Send() {
    try {
      await api.post('/auth/forgot_password', {
        email,
      })
      Alert.alert('Aguarde o token ser enviado ao seu E-mail')
      setShow(!show)
      
    } catch (error) {
      Alert.alert('E-mail Incorreto')
    }
  }

  async function Pass() {
    try {
      if (senha === confirm) {
        await api.post('/auth/reset_password', {
          email,
          token,
          password:senha,
        })
        Alert.alert("Nova Senha Criada com Sucesso!")
        navigation.navigate('Login')
      }
    } catch (error) {
      console.log(error)
      Alert.alert('Erro token ou senha incorreto')
    }
  }

  return (
    <View style={styles.container}>
      <ScrollView>

        <View style={styles.image}>
          <Image source={Logo} style={styles.logo}></Image>
        </View>
        <View style={{ display: show ? 'flex' : 'none' }}>
          <Text style={styles.title}>Cadastre seu Email para Recuperar a Senha</Text>

          <View style={styles.sectionStyle}>
            <TextInput
              style={styles.input}
              placeholder='Digite seu E-mail'
              selectionColor='#7233f0'
              onChangeText={(value) => setEmail(value)}
            />
            <Icon style={styles.icon} name="email" size={20} color="#7233f0" />

          </View>
          <TouchableOpacity style={styles.btn} onPress={Send}>
            <Text style={styles.btnText}>Solicitar</Text>
          </TouchableOpacity>
        </View>

        <View style={{ display: show ? 'none' : 'flex', marginTop: 50 }}>
          <Text style={styles.title}>Insira o Token que foi enviado no E-mail cadastrado</Text>
          <View style={styles.sectionStyle}>
            <TextInput style={styles.input}
              placeholder='Insira o token'
              selectionColor='#7233f0'
              onChangeText={(value) => setToken(value)}
            />
            <Icon style={styles.icon} name="key" size={20} color="#7233f0" />
          </View>

          <View style={styles.sectionStyle}>
            <TextInput style={styles.input} 
            placeholder='Nova Senha' 
            selectionColor='#7233f0' 
            secureTextEntry={true} 
            onChangeText={(value) => setSenha(value)}
            />
            <Icon style={styles.icon} name="lock" size={20} color="#7233f0" />
          </View>

          <View style={styles.sectionStyle}>
            <TextInput style={styles.input} 
            placeholder='Confirme a Senha' 
            selectionColor='#7233f0' 
            secureTextEntry={true} 
            onChangeText={(value) => setConfirm(value)}
            />
            <Icon style={styles.icon} name="lock" size={20} color="#7233f0" />
          </View>
          <TouchableOpacity 
          style={styles.btn} 
          onPress={Pass}>
            <Text style={styles.btnText}>Criar Senha</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  )
}