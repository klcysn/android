import React, { useEffect, useState } from "react";
import {SafeAreaView, FlatList} from "react-native"
import AsyncStorage from '@react-native-async-storage/async-storage';
import {RenderWord} from "../components"
import { useIsFocused } from '@react-navigation/native';



const Unknown = (props) =>{
    const [data, setData] = useState()
    const [isPressed, setPressed] = useState(false)
    const [pressedWord, setPressedWord] = useState()
    const [updatedList, setUpdatedList] = useState([])

    const isFocused = useIsFocused();
    
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
    },[updatedList, isFocused])

    const pressed = (text) => {
        setPressedWord(text)
        setPressed(s => !s)
    }
    const deleted = async (text) =>{
        const filteredList = data.filter((item)=>item.word !== text)
        setUpdatedList(filteredList)
        try {
            const jsonValue = JSON.stringify([...updatedList])
            await AsyncStorage.setItem('@unknown', jsonValue)
          } catch (e) {
            alert(e)
          }
    }
        const renderItem = ({item}) => <RenderWord
        item={item}
        isPressed={pressedWord === item.word ? isPressed : false}
        onPress = {pressed}
        onDelete = {deleted}
        />
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