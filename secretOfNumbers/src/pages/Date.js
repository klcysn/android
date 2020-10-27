import axios from "axios";
import React, {useState, useEffect} from "react";
import {SafeAreaView, Text, TouchableOpacity, View, KeyboardAvoidingView, ScrollView, ActivityIndicator} from "react-native";
import styles from "../styles"
import Button from "../component/Button" 
import Input from "../component/Input";


const Date =(props)=>{
    const [data, setData] = useState("")
    const [inputData, setInputData] = useState(null)
    const [isLoading, setLoading] = useState(true)
    const fetchData = async ()=>{
        const trivia = await axios.get(`http://numbersapi.com/${inputData == null ? "random" : inputData}/date?json`)
        setData(trivia.data)
        setLoading(false)
    }
    useEffect(()=>{
        fetchData()
    },[])
    return(
        <KeyboardAvoidingView style={{flex : 1}}>
            <SafeAreaView style={styles.container}>
                
                    <TouchableOpacity style={styles.menuButton} onPress={()=>props.navigation.openDrawer()}>
                        <Text style={styles.menuText}>Menu</Text>
                    </TouchableOpacity>
                    <ScrollView>
                        <View style={styles.textContainer}>
                        {isLoading ? <ActivityIndicator color = "red" size={200} /> : <Text style={styles.text}>{data.text}</Text>}
                        </View>
                    </ScrollView>
                    <Input placeholder ={"Enter a date..."} input ={(text)=>setInputData(text)} submit ={()=>{
                        fetchData()
                        setInputData(null)
                        }} />
                    <Button random={()=>fetchData()}/>
                
            </SafeAreaView>
        </KeyboardAvoidingView>
    )
}

export {Date};