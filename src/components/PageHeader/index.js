import React from 'react'
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native'
import styles from './styles'

export default function PageHeader() {
  return (
    <View style={styles.container}>
      <View style={{ marginBottom: 10, paddingTop: 12, height: 200, backgroundColor: "#7233f0", alignItems: "center" }}>
        <View style={styles.imgContainer}>
          <Image
            source={require('../../../assets/user.png')}
            style={styles.img}
          />
        </View>

      </View>
    </View>
  )
}
