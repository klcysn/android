import React, {useState} from 'react';
import {Button} from "../component"
import {SafeAreaView, Text,Platform, Image,TouchableOpacity} from "react-native"
import styles from "../styles"
import {useDispatch, useSelector} from "react-redux"
import DateTimePicker from '@react-native-community/datetimepicker';

export const Select=(props)=>{
    const country = useSelector(state=>state.country)
    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
    const dateModifiedList = date.toLocaleDateString().split(".").reverse()
    const dateModified = dateModifiedList.join("-")
    const dispatch = useDispatch()

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);
      };
    
      const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
      };
    
      const showDatepicker = () => {
        showMode('date');
      };
    return(
        <SafeAreaView style={styles.selectContainer}>
            <Text style={styles.selectText}>{country == "" ? null : `Country : ${country}`}</Text>
            <Text style={styles.selectText}>{date == "" ? null : `Date : ${dateModified}`}</Text>
            <Button
            name="Select Country"
            onPressed={()=>props.navigation.navigate("countries")}/>

            <Button name = "Select Date" onPressed={()=>{
                showDatepicker()
                dispatch({type : "SETDATE", payload : {date : dateModified}})
                }} />
            {show && (
                <DateTimePicker
                testID="dateTimePicker"
                value={date}
                mode={mode}
                is24Hour={true}
                display="spinner"
                onChange={onChange}
                maximumDate={new Date()}
                neutralButtonLabel="clear"
                />
            )}
            <TouchableOpacity
            style={styles.selectButton}
            onPress={()=>props.navigation.navigate("Statistics")}
            >
              <Image
              style={[styles.loginImage, {width : "60%", marginTop : 40}]}
              source={{uri : "https://www.abt.at/wp-content/uploads/2020/05/Sprache-Corona.png"}}/>
            </TouchableOpacity>
        </SafeAreaView>
    )
}