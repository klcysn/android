import * as React from 'react';
import {SafeAreaView, Image} from "react-native"
import {Input, Button} from "../component"
import styles from "../styles"


export const LoginPage = (props)=>{
    return(
        <SafeAreaView style={styles.loginContainer}>
            <Image style={styles.loginImage} source={{uri : "https://www.abt.at/wp-content/uploads/2020/05/Sprache-Corona.png"}}/>
            <Input placeholder= "Please enter your mail" />
            <Input placeholder = "Please enter your password" />
            <Button name="Login" />
            <Button name="Sign Up" />
        </SafeAreaView>
    )
}