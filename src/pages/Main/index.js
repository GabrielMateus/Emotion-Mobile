import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import styles from "./styles";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

export default function Main({ navigation }) {
  return (
    <View style={styles.container}>
      <View
        style={{
          marginTop: 30,
          marginBottom: 10,
          paddingTop: 12,
          height: 50,
          backgroundColor: "#7233f0",
        }}
      >
        <TouchableOpacity
          style={{ alignItems: "flex-start", paddingLeft: 20 }}
          onPress={() => navigation.openDrawer()}
        >
          <FontAwesome5 name="bars" size={24} color="#fff" />
        </TouchableOpacity>
      </View>

      <ScrollView>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("Questões")}
          >
            <Icon name="notebook" size={40} style={styles.icon}></Icon>
            <Text style={styles.txt}>Personalidade</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button}>
            <Icon name="notebook" size={40} style={styles.icon}></Icon>
            <Text style={styles.txt}>Liderança</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button}>
            <Icon name="notebook" size={40} style={styles.icon}></Icon>
            <Text style={styles.txt}>Ansiedade</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button}>
            <Icon name="notebook" size={40} style={styles.icon}></Icon>
            <Text style={styles.txt}>Inteligencia</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}
