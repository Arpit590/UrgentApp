import { StyleSheet, Text, TextInput, View, TouchableOpacity, Alert, Modal, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import "../assets/accenture.png"
import { useRoute } from '@react-navigation/native'

const data = [
    {
        "id": "m1",
        "name": "Amazon",
        "imgSrc": `${require("../assets/amazon.jpg")}`,
        "password": "Amazon"
    },
    {
        "id": "m2",
        "name": "Netflix",
        "imgSrc": `${require("../assets/netflix.png")}`,
        "password": "Netflix"
    },
    {
        "id": "m3",
        "name": "Accenture",
        "imgSrc": `${require("../assets/accenture.png")}`,
        "password": "Accenture"
    },
    {
        "id": "m4",
        "name": "Infosys",
        "imgSrc": `${require("../assets/infosys.png")}`,
        "password": "Amazon"
    },
]

const HomeScreen = () => {
    const route = useRoute();
    const [companiesData, setCompaniesData] = useState([]);

    const dataHandler=()=>{
       let newData = data.filter((item)=> (route?.params?.password===item?.password))
       console.log("Data" +JSON.stringify(newData))
       setCompaniesData(newData);
    }
    useEffect(()=>{
        dataHandler();
    }, [])

    console.log("Routess" + JSON.stringify(companiesData) + route?.params?.password)

  return (
    <View style={styles.screen}>
        <View style={{padding:20}}>
            <Text style={{fontSize:25, color:"#FFFFFF", fontWeight:"bold", textAlign:"center"}}>Home</Text>
            <View style={{marginTop:"30%"}}>
                <Text style={{fontSize:20, color:"#FFFFFF", fontWeight:"bold", textAlign:"center", marginBottom:40}}>List of Companies</Text>
                {(companiesData?.length!==0) ?
                companiesData?.map((item, index)=>(
                    <View style={{flexDirection:"row", alignItems:"center", marginBottom:20}}>
                        <View style={{flexDirection:"row", alignItems:"center"}}>
                            <Text style={{fontSize:15, color:"#FFFFFF", fontWeight:"bold"}}>{index+1}</Text>
                            <Image
                            source={item.imgSrc}
                            style={{resizeMode:"contain", borderRadius:10, width:50, height:50, marginLeft:20}}
                            />
                        </View>
                        <Text style={{fontSize:25, color:"#FFFFFF", fontWeight:"bold", marginLeft:40}}>{item.name}</Text>
                     </View>
                ))
                :
                <Text style={{fontSize:20, color:"#FFFFFF", fontWeight:"bold", textAlign:"center", marginTop:"30%"}}>No List of Companies Found</Text>
                }
            </View>
        </View>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    screen:{
        backgroundColor:"#1a1c19",
        flex:1,
        width:"100%"
    }
})