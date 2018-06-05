import React from 'react';
import { Alert, View, TouchableOpacity, Text, StyleSheet, ActivityIndicator, KeyboardAvoidingView, Image, ScrollView } from "react-native";
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { Hideo, Sae, Hoshi } from 'react-native-textinput-effects';
import HeaderStyle from './header2';

class HomeScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
           jenis: '',
           jumlah: '',
           tglTransaksi: '',
           ActivityIndicator_Loading: false,
        }
    }
componentDidMount()  {
    this.setState({ 
                id: this.props.navigation.state.params.id, 
                nik: this.props.navigation.state.params.nik,
                noBuku: this.props.navigation.state.params.noBuku, 
                nama: this.props.navigation.state.params.nama,
                tglTransaksi: this.props.navigation.state.params.tglTransaksi,
                jenis: this.props.navigation.state.params.jenis, 
                jumlah: this.props.navigation.state.params.jumlah
      })

     }

    submitData = () => {
        this.setState({ ActivityIndicator_Loading: true }, () => {
            fetch('http://api.wahanawar.com/editTransaksi.php',
                {
                    method: 'POST',
                    headers:
                        {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json',
                        },
                    body: JSON.stringify(
                        {
                            id: this.state.id,
                            jenis: this.state.jenis,
                            jumlah: this.state.jumlah,
                            tglTransaksi: this.state.tglTransaksi,
                        })

                }).then((response) => response.json()).then((responseJsonFromServer) => {
                    Alert.alert(responseJsonFromServer);
                    this.props.navigation.navigate('TransaksiScreen')
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
                        label={'Nomor Buku'}
                        borderColor={'#fff'}
                        inputStyle={{ color: '#000' }}
                        labelStyle={{ color: '#000' }}
                        style={{marginBottom: 5}}
                        value={this.state.nik}
                    />
                    <Hoshi
                        label={'Nomor Buku'}
                        borderColor={'#fff'}
                        inputStyle={{ color: '#000' }}
                        labelStyle={{ color: '#000' }}
                        style={{marginBottom: 5}}
                        value={this.state.noBuku}
                    />
                    <Hoshi
                        label={'Nomor Buku'}
                        borderColor={'#fff'}
                        inputStyle={{ color: '#000' }}
                        labelStyle={{ color: '#000' }}
                        style={{marginBottom: 5}}
                        value={this.state.nama}
                    />
                    <Hoshi
                        label={'Jenis Transaksi'}
                        borderColor={'#fff'}
                        inputStyle={{ color: '#000' }}
                        labelStyle={{ color: '#000' }}
                        style={{ marginBottom: 5 }}
                        onChangeText={(TextInputText) => this.setState({ jenis: TextInputText })}
                        value={this.state.jenis}
                    />
                    <Hoshi
                        label={'Jumlah Transaksi'}
                        borderColor={'#fff'}
                        inputStyle={{ color: '#000' }}
                        labelStyle={{ color: '#000' }}
                        style={{ marginBottom: 5 }}
                        onChangeText={(TextInputText) => this.setState({ jumlah: TextInputText })}
                        value={this.state.jumlah}
                    />
                    
                    <Hoshi
                        label={'Tanggal Transaksi'}
                        borderColor={'#fff'}
                        inputStyle={{ color: '#000' }}
                        labelStyle={{ color: '#000' }}
                        style={{ marginBottom: 5 }}
                        onChangeText={(TextInputText) => this.setState({ tglTransaksi: TextInputText })}
                        value={this.state.tglTransaksi}
                    />
                   
                </ScrollView>
                <TouchableOpacity
                    activeOpacity={0.5}
                    style={styles.button}
                    onPress={this.submitData}>
                    <Text style={styles.buttonText}>Edit Transaksi</Text>
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