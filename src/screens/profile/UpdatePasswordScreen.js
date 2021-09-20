import React from 'react';
import { StyleSheet, TextInput, View, TouchableOpacity, Text} from 'react-native';
import Firebase from '../../database/firebaseConfig';

//TODO
//ARRUMAR FUNÇÃO NEWPASSWORD

export default function ForgotPasswordScreen({navigation}){
    const[newPassword, setNewPassword]=React.useState('');
    const[confirmPassword, setConfirmPassword]=React.userState('');

    newPassword=()=>{
        if(password==confirmPassword){
            Firebase.auth().currentUser.updatePassword(newPassword)
            .then(function() {
                alert('Sua senha foi alterada com sucesso!');
                navigation.navigate('ViewProfileScreen');
              }).catch(function(error) {
                alert(error);
              });
        }
    }
    return(
        <View style={styles.container}>
            <View style={styles.viewBox}>
                <Text>Insira seu e-mail e te mandaremos um link para recuperar a senha</Text>
            </View>
         <Text style={styles.label}>Nova senha</Text>
           <TextInput
            style={styles.input}
            onChangeText={setNewPassword}
            value={newPassword}
            placeholder="*******"
          />
          <Text style={styles.label}>Confirmar Senha</Text>
          <TextInput
            style={styles.input}
            onChangeText={setConfirmPassword}
            value={confirmPassword}
            placeholder="********"
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
