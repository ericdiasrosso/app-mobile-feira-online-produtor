import React, { useEffect, useState } from "react";
import Config from "react-native-config";

import { StyleSheet, View, FlatList, Text } from "react-native";
import Firebase from "../../database/firebaseConfig";

export default function ViewProductsScreen() {
  const [products, setProducts] = useState([]);
  const [userEmail, setUserEmail] = useState("");

  const getProducts = async () => {
    try {
      const user = Firebase.auth().currentUser;
      if (user !== null) {
        const email = user.email;
        setUserEmail(email);
      }
      if (userEmail !== "") {
        const response = await fetch(`${Config.API_URL}/${userEmail}`);
        const jsonData = await response.json();

        setProducts(jsonData);
        console.log(products);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <View>
      <FlatList
        data={products}
        keyExtractor={(item) => item.product_id.toString()}
        renderItem={({ item }) => {
          return (
            <View style={styles.column}>
              <View style={styles.card}>
                <View style={styles.boxFoto}>
                  <Text>Foto</Text>
                </View>
                <View style={styles.row}>
                  <View style={styles.box1}>
                    <Text style={styles.name}>{item.product_name}</Text>
                  </View>
                  <View style={styles.box2}>
                    <Text style={styles.tipo}>{item.product_type}</Text>
                  </View>
                </View>
                <View style={styles.row}>
                  <View style={styles.box3}>
                    <Text style={styles.desc}>{item.product_description}</Text>
                  </View>
                  <View style={styles.box4}>
                    <View style={styles.estoqueBox}>
                      <Text style={styles.estoque}>{item.product_stock}</Text>
                    </View>
                    <Text style={styles.preco}>R$ {item.product_price}</Text>
                  </View>
                </View>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    borderColor: "grey",
    width: 300,
    marginTop: 10,
  },
  row: {
    flex: 1,
    flexDirection: "row",
  },
  column: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
  },
  boxFoto: {
    width: 300,
    height: 150,
    borderWidth: 1,
    borderBottomColor: "grey",
    borderColor: "white",
  },
  box1: {
    width: 200,
    height: 50,
    borderWidth: 1,
    borderBottomColor: "grey",
    borderColor: "white",
  },
  box2: {
    width: 100,
    height: 50,
    alignItems: "flex-end",
    borderWidth: 1,
    borderBottomColor: "grey",
    borderColor: "white",
  },
  box3: {
    width: 200,
    height: 100,
    borderWidth: 1,
    borderBottomColor: "grey",
    borderColor: "white",
  },
  box4: {
    width: 100,
    height: 100,
    alignItems: "flex-end",
    borderWidth: 1,
    borderBottomColor: "grey",
    borderColor: "white",
  },

  name: {
    fontSize: 16,
    marginLeft: 5,
  },
  desc: {
    marginLeft: 5,
    marginTop: 10,
  },
  estoqueBox: {
    backgroundColor: "lightgrey",
    height: 20,
    borderRadius: 5,
    width: 30,
    marginRight: 10,
    marginTop: 10,
  },
  estoque: {
    fontSize: 10,
    alignSelf: "center",
  },
  tipo: {
    color: "grey",
    textAlign: "right",
    marginRight: 20,
  },
  preco: {
    color: "green",
    textAlign: "right",
    marginRight: 10,
  },
});
