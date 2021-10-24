import React from "react";
import Config from "react-native-config";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

//SCREENS
import LoadingScreen from "./src/screens/LoadingScreen";
import LoginScreen from "./src/screens/authentication/LoginScreen";
import RegisterScreen from "./src/screens/authentication/RegisterScreen";
import ForgotPasswordScreen from "./src/screens/authentication/ForgotPasswordScreen";
import HomeScreen from "./src/screens/HomeScreen";
import AddProductScreen from "./src/screens/products/AddProductScreen";
import ViewProductsScreen from "./src/screens/products/ViewProductsScreen";
import EditProfileScreen from "./src/screens/profile/EditProfileScreen";
import ViewProfileScreen from "./src/screens/profile/ViewProfileScreen";
import UpdatePasswordScreen from "./src/screens/profile/UpdatePasswordScreen";
import DeleteProfileScreen from "./src/screens/profile/DeleteProfileScreen";

const Stack = createStackNavigator();

export default function App() {
  console.log("aaaaa");

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='LoadingScreen'
          component={LoadingScreen}
          options={{
            headerShown: false,
            cardStyle: {
              backgroundColor: "white",
            },
          }}
        />
        <Stack.Screen
          name='LoginScreen'
          component={LoginScreen}
          options={{
            headerShown: false,
            cardStyle: {
              backgroundColor: "white",
            },
          }}
        />
        <Stack.Screen
          name='RegisterScreen'
          component={RegisterScreen}
          options={{
            cardStyle: {
              backgroundColor: "white",
            },
            title: "Cadastro",
            headerTitleAlign: "center",
            headerTintColor: "green",
          }}
        />
        <Stack.Screen
          name='ForgotPasswordScreen'
          component={ForgotPasswordScreen}
          options={{
            cardStyle: {
              backgroundColor: "white",
            },
            title: "Recuperar Senha",
            headerTitleAlign: "center",
            headerTintColor: "green",
          }}
        />
        <Stack.Screen
          name='HomeScreen'
          component={HomeScreen}
          options={{
            cardStyle: {
              backgroundColor: "white",
            },
            title: "FeiraOnline",
            headerTitleAlign: "center",
            headerTintColor: "green",
          }}
        />
        <Stack.Screen
          name='AddProductScreen'
          component={AddProductScreen}
          options={{
            cardStyle: {
              backgroundColor: "white",
            },
            title: "Novo Produto",
            headerTitleAlign: "center",
            headerTintColor: "green",
          }}
        />
        <Stack.Screen
          name='ViewProductsScreen'
          component={ViewProductsScreen}
          options={{
            cardStyle: {
              backgroundColor: "white",
            },
            title: "Meus Produtos",
            headerTitleAlign: "center",
            headerTintColor: "green",
          }}
        />
        <Stack.Screen
          name='EditProfileScreen'
          component={EditProfileScreen}
          options={{
            cardStyle: {
              backgroundColor: "white",
            },
            title: "Editar Perfil", //TODO colocar o nome da pessoa
            headerTitleAlign: "center",
            headerTintColor: "green",
          }}
        />
        <Stack.Screen
          name='ViewProfileScreen'
          component={ViewProfileScreen}
          options={{
            cardStyle: {
              backgroundColor: "white",
            },
            title: "Meu Perfil", //TODO colocar o nome da pessoa
            headerTitleAlign: "center",
            headerTintColor: "green",
          }}
        />
        <Stack.Screen
          name='UpdatePasswordScreen'
          component={UpdatePasswordScreen}
          options={{
            cardStyle: {
              backgroundColor: "white",
            },
            title: "Nova Senha",
            headerTitleAlign: "center",
            headerTintColor: "green",
          }}
        />
        <Stack.Screen
          name='DeleteProfileScreen'
          component={DeleteProfileScreen}
          options={{
            cardStyle: {
              backgroundColor: "white",
            },
            title: "Deletar Conta",
            headerTitleAlign: "center",
            headerTintColor: "green",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
