import React from 'react';
import{
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Button,
  Image,

} from 'react-native';
import Menu from '../Login/MenuItem';

export default class Login extends React.Component {

  render(){
    return(
      <ImageBackground
      source={require('../img/background.jpg')}
      style={styles.container}>

      <View style={styles.overlayContainer}>
            <View style={styles.top}>
              <Text style={styles.header}>H O M E</Text>
            </View>

            <View style={styles.menuContainer}>
              
              <Menu itemImage={require('../img/home-icon.png')} />
              <Menu itemImage={require('../img/icon2.png')} />
              <Menu itemImage={require('../img/icon3.png')} />
              <Menu itemImage={require('../img/icon4.png')} />
              <Menu itemImage={require('../img/icon5.png')} />
              <Menu itemImage={require('../img/icon1.png')} />
            </View>
      
      </View>
      
      

  </ImageBackground>
        
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


    },
    container: {
      flex: 1,
      width: '100%',
      height: '100%',
    },
    header:{
      color:'#fff',
      fontSize: 28,
      borderColor: '#fff',
      borderWidth: 2,
      padding: 20,
      paddingLeft: 40,
      paddingRight: 40,
      backgroundColor: 'rgba(255,255,255, .1)'
    },
    overlayContainer:{
      flex: 1,
      backgroundColor: 'rgba(47,163,218, .4)'
    },
    top: {
      height: '50%',
      alignItems: 'center',
      justifyContent: 'center',
    },
    menuContainer:{
      height: '50%',
      
      flexDirection: 'row',
      flexWrap: 'wrap',
    }
});
