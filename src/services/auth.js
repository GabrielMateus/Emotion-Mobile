import AsyncStorage from '@react-native-community/async-storage'



export const isAuthenticated = () => AsyncStorage.getItem("@CodeApi:token") !== null

export const getToken = () => AsyncStorage.getItem("@CodeApi:token")

export const getUser = () => AsyncStorage.getItem("@CodeApi:user")

export const login = (token) => {

  AsyncStorage.setItem("@CodeApi:token", token);

}



export const logout = () => {

  AsyncStorage.removeItem("@CodeApi:token");

}

