import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, 
    ActivityIndicator, KeyboardAvoidingView, Image, ScrollView, Alert,
    PixelRatio, Button, Modal } from "react-native";
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { Hideo, Sae, Fumi, Hoshi } from 'react-native-textinput-effects';
import ImagePicker from "react-native-image-picker";
import HeaderStyle from './header2';
import Icon from "react-native-ionicons";

class TambahNasabahScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
           nik: '',
           nama: '',
           alamat: '',
           tglLahir: '',
           noHp: '',
           jenisKelamin: '',
           ktp: '',
            srcImg: '',
            uri: '',
            fileName: '',
           
           ActivityIndicator_Loading: false,
        }
    }
    submitData = () => {
        this.uploadPicture();
        this.setState({ ActivityIndicator_Loading: true }, () => {
            fetch('http://api.wahanawar.com/addNasabah.php',
                {
                    method: 'POST',
                    headers:
                        {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json',
                        },
                    body: JSON.stringify(
                        {
                            nik: this.state.nik,
                            nama: this.state.nama,
                            alamat: this.state.alamat,
                            tglLahir: this.state.tglLahir,
                            noHp: this.state.noHp,
                            jenisKelamin: this.state.jenisKelamin,
                            ktp: 'http://api.wahanawar.com/img/' + this.state.ktp,
                        })

                }).then((response) => response.json()).then((responseJsonFromServer) => {
                    Alert.alert(responseJsonFromServer);
                    this.setState(
                        {
                            nik: '',
                            nama: '',
                            alamat: '',
                            tglLahir: '',
                            noHp: '',
                            jenisKelamin: '',
                            ktp: '',
                            ActivityIndicator_Loading: false
                        });

                }).catch((error) => {
                    console.error(error);

                    this.setState({ ActivityIndicator_Loading: false });
                });
        });
    }
    submitAllData = () => {

        this.submitData();
    }
    choosePicture = () => {
        console.log("upload")
        var ImagePicker = require('react-native-image-picker');
        var options = {
            title: 'Pilih Gambar',
            storageOptions: {
                skipBackup: true,
                path: 'images'
            }
        };

        ImagePicker.showImagePicker(options, (response) => {
            console.log('Response = ', response);
            if (response.didCancel) {
                console.log('User cancelled image picker');
            }
            else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            }
            else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            }
            else {
                let source = { uri: response.uri };
                console.log(source);
                console.log(response.fileName);
                this.setState({
                    srcImg: source,
                    uri: response.uri,
                    fileName: response.fileName,
                    ktp: response.fileName,
                });
            }
        });
    };

    uploadPicture = () => {
        console.log('mulai upload');
        this.setState({ loading: true })

        const data = new FormData();
        //data.append('name', 'Fotoku'); // you can append anyone.
        data.append('fileToUpload', {
            uri: this.state.uri,
            type: 'image/jpeg', // or photo.type
            name: this.state.fileName,
        });
        const url = "https://api.wahanawar.com/uploadimg.php"
        fetch(url, {
            method: 'post',
            body: data
        })
            .then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson);
                this.setState({
                    loading: false
                })
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
                        TAMBAH NASABAH</Text>
                    </View>
                </View>

                  
                <ScrollView>
                    
                    <Hoshi
                        label={'NIK Nasabah'}
                        borderColor={'#fff'}
                        inputStyle={{ color: '#000' }}
                        labelStyle={{ color: '#000' }}
                        style={{ marginBottom: 5 }}
                        onChangeText={(TextInputText) => this.setState({ nik: TextInputText })}
                        value={this.state.nik}
                    />
                    <Hoshi
                        label={'Nama Nasabah'}
                        borderColor={'#fff'}
                        inputStyle={{ color: '#000' }}
                        labelStyle={{ color: '#000' }}
                        style={{ marginBottom: 5 }}
                        onChangeText={(TextInputText) => this.setState({ nama: TextInputText })}
                        value={this.state.nama}
                    />
                    <Hoshi
                        label={'Alamat Nasabah'}
                        borderColor={'#fff'}
                        inputStyle={{ color: '#000' }}
                        labelStyle={{ color: '#000' }}
                        style={{ marginBottom: 5 }}
                        onChangeText={(TextInputText) => this.setState({ alamat: TextInputText })}
                        value={this.state.alamat}
                    />
                    <Hoshi
                        label={'Tanggal Lahir Nasabah'}
                        borderColor={'#fff'}
                        inputStyle={{ color: '#000' }}
                        labelStyle={{ color: '#000' }}
                        style={{ marginBottom: 5 }}
                        onChangeText={(TextInputText) => this.setState({ tglLahir: TextInputText })}
                        value={this.state.tglLahir}
                    />
                    <Hoshi
                        label={'Jenis Kelamin'}
                        borderColor={'#fff'}
                        inputStyle={{ color: '#000' }}
                        labelStyle={{ color: '#000' }}
                        style={{ marginBottom: 5 }}
                        onChangeText={(TextInputText) => this.setState({ jenisKelamin: TextInputText })}
                        value={this.state.jenisKelamin}
                    />
                    <Hoshi
                        label={'NO HP'}
                        borderColor={'#fff'}
                        inputStyle={{ color: '#000' }}
                        labelStyle={{ color: '#000' }}
                        style={{ marginBottom: 5 }}
                        onChangeText={(TextInputText) => this.setState({ noHp: TextInputText })}
                        value={this.state.noHp}
                    />

                    {
                        (this.state.loading === true) &&
                        (
                            <Modal
                                animationType="none"
                                transparent={true}
                                visible={this.state.loading}
                                onRequestClose={() => {
                                    alert('Modal has been closed.');
                                }}
                            >
                                <ActivityIndicator
                                    animating={true}
                                    style={styles.indicator}
                                    size="large"
                                />
                            </Modal>
                        )
                    }

                    <View style={styles.conPreview} >
                        {(this.state.srcImg != '') &&
                            (<Image source={this.state.srcImg} style={styles.uploadAvatar} />)
                        }
                    </View>

                    <Button
                        onPress={
                            () => this.choosePicture()
                        }
                        title="Upload KTP"
                    />
                        
                </ScrollView>

                <TouchableOpacity
                    activeOpacity={0.5}
                    style={styles.button}
                    onPress={this.submitAllData}>
                    <Text style={styles.buttonText}>Tambah Nasabah</Text>
                </TouchableOpacity>
            </View>
            
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
    ImageContainer: {
        borderRadius: 10,
        width: 250,
        height: 200,
        borderColor: "#2196F3",
        borderWidth: 1 / PixelRatio.get(),
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: 'rgba(255,255,255, .4)'

    },
    conPreview: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    uploadAvatar: {
        height: 400,
        width: 400
    },
});