import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, ActivityIndicator, 
    KeyboardAvoidingView, Image, FlatList, RefreshControl } from "react-native";
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { Hideo, Sae } from 'react-native-textinput-effects';
import Icon from "react-native-ionicons";

class NasabahScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            data: [],
            error: null,
            refreshing: false,
            ActivityIndicator_Loading: false,
        };
    }

    componentDidMount() {
        this.setState({ ActivityIndicator_Loading: true }, () => {
            this.setState({ refreshing: true });
            const url = "http://api.wahanawar.com/get_data.php";
            //this.setState({ loading: true });
            fetch(url)
                .then((response) => response.json())
                .then((responseJson) => {
                    console.log("comp");
                    console.log("ui got data", responseJson);
                    this.setState({
                        data: responseJson,
                        error: responseJson.error || null,
                        loading: false,
                        refreshing: false,
                        ActivityIndicator_Loading: false,

                    });
                }
                );
        });
    }
    _keyExtractor = (item, index) => item.nik;
    GetIDFunction = (nik, nama, jenisKelamim, noHp, tglLahir, alamat, ktp, ) => {

        this.props.navigation.navigate("Details", {
          nik: nik,
          nama: nama,
            jenisKelamim: jenisKelamim,
          noHp: noHp,
          tglLahir: tglLahir,
          alamat: alamat,
          ktp: ktp
        });
    }

    render() {
        return (
            <KeyboardAvoidingView style={styles.mainContainer}>
                <View style={styles.header}>
                    <View style={styles.logo}>
                        <Image source={require('./img/logo.png')}
                            style={{ width: 50, height: 50 }}
                            color={'#000'}
                        />
                    </View>
                    <View style={styles.judul}>
                        <Text style={{ fontSize: 20, fontWeight: 'bold', textAlign: 'center', color: '#000' }}>
                        WAHANA KOPERASI</Text>
                        <Text style={{ fontSize: 16, fontWeight: 'bold', textAlign: 'center', color: '#000' }}>
                        NASABAH</Text>
                    </View>
                </View>

                <FlatList
                    data={this.state.data}
                    keyExtractor={this._keyExtractor}
                    renderItem={({ item }) =>

                        <TouchableOpacity activeOpacity={0.7} style={styles.row} 
                            onPress={this.GetIDFunction.bind(
                                this, item.nik,
                                item.nama,
                                item.jenisKelamim,
                                item.noHp,
                                item.tglLahir,
                                item.alamat,
                                item.ktp
                            )}>

                            <View style={styles.iconContainer}>
                                <Image
                                    style={{ flex: 1, height: 60, width: 60, borderRadius: 6 }}
                                    source={{ uri: item.ktp }}
                                    resizeMode="contain"
                                />
                            </View>

                            <View style={styles.info}>
                                <Text style={styles.songTitle}>Nama Nasabah : {item.nama}</Text>
                                <Text style={styles.songDetails}>Alamat Nasabah : {item.alamat}</Text>
                                <Text style={styles.songDetails}>No Tlpn Nasabah : {item.noHp}</Text>
                            </View>

                        </TouchableOpacity>

                    }
                    refreshControl={
                        <RefreshControl
                            refreshing={this.state.refreshing}
                            onRefresh={this.componentDidMount.bind(this)}
                        />
                    }
                />
            </KeyboardAvoidingView>
        );
    }
}
export default NasabahScreen;

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
    iconContainer: {
        flex: 0.2,
        justifyContent: 'center',
        alignContent: 'center',

    },
    icon: {
        color: '#fff',
        height: 30,
        width: 30,
        textAlign: 'center'
    },
    info: {
        flex: 0.8,
        paddingLeft: 16,
        paddingRight: 16,
        marginTop: 5,

    },
    songTitle: {
        fontWeight: 'bold',
        fontSize: 20,
        marginBottom: 5,
        color: '#000'
    },
    songDetails: {
        color: '#000',
        fontSize: 16,
    },
    row: {
        marginTop: 5,
        flexDirection: 'row', 
        width: '100%', 
        height: 80, 
        backgroundColor: 'rgba(255,255,255, .5)' 
    },
});