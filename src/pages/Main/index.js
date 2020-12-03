import React, {useState} from 'react'
import { View, Text, TouchableOpacity, ScrollView,SafeAreaView } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import styles from './styles'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import Feather from 'react-native-vector-icons/Feather'
import ModalEmotion from '../../components/Modal'
import AsyncStorage from '@react-native-community/async-storage'

export default function Main({navigation}) {
const [show, setShow] = useState(true)  

async function remove() {
  try {
    await AsyncStorage.clear();
    navigation.navigate("Login")
    return true;
  }
  catch (err) {
    return false;
  }
}

  return (
    <View style={styles.container}>
    
        <ModalEmotion
        
          show = {show}
          setShow = {setShow}
        
        />

        <View style={{
          marginTop:30,
          marginBottom:10,
          paddingTop:12,
          height:50,
          backgroundColor:"#7233f0"
          }}>
         <TouchableOpacity 
            style={{
            alignItems:'flex-start',
            paddingLeft:20}}
            onPress={()=> navigation.openDrawer()}
         >
          
            <FontAwesome5 name="bars" size={24} color='#fff'/>
            
          </TouchableOpacity>

          

          
        </View>
 
        <TouchableOpacity 
            style={{
            alignItems:'flex-end',
            paddingRight:20,
           }}
            onPress={remove}
         >
          
            <Feather name="log-out" size={24} color='#7233f0'/>
            
          </TouchableOpacity>

      <ScrollView>
        <View style={styles.buttonContainer}>
          <View style = {styles.ContTitle}>

          <Text style={styles.ContTxt}>Questionarios</Text>

          </View>
        
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Personalidade')}
          >
            <Icon
              name="notebook"
              size={40}
              style={styles.icon}
            ></Icon>

            <View style={styles.ContBtn}>
              <Text style={styles.txt}>Personalidade</Text>
              <Text style={styles.txt}>Questões: 10</Text>  
            </View>
            
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Lideranca')}
          >
            <Icon
              name="notebook"
              size={40}
              style={styles.icon}
            ></Icon>

            <View style={styles.ContBtn}>
              <Text style={styles.txt}>Liderança</Text>
              <Text style={styles.txt}>Questões: 10</Text>
            </View>
            
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Ansiedade')}
          >
            <Icon
              name="notebook"
              size={40}
              style={styles.icon}
            ></Icon>
            
            <View style={styles.ContBtn}>
              <Text style={styles.txt}>Ansiedade</Text>
              <Text style={styles.txt}>Questões: 10</Text>
            </View>

          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Emocional')}
          >
            <Icon
              name="notebook"
              size={40}
              style={styles.icon}
            ></Icon>

            <View style={styles.ContBtn}>
              <Text style={styles.txt}>Inteligência</Text>
              <Text style={styles.txt}>Questões: 10</Text>
            </View>

          </TouchableOpacity>

          <TouchableOpacity
            style={styles.ContBtn}
            onPress={remove}
          >
             <View style={styles.ContBtn}>
             <Text style={styles.txt}>Sair</Text>
             </View>

          </TouchableOpacity>

          </View>
      </ScrollView>

    </View>
  )
}