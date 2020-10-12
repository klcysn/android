import React from 'react';
import {
  View,
  Button,
  ScrollView,
  Linking,
  Text
} from 'react-native';

const MainList = () => {

    return(
        <ScrollView horizontal ={true} style = {{
            backgroundColor : "#18ffff"
        }}>
            <View style ={{flexDirection : "row",justifyContent : "space-between", alignItems : "center", padding : 7}}>
                <View style={{marginLeft : 20}}>
                    <Text
                    style ={{fontSize : 15}}
                    onPress ={()=>{Linking.openURL("https://www.amazon.com/amazonprime?_encoding=UTF8&%2AVersion%2A=1&%2Aentries%2A=0")}}>Prime</Text>
                </View>
                <View style={{marginLeft : 70}}>
                    <Text
                    style ={{fontSize : 15}}
                    onPress ={()=>{Linking.openURL("https://www.amazon.com/amazonprime?https://www.amazon.com/gp/help/customer/display.html?nodeId=GYASCW9JH26A47T2=UTF8&%2AVersion%2A=1&%2Aentries%2A=0")}}>Alexa Lists</Text>
                </View>
                <View style={{marginLeft : 70}}>
                    <Text
                    style ={{fontSize : 15}}
                    onPress ={()=>{Linking.openURL("https://www.https://www.amazon.com/Amazon-Video/b?ie=UTF8&node=2858778011.com/amazonprime?_encoding=UTF8&%2AVersion%2A=1&%2Aentries%2A=0")}}>Video</Text>
                </View>
                <View style={{marginLeft : 60}}>
                    <Text
                    style ={{fontSize : 15}}
                    onPress ={()=>{Linking.openURL("https://www.amazon.com/amazonprime?https://music.amazon.com/home=UTF8&%2AVersion%2A=1&%2Aentries%2A=0")}}>Music</Text>
                </View>
            </View>
        </ScrollView>
    )
}

export {MainList};