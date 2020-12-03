import React from 'react'
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: "#fff",
    paddingBottom: 50,
  },
  buttonContainer: {
    marginTop: 20,
    paddingBottom: 100,
    justifyContent: 'flex-start',
    marginBottom: 1,
    alignItems: 'flex-start',
  },
  txt: {
    paddingBottom:10,
    alignItems:'center',
    fontFamily: 'Poppins_400Regular',
    color: '#7233f0',
    paddingLeft:50
  },
  button: {
    backgroundColor: "#e6e6fe",
    borderRadius: 6,
    width: "80%",
    height: 100,
    padding: 20,
    margin: 20,
    borderColor:'#7233f0',
    flexDirection:'row',
  
  },
  icon: {
    alignSelf: 'flex-start',
    color: '#7233f0',
  },
  ContBtn:{
    display:"flex",
    flexDirection:"column",

  },
  ContTxt:{
    fontSize: 20,
    fontFamily:'Poppins_400Regular',
    color: '#7233f0'

  },
  ContTitle:{
    alignItems:'center',
    justifyContent:'center',
    marginLeft:'30%',

  }

})

export default styles