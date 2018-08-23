import React from 'react';
import{
  StyleSheet,
  Text,
  View,
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
        <Application />
    );
  }
}