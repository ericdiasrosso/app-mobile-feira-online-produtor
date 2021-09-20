import React, {useState} from 'react';
import { StyleSheet, TextInput, View, Image, TouchableOpacity, Text, Alert} from 'react-native';
import Firebase from '../../database/firebaseConfig';


//TODO
//TESTAR O LOGIN
//IMPLEMENTAR ICONE DE MOSTRAR SENHA

export default function DeleteProfileScreen({navigation}) {
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');

   const user = Firebase.auth().currentUser;

   //REAUTHENTICATE USER FROM FIREBASE DATABASE
    const reauthenticateUser =()=>{
        const credential = Firebase.auth.EmailAuthProvider.getCredential(email, password);
        user.reauthenticateWithCredential(credential).then(() => {
            deleteUser();
        }).catch((error) => {
            console.log(error);
        });
    }

    //DELETE USER FROM FIREBASE DATABASE
    const deleteUser=()=>{
        user.delete().then(() => {
            navigation.navigate('LoginScreen');
        }).catch((error) => {
            alert(error);
        });
    }
        return(
            <View style={styles.container}>
            <Text style={styles.info}>Insira seu email e senha para deletar sua conta</Text>  
            <TextInput
                style={styles.input}
                onChangeText={setEmail}
                value={email}
                placeholder="E-mail"
            />
            <TextInput
                style={styles.input}
                secureTextEntry={true}
                onChangeText={setPassword}
                value={password}
                placeholder="Senha"
            />
            <TouchableOpacity style={styles.login} onPress={()=>reauthenticateUser()}>
                <Text style={styles.loginText}>Deletar Conta</Text>
            </TouchableOpacity>
            </View>
        );
    
    
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'white',
    },
    info:{
        marginTop:20,
        textAlign:'center',
    },
    input:{
        width: 300,
        height: 50,
        alignSelf:'center',
        marginTop:40,
        borderWidth:1,
        borderColor:'white',
        borderBottomColor:'green',
        textAlignVertical:'bottom',
    },
    login:{
        width:300,
        marginTop:30,
        alignSelf:'center',
        marginBottom:10,
        padding: 13,
        borderRadius: 10,
        backgroundColor: 'green',
        alignItems: 'center',
        marginVertical: 7,
    },
    loginText:{
        color:'white',
        alignSelf:'center',
        fontSize:20
    },
});
