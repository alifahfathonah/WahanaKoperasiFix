import React from 'react';
import { Alert, View, TouchableOpacity, Text, StyleSheet, ActivityIndicator, KeyboardAvoidingView, Image, ScrollView } from "react-native";
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { Hideo, Sae, Hoshi } from 'react-native-textinput-effects';
import HeaderStyle from './header2';

class HomeScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

           tglbayar: '',
           Angsuran_ke: '',
           ActivityIndicator_Loading: false,
        }
    }

    componentDidMount()  {
    this.setState({ 
            id_angsur: this.props.navigation.state.params.id_angsur, 
            nama: this.props.navigation.state.params.nama, 
            tglbayar: this.props.navigation.state.params.tglbayar, 
            Angsuran_ke: this.props.navigation.state.params.Angsuran_ke, 
            idPeminjaman: this.props.navigation.state.params.idPeminjaman, 
            nik: this.props.navigation.state.params.nik,
      })

     }
    submitData = () => {
        this.setState({ ActivityIndicator_Loading: true }, () => {
            fetch('http://api.wahanawar.com/editAngsuran.php',
                {
                    method: 'POST',
                    headers:
                        {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json',
                        },
                    body: JSON.stringify(
                        {
                            id_angsur: this.state.id_angsur,
                            tglbayar: this.state.tglbayar,
                            Angsuran_ke: this.state.Angsuran_ke,
                        })

                }).then((response) => response.json()).then((responseJsonFromServer) => {
                    Alert.alert(responseJsonFromServer);
                     this.props.navigation.navigate('DataAngsur')
                }).catch((error) => {
                    console.error(error);

                    this.setState({ ActivityIndicator_Loading: false });
                });
        });
    }

    render() {
        return (

            <View style={styles.mainContainer}>
                <View style={styles.header}>
                    <View style={styles.logo}>
                        <Image source={require('./img/logo.png')}
                            style={{ width: 50, height: 50 }}
                        />
                    </View>
                    <View style={styles.judul}>
                        <Text style={{ fontSize: 20, fontWeight: 'bold', textAlign: 'center', color: '#000' }}>
                        WAHANA KOPERASI</Text>
                        <Text style={{ fontSize: 16, fontWeight: 'bold', textAlign: 'center', color: '#000' }}>
                        TAMBAH PEMINJAMAN</Text>
                    </View>
                </View>

                 <ScrollView style={{backgroundColor: 'rgba(255,255,255, .4)', marginTop: 20}}>
                    <Hoshi
                        label={'NIK Nasabah'}
                        borderColor={'#fff'}
                        inputStyle={{ color: '#000' }}
                        labelStyle={{ color: '#000' }}
                        style={{marginBottom: 5}}
                        value={this.state.nik}
                    />
                    <Hoshi
                        label={'Nama Nasabah'}
                        borderColor={'#fff'}
                        inputStyle={{ color: '#000' }}
                        labelStyle={{ color: '#000' }}
                        style={{marginBottom: 5}}
                        value={this.state.nama}
                    />
                    <Hoshi
                        label={'Nomor Peminjaman'}
                        borderColor={'#fff'}
                        inputStyle={{ color: '#000' }}
                        labelStyle={{ color: '#000' }}
                        style={{ marginBottom: 5 }}
                        value={this.state.idPeminjaman}
                    />
                    <Hoshi
                        label={'Tanggal Bayar'}
                        borderColor={'#fff'}
                        inputStyle={{ color: '#000' }}
                        labelStyle={{ color: '#000' }}
                        style={{ marginBottom: 5 }}
                        onChangeText={(TextInputText) => this.setState({ tglbayar: TextInputText })}
                        value={this.state.tglbayar}
                    />
                    <Hoshi
                        label={'Angsuran Ke'}
                        borderColor={'#fff'}
                        inputStyle={{ color: '#000' }}
                        labelStyle={{ color: '#000' }}
                        style={{ marginBottom: 5 }}
                        onChangeText={(TextInputText) => this.setState({ Angsuran_ke: TextInputText })}
                        value={this.state.Angsuran_ke}
                    />
                    
                </ScrollView>
                <TouchableOpacity
                    activeOpacity={0.5}
                    style={styles.button}
                    onPress={this.submitData}>
                    <Text style={styles.buttonText}>Update Angsuran</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
export default HomeScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#388e3c"
  },
  header: {
    flex: 0.1,
    flexDirection: "row",
    backgroundColor: "rgba(255,202,40, .9)"
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
  }
});