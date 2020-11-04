import * as React from 'react';
import {SafeAreaView, Image, KeyboardAvoidingView, View} from "react-native"
import {Input, Button} from "../component"
import styles from "../styles"
import auth from '@react-native-firebase/auth';


export const Login=(props)=>{
    const [mail, setMail]=React.useState("")
    const [password, setPassword]=React.useState("")

    const LoginFunction=()=>{
        auth()
  .signInWithEmailAndPassword(mail, password)
  .then(() => {
    props.navigation.navigate("Select")
  })
  .catch(error => {
    if (error.code === 'auth/email-already-in-use') {
      alert('That email address is already in use!');
    }

    if (error.code === 'auth/invalid-email') {
      alert('That email address is invalid!');
    }
    alert(error.code)
  });
    }
    return(
        <KeyboardAvoidingView style={{flex : 1}}>
            <SafeAreaView style={styles.loginContainer}>
                <View style={styles.inputContainer}>
                    <Input placeholder= "Please enter your mail" type="email-address" password = {false} onChanged={(text)=>setMail(text)} />
                    <Input placeholder = "Please enter your password" type = "default" password = {true} onChanged={(text)=>setPassword(text)} />
                    <Button name="Login" onPressed={LoginFunction} />
                </View>
                <Image style={styles.loginImage} source={{uri : "https://www.abt.at/wp-content/uploads/2020/05/Sprache-Corona.png"}}/>
            </SafeAreaView>
        </KeyboardAvoidingView>
    )
}