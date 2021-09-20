import React from 'react';
import { StyleSheet, TextInput, View, TouchableOpacity, Text} from 'react-native';
import Firebase from '../../database/firebaseConfig';


export default function ForgotPasswordScreen({navigation}){
    const[email, setEmail]=React.useState('');

    resetPassword=()=>{
        Firebase.auth().sendPasswordResetEmail(email)
            .then(() => {
                alert("E-mail para recuperação de senha enviado");
            }, (error) => {
                alert(error);
            });
    }
    return(
        <View style={styles.container}>
            <View style={styles.viewBox}>
                <Text>Insira seu e-mail e te mandaremos um link para recuperar a senha</Text>
            </View>
          <TextInput
            style={styles.input}
            onChangeText={setEmail}
            value={email}
            placeholder="E-mail"
          />
          <TouchableOpacity style={styles.send}
             onPress={resetPassword}
          >
             <Text style={styles.sendText}>Enviar e-mail</Text>
          </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'white',
    },
    viewBox:{
        width:300,
        alignSelf:'center',
        marginTop:30,
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
    send:{
        width:300,
        marginTop:20,
        alignSelf:'center',
        marginBottom:10,
        padding: 13,
        borderRadius: 10,
        backgroundColor: 'green',
        alignItems: 'center',
        marginVertical: 7,
    },
    sendText:{
        color:'white',
        alignSelf:'center',
        fontSize:20
    },
});
