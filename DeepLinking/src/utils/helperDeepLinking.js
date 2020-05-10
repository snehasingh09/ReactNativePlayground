import DeepLinking from 'react-native-deep-linking';

export const initLinking = (Linking) => {
    const handleUrl = ({ url }) => {
        Linking.canOpenURL(url).then((supported) => {
            if (supported) {
                console.log(`handleUrl: ${url} is supported!!`);
                DeepLinking.evaluateUrl(url);
            } else {
                console.log(`handleUrl: ${url} is not supported!!`)
            }
        });
    };
    Linking.addEventListener('url', handleUrl);
    DeepLinking.addScheme('deeplinking://');
};

export const AddDeepLinkingRoutesAfterAuth = (props) => {
    // DeepLinking.addRoute('/sample1/:id', (response) => {
    //     console.log(response.id);
    // });
    DeepLinking.addRoute('/:tabnav/:id/:stack/:name', (response) => {
        console.log(response.tabnav);
        console.log(response.id);
        console.log(response.stack);
        console.log(response.name);
        props.navigation.navigate({
            routeName: 'deepScreen',
            params: { id: response.id, name: response.name }
        });
    });
};

export const clearDeepLinkingRoutesAfterAuth = () => {
    DeepLinking.removeRoute('/:tabnav/:id/:stack/:name');
}

const HelperDeepLinking = {
    initLinking: initLinking,
    AddDeepLinkingRoutesAfterAuth: AddDeepLinkingRoutesAfterAuth,
    clearDeepLinkingRoutesAfterAuth: clearDeepLinkingRoutesAfterAuth
}

export default HelperDeepLinking;
