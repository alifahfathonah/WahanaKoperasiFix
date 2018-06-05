import React, { Component } from "react";
import { StackNavigator, TabNavigator, TabBarBottom } from "react-navigation";
import Icon from "react-native-ionicons";

import LoginScreen from "./src/login";
import HomeScreen from "./src/home";
import NasabahScreen from "./src/nasabah";
import TambahNasabahScreen from "./src/tambahUser";
import TambahTransaksiScreen from "./src/TambahTransaksi";
import DetailScreen from "./src/DetailNasabah";
import PeminjamanScreen from "./src/addDataPeminjaman";
import DataPeminjaman from "./src/dataPeminjaman";
import DetailPinjam from "./src/DetailPinjam";
import RekeningScreen from "./src/addDataRekBaru";
import DataRekening from "./src/dataBukuRekening";
import DetailRekening from "./src/DetailRekening";
import TransaksiScreen from "./src/transaksi";
import DetailTransaksi from "./src/DetailTransaksi";
import addTransaksi from "./src/addDataTransaksi";
import addAngsuran from "./src/addDataAngsuran";
import detailAngsur from "./src/DetailAngsur";
import DataAngsur from "./src/dataAngsur";
import editAngsur from "./src/editDataAngsuran";
import editTransaksi from "./src/editDataTransaksi";
import MapScreen from "./src/maps";

export default class APP extends React.Component {
  render() {
    return (
       <AppRouter />
    )
  }
}

const LoginStack = StackNavigator({
  LoginScreen: {screen: LoginScreen},
},{
  navigationOptions: {
    header: null,
  }
});

const HomeStack = StackNavigator(
  {
    HomeScreen: { screen: HomeScreen },
   
  },
  {
    navigationOptions: {
      header: null
    }
  }
);

const NasabahStack = StackNavigator({
  NasabahScreen: {screen: NasabahScreen},
  
},{
  navigationOptions:{
    header: null,
  }
});
const TambahNasabahStack = StackNavigator({
  TambahNasabahScreen: { screen: TambahNasabahScreen },
}, {
    navigationOptions: {
      header: null,
    }
  });
const TambahTransaksiStack = StackNavigator({
  TambahTransaksiScreen: { screen: TambahTransaksiScreen },
  

}, {
    navigationOptions: {
      header: null,
    }
  });

const ScreenTabs = TabNavigator(
  {
    Home: { screen: HomeStack },
    Nasabah: { screen: NasabahStack },
    Transaksi : {screen: TambahTransaksiStack},
    Baru : {screen: TambahNasabahStack},
    Maps : {screen: MapScreen},
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === "Home") {
          iconName = "md-home";
        } else if (routeName === "Nasabah") {
          iconName = "md-people";
        } else if (routeName === "Transaksi") {
          iconName = "md-add";
        } else if (routeName === "Baru") {
          iconName = "md-person-add";
        }else if (routeName === "Maps") {
          iconName = "md-compass";
        }
        return <Icon android={iconName} size={25} color={tintColor} />;
      }
    }),
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    tabBarOptions: {
      activeTintColor: "#000",
      inactiveTintColor: "#fff",
      style: {
        backgroundColor: "#00BCD4"
      }
    },
    animationEnabled: true,
    swipeEnabled: true
  }
);

  export const AppRouter = StackNavigator(
    {
      Login : {screen: LoginStack},
      Tabs : {screen: ScreenTabs},
      DataPeminjaman: { screen: DataPeminjaman },
      DetailPinjam: { screen: DetailPinjam },
      Details: { screen: DetailScreen },
      addPeminjamanScreen: { screen: PeminjamanScreen },
      RekeningScreen: { screen: RekeningScreen },
      DataRekening: { screen: DataRekening},
      DetailRekening: { screen: DetailRekening },
      TransaksiScreen: {screen: TransaksiScreen},
      DetailTransaksi: {screen: DetailTransaksi},
      addTransaksi: {screen: addTransaksi},
      addAngsuran: {screen: addAngsuran},
      detailAngsur : { screen: detailAngsur },
      DataAngsur: {screen: DataAngsur},
      editAngsur: {screen: editAngsur},
      editTransaksi: {screen: editTransaksi}
    },
    {
      navigationOptions: 
      {
        header: null,
        gesturesEnabled: false
      }
    }
  );