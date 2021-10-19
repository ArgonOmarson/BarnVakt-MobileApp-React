import React from 'react';

import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import ScreenAddButton from './Screen/ScreenAddButton'
import StartSida from './Screen/StartSida'
import NewBarnVakt from './Screen/NewBarnVakt'
import ImageSelector from './components/ImageSelector'

import {createStore, combineReducers,applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import ReduxThunk from 'redux-thunk'
import barnvaktReducer from './store/barnvakt-reducer';

const Stack=createStackNavigator();
const rootReducer=combineReducers({
  barnvakts:barnvaktReducer
})
const store=createStore(rootReducer,applyMiddleware(ReduxThunk))

export default function App() {
  return (
    <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator initialRouteName='StartSida'
        screenOptions={{
          headerTitleAlign: 'center',
          headerStyle:{
            backgroundColor: '#1166BB',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight:'bold',
          },
        }}>
          <Stack.Screen name='ScreenAddButton' component={ScreenAddButton} options={({ navigation, route }) => ({title:'Hitta BarnVakt'})}/>
          <Stack.Screen name='StartSida' component={StartSida} options={{title:'StartSida'}}/>
          <Stack.Screen name='NewBarnVakt' component={NewBarnVakt} options={{title:'Skapa BarnVakt'}}/>
          <Stack.Screen name='ImageSelector' component={ImageSelector} options={{title:'ImageSelector'}}/>
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  );
}

