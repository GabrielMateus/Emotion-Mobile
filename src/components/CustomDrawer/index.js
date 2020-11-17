import React from 'react'
import {View,Text,Image,StyleSheet} from 'react-native'
import {DrawerItemList} from '@react-navigation/drawer'


export default function CustomDrawer({...props}){
    return(
        <View style={styles.container}>
           <View style={styles.userArea}>
               <Image 
                style={styles.user}
                source={require('../../../assets/user.png')}
               />

               <Text style={styles.nome}>Tony Stark</Text>
               <Text style={styles.email}>starkvingador@gmail.com</Text>
           </View>
           
            <DrawerItemList {...props} />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        
    },
    userArea:{
        marginTop: 30,
        marginLeft: 10,
        marginBottom:10
    },
    user:{
        width:55,
        height:55
    },
    nome:{
        marginTop:20,
        fontSize: 18,
        fontWeight: 'bold'
    },
    email:{
        fontSize:15
    }
})
