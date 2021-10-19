import React , {useState} from 'react'
import {View, Text, StyleSheet, ScrollView, Button, TextInput} from 'react-native'
import ImageSelector from '../components/ImageSelector'

import {useDispatch} from 'react-redux'
import * as barnvaktActions from '../store/barnvakt-actions'

const NewBarnVakt = ({navigation}) =>{
    const dispatch=useDispatch()
    const [namnValue,setNamnValue]=useState('')
    const [selectedImage,setSelectedImage]=useState(null)
    
    const onImageTakenHanlder=(pathe)=>{
        setSelectedImage(pathe)
    }
    const namnChangeHandler=(text)=>{
        setNamnValue(text)
    }
    const [infoValue,setInfoValue]=useState('')
    const InfoChangeHandler=(text)=>{
        setInfoValue(text)
    }
    const [teleValue,setTeleValue]=useState('')
    const TeleChangeHandler=(text)=>{
        setTeleValue(text)
    }
    const saveAnnonsHandler=()=>{
        dispatch(barnvaktActions.addBarnvakt(namnValue, infoValue, selectedImage, teleValue))
        navigation.navigate('ScreenAddButton')
    }
    return (
        <ScrollView backgroundColor='lightblue'>
            <View style={styles.form}>
                <Text style={styles.label}>Ditt förnamn och efternamn</Text>
                <TextInput style={styles.InputText} onChangeText={namnChangeHandler} value={namnValue}/>
                <Text style={styles.label2}>Lite information om dig</Text>
                <TextInput style={styles.InputText}  onChangeText={InfoChangeHandler} value={infoValue}/>
                <Text style={styles.label3}>Telefon-Nummer</Text>
                <TextInput style={styles.InputText}  onChangeText={TeleChangeHandler} value={teleValue}/>
                <ImageSelector onImageTaken={onImageTakenHanlder}/>
                <Button title="Lägg Up Annons" color="green" onPress={saveAnnonsHandler}/>
            </View>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
form:{
    margin:40,
    backgroundColor: 'lightblue'
},

label:{
    fontSize: 18,
    marginBottom:15,
    textAlign: 'center'
},
label2:{
    fontSize: 18,
    marginBottom:15,
    textAlign: 'center'
},
label3:{
    fontSize: 18,
    marginBottom:15,
    textAlign: 'center'
},
InputText:{
borderBottomColor:'black',
borderBottomWidth:1,
marginBottom:15,
paddingVertical:4,
paddingHorizontal:2
}


})

export default NewBarnVakt