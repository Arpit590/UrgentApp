import { StyleSheet, Text, TextInput, View, TouchableOpacity, Alert, Modal, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';

const SignupScreen = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [openModal, setOpenModal] = useState(false);
    const navigation = useNavigation();

    const signupHandler=()=>{
        console.log("helo" + email + password + confirmPassword);
        if(email!=="" && password!=="" && confirmPassword!==""){
            if(!/^\S+@\S+\.\S+$/i.test(email) || email.length > 255){
                setError(true);
                Alert.alert("Oops! You Haven't Entered Valid Email!")
            }
            else{
                if(password!==confirmPassword){
                    setError(true);
                    Alert.alert("Oops! Password Didn't Match!")
                }else{
                    console.log("Success");
                    setOpenModal(true)
                }
            }
        }else{
            if(email===""){
                setError(true);
                Alert.alert("Oops! You Haven't Entered Email!")
            }else if(password===""){
                setError(true);
                Alert.alert("Oops! You Haven't Entered Password!")
            }else if(confirmPassword===""){
                setError(true);
                Alert.alert("Oops! You Haven't Entered Confirm Password!")
            }
        }
    }

    const homeHandler=()=>{
        navigation.navigate("Home", {"password": password});
        setOpenModal(false);
    }

    const biometricHandler=()=>{
        navigation.navigate("Biometric", {"password": password});
        setOpenModal(false);
    }

  return (
    <View style={styles.screen}>
      <View style={styles.view}>
        <Text style={{color:"#FFFFFF", fontSize:30, fontWeight:"bold", textAlign:"center"}}>Sign Up</Text>
        <ScrollView showsVerticalScrollIndicator={false} style={{margin:20, marginTop:50, marginBottom:100}}>
            <View style={{marginBottom:20, alignSelf:"flex-start", width:"100%"}}>
                <Text style={{color:"#FFFFFF", fontSize:16, fontWeight:"bold"}}>Email</Text>
                <TextInput
                placeholder='Enter your Email'
                value={email}
                keyboardType="email-address"
                onChangeText={(text)=>setEmail(text)}
                style={styles.box}
                />
            </View>
            <View style={{marginBottom:20, alignSelf:"flex-start", width:"100%"}}>
                <Text style={{color:"#FFFFFF", fontSize:16, fontWeight:"bold"}}>Password</Text>
                <TextInput
                placeholder='Enter your password'
                value={password}
                secureTextEntry={true}
                onChangeText={(text)=>setPassword(text)}
                style={styles.box}
                />
            </View>
            <View style={{marginBottom:20, alignSelf:"flex-start", width:"100%"}}>
                <Text style={{color:"#FFFFFF", fontSize:16, fontWeight:"bold"}}>Confirm Password</Text>
                <TextInput
                placeholder='Enter your confirm password'
                value={confirmPassword}
                secureTextEntry={true}
                onChangeText={(text)=>setConfirmPassword(text)}
                style={styles.box}
                />
            </View>
        </ScrollView>
      </View>
      <TouchableOpacity
       activeOpacity={0.8}
       style={styles.button}
       onPress={signupHandler}
      >
         <Text style={{color:"#FFFFFF", fontSize:20, fontWeight:"bold"}}>Sign Up</Text>
      </TouchableOpacity>
      <Modal
      animationType='fade'
      visible={openModal}
      transparent={true}
      onRequestClose={()=>setOpenModal(false)}
      >
        <View style={{backgroundColor:"white", borderRadius:10, padding:20, width:"90%", alignSelf:"center", position:"absolute", top:"40%"}}>
            <Text style={{fontSize:18, color:"#000000", fontWeight:"bold", textAlign:"center", marginBottom:30}}>Do you want to add biometric login?</Text>
            <View style={{flexDirection:"row", alignItems:"center", justifyContent:"space-between", marginHorizontal:20}}>
                <TouchableOpacity 
                onPress={homeHandler}
                activeOpacity={0.8}
                style={{backgroundColor:"white", borderRadius:10, borderWidth:1, padding:10, paddingHorizontal:30}}>
                    <Text style={{fontSize:15, color:"#000000", fontWeight:"bold", textAlign:"center"}}>No</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                onPress={biometricHandler}
                activeOpacity={0.8}
                style={{backgroundColor:"#0da479", borderRadius:10, borderWidth:1, padding:10, paddingHorizontal:30}}>
                    <Text style={{fontSize:15, color:"#FFFFFF", fontWeight:"bold", textAlign:"center"}}>Yes</Text>
                </TouchableOpacity>
            </View>
        </View>
      </Modal>
    </View>
  )
}

export default SignupScreen

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
    box:{
        borderWidth:1, 
        marginTop:10,
        borderColor:"#FFFFFF",
        borderRadius:10,
        padding:10,
        color:"#FFFFFF",
        fontSize:15
    },
    button:{
        position: "absolute",
        bottom:"3%",
        borderRadius:10,
        backgroundColor:"#0da479",
        padding:10,
        width:"90%",
        alignItems:"center",
        alignSelf:"center"
    }
})