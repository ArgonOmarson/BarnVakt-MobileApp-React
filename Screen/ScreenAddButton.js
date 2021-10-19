import React from 'react'
import {StyleSheet, Button, FlatList} from 'react-native'
import {useSelector} from 'react-redux'
import BarnVaktsItem from '../components/BarnVaktsItem'

const ScreenAddButton = ({navigation}) =>{
    const barnvakts=useSelector(state=>state.barnvakts.barnvakts)
    React.useLayoutEffect(() => {
        navigation.setOptions({
          headerRight: () => (
            <Button title="Annonsera ✚" color="#1166BB" onPress={() => (navigation.navigate('NewBarnVakt'))} />
          ),
        });
      }, [navigation]);
      
    return (
        <FlatList data={barnvakts} keyExtractor={item=>item.id} renderItem={itemDtata=> <BarnVaktsItem image={itemDtata.item.imageUri} namn={itemDtata.item.namn} disc={itemDtata.item.disc} tele={itemDtata.item.tele}  />}/>
    )
}
const styles = StyleSheet.create({


})

export default ScreenAddButton;