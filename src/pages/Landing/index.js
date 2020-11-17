import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { View, Text, TouchableOpacity,Image} from 'react-native'
import styles from './styles'
import Icon from 'react-native-vector-icons/FontAwesome'
import Logo from '../../../assets/logo.png'

export default function Landing() {
    const navigation = useNavigation()

    function handleNavigateToLogin(){
        navigation.navigate('Login')
    }

    return (
        <View style={styles.container}>
          <View style={styles.image}>
              <Image source={Logo} style={styles.logo}></Image>
          </View>

            <Text style={styles.title}>
                {""}
                Seja Bem-vindo ao Emotion, {"\n"}Pressione logo abaixo para iniciar.
                {"\n"}
            </Text>

          

            <View style={styles.buttonsContainer}>
                <TouchableOpacity
                    onPress={handleNavigateToLogin}
                    style={[styles.button]}
                >
                    <Icon
                        name="sign-in"
                        size={45}
                        color="#fff"
                        style={styles.icon}
                    ></Icon>

                    <Text style={styles.buttonText}>Iniciar</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}