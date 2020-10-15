import React from 'react';
import {
  View,
  Button,
  ScrollView,
  Linking,
  Text,
  TouchableOpacity
} from 'react-native';

const MainList = () => {

    return(
        <ScrollView horizontal ={true} showsHorizontalScrollIndicator={false} style = {{
            backgroundColor : "#18ffff"
        }}>
            <View style ={{flexDirection : "row",justifyContent : "space-between", alignItems : "center", padding : 7}}>
                <TouchableOpacity style={{marginLeft : 20, backgroundColor : "#18ffff"}}>
                    <Text
                    style ={{fontSize : 15}}
                    onPress ={()=>{Linking.openURL("https://www.amazon.com/amazonprime?_encoding=UTF8&%2AVersion%2A=1&%2Aentries%2A=0")}}>Prime</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{marginLeft : 70}}>
                    <Text
                    style ={{fontSize : 15}}
                    onPress ={()=>{Linking.openURL("https://www.amazon.com/amazonprime?https://www.amazon.com/gp/help/customer/display.html?nodeId=GYASCW9JH26A47T2=UTF8&%2AVersion%2A=1&%2Aentries%2A=0")}}>Alexa Lists</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{marginLeft : 70}}>
                    <Text
                    style ={{fontSize : 15}}
                    onPress ={()=>{Linking.openURL("https://www.https://www.amazon.com/Amazon-Video/b?ie=UTF8&node=2858778011.com/amazonprime?_encoding=UTF8&%2AVersion%2A=1&%2Aentries%2A=0")}}>Video</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{marginLeft : 70}}>
                    <Text
                    style ={{fontSize : 15}}
                    onPress ={()=>{Linking.openURL("https://www.amazon.com/amazonprime?https://music.amazon.com/home=UTF8&%2AVersion%2A=1&%2Aentries%2A=0")}}>Music</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{marginLeft : 60}}>
                    <Text
                    style ={{fontSize : 15}}
                    onPress ={()=>{Linking.openURL("https://www.amazon.com/amazonprime?https://music.amazon.com/home=UTF8&%2AVersion%2A=1&%2Aentries%2A=0")}}>Kindle</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

export {MainList};