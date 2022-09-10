import { StyleSheet, Text, TextInput, View, TouchableOpacity, Alert, Modal } from 'react-native'
import React, { useState } from 'react';
import TouchID from 'react-native-touch-id';


const BiometricScreen = () => {

    const optionalConfigObject = {
        title: 'Authentication Required', // Android
        imageColor: '#e00606', // Android
        imageErrorColor: '#ff0000', // Android
        sensorDescription: 'Touch sensor', // Android
        sensorErrorDescription: 'Failed', // Android
        cancelText: 'Cancel', // Android
        fallbackLabel: 'Show Passcode', // iOS (if empty, then label is hidden)
        unifiedErrors: false, // use unified error messages (default false)
        passcodeFallback: false, // iOS - allows the device to fall back to using the passcode, if faceid/touch is not available. this does not mean that if touchid/faceid fails the first few times it will revert to passcode, rather that if the former are not enrolled, then it will use the passcode.
      };

    const touchHandler=async()=>{
        TouchID.isSupported(optionalConfigObject)
        .then(biometryType => {
            // Success code
            if (biometryType === 'FaceID') {
                console.log('FaceID is supported.');
            } else {
                console.log('TouchID is supported.');
                TouchID.authenticate('', optionalConfigObject)
                .then(success => {
                    Alert.alert('Authenticated Successfully');
                })
                .catch(error => {
                    Alert.alert('Authentication Failed');
                });
            }
        })
        .catch(error => {
            // Failure code
            console.log(error);
        });
    }

  return (
    <View style={styles.screen}>
        <View style={styles.view}>
            <Text style={{color:"#FFFFFF", fontSize:30, fontWeight:"bold", textAlign:"center"}}>Biometric Authentication</Text>
            <View style={{margin:20, marginTop:50}}>
                <Text style={{fontSize:18, color:"#FFFFFF", fontWeight:"bold", marginVertical:30, marginTop:"40%", textAlign:"center"}}>Please click on the below button for biometric authentication</Text>
            </View>
            <TouchableOpacity activeOpacity={0.8}
                style={styles.button}
                onPress={touchHandler}
            >
                <Text style={{fontSize:15, color:"#FFFFFF", fontWeight:"bold"}}>Press</Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}

export default BiometricScreen

const styles = StyleSheet.create({
    screen:{
        backgroundColor:"#1a1c19",
        flex:1,
        width:"100%"
    },
    view:{
        marginTop:"30%",
        alignSelf:"center",
        width:"100%"
    },
    button:{
        borderRadius:10,
        backgroundColor:"#0da479",
        padding:10,
        width:"90%",
        alignItems:"center",
        alignSelf:"center"
    }
})