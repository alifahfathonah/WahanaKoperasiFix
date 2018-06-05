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


class HeaderScreen extends React.Component{
    render(){
        return(
            <View style={styles.MainContainer} >
            <View style={styles.Header}>
                    <Text style={styles.TextHeader}>WAHANA KOPERASI</Text>
                </View>
                <View style={{justifyContent: 'center', alignItems: 'center',}}>
                    <Image
                        source={require('../img/logo.png')}//image
                        style={{ width: 200, height: 200, marginBottom: 25 }}
                    />
                </View>
            </View>
        );
    }
}

export default HeaderScreen;

const styles = StyleSheet.create(
    {
         MainContainer:
            {
                flex: 1,
                backgroundColor: '#388e3c',
      
            },
        Header:{
            flex: 0.2,
            alignItems: 'center', 
            justifyContent: 'center',
            marginTop: 25,
        },
        TextHeader: {
            fontSize: 20,
            fontWeight: 'bold',
            color: '#000'
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