import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, ImageBackground, Dimensions } from 'react-native';
import Swiper from "react-native-web-swiper";

const _height = Dimensions.get('window').height;
const _width = Dimensions.get('window').width;
const Splash_Screen = props => {
    return (
        <Swiper controlsProps={{
            dotsPos: 'center',
            prevPos: false,
            nextPos: false,
            dotsTouchable: true,
            dotActiveStyle: { backgroundColor: '#ffffff' },
            dotsWrapperStyle: { backgroundColor: '#40000000', marginTop: _height * 0.65, width: 7, height: 7 },
        }}
            style={styles.wrapper}>

            <View style={styles.slideContainer}>
                <ImageBackground source={require('../../images/splash1.jpg')} resizeMode='stretch' style={styles.imageBackground}>
                    <Text style={styles.sliderHeaderPick}>Splash01</Text>
                    <Text style={styles.sliderPara}>Lorem ipsum dolor sit amet</Text>
                    <Text style={styles.sliderPara}>Elementum sagittis vitae et leo</Text>
                    <Text style={styles.sliderPara}>Fames ac turpis egestas integer eget</Text>
                    <Text style={styles.sliderPara}>Cursus!</Text>
                </ImageBackground>
            </View>

            <View style={styles.slideContainer}>
                <ImageBackground source={require('../../images/splash2.jpg')} resizeMode='stretch' style={styles.imageBackground}>
                    <Text style={styles.sliderHeaderInvite}>Splash02</Text>
                    <Text style={styles.sliderPara}>A cras semper auctor neque vitae tempus</Text>
                    <Text style={styles.sliderPara}>Fringilla urna porttitor rhoncus dolor!</Text>
                </ImageBackground>
            </View>

            <View style={styles.slideContainer}>
                <ImageBackground source={require('../../images/splash3.jpg')} resizeMode='stretch' style={styles.imageBackground}>
                    <Text style={styles.sliderHeaderBook}>Splash03</Text>
                    <Text style={styles.sliderPara}>Dui nunc mattis enim ut tellus elementum.</Text>
                    <Text style={styles.sliderPara}>Augue lacus viverra vitae congue</Text>
                    <Text style={styles.sliderPara}>Urna et pharetra pharetra massa massa!</Text>
                </ImageBackground>
            </View>

            <View style={styles.slideContainer}>
                <ImageBackground source={require('../../images/splash4.jpg')} resizeMode='stretch' style={styles.imageBackground}>
                    <Text style={styles.sliderHeaderGo}>Splash04</Text>
                    <Text style={styles.sliderPara}>Et netus et malesuada!</Text>
                    <Text style={styles.sliderPara}>Sed id semper risus in</Text>
                    <Text style={styles.sliderPara}>Ac tortor dignissim convallis aenean!</Text>
                    <View style={styles.splashButtonContainer}>
                        <TouchableOpacity onPress={() => { props.navigation.navigate({ routeName: 'logIn' }); }} style={styles.signButton}>
                            <Text style={styles.signButtonText}> Log In </Text>
                        </TouchableOpacity>
                    </View>
                </ImageBackground>
            </View>

        </Swiper>
    );
};

const styles = StyleSheet.create({
    slideContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    imageBackground: {
        width: _width,
        flex: 1,
    },
    imageContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 69,
    },
    imageCenterContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 127,
    },
    imageCenter_1: {
        height: 142.5,
        width: 250
    },
    imageCenter_2: {
        height: 171.9,
        width: 250
    },
    sliderHeaderPick: {
        fontFamily: 'Montserrat-Regular',
        fontSize: 30,
        color: '#ffffff',
        textAlign: 'center',
        marginTop: _height * 0.6,
    },
    sliderHeaderInvite: {
        fontFamily: 'Montserrat-Regular',
        fontSize: 30,
        color: '#ffffff',
        textAlign: 'center',
        marginTop: _height * 0.6,
    },
    sliderHeaderBook: {
        fontFamily: 'Montserrat-Regular',
        fontSize: 30,
        color: '#ffffff',
        textAlign: 'center',
        marginTop: _height * 0.6,
    },
    sliderHeaderGo: {
        fontFamily: 'Montserrat-Regular',
        fontSize: 30,
        color: '#ffffff',
        textAlign: 'center',
        marginTop: _height * 0.65,
    },
    sliderPara: {
        fontFamily: 'Montserrat-Regular',
        fontSize: 14,
        color: '#ffffff',
        lineHeight: 21,
        textAlign: 'center'
    },
    sliderTopMargin: {
        marginTop: 20,
    },
    signButtonText: {
        color: 'white',
        fontFamily: 'Montserrat-Medium',
        fontSize: 14,
        width: 110,
        textAlign: 'center',
    },
    splashButtonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    signButton: {
        backgroundColor: '#444444',
        padding: 10,
        marginTop: 70,
        marginLeft: 10,
        marginRight: 10,
        alignItems: 'center',
        borderRadius: 19,
        borderColor: '#ffffff',
        borderStyle: 'solid',
        borderWidth: 1
    },
});
export default Splash_Screen
