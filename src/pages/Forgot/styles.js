import { StyleSheet } from 'react-native'
 
const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
 
    },
    image:{
        marginTop:15,
        alignItems:'center',
        justifyContent:'center',
      },
      logo:{
        height:150,
        width:150
      },
      title:{
        alignSelf:'center',
        fontSize:15,
        color:'#000',
        fontFamily:'Poppins_400Regular',
        marginLeft: 20
    },
    sectionStyle0: {
        width:'100%',
        position: 'relative',
        alignItems:'center',
        justifyContent:'center',
    },
    input: {
        marginTop: 10,
        marginBottom: 20,
        fontSize: 15,
        borderRadius: 5,
        width: '80%',
        borderBottomColor: '#7233f0',
        borderBottomWidth: 1,
        fontFamily: 'Poppins_400Regular',
        marginLeft:35
    },
    icon:{
        position:'absolute',
        height:20,
        width:20,
        top:15,
        left:12
    },
    btn:{
        alignSelf:'center',
        fontFamily:'Poppins_400Regular',
        backgroundColor:'#7233f0',
        marginTop:"10%",
        alignItems: 'center',
        width: 240,
        height: 50,
        padding:10,
        borderRadius:8,
        marginBottom: 50,
    
    },
    btnText:{
        fontSize:20,
        color:'#fff',
        fontWeight:'900',
        fontFamily:'Poppins_400Regular',
    },
})
 
export default styles