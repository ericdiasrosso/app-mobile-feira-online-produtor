import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Image,
  Text,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import Firebase from "../../database/firebaseConfig";
import getEnvVars from "../../../environment";

const Config = getEnvVars();

export default function ViewProfileScreen({ navigation }) {
  const [userEmail, setUserEmail] = useState("");
  const [profile, setProfile] = useState();
  var i = 0;

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          style={{ marginRight: 20 }}
          onPress={() => navigation.navigate("EditProfileScreen")}
        >
          <AntDesign name='edit' size={30} color='green' />
        </TouchableOpacity>
      )
    });
  });

  //SIGN OUT
  const out = () => {
    Firebase.auth()
      .signOut()
      .then(() => navigation.navigate("LoginScreen"));
  };

  const getProfile = async () => {
    try {
      const user = Firebase.auth().currentUser;
      if (user !== null) {
        const email = user.email;
        setUserEmail(email);
      }
      if (userEmail !== "") {
        const response = await fetch(`${Config.apiUrl}/${userEmail}`);
        const jsonData = await response.json();
        setProfile(jsonData);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProfile();
  }, []);

  if (profile != null) {
    return (
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.photo}>
            <Image></Image>
          </View>
          <View style={styles.name}>
            <Text style={styles.textStyle}>{profile.producer_name}</Text>
          </View>
        </View>
        <View style={styles.container}>
          <View style={styles.box1}>
            <Text style={styles.label}>CPF</Text>
          </View>
          <View style={styles.box2}>
            <Text style={styles.textStyle}>{profile.producer_cpf}</Text>
          </View>
        </View>
        <View style={styles.container}>
          <View style={styles.box1}>
            <Text style={styles.label}>Email</Text>
          </View>
          <View style={styles.box2}>
            <Text style={styles.textStyle}>{profile.producer_email}</Text>
          </View>
        </View>
        <View style={styles.container}>
          <View style={styles.box1}>
            <Text style={styles.label}>Endereço</Text>
          </View>
          <View style={styles.box2}>
            <Text style={styles.textStyle}>{profile.producer_address}</Text>
          </View>
        </View>
        <View style={styles.container}>
          <View style={styles.box1}>
            <Text style={styles.label}>Telefone</Text>
          </View>
          <View style={styles.box2}>
            <Text style={styles.textStyle}>{profile.producer_phone}</Text>
          </View>
        </View>

        <TouchableOpacity
          style={styles.forgotPassword}
          onPress={() => navigation.navigate("UpdatePasswordScreen")}
        >
          <Text style={styles.forgotPasswordText}>Redefinir Senha</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.logout} onPress={() => out()}>
          <Text style={styles.logoutText}>Sair da Conta</Text>
        </TouchableOpacity>

        <View style={styles.deleteContainer}>
          <AntDesign name='warning' size={24} color='red' />
          <TouchableOpacity onPress={() => navigation.navigate("DeleteProfileScreen")}>
            <Text style={styles.deleteText}> Deletar a Conta</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  } else {
    return (
      <View style={[styles.containerIndicator, styles.horizontal]}>
        <ActivityIndicator size='large' color='#00ff00' />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row"
  },
  photo: {
    width: 75,
    height: 75,
    flex: 2
  },
  name: {
    width: 75,
    height: 75,
    flex: 3
  },
  box1: {
    width: 75,
    height: 50,
    flex: 2,
    marginTop: 10
  },
  box2: {
    width: 75,
    height: 50,
    flex: 4,
    marginTop: 10
  },
  textStyle: {
    color: "black",
    marginLeft: 5,
    marginVertical: 10
  },
  label: {
    color: "grey",
    marginVertical: 10,
    marginLeft: 10
  },
  forgotPassword: {
    marginTop: 40,
    alignContent: "center",
    marginLeft: 10
  },
  forgotPasswordText: {
    fontSize: 14,
    textDecorationLine: "underline",
    color: "green"
  },
  logout: {
    marginTop: 50,
    alignContent: "center",
    marginLeft: 10
  },
  logoutText: {
    fontSize: 13,
    color: "red"
  },
  deleteContainer: {
    flexDirection: "row",
    marginTop: 30,
    marginLeft: 10
  },
  deleteText: {
    fontSize: 14,
    color: "red",
    textAlign: "right"
  },
  containerIndicator: {
    flex: 1,
    justifyContent: "center"
  },
  horizontal: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10
  }
});
