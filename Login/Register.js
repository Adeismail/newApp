import React from 'react';
import{
  StyleSheet,
  Text,
  View,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
  AsyncStorage,
} from 'react-native';
import { StackNavigator } from 'react-navigation';

export default class Login extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            Username: '',
            Password: '',
            Email: '',
        }
    }

    componentDidMount() {
        this._loadInitialState().done();
    }

    _loadInitialState = async () =>{

            var value = await AsyncStorage.getItem('user');
            if (value !== null){
                this.props.navigation.navigate('Profile');
            }
    }

  render(){
    return(
        <KeyboardAvoidingView behavior='padding' style={styles.wrapper}>
            <View style={styles.conteiner}>
                    <Text style={styles.header}>- Register -</Text>

                <TextInput
                    style={styles.TextInput} placeholder='Username'
                    onChangeText={ (Username) => this.setState({Username}) }
                    underlineColorAndroid='transparent'
                    />
                    
                <TextInput
                    style={styles.TextInput} placeholder='Password'
                    onChangeText={ (Password) => this.setState({Password}) }
                    underlineColorAndroid='transparent'
                    />
                <TextInput
                    style={styles.TextInput} placeholder='Email'
                    onChangeText={ (Email) => this.setState({Email}) }
                    underlineColorAndroid='transparent'
                    />    

                    <TouchableOpacity
                        style={styles.btn}
                        onPress={this.Login}>
                        <Text>Log In</Text>    
                    </TouchableOpacity>
            </View>

        </KeyboardAvoidingView>

        
    );
  }
  Register = () => {

      fetch('http://192.5454.25.2:3000/users', {
          method: 'POST',
          headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({
              Username: this.state.Username,
              Password: this.state.Password,
              Email: this.state.Email,
          })
      })
        .then((response) => response.json())
        .then ((re) =>{
            if (res.success === true) {
                AsyncStorage.setItem('user', res.user);
                this.props.navigation.navigate('Profile');
            }
            else {
                alert(res.message);
            }
        })
        .done();
  }
}
const styles = StyleSheet.create({
    wrapper: {
        flex:1,
    },
    conteiner: {
        flex:1,
        alignItems: 'center',
        justifyContent:'center',
        backgroundColor: '#2896d3',
        paddingLeft: 40,
        paddingRight: 40,
    },
    header:{
        fontSize: 24,
        marginBottom: 60,
        color: '#fff',
        fontWeight: 'bold',
    },
    TextInput:{
        alignSelf: 'stretch',
        padding: 16,
        marginBottom: 20,
        backgroundColor: '#fff',
    },
    btn: {
        alignSelf: 'stretch',
        backgroundColor: '#01c853',
        padding: 20,
        alignItems: 'center',

    }
})