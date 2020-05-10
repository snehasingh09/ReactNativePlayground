import React, { useEffect } from 'react';

import { getData } from '../utils/helperAsyncStorage';
import { View, ActivityIndicator, Linking } from 'react-native';
import { AddDeepLinkingRoutesAfterAuth } from '../utils/helperDeepLinking';

const AuthScreen = props => {
    useEffect(() => {
        const check_login = async () => {
            let logged_in = await getData('@login');
            console.log(`From AuthScreen checking login info ${logged_in}`);
            if (logged_in) {
                AddDeepLinkingRoutesAfterAuth(props);
                let dummyUrl = props.navigation.getParam('dummyUrl');
                await Linking.getInitialURL().then((url) => {
                    if (url && url != dummyUrl) {
                        Linking.openURL(url);
                        console.log(`dummyUrl: ${dummyUrl}`);
                        console.log(`initUrl: ${url}`);
                    }
                }).catch(err => console.error('An error occurred', err));
                console.log(`From AuthScreen logging in Sudhanshu`);
                props.navigation.navigate({ routeName: 'tabBar' });
            } else {
                console.log(`From AuthScreen cannot login Sudhanshu ${logged_in}`);
                props.navigation.navigate({ routeName: 'newUserTab' });
            }
        };
        check_login();
    }, []);
    return (
        <View>
            <ActivityIndicator></ActivityIndicator>
        </View>
    )
}

export default AuthScreen;
