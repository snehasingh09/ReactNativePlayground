import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, TextInput, TouchableOpacity, AsyncStorage, Button, Linking } from 'react-native';

import { storeData } from '../utils/helperAsyncStorage';

const DeepScreen = (props) => {
    const [{id, name}, setParams] = useState({id:'', name: ''});
    useEffect(() => {
        let idx = props.navigation.getParam('id');
        let namex = props.navigation.getParam('name');
        setParams({id:idx, name:namex});
    }, []);
    return (
        <View>
            <Text>DeepScreen</Text>
            <Text>{id}</Text>
            <Text>{name}</Text>
            <Button
                onPress={async () => { props.navigation.navigate({routeName: 'AuthLoading', params:{dummyUrl: await Linking.getInitialURL()}})}}
                title="Back to Auth"
            />
        </View>
    )
}

export default DeepScreen;