import React, { useEffect, useState } from "react";
import {SafeAreaView, Text, FlatList, TouchableOpacity} from "react-native"
import styles from "../../styles"
import AsyncStorage from '@react-native-async-storage/async-storage';
import {RenderWord} from "../components"

const Unknown = (props) =>{
    const [data, setData] = useState()
    const [isPressed, setPressed] = useState(false)
    const [pressedWord, setPressedWord] = useState()
    
    const getData = async () => {
        try {
        const jsonValue = await AsyncStorage.getItem('@unknown')
        setData(jsonValue != null ? JSON.parse(jsonValue) : null);
        } catch(e) {
        alert(e)
        }
    }
    useEffect(()=>{
        getData()
    },[])

    const pressed = (text) => {
        setPressedWord(text)
        setPressed(s => !s)
    }
        const renderItem = ({item}) => <RenderWord item={item} isPressed={pressedWord === item.word ? isPressed : false} onPress={pressed} />
        return(
            <SafeAreaView>
                <FlatList
                keyExtractor={(_, index)=>index.toString()}
                data={data}
                renderItem={renderItem}
                />
            </SafeAreaView>
        )
}

export default Unknown;