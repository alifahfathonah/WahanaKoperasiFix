import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, ActivityIndicator, KeyboardAvoidingView, Image } from "react-native";
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { Hideo, Sae } from 'react-native-textinput-effects';

class HomeScreen extends React.Component {
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
                        HOME</Text>
                    </View>
                </View>

                <View style={{ flex: 1, justifyContent: 'center' }}>
                    <TouchableOpacity
                        activeOpacity={0.5}
                        onPress={() => this.props.navigation.navigate('DataPeminjaman')}
                        style={styles.button}>
                        <Text style={styles.buttonText}>Nasabah Peminjaman</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        activeOpacity={0.5}
                        onPress={() => this.props.navigation.navigate('DataRekening')}
                        style={styles.button}>
                        <Text style={styles.buttonText}>Buku Rekening Nasabah</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        activeOpacity={0.5}
                        onPress={() => this.props.navigation.navigate('DataAngsur')}
                        style={styles.button}>
                        <Text style={styles.buttonText}>Nasabah Bayar Angsuran</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        activeOpacity={0.5}
                        onPress={() => this.props.navigation.navigate('TransaksiScreen')}
                        style={styles.button}>
                        <Text style={styles.buttonText}>Nasabah Transaksi</Text>
                    </TouchableOpacity>


                </View>
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
    backgroundColor: "rgba(255,202,40, .9)",
    marginBottom:10,
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
        backgroundColor: '#00BCD4',
        marginBottom: 40,
        borderRadius: 7,
        paddingVertical: 10,
        marginHorizontal: 20,
    },
    buttonText: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 22,
        fontWeight: 'bold'
    },
   
});