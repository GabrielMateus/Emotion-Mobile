import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
    },
    txt: {
        fontSize: 20,
        color: '#fff',
        fontFamily: 'Poppins_400Regular'
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
    button: {
        marginTop: 20,
        alignItems: 'center',
        width: '70%',
        padding: 3,
        backgroundColor: '#7233f0',
        borderRadius: 5
    },
    sectionStyle: {
        width:'100%',
        position: 'relative',
        alignItems:'center',
        justifyContent:'center',
    },
    icon:{
        position:'absolute',
        height:20,
        width:20,
        top:15,
        left:28
    },
    image:{
        marginTop:-80,
        alignItems:'center',
        justifyContent:'center',
      },
      logo:{
        height:150,
        width:150
      },
})

export default styles