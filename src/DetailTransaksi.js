import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, ActivityIndicator, KeyboardAvoidingView,
     Image, ScrollView, Alert, FlatList } from "react-native";
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import Icon from "react-native-ionicons";
import { Hideo, Sae, Fumi, Kaede } from 'react-native-textinput-effects';

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
        const { navigation } = this.props;
        const id = navigation.getParam('id', 'NO-ID')
        console.log(id)
        this.setState({ ActivityIndicator_Loading: true }, () => {
            this.setState({ refreshing: true });
            const url = "http://api.wahanawar.com/detailTransaksi.php?id=" + id;
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
    GetIDFunction=(id, nik,noBuku, nama,tglTransaksi,jenis, jumlah)=>{

          this.props.navigation.navigate('editTransaksi', { 

                id: id, 
                nik: nik,
                noBuku: noBuku, 
                nama: nama,
                tglTransaksi: tglTransaksi,
                jenis: jenis, 
                jumlah: jumlah
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
                        DETAIL TRANSAKSI</Text>
                    </View>
                </View>
                <FlatList
                    data={this.state.data}
                    keyExtractor={(item, index) => index}
                    renderItem={({ item }) =>
                    <View style={{flex: 1}}>
                        <View style={{alignItems: 'center'}}>
                        <Icon name="md-book" size={120} color={'#000'}/>
                        </View>
                        
                        <View style={styles.box}>
                            <View style={styles.img}>
                            <Icon name="md-book" size={40} color={'#000'}/>
                            </View>
                            <View style={styles.data}>
                                <Text style={styles.text}>{item.noBuku}</Text>
                            </View>
                        </View>
                        <View style={styles.box}>
                            <View style={styles.img}>
                            <Icon name="md-person" size={40} color={'#000'}/>
                            </View>
                            <View style={styles.data}>
                                <Text style={styles.text}>{item.nama}</Text>
                            </View>
                        </View>
                        <View style={styles.box}>
                            <View style={styles.img}>
                            <Icon name="md-book" size={40} color={'#000'}/>
                            </View>
                            <View style={styles.data}>
                                <Text style={styles.text}>{item.jenis}</Text>
                            </View>
                        </View>
                        <View style={styles.box}>
                            <View style={styles.img}>
                            <Icon name="md-cash" size={40} color={'#000'}/>
                            </View>
                            <View style={styles.data}>
                                <Text style={styles.text}>{item.jumlah}</Text>
                            </View>
                                
                        </View>
                            <View style={styles.box}>
                                <View style={styles.img}>
                                    <Icon name="md-calendar" size={40} color={'#000'} />
                                </View>
                                <View style={styles.data}>
                                    <Text style={styles.text}>{item.tglTransaksi}</Text>
                                </View>

                            </View>
                        <View style={{flexDirection: "row"}}>
                            <View style={{flex: 0.5}}>
                            <TouchableOpacity
                                activeOpacity={0.5}
                                onPress={this.GetIDFunction.bind(
                                    this, item.id,
                                    item.nik,
                                    item.noBuku, 
                                    item.nama,
                                    item.tglTransaksi,
                                    item.jenis, 
                                    item.jumlah
                                 )}
                                style={styles.button}>

                                <Text style={styles.buttonText}>Edit Transaksi</Text>
                            </TouchableOpacity>
                            </View>
                            <View style={{flex: 0.5}}>
                            <TouchableOpacity
                                activeOpacity={0.5}
                                style={styles.button2}
                                onPress={() => Alert.alert(
                                    'Hapus Data',
                                    'Yakin Ingin menghapus ' + item.noBuku + ' '+ item.jenis +' ?',
                                    [
                                        { text: 'Batal', onPress: () => console.log('Cancel ditekan'), style: 'cancel' },
                                        {
                                            text: 'OK', onPress: () => this.setState({ ActivityIndicator_Loading: true }, () => {
                                                fetch('http://api.wahanawar.com/hapusTransaksi.php',
                                                    {
                                                        method: 'POST',
                                                        headers:
                                                            {
                                                                'Accept': 'application/json',
                                                                'Content-Type': 'application/json',
                                                            },
                                                        body: JSON.stringify(
                                                            {
                                                                id: item.id,
                                                            })

                                                    }).then((response) => response.json()).then((responseJsonFromServer) => {
                                                        alert(responseJsonFromServer);
                                                        this.props.navigation.navigate('TransaksiScreen')
                                                        this.setState({ ActivityIndicator_Loading: false });

                                                    }).catch((error) => {
                                                        console.error(error);
                                                        this.setState({ ActivityIndicator_Loading: false });

                                                    });
                                            })
                                        },
                                    ],
                                    { cancelable: true }
                                )}
                                >
                                <Text style={styles.buttonText}>Hapus Transaksi</Text>
                            </TouchableOpacity>
                            </View>
                        </View>
                               
                    </View>                
                    }
                />
                
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
    button2: {
    marginTop: 10,
    backgroundColor: "#D50000",
    marginBottom: 40,
    borderRadius: 7,
    paddingVertical: 10,
    marginHorizontal: 20
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 18,
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
    height: 50,
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