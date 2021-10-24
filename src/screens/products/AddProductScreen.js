import React, { useState } from "react";
import {
  StyleSheet,
  TextInput,
  View,
  Image,
  TouchableOpacity,
  Text,
  ScrollView,
} from "react-native";
import Config from "react-native-config";
import Firebase from "../../database/firebaseConfig";

//TODO! SALVAR IMAGEM
export default function AddProductScreen() {
  const [name, setName] = useState(null);
  const [type, setType] = useState(null);
  const [description, setDescription] = useState(null);
  const [price, setPrice] = useState(null);
  const [stock, setStock] = useState(null);
  const [userEmail, setUserEmail] = useState("");

  //GET NEW IMAGE FROM LIBRARY
  // const getLibrary
  //GET NEW IMAGE FROM CAMERA

  //Função para criar um novo produto na tabela de produtos passando os dados dos inputs
  async function createProduct() {
    const user = Firebase.auth().currentUser;
    if (user !== null) {
      const email = user.email;
      setUserEmail(email);
    }
    if (userEmail !== "") {
      console.log("111", `${Config.API_URL}/createProduct`);
      //TODO mudar o ip para o seu localhost no momento de desenvolvimento e depois mudar para o ip do servidor
      let response = await fetch(`${Config.API_URL}/createProduct`, {
        //uso de fetch para enviar
        //e receber os dados do banco de dados
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          product_name: name,
          product_type: type,
          product_description: description,
          product_price: price,
          product_stock: stock,
          product_producer: userEmail,
        }),
      });
      let json = await response.json();
      if (json === null) {
        alert(
          "OPA! Não foi possível adicionar seu novo produto. Por favor verifique suas informações!"
        );
      } else {
        alert("EBA! Seu produto foi adicionado com sucesso!");
      }
    }
  }
  return (
    <ScrollView>
      <View style={styles.info}>
        <Text>Insira os dados do produto. </Text>
        <Text>Os campos com asterisco * são obrigatórios!</Text>
      </View>
      <View style={styles.container}>
        <View
          style={{
            flexDirection: "column",
            flex: 1,
            backgroundColor: "white",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <TouchableOpacity style={styles.botao}>
              <Text style={styles.botaoText}>Galeria</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.botao}>
              <Text style={styles.botaoText}>Camera</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View
        style={{
          flexDirection: "column",
          flex: 1,
          backgroundColor: "white",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text style={styles.labelTipo}>Tipo do Produto</Text>
          <TextInput
            style={styles.inputTipo}
            onChangeText={(value) => setType(value)}
            placeholder='Escolha'
          />
        </View>
      </View>
      <Text style={styles.label}>Nome do Produto</Text>
      <TextInput
        style={styles.input}
        onChangeText={(value) => setName(value)}
        placeholder='Produto'
      />
      <Text style={styles.label}>Descrição</Text>
      <TextInput
        style={styles.inputDesc}
        onChangeText={(value) => setDescription(value)}
        placeholder='Mais informações do produto...'
      />
      <View
        style={{
          flexDirection: "column",
          flex: 1,
          backgroundColor: "white",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text style={styles.labelPreco}>Preço</Text>
          <TextInput
            style={styles.inputPreco}
            onChangeText={(value) => setPrice(value)}
            placeholder='00,00'
            keyboardType='numeric'
          />
          <Text style={styles.labelEstoque}>Estoque</Text>
          <TextInput
            style={styles.inputEstoque}
            onChangeText={(value) => setStock(value)}
            placeholder='00'
            keyboardType='numeric'
          />
        </View>
      </View>

      <TouchableOpacity style={styles.add} onPress={() => createProduct()}>
        <Text style={styles.addText}>Adicionar Produto</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  info: {
    marginTop: 20,
    textAlign: "center",
    width: 300,
    alignSelf: "center",
  },
  placeholder: {
    width: 200,
    height: 200,
    alignSelf: "center",
    margin: 10,
  },
  botao: {
    padding: 13,
    borderRadius: 10,
    backgroundColor: "white",
    alignItems: "center",
    marginVertical: 7,
    marginEnd: 5,
    borderWidth: 1,
    borderColor: "green",
    width: 100,
  },
  botaoText: {
    color: "green",
  },
  label: {
    marginTop: 30,
    marginLeft: 29,
  },
  labelTipo: {
    marginTop: 30,
    marginRight: 40,
  },
  labelPreco: {
    marginTop: 30,
    marginRight: 20,
  },
  labelEstoque: {
    marginTop: 30,
    marginLeft: 20,
  },
  input: {
    width: 300,
    height: 40,
    alignSelf: "center",
    borderWidth: 1,
    borderColor: "white",
    borderBottomColor: "green",
    textAlignVertical: "bottom",
  },
  inputTipo: {
    width: 140,
    height: 40,
    alignSelf: "center",
    borderWidth: 1,
    borderColor: "white",
    borderBottomColor: "green",
    textAlignVertical: "bottom",
  },
  inputPreco: {
    width: 60,
    height: 40,
    alignSelf: "center",
    borderWidth: 1,
    borderColor: "white",
    borderBottomColor: "green",
    textAlignVertical: "bottom",
    marginRight: 20,
  },
  inputEstoque: {
    width: 50,
    height: 40,
    alignSelf: "center",
    borderWidth: 1,
    borderColor: "white",
    borderBottomColor: "green",
    textAlignVertical: "bottom",
    marginLeft: 20,
  },
  inputDesc: {
    width: 300,
    height: 100,
    alignSelf: "center",
    borderWidth: 1,
    borderColor: "white",
    textAlignVertical: "top",
    borderBottomColor: "green",
  },
  add: {
    width: 300,
    marginTop: 20,
    alignSelf: "center",
    marginBottom: 10,
    padding: 13,
    borderRadius: 10,
    backgroundColor: "green",
    alignItems: "center",
    marginVertical: 7,
  },
  addText: {
    fontSize: 17,
    fontWeight: "bold",
    color: "white",
  },
});

/*
  {image && <Image source={{ uri: image }} style={styles.placeholder} />} 

 const [image, setImage] = useState(null);
    //TO DO: INSERIR PERMISÕES PARA ACESSAR GALERIA E CAMERA
      const galeria = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.Images,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
        });
    
        console.log(result);
    
        if (!result.cancelled) {
          const uploadUrl = await uploadImagem(result.uri, "teste")
          .then(()=>{
              console.log("imagem salva");
          })
          .catch((error)=>{
              console.log(error);
          });
          setImage({uploadUrl});
        }
      };
    
      const camera = async () => {
        let result = await ImagePicker.launchCameraAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.Images,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
        });
    
        console.log(result);
    
        if (!result.cancelled) {
          const uploadUrl = await uploadImagem(result.uri)
            .then(()=>{
                console.log("imagem salva");
            })
            .catch((error)=>{
                console.log(error);
            });
            setImage({uploadUrl});
        }
      };

      const uploadImagem = async (uri)=> {
        const task = firebase.storage.ref().putFile(uri);
            try {
             await task;
            } catch (e) {
            console.error(e);
            }
    
    };
*/
