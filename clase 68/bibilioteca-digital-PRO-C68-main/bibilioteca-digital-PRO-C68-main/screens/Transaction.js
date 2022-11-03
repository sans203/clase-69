import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default class TransactionScreen extends Component {
constructor(prop){
  super(prop);
  this.state={
    domState:"normal",
    hasCamaraPermission:null,
    scanned:false,
    scannedData:""  
  }
}
  render() {
  const{domState,hasCamaraPermission,scanned,scannedData}=this.state
    return (
      <View style={styles.container}>
        <Text style={styles.text}>{hasCamaraPermission? scannedData: "solicitar permiso de la camara"}</Text>
        <TouchableOpacity>
          <Text>escanear codigo QR</Text>
      </TouchableOpacity>
        <Text style={styles.text}>Pantalla de transacción</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#5653D4"
  },
  text: {
    color: "#ffff",
    fontSize: 30
  }
});
