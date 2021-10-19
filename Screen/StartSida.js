import React from 'react'
import {View, Text, StyleSheet, Button, TouchableOpacity, Image, ImageBackground} from 'react-native'


const StartSida = ({navigation}) =>{

    const onPress = () => navigation.navigate('ScreenAddButton');
    const onPress1 = () => navigation.navigate('NewBarnVakt');

    return (
        <View backgroundColor="lightblue">
            <Text style={styles.Text1}>Välkommen till BarnVakt </Text>
            <Text style={styles.Text2}>Här kan du enkelt sätt hitta eller bli en Barnvakt</Text>
            
            <Image
        style={styles.tinyLogo}
        source={{
          uri: 'https://cdn.kinsights.com/cache/6a/6b/6a6b8b3de62a48ed707cccee0865fcc0.jpg',
        }}
      />
            <TouchableOpacity
             style={styles.button1}
             onPress={onPress}>
             <Text style={styles.Text3}>Hitta din BarnVakt </Text>
            </TouchableOpacity>
            <TouchableOpacity
             style={styles.button2}
             onPress={onPress1}>
             <Text style={styles.Text3}>✎ Bli en BarnVakt ✎</Text>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    View:{
        backgroundColor: 'lightblue'
    },
    Text1:{
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        fontStyle: 'italic',
        marginTop: 30,

    },
    Text2:{
        fontSize: 18,
        textAlign: 'center',
        marginTop: 10,
        marginBottom: 40
    },
    Text3:{
        fontSize: 20,
    },
    
    
    button1: {
        alignItems: "center",
        backgroundColor: "green",
        padding: 20,
        borderWidth: 1,
        borderRadius: 35,
        margin: 20
      },
      button2: {
        alignItems: "center",
        backgroundColor: "orange",
        padding: 20,
        borderWidth: 1,
        borderRadius: 35,
        margin: 20,
      },
      tinyLogo: {
        width: 350,
        height: 300,
        marginLeft: 20
      },

})

export default StartSida