import React from 'react';
import { StyleSheet, View, Image, TouchableOpacity, Text, ScrollView} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { SliderBox } from "react-native-image-slider-box";

export default function HomeScreen({navigation}){
    const[images, setImages]=React.useState([ 
        require ("../../assets/alface.jpeg" ),
        require ( "../../assets/bergamota.jpeg" ),
        require ( "../../assets/mel.jpeg" ),]);

    React.useLayoutEffect(()=>{
        navigation.setOptions({
            headerRight:()=>(
                <TouchableOpacity style={{marginRight:20}} onPress={()=>navigation.navigate('ViewProfileScreen')}>
                    <AntDesign name="user" size={30} color="green"/>
                </TouchableOpacity>
            ),
            headerLeft:()=>(
                <Image
                style={styles.logo}
                source={require('../../assets/logo.png')}
            />
            )
        })
    })

    return(
        <ScrollView>
        <View style={styles.slideContainer}>
            <SliderBox 
                images={images}
                sliderBoxHeight={250}
                dotColor="#FFEE58"
                onCurrentImagePressed={()=>navigation.navigate('ViewProductsScreen')}
             />
         </View>
         <TouchableOpacity style={styles.add} onPress={()=>navigation.navigate('TestScreen')}>
            <Text>Foto</Text>
           </TouchableOpacity> 
         
           <TouchableOpacity style={styles.add} onPress={()=>navigation.navigate('AddProductScreen')}>
           <AntDesign 
                name="pluscircle" 
                size={30} 
                color="green" />
           </TouchableOpacity>  
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    slideContainer:{
        marginTop:20,
        flex:1,
    },
    logo:{
        width:50,
        height:50,
        marginLeft:5
    },
    add:{
       alignSelf:'flex-end',
       marginTop:30,
       marginRight: 10,

    },
});
