import React, { Component } from 'react';
import {Text, View, StyleSheet, Switch} from 'react-native';
import { Constants } from 'expo';

export default class App extends Component {
    state={
        switchValue: true
    };

    _handleToggleSwitch = () => this.setState(state => ({
        switchValue: istate.switchValue
    }));

    render(){
        return (
            <View style={styles.container}>
            <Text style={styles.paragraph}>CodeTR
            CodeTR
            </Text>
            <Switch
                anValueChange={this._handleTonggleSwitch}
                value={this.state.switchValue}
                />
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