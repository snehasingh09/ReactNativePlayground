import React from 'react';
import { Text, Button, View } from 'react-native';

const Contact = props => {
    return (
        <View>
            <Button onPress={() => props.navigation.navigate({ routeName: 'home' })} title='home'>
                <Text style={{ textAlign: "center", }}>Home</Text>
            </Button>
            <Button onPress={() => { props.navigation.navigate({ routeName: 'detail' }) }} title='details'>
                <Text style={{ textAlign: "center", }}>Details</Text>
            </Button>
            <Button onPress={() => props.navigation.navigate({ routeName: 'people' })} title='people'>
                <Text style={{ textAlign: "center", }}>People</Text>
            </Button>
            <Button disabled onPress={() => props.navigation.navigate({ routeName: 'contact' })} title='contact'>
                <Text style={{ textAlign: "center", }}>Contact</Text>
            </Button>
        </View>
    )
}

export default Contact;
