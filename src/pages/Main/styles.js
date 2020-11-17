import React from 'react'
import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent:'center',
        backgroundColor:"#fff",
        paddingBottom:50,
    },
    buttonContainer:{
        marginTop:20,
        paddingBottom:100,
        justifyContent:'center',
        marginBottom:1,
        alignItems:'center',
    },
    txt:{
        alignSelf:'center',
        fontFamily:'Poppins_400Regular',
        color:'#e6e6fe'
    },
    button:{
        backgroundColor:"#7233f0",
        borderRadius:6,
        width:"80%",
        height:90,
        padding:20,
        margin:20,
        
    },
    icon:{
        alignSelf:'center',
        color:'#fff',

    }
})

export default styles