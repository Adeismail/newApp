import React from 'react';
import{
  StyleSheet,
  Text,
  View,
  ImageBackground,
  MenuItem
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import Login from './Login/Login';
import Profile from './Login/Profile';

const Application = StackNavigator({
  Home: { screen: Login},
  Profile: { screen:Profile}
}, {
  navigationOptions: {
       header: false,
  }

});

export default class App extends React.Component {

  constructor(props){
      super(props)
      this.state={
          userName: '',
          userEmail: '', userPassword: ''
          
      }
  }

  userRegister = () => {
    alert('ok');
  }

  render(){
    return(
      <ImageBackground
            source={require('./img/background.jpg')}
            style={Styles.container}>

            <View style={Styles.overlayContainer}>
                  <View style={Styles.top}>
                    <Text style={Styles.header}>H O M E</Text>
                  </View>

                  <View style={Styles.menuContainer}>
                    <MenuItem itemImage={require('./img/icon1.png')} />
                    <MenuItem itemImage={require('./img/icon1.png')} />
                    <MenuItem itemImage={require('./img/icon1.png')} />
                    <MenuItem itemImage={require('./img/icon1.png')} />
                    <MenuItem itemImage={require('./img/icon1.png')} />
                    <MenuItem itemImage={require('./img/icon1.png')} />
                  </View>
            
            </View>
            
            <Application/>

        </ImageBackground>
    );
  }
}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
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
  menuContainer:{
    height: '40',
    flexDirection: 'row',
    flexWrap: 'wrap',
  }

});