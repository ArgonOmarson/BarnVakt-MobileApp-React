import React, {useState} from 'react'
import * as ImagePicker from 'expo-image-picker'
import {View, Text, StyleSheet, Image, Button} from 'react-native'

const ImageSelector = props =>{

    const [pickedImage,setPickedImage]=useState(null)
    const takeImageHandler = async() => {
    const image = await ImagePicker.launchCameraAsync({
            allowsEditing:true,
            aspect:[16,9],
            quality:0.5
        });
        setPickedImage(image.uri)
        props.onImageTaken(image.uri)
    }
    return (
        <View style={styles.imagePicker}>
            <View style={styles.imagePreview}>

            {!pickedImage ? (<Text>Ta en Bild!</Text>) 
            : (<Image style={styles.image} source={{uri: pickedImage}}/>)}
            </View>
            
            <Button title="Öppna Kamera" onPress={takeImageHandler}/>
        </View>
    )
}
const styles = StyleSheet.create({
imagePicker:{
    alignItems:'center',
    marginBottom:20

},
imagePreview:{
    width:'100%',
    height:210,
    margin:10,
    justifyContent:'center',
    alignItems:'center',
    borderColor:'#ccc',
    
},
image:{
height:'100%',
width:'100%'
}

})

export default ImageSelector