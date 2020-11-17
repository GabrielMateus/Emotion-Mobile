import React from 'react'
import { View, Text, Image, TextInput, TouchableOpacity} from 'react-native'
import styles from './styles'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import PageHeader from '../../components/PageHeader'

export default function User() {
  return (
    <View style={styles.container}>

      <PageHeader/>


      <View style={styles.sectionStyle}>
        <TextInput style={styles.input} placeholder={"Nome do Usuario"} selectionColor="#7233f0">
          Tony Stark
        </TextInput>

        <Icon style={styles.icon} name="account" size={20} color="#7233f0" />
      </View>

      <View style={styles.sectionStyle}>
        <TextInput style={styles.input} placeholder={"Email do Usuario"} selectionColor={"#7233f0"}>
          starkvingador@gmail.com
        </TextInput>

        <Icon style={styles.icon} name="email" size={20} color="#7233f0" />
      </View>

    
    </View>

  )
}