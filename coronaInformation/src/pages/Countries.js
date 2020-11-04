import * as React from 'react';
import {SafeAreaView, Image, FlatList,ActivityIndicator, Text, View} from "react-native"
import styles from "../styles"
import axios from "axios"
import { TouchableOpacity } from 'react-native-gesture-handler';
import {Input} from "../component/Input"
import {useDispatch} from "react-redux"

export const Countries =(props)=>{
    const [countries, setCountries]=React.useState([])
    const [newCountries, setNewCountries]=React.useState(countries)
    const [loading, setLoading]=React.useState(true)
    const dispatch=useDispatch()
    React.useEffect(()=>{
        fetchCountries()
    },[])
    const fetchCountries = async ()=>{
        const response = await axios({
            method: 'GET',
            url: 'https://rapidapi.p.rapidapi.com/countries',
            headers: {
              'x-rapidapi-key': 'WRITE YOUR API KEY HERE',
              'x-rapidapi-host': 'covid-193.p.rapidapi.com'
            }
          })
          setCountries(response.data.response)
          setNewCountries(response.data.response)
          setLoading(false)
    }
    const renderItem=({item})=>{
        return(
            <TouchableOpacity style={styles.countryContainer} onPress={()=>{
                dispatch({type : "SETCOUNTRY", payload:{country:item}})
                props.navigation.navigate("Select")
            }}>
                <Text style={styles.countryText}>{item}</Text>
            </TouchableOpacity>
        )
    }
    const filter=(text)=>{
        const list = countries.filter((item)=>{
            const newText= text.toUpperCase()
            const country = item.toUpperCase()
            return(
                country.includes(newText)
            )
        })
        setNewCountries([...list])
    }
    return(
        <SafeAreaView>
            <Input placeholder="Search country" onChanged={(text)=>filter(text)}/>
            <View>
                {
                    loading
                    ?
                    <ActivityIndicator color="#80C341" size={300}/>
                    : 
                    <FlatList 
                    data={newCountries}
                    renderItem={renderItem}
                    keyExtractor={(_, index)=>index.toString()}
                    />
                }
            </View>
        </SafeAreaView>
    )
}