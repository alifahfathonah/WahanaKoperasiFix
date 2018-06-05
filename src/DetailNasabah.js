import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, ActivityIndicator, KeyboardAvoidingView,
     Image, ScrollView, Alert, FlatList } from "react-native";
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import Icon from "react-native-ionicons";

import { Hideo, Sae, Fumi, Hoshi } from "react-native-textinput-effects";

class TambahNasabahScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            data: [],
            error: null,
            refreshing: false,
            ActivityIndicator_Loading: false,
        };
    }

    componentDidMount() {
        this.setState({
          nik: this.props.navigation.state.params.nik,
          nama: this.props.navigation.state.params.nama,
            jenisKelamim: this.props.navigation.state.params.jenisKelamim,
          noHp: this.props.navigation.state.params.noHp,
          alamat: this.props.navigation.state.params.alamat,
          tglLahir: this.props.navigation.state.params.tglLahir,
          ktp: this.props.navigation.state.params.ktp
        });

    }
   
    render() {
        return (
            <KeyboardAvoidingView style={styles.mainContainer}>
                <View style={styles.header}>
                    <View style={styles.logo}>
                        <Image source={require('./img/logo.png')}
                            style={{width: 50, height: 50}}
                        />
                    </View>
                    <View style={styles.judul}>
                        <Text style={{ fontSize: 20, fontWeight: 'bold', textAlign: 'center', color: '#000'}}>
                        WAHANA KOPERASI</Text>
                        <Text style={{ fontSize: 16, fontWeight: 'bold', textAlign: 'center', color: '#000'}}>
                        DETAIL NASABAH</Text>
                    </View>
                </View>
                    <ScrollView style={{flex: 1}}>
                        <View style={{alignItems: 'center'}}>
                                <Image
                                    style={{ flex: 1, height: 100, width: 100, borderRadius: 6 }}
                                    source={{ uri: this.state.ktp }}
                                    resizeMode="contain"
                                />
                        </View>
                        <View style={styles.box}>
                            <View style={styles.img}>
                            <Icon name="md-card" size={40} color={'#000'}/>
                            </View>
                            <View style={styles.data}>
                            <Text style={styles.text}>{this.state.nik}</Text>
                            </View>
                        </View>
                        <View style={styles.box}>
                            <View style={styles.img}>
                            <Icon name="md-person" size={40} color={'#000'}/>
                            </View>
                            <View style={styles.data}>
                            <Text style={styles.text}>{this.state.nama}</Text>
                            </View>
                        </View>
                        <View style={styles.box}>
                            <View style={styles.img}>
                            <Icon name="md-call" size={40} color={'#000'}/>
                            </View>
                            <View style={styles.data}>
                            <Text style={styles.text}>{this.state.noHp}</Text>
                            </View>
                        </View>
                        <View style={styles.box}>
                            <View style={styles.img}>
                            <Icon name="md-home" size={40} color={'#000'}/>
                            </View>
                            <View style={styles.data}>
                            <Text style={styles.text}>{this.state.alamat}</Text>
                            </View>
                        </View>
                        <View style={styles.box}>
                            <View style={styles.img}>
                            <Icon name="md-transgender" size={40} color={'#000'}/>
                            </View>
                            <View style={styles.data}>
                            <Text style={styles.text}>{this.state.jenisKelamim}</Text>
                            </View>
                        </View>
                        <View style={styles.box}>
                            <View style={styles.img}>
                            <Icon name="md-calendar" size={40} color={'#000'}/>
                            </View>
                            <View style={styles.data}>
                            <Text style={styles.text}>{this.state.tglLahir}</Text>
                            </View>
                        </View>
                   
                            <View style={{ alignItems: 'center' }}>
                            <Image
                                style={{ flex: 1, height: 100, width: 100, borderRadius: 6 }}
                                source={{ uri:this.state.ktp }}
                                resizeMode="contain"
                            />
                            </View>
                        
                                

  

                    </ScrollView>
            </KeyboardAvoidingView>
        );
    }
}
export default TambahNasabahScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#388e3c"
  },
  header: {
    flex: 0.1,
    flexDirection: "row",
    backgroundColor: "rgba(255,202,40, .9)",
    marginBottom: 10
  },
  logo: {
    flex: 0.15
  },
  judul: {
    flex: 0.85,
    justifyContent: "center",
    alignContent: "center"
  },
  button: {
    marginTop: 10,
    backgroundColor: "#00BCD4",
    marginBottom: 40,
    borderRadius: 7,
    paddingVertical: 10,
    marginHorizontal: 20
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 22,
    fontWeight: "bold"
  },
  tulis: {
    fontSize: 20,
    color: "#000"
  },
  img: {
    flex: 0.15,
    justifyContent: "center",
    alignItems: "center"
  },
  box: {
    width: "100%",
    flexDirection: "row",
    backgroundColor: "rgba(255,255,255, .4)"
  },
  data: {
    flex: 0.85,
    justifyContent: "center",
    alignContent: "center"
  },
  text: {
    fontSize: 25,
    color: "#000"
  }
});