import React, { Component } from 'react';
import {Text, View, StyleSheet} from 'react-native';
import { Constants } from 'expo';
import { Button } from 'react-native-elements' // 0.16.0

import "@expo/vector-icons"; //5.2.0

export default class App extends Component {
    render(){
        return (
            <View style={styles.container}>
            <Text style={styles.paragraph}>CodeTR</Text>
            <Button
                large
                icon={{name: 'plus', type: 'acticon', buttonStyle: style.someButtonStyle}}
                backgroundColor= '#397af8'
                title= 'ADD'/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: Constants,statusBarHeight,
        backgroundColor: '#ecf0f1',
    },
    paragraph:{
        margin: 24,
        fontSize: 25,
        fontHeight: 'bold',
        textAlign: 'center',
        color: '034495e'
    },
});