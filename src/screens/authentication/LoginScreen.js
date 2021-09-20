import React, {useState} from 'react';
import { StyleSheet, TextInput, View, Image, TouchableOpacity, Text, CheckBox, ScrollView} from 'react-native';
import Firebase from '../../database/firebaseConfig';


//TODO
//IMPLEMENTAR ICONE DE MOSTRAR SENHA

export default function Login({navigation}) {
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const [showPassword, setShowPassword]=useState(false);

    login =()=>{
        Firebase.auth().signInWithEmailAndPassword(email, password)
        .then(() => {
            navigation.navigate('HomeScreen');
        })
        .catch(error => {
            if (error.code === 'auth/invalid-email') {
                alert('OPA! Esse email é inválido');
            }else{
                 alert(error);
            }
               
        });
    }
        return(
            <ScrollView style={styles.container}>
                <Image
                    style={styles.logo}
                    source={require('../../../assets/logo.png')}
                />
            <TextInput
                style={styles.input}
                onChangeText={setEmail}
                value={email}
                placeholder="E-mail"
            />
            <TextInput
                style={styles.input}
                secureTextEntry={!showPassword}
                onChangeText={setPassword}
                value={password}
                placeholder="Senha"
            />
            <View style={styles.checkboxContainer}>
                <CheckBox
                    value={showPassword}
                    onValueChange={setShowPassword}
                    style={styles.checkbox}
                />
                <Text>Mostrar a senha?</Text>
            </View>
            <TouchableOpacity style={styles.forgotPassword} onPress={()=>navigation.navigate('ForgotPasswordScreen')}>
                <Text style={styles.forgotPasswordText}>Esqueceu a senha?Clique aqui.</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.login} onPress={()=>login()}>
                <Text style={styles.loginText}>Entrar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.register}
                onPress={()=>navigation.navigate('RegisterScreen')}
            >
                <Text >Não tem conta?<Text style={styles.registerText}> Cadastre-se!</Text></Text>
            </TouchableOpacity>
            </ScrollView>
        );
    
    
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'white',
    },
    logo:{
        marginTop:60,
        width:180,
        height:150,
        alignSelf: 'center',
        marginBottom:10,
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
    checkboxContainer: {
        flexDirection: "row",
      },
    checkbox:{
        marginLeft:20,
    },
    forgotPassword:{
        marginTop:5,
    },
    forgotPasswordText:{
        fontSize:12,
        textAlign:'right',
        marginRight: 30,
        color:'green',
        textDecorationLine:'underline',
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
    register:{
        marginTop: 50,
        alignSelf:'center'
    },
    registerText:{
        color:'green',
        textDecorationLine:'underline'
    }
});
