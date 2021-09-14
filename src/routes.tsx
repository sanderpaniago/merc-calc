import React from 'react'

import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import Main from './pages/Main'
import Created from './pages/Created'

export type RootStackParamList = {
    Main: undefined;
    Created: undefined;
}

const {Navigator, Screen} = createStackNavigator<RootStackParamList>()

export default function Routes() {
    return (
        <NavigationContainer>
            <Navigator screenOptions={{headerShown: false, cardStyle: { backgroundColor: '#161719' }}}>
                <Screen name='Main' component={Main} />
                <Screen 
                    name='Created' 
                    component={Created} 
                    options={{
                        title: "Criar novo Item",
                        headerShown: true,
                        headerStyle: {
                            backgroundColor: '#161719',
                            
                        },
                        headerTintColor: "#FFF"
                    }}
                />
            </Navigator>
        </NavigationContainer>
    )
}