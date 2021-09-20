import React, {useState} from 'react';
import { StyleSheet, TextInput, CheckBox, ScrollView,TouchableOpacity, Text, View} from 'react-native';
import Firebase from '../../database/firebaseConfig';



export default function Cadastro({navigation}){
    const[password, setPassword]=useState('');
    const[confirmPassword, setConfirmPassword]=useState('');
    const[email, setEmail]=useState('');
    const[name, setName]=useState('');
    const[cpf, setCPF]=useState('');
    const[showPassword, setShowPassword]=useState(false);
    const[showConfirmPassword, setShowConfirmPassword]=useState(false);


    //REGISTRATION IN FIREBASE DATABASE FOR AUTHENTICATION
    const register =()=>{
        if (password !== confirmPassword) {
          alert("As senhas não são iguais");
          return;
        }else{ //TODO adicionar condição de campos em branco
          Firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(() => {
            createProducer();
          })
          .catch(error => {
            if (error.code === 'auth/email-already-in-use') {
              alert('OPA! Parece que esse e-mail já existe');
            }else if (error.code === 'auth/invalid-email') {
              alert('OPA! Parece que esse e-mail é inválido');
            }else{
              alert(error);
            }
          });
        }
    }

    //CREATION OF THE USER IN POSTGRESQL DATABASE
    async function createProducer(){
      let response = await fetch('http://192.168.0.162:5555/createProducer',{
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
              producer_name: name,
              producer_email: email,
              producer_cpf: cpf,
              producer_phone: "Telefone não registrado",
              producer_address: "Endereço não registrado"              
          })
      });
      let json = await response.json();
      if(json===null){
          alert('OPA! Não foi possível te cadastrar. Por favor verifique suas informações!');
      }else{
         navigation.navigate('HomeScreen');
      }
  }
    
    return(
        <ScrollView style={styles.container}>
          <Text style={styles.info}>Insira os seus dados a seguir.</Text>
          <Text style={styles.label}>Nome Completo</Text>
          <TextInput
            style={styles.input}
            onChangeText={setName}
            value={name}
            placeholder="Nome Sobrenome"
          />
          <Text style={styles.label}>E-mail</Text>
          <TextInput
            style={styles.input}
            onChangeText={setEmail}
            value={email}
            placeholder="exemplo@email.com"
          />
          <Text style={styles.label}>CPF</Text>
          <TextInput
            style={styles.input}
            onChangeText={setCPF}
            value={cpf}
            placeholder="000.000.000-00"
            keyboardType="numeric"
          />
          <Text style={styles.label}>Senha</Text>
           <TextInput
            style={styles.input}
            secureTextEntry={!showPassword}
            onChangeText={setPassword}
            value={password}
            placeholder="*******"
          />
          <View style={styles.checkboxContainer}>
                <CheckBox
                    value={showPassword}
                    onValueChange={setShowPassword}
                    style={styles.checkbox}
                />
                <Text>Mostrar a senha?</Text>
            </View>
          <Text style={styles.label}>Confirmar Senha</Text>
          <TextInput
            style={styles.input}
            secureTextEntry={!showConfirmPassword}
            onChangeText={setConfirmPassword}
            value={confirmPassword}
            placeholder="********"
          /><View style={styles.checkboxContainer}>
          <CheckBox
              value={showConfirmPassword}
              onValueChange={setShowConfirmPassword}
              style={styles.checkbox}
          />
          <Text>Mostrar a senha?</Text>
      </View>
          <TouchableOpacity style={styles.register} onPress={()=>register()} >
              <Text style={styles.registerText}>Cadastrar</Text>
          </TouchableOpacity>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    info:{
        marginTop:20,
        alignSelf:'center'
    },
    label:{
        marginTop:30,
        marginLeft:30
    },
    input:{
        width: 300,
        height: 40,
        borderWidth:1,
        borderColor:'white',
        borderBottomColor:'green',
        marginLeft:30,
    },
    checkboxContainer: {
      flexDirection: "row",
      marginBottom: 20,
    },
  checkbox:{
      marginLeft:20,
  },
    register:{
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
    registerText:{
        color:'white',
        alignSelf:'center',
        fontSize:20
    },
});
