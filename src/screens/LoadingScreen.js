import React, { useState, useEffect }  from 'react';
import { StyleSheet, View, ActivityIndicator} from 'react-native';
import Firebase from '../database/firebaseConfig';

export default function LoadingScreen ({navigation}){
  const [initializing, setInitializing] = useState(true);

    if (initializing!=false){
      setInitializing(false);
    } else{
      return(
        <View style={[styles.container, styles.horizontal]}>
          <ActivityIndicator size="large" color="#00ff00" />
        </View>
      )
        
    }
    Firebase.auth().onAuthStateChanged(user => {
      if (user != null) {

        navigation.navigate('HomeScreen');
      }else{
        navigation.navigate('LoginScreen');
      }
    });
        
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center"
  },
  horizontal: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10
  }
});
