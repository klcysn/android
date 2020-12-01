import React, { useEffect, useState } from "react";
import {SafeAreaView, Text, FlatList} from "react-native"
import styles from "../../styles"
import AsyncStorage from '@react-native-async-storage/async-storage';

const Learned = (props) =>{
    const [data, setData] = useState()
    
    const getData = async () => {
        try {
        const jsonValue = await AsyncStorage.getItem('@learned')
        setData(jsonValue != null ? JSON.parse(jsonValue) : null);
        } catch(e) {
        alert(e)
        }
    }
    useEffect(()=>{
        getData()
    },[])
        const renderItem = ({item}) =>{
            return <Text>{item.word}</Text>
        }
        return(
            <SafeAreaView>
                <Text>sdfds</Text>
                <FlatList
                keyExtractor={(_, index)=>index.toString()}
                data={data}
                renderItem={renderItem}
                />
            </SafeAreaView>
        )
}

export default Learned;