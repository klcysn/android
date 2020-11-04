import * as React from 'react';
import {SafeAreaView, Image, KeyboardAvoidingView, View} from "react-native"
import {Input, Button} from "../component"
import styles from "../styles"
import auth from '@react-native-firebase/auth';

export const SignUp =(props)=>{
    const [mail, setMail]=React.useState("")
    const [password, setPassword]=React.useState("")
    const SignUpFunction =()=>{
        auth()
  .createUserWithEmailAndPassword(mail, password)
  .then(() => {
    alert('User account created & signed in!');
  })
  .catch(error => {
    if (error.code === 'auth/email-already-in-use') {
      alert('That email address is already in use!');
    }

    if (error.code === 'auth/invalid-email') {
      alert('That email address is invalid!');
    }
    alert(error)
  });
    }

    return(
        <KeyboardAvoidingView style={{flex : 1}}>
            <SafeAreaView style={styles.loginContainer}>
                <View style={styles.inputContainer}>
                    <Input placeholder= "Please enter your mail" type="email-address" password = {false} onChanged={(text)=>setMail(text)} />
                    <Input placeholder = "Please enter your password" type = "default" password = {true} onChanged={(text)=>setPassword(text)} />
                    <Button name="Sign Up" onPressed={SignUpFunction} />
                </View>
                <Image style={styles.loginImage} source={{uri : "https://www.abt.at/wp-content/uploads/2020/05/Sprache-Corona.png"}}/>
            </SafeAreaView>
        </KeyboardAvoidingView>
    )
}