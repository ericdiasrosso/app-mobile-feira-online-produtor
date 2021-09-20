import React from 'react';
import { StyleSheet, TextInput, ScrollView,TouchableOpacity, Text} from 'react-native';

export default function EditProfileScreen({navigation}){
    const[email, setEmail]=React.useState('');
    const[nome, setNome]=React.useState('');
    const[cpf, setCPF]=React.useState('');
    const[telefone, setTelefone]=React.useState('');
    const[endereco, setEndereco]=React.useState('');

    return(
        <ScrollView style={styles.container}>
          <Text style={styles.info}>Insira os seus dados a seguir.</Text>
          <Text style={styles.label}>Nome Completo</Text>
          <TextInput
            style={styles.input}
            onChangeText={setNome}
            value={nome}
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
          />
          <Text style={styles.label}>Endereço</Text>
          <TextInput
            style={styles.input}
            onChangeText={setEndereco}
            value={endereco}
            placeholder="Rua X, numero 000, Bairro Y, Cidade Z, UF"
          />
          <Text style={styles.label}>Telefone</Text>
          <TextInput
            style={styles.input}
            onChangeText={setTelefone}
            value={telefone}
            placeholder="(000)0 0000-0000"
          />
          <TouchableOpacity style={styles.register}
             onPress={()=>navigation.navigate('Profile')}
          >
              <Text style={styles.registerText}>Salvar</Text>
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
