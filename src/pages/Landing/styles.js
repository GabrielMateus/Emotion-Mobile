import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "#fff",
        justifyContent: "center",
        padding: 40,
        paddingBottom: 80,
    },
    title:{
        fontFamily: "Poppins_400Regular",
        color: "#000",
        fontSize: 25,
        lineHeight: 30,
    },
    buttonsContainer: {
        width: "100%",
        alignItems: "center",
        marginTop: 40,
        justifyContent: "space-between",
        
      },
      button: {
        height: 250,
        width: 280,
        backgroundColor: "#fff",
        borderRadius: 8,
        padding: 24,
        justifyContent: "space-between",
      },
      buttonText: {
        fontFamily: "Poppins_400Regular",
        color: "#fff",
        fontSize: 20,
        alignSelf: "center",
      },
      image:{
        alignItems:'center',
        justifyContent:'center',

      },
      logo:{
        height:150,
        width:150
      },
      icon: {
        alignSelf: "center",
      },

})

export default styles