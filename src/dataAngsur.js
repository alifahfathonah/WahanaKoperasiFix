import React from 'react';
import {
    View, TouchableOpacity, Text, StyleSheet, ActivityIndicator,
    KeyboardAvoidingView, Image, FlatList, RefreshControl
} from "react-native";
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { Hideo, Sae } from 'react-native-textinput-effects';
import Icon from "react-native-ionicons";

class DataPeminjaman extends React.Component {
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
            const url = "http://api.wahanawar.com/angsuran.php";
            //this.setState({ loading: true });
            fetch(url)
                .then((response) => response.json())
                .then((responseJson) => {
                    console.log("comp");
                    console.log(responseJson);
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
                            DATA ANGSURAN</Text>
                    </View>
                </View>

                <FlatList
                    data={this.state.data}
                    keyExtractor={(item, index) => index}
                    renderItem={({ item }) =>

                        <TouchableOpacity activeOpacity={0.7} style={styles.row}
                            onPress={() => this.props.navigation.navigate('detailAngsur', { id: item.id_angsur })}>

                            <View style={styles.iconContainer}>
                                <Icon name="md-book"
                                    size={80}
                                    color={'#000'}
                                />
                            </View>

                            <View style={styles.info}>
                                <Text style={styles.songTitle}>Nomor Peminjaman : {item.idPeminjaman}</Text>
                                <Text style={styles.songDetails}>Nama Nasabah : {item.nama}</Text>
                                <Text style={styles.songDetails}>Tanggal Bayar : {item.tglbayar}</Text>
                                <Text style={styles.songDetails}>Angsuran Ke : {item.Angsuran_ke}</Text>
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
export default DataPeminjaman;

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
        height: 90,
        backgroundColor: 'rgba(255,255,255, .5)'
    },
});