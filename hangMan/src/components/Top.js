import React from "react"
import {Text, View} from "react-native"
import styles from "../styles"

const Top = ()=>{
   return(
        <View style = {styles.topContainer}>
            <Text style ={styles.topText}>If you can't find, man will be hanged!</Text>
        </View>
   )
}

export {Top};