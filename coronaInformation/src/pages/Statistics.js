import React, {useEffect, useState} from 'react';
import {Button} from "../component"
import {SafeAreaView, Text,Platform, Image,TouchableOpacity, View} from "react-native"
import styles from "../styles"
import {useDispatch, useSelector} from "react-redux"
import axios from "axios"





export const Statistics =(props)=>{
    const date = useSelector(state=>state.date)
    const country = useSelector(state=>state.country)
    const [data, setData]=useState({
        value: 100,
        label: 'Template',
        color: 'red',
      }, )
    const fetchData = async ()=>{
        const response = await axios({
            method: 'GET',
            url: 'https://rapidapi.p.rapidapi.com/history',
            params: {country: "Turkey", day: "2020-11-03"},
            headers: {
              'x-rapidapi-key': '249c7f5415msh85ea684a8ffaeadp112026jsn8e8bcb1ec492',
              'x-rapidapi-host': 'covid-193.p.rapidapi.com'
            }
          })
          setData(response.data.response[0].cases)
          console.log(response.data.response[0].cases)
          
    }

    useEffect(()=>{
        fetchData()
    },[])
    console.log(data)
   
      
    return(
        <SafeAreaView style={{flex : 1, padding : 10}}>
          
          <View
          style={{width : `${data.recovered*100/data.total}%`,
          backgroundColor : "red",
          padding:10,
          borderRadius : 30,
          marginBottom : 10 }}>
            <Text style={{color : "white", fontSize : 10, fontWeight : "bold", textAlign:"center"}}>Recovered : {Math.floor(data.recovered*100/data.total)}%</Text>
          </View>
          <View
          style={{width : `${data.active*350/data.total}%`,
          backgroundColor : "red",
          padding:10,
          borderRadius : 30,
          marginBottom : 10 }}>
            <Text style={{color : "white", fontSize : 10, fontWeight : "bold", textAlign:"center"}}>Active : {Math.floor(data.active*100/data.total)}%</Text>
          </View>
          <View
          style={{width : `${data.critical*3500/data.total}%`,
          backgroundColor : "red",
          padding:10,
          borderRadius : 30,
          marginBottom : 10 }}>
            <Text style={{color : "white", fontSize : 10, fontWeight : "bold", textAlign:"center"}}>Critical : {Math.round(data.critical*100/data.total)}%</Text>
          </View>
          <View
          style={{width : `${data.new*3500/data.total}%`,
          backgroundColor : "red",
          padding:10,
          borderRadius : 30,
          marginBottom : 10 }}>
            <Text style={{color : "white", fontSize : 10, fontWeight : "bold", textAlign:"center"}}>New : {Math.round(data.new*100/data.total)}%</Text>
          </View>
          
        </SafeAreaView>
    )
}