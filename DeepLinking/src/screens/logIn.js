import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

import { storeData } from '../utils/helperAsyncStorage';

const LogIn = (props) => {
    const [name, setName] = useState('');
    const check_name = (name) => {
        if (name === 'Sudhanshu') {
            storeData('@login', JSON.stringify(true));
            props.navigation.navigate({ routeName: 'AuthLoading' })
        }
        return false;
    };
    return (
        <View>
            <TextInput
                // name="name" 
                onChangeText={name => setName(name)}
                // style = {styles.input}
                placeholder="Enter Name"
                placeholderTextColor="#808080"
                defaultValue={name}
            />
            <Button onPress={() => check_name(name)} title='login'>
                <Text> Log In </Text>
            </Button>
        </View>
    )
}

export default LogIn;
