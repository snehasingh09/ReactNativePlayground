import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import TabBarComponent from './TabBarNavigator';

import SplashScreen from '../screens/splashScreen';
import AuthScreen from '../screens/authScreen';
import LogIn from '../screens/logIn';
import DeepScreen from '../screens/deepScreen';

const InitialNavigator = createStackNavigator({
    splash_screen: {
        screen: SplashScreen
    },
    logIn: {
        screen: LogIn
    }
},
    {
        initialRouteName: 'splash_screen',
        headerMode: 'none',
        defaultNavigationOptions: {
            headerShown: false,
        }
    }
);

const DayoutNavigator = createSwitchNavigator({
    AuthLoading: {
        screen: AuthScreen
    },
    deepScreen: {
        screen: DeepScreen
    },
    newUserTab: {
        screen: InitialNavigator
    },
    tabBar: {
        screen: TabBarComponent
    },
},
    {
        initialRouteName: 'AuthLoading',
    }
);

export default createAppContainer(DayoutNavigator);
