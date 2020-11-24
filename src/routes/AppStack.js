import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Login from "../pages/Login";
import Register from "../pages/Register";
import React from "react";
import Main from "../pages/Main";
import DrawerNavigation from "./DrawerNav";
import Landing from "../pages/Landing";
import Icon from "react-native-vector-icons";
import { Button } from "react-native";
import User from "../pages/User";
import AskDefault from "../pages/AskDefault";
import Relatorio from "../pages/Relatorio";

const { Navigator, Screen } = createStackNavigator();

export default function AppStack({ navigation }) {
  return (
    <NavigationContainer>
      <Navigator
        initialRouteName="Login"
        screenOptions={{
          headerStyle: { backgroundColor: "#A462F6" },
          headerTitleAlign: "center",
          headerTintColor: "#fff",
        }}
      >
        <Screen
          name="Landing"
          component={Landing}
          options={{ headerShown: false }}
        />
        <Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Screen
          name="Register"
          component={Register}
          options={{
            headerTitle: "Cadastro",
            headerStyle: { backgroundColor: "#7233f0" },
          }}
        />
        <Screen
          name="Main"
          component={DrawerNavigation}
          options={{ headerShown: false }}
        />
        <Screen name="User" component={User} />
        <Screen
          name="Questões"
          component={AskDefault}
          options={{
            headerStyle: { backgroundColor: "#7D42CE" },
          }}
        />
      </Navigator>
    </NavigationContainer>
  );
}
