import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, ActivityIndicator, KeyboardAvoidingView, Image } from "react-native";
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { Hideo, Sae } from 'react-native-textinput-effects';

class TambahTransaksiScreen extends React.Component {
    render() {
        return (
            <KeyboardAvoidingView style={styles.mainContainer}>
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
                    TAMBAH TRANSAKSI</Text>
                </View>
                </View>
                <View style={{flex: 1, justifyContent: 'center'}}>
                    <TouchableOpacity
                        activeOpacity={0.5}
                        onPress={() => this.props.navigation.navigate('RekeningScreen')}
                        style={styles.button}>
                        <Text style={styles.buttonText}>Tambah Rekening Baru</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        activeOpacity={0.5}
                        onPress={() => this.props.navigation.navigate('addPeminjamanScreen')}
                        style={styles.button}>
                        <Text style={styles.buttonText}>Tambah Peminjaman</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        activeOpacity={0.5}
                        onPress={() => this.props.navigation.navigate('addTransaksi')}
                        style={styles.button}>
                        <Text style={styles.buttonText}>Tambah Transaksi</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        activeOpacity={0.5}
                        onPress={() => this.props.navigation.navigate('addAngsuran')}
                        style={styles.button}>
                        <Text style={styles.buttonText}>Bayar Angsuran</Text>
                    </TouchableOpacity>


                </View>
            </KeyboardAvoidingView>
        );
    }
}
export default TambahTransaksiScreen;

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