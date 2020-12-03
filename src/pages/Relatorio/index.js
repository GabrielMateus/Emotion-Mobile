import React from 'react'
import { View,TextInput,Icon,Text} from 'react-native'
import styles from './styles'
import PageHeader from '../../components/PageHeader'
import ShowRelatorio from '../../components/ShowRelatorio'

export default function Relatorio() {
    return (
      <View style={styles.container}>
        <PageHeader/>
        <ShowRelatorio/>
      </View>
    )
  }