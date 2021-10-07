import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import About from '../pages/About';

const AppStack = createStackNavigator();

const Routes = () => {
    return(
        <NavigationContainer>
            <AppStack.Navigator headerMode="none">
                <AppStack.Screen name="About" component={About} />
                </AppStack.Navigator>
        </NavigationContainer>

    );
}

export default Routes;