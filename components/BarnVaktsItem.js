import React from 'react'
import {View, Text, StyleSheet, Image, TouchableOpacity, ScrollView} from 'react-native'

const BarnVaktsItem = props => {
    return (
        <ScrollView backgroundColor='lightblue'>
        <TouchableOpacity style={style.placeitem}>
            <Image style={style.image} source={{uri: props.image}}/>
            <View style={style.infocontainer}>
                <Text style={style.namn}>{props.namn}</Text>
                <Text style={style.disc}>Information: <Text style={style.disc1}>{props.disc}</Text></Text>
                <Text style={style.disc}>Telefon:  <Text style={style.disc1}>{props.tele}</Text></Text>
            </View>
        </TouchableOpacity>
        </ScrollView>
    )
}

const style = StyleSheet.create({
    placeitem:{
        borderBottomColor: '#ccc',
        borderWidth: 1,
        paddingVertical: 15,
        paddingHorizontal: 30,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'lightgreen'
    },
    image:{
        width: 70,
        height: 70,
        borderRadius: 35,
        backgroundColor: '#ccc',
        borderWidth: 1
    },
    infocontainer:{
        marginLeft: 25,
        width: 250,
        justifyContent: 'center',
        alignItems:'flex-start'
    },
    namn: {
        color:'black',
        fontSize: 18,
        marginBottom: 5,
        fontWeight: 'bold'
    },
    disc: {
        fontWeight: 'bold'

    },
    disc1: {
        fontWeight: 'normal'

    }
})

export default BarnVaktsItem;