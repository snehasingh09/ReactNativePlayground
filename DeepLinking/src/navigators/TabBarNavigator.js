import React from 'react';
import { StyleSheet, Image } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator, BottomTabBar } from 'react-navigation-tabs';

import Home from '../screens/homeForTabNavBar';
import Details from '../screens/detailsForTabNavBar';
import Contact from '../screens/contactForTabNavBar';
import People from '../screens/peopleForTabNavBar';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'

const TabBarComponent = props => <BottomTabBar {...props} />;

const TabNav_1 = createStackNavigator({
    home: {
        screen: Home
    },
    detail: {
        screen: Details
    },
    people: {
        screen: People
    },
    contact: {
        screen: Contact
    }
},
    // {
    //     headerMode: 'none',
    // },
    {
        initialRouteName: 'home',
        defaultNavigationOptions: {
            headerTitle: 'First Tab'
        }
    }
);

const TabNav_2 = createStackNavigator({
    home: {
        screen: Home
    },
    detail: {
        screen: Details
    },
    people: {
        screen: People
    },
    contact: {
        screen: Contact
    }
},
    // {
    //     headerMode: 'none',
    // },
    {
        initialRouteName: 'home',
        defaultNavigationOptions: {
            headerTitle: 'Second Tab'
        }
    }
);



const TabNav_3 = createStackNavigator({
    home: {
        screen: Home
    },
    detail: {
        screen: Details
    },
    people: {
        screen: People
    },
    contact: {
        screen: Contact
    }
},
    // {
    //     headerMode: 'none',
    // },
    {
        initialRouteName: 'home',
        defaultNavigationOptions: {
            headerTitle: 'Third Tab'
        }
    }
);



const TabNav_4 = createStackNavigator({
    home: {
        screen: Home
    },
    detail: {
        screen: Details
    },
    people: {
        screen: People
    },
    contact: {
        screen: Contact
    }
},
    // {
    //     headerMode: 'none',
    // },
    {
        initialRouteName: 'home',
        defaultNavigationOptions: {
            headerTitle: 'Fourth Tab'
        }
    }
);

const TabScreens = createBottomTabNavigator({
    TabNav1: {
        screen: TabNav_1,
        navigationOptions: {
            tabBarLabel: false,
            tabBarIcon: ({ focused }) => (focused ?
                <FontAwesomeIcon icon='tree' color="yellow" size={24} />
                :
                <FontAwesomeIcon icon='tree' color="black" />
            ),
        },
    },
    TabNav2: {
        screen: TabNav_2,
        navigationOptions: {
            tabBarLabel: 'Activity',
            tabBarIcon: ({ focused }) => (focused ?
                <FontAwesomeIcon icon='tractor' color="yellow" size={24} />
                :
                <FontAwesomeIcon icon='tractor' color="black" />
            ),
        },
    },
    TabNav3: {
        screen: TabNav_3,
        navigationOptions: {
            tabBarLabel: 'Gang',
            tabBarIcon: ({ focused }) => (focused ?
                <FontAwesomeIcon icon='street-view' color="yellow" size={24} />
                :
                <FontAwesomeIcon icon='street-view' color="black" />
            ),
        },
    },
    TabNav4: {
        screen: TabNav_4,
        navigationOptions: {
            tabBarLabel: 'Profile',
            tabBarIcon: ({ focused }) => (focused ?
                <FontAwesomeIcon icon='road' color="yellow" size={24} />
                :
                <FontAwesomeIcon icon='road' color="black" />
            ),
        },
    },
},
    {
        initialRouteName: 'TabNav1',
        tabBarComponent: props =>
            <TabBarComponent {...props} style={styles.tabBarContainer} />,
        tabBarPosition: 'bottom',
        tabBarOptions: {
            iconStyle: {
                paddingTop: 0,
                paddingBottom: 50,
            },
            showIcon: true,
            showLabel: false,
            opacity: 1,
            zIndex: 100
        }

    }
);

const styles = StyleSheet.create({
    tabBarContainer: {
        backgroundColor: '#d03959',
        position: 'absolute',
        borderRadius: 20,
        marginBottom: 20,
        marginLeft: 30,
        marginRight: 30,
    }
})
export default createAppContainer(TabScreens);
