import React, {useEffect, useState} from 'react';
import {Button, ModalComponent} from "../component"
import {SafeAreaView, Text,Platform, Image,TouchableOpacity, View, Share} from "react-native"
import styles from "../styles"
import {useDispatch, useSelector} from "react-redux"
import axios from "axios"

export const Statistics =(props)=>{
    const [deaths, setDeaths]=useState({new : 0, total : 0})
    const [test,setTest]= useState({total : 0})
    const dispatch = useDispatch()
    const {date} = props.route.params
    const country = useSelector(state=>state.country)
    const [data, setData]=useState({total : 0, active : 0, critical : 0, recovered : 0})
    const fetchData = async ()=>{
        const response = await axios({
            method: 'GET',
            url: 'https://rapidapi.p.rapidapi.com/history',
            params: {country: country, day: date},
            headers: {
              'x-rapidapi-key': 'WRITE YOUR API KEY HERE',
              'x-rapidapi-host': 'covid-193.p.rapidapi.com'
            }
          })
          setData(response.data.response[0].cases)
          setDeaths(response.data.response[0].deaths)
          setTest(response.data.response[0].tests)
          
          
    }

    useEffect(()=>{
        fetchData()
    },[])

    const onShare = async () => {
      try {
        const result = await Share.share({
          message:
            `Use corona information app to learn ${country}'s corona informations`,
        });
       
      } catch (error) {
        alert(error.message);
      }
    };
   
      
    return(
        <SafeAreaView style={{flex : 1, padding : 10, backgroundColor : "white"}}>
          <Text style={styles.statisticsCountry}>{country}</Text>
          <Text style={styles.statisticsDate}>Date:{date}</Text>
          <View
          style={[styles.statisticsCard, {width : "100%", backgroundColor : "#9b0000"}]}>
            <Text style={styles.statisticsText}>Recovered : {(data.recovered*100/data.total).toFixed(3)}%</Text>
          </View>
            <View style={{flexDirection :"row", justifyContent : "space-between"}}>
              <View style={{width : "25%"}}>
                <View
                style={[styles.statisticsCard, {width : "100%", backgroundColor : "#7f0000"}]}>
                  <Text style={styles.statisticsText}>Active : {(data.active*100/data.total).toFixed(3)}%</Text>
                </View>
                <View
                style={[styles.statisticsCard, {width : "100%", backgroundColor : "#d50000"}]}>
                  <Text style={styles.statisticsText}>Critical : {(data.critical*100/data.total).toFixed(3)}%</Text>
                </View>
                <View
                style={[styles.statisticsCard, {width : "100%", backgroundColor:"#c50e29"}]}>
                  <Text style={styles.statisticsText}>New : {(data.new*100/data.total).toFixed(3)}%</Text>
                </View>
              </View>
              <View style={styles.nuberContainer}>
              <Text style={styles.statisticsNumber}>Total : {data.total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Text>
              <Text style={styles.statisticsNumber}>Recovered : {data.recovered.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Text>
              <Text style={styles.statisticsNumber}>Active : {data.active.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Text>
              <Text style={styles.statisticsNumber}>critical : {data.critical}</Text>
              <Text style={styles.statisticsNumber}>New : {data.new}</Text>
              </View>
          </View>
          <View style={{alignItems : "center"}}>
            <Button name="Select Country" onPressed={()=>props.navigation.goBack()} />
            <Button name="Details" onPressed={()=>dispatch({type:"CHANGEMODAL", payload:{show:true}})} />
          </View>

          <ModalComponent death={deaths} test={test} date={date} />
          <TouchableOpacity style={styles.shareContainer} onPress={onShare}>
            <Image style={styles.shareImage} source={{uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSJdx6ae8uItsjBRiUOaQRzV-3s6iP439Gf7Q&usqp=CAU"}} />
          </TouchableOpacity>
          
        </SafeAreaView>
    )
}