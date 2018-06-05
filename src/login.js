import React, { Component } from 'react';
import { StyleSheet, 
    Text, 
    TextInput, 
    TouchableOpacity, 
    Alert, 
    KeyboardAvoidingView,
    Image,
    View, ActivityIndicator
} from "react-native";
import { List, ListItem, SearchBar  } from "react-native-elements";
import FontAwesomeIcon  from 'react-native-vector-icons/FontAwesome';
import { Hideo, Sae } from 'react-native-textinput-effects';
import HeaderScreen from './login/header';

class LoginScreen extends React.Component{
    constructor(){
        super();
        this.state={
            usename: '',
            password: '',
            data: [],
            ActivityIndicator_Loading: false,
        }
    }
    UserLoginFunction = () => {
        this.setState({ ActivityIndicator_Loading: true }, () => {
            fetch('http://api.wahanawar.com/login.php',
                {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        username: this.state.username,
                        password: this.state.password,
                    })

                }).then((response) => response.json())
                .then((responseJson) => {
                    this.setState({ ActivityIndicator_Loading: false });
                    data: responseJson;
                    if (responseJson === 'Login berhasil!') {
                        this.props.navigation.navigate('Tabs', 
                        {username: this.state.username});
                    }
                    else {
                        Alert.alert(responseJson);
                    }

                }).catch((error) => {
                    console.error(error);
                    this.setState({ ActivityIndicator_Loading: false });
                });

        });
    }
    render(){
        return(
            <View style={styles.MainContainer} >
                <HeaderScreen />
                <KeyboardAvoidingView>
                    <Sae
                        label={'USERNAME'}
                        iconClass={FontAwesomeIcon}
                        iconName={'pencil'}
                        iconColor={'white'}
                        autoCapitalize={'none'}
                        labelStyle={{ color: '#fff' }}
                        autoCorrect={false}
                        onSubmitEditing={() => this.passInput.focus()}
                        onChangeText={(TextInputText) => this.setState({ username: TextInputText })}
                    />
                    <Sae
                        label={'PASSWORD'}
                        iconClass={FontAwesomeIcon}
                        ref={(input) => this.passInput = input}
                        onChangeText={(TextInputText) => this.setState({ password: TextInputText })}
                        iconName={'pencil'}
                        iconColor={'white'}
                        labelStyle={{ color: '#fff' }}
                        autoCapitalize={'none'}
                        autoCorrect={false}
                        
                    />
                </KeyboardAvoidingView>
                <TouchableOpacity
                    activeOpacity={0.5}
                    style={styles.button}
                    onPress={this.UserLoginFunction}>
                    <Text style={styles.buttonText}>LOGIN</Text>

                </TouchableOpacity>
                {
                  this.state.ActivityIndicator_Loading ? 
                  <ActivityIndicator color='#2196F3' size='large' 
                  style={styles.ActivityIndicatorStyle} /> : null
                }
            </View>
        );
    }
}

export default LoginScreen;

const styles = StyleSheet.create(
    {
         MainContainer:
            {
                flex: 1,
                backgroundColor: '#388e3c',
      
            },
        Header:{
            flex: 0.1,
            alignItems: 'center', 
            justifyContent: 'center'
        },
        TextHeader: {
            fontSize: 18,
            fontWeight: 'bold',
        },
        input: {
            color: '#000',
            backgroundColor: 'rgba(255,255,255, .6)'
        },
        
        button:
            {
                marginTop: 10,
                backgroundColor: '#00BCD4',
                marginBottom: 40,
                borderRadius: 7,
                paddingVertical: 10,
                marginHorizontal: 20,
            },

        buttonText:
            {
                color: '#fff',
                textAlign: 'center',
                fontSize: 22,
                fontWeight: 'bold'
            },
    }
);