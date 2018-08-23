import React from 'react';
import{
  StyleSheet,
  Text,
  View,
} from 'react-native';

export default class Login extends React.Component {

  render(){
    return(
            <View style={styles.conteiner}>
            <Text style={styles.text}>Welcome To The Member Area</Text>
            </View>

        
    );
  }
  
}
const styles = StyleSheet.create({
    conteiner: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#2896d3'
    },
    text: {
        color: '#fff',


    }
});
