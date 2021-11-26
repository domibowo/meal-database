import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import DishesDetails from '../screens/DishesDetails';
import SearchScreen from '../screens/SearchScreen';

const Stack = createStackNavigator();

const config = {
    animation: 'spring',
    config: {
      stiffness: 500,
      damping: 200,
      mass: 2,
      overshootClamping: true,
      restDisplacementThreshold: 0.01,
      restSpeedThreshold: 0.01,
    },
};

export function AppNavigator() {
    return (
        <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{
                headerShown: false,
                transitionSpec: {
                    open: config,
                    close: config,
                }
            }}
        >
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="DishesDetails" component={DishesDetails} />
            <Stack.Screen name="SearchScreen" component={SearchScreen} />
        </Stack.Navigator>
    )
}