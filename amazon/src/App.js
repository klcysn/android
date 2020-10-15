import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Dimensions,
  Image,
  TouchableOpacity
} from 'react-native';
import {TopSection, MainList, Location, DealOfDay, Banner, Cards} from "./components"


const App = () => {

  return (
    <SafeAreaView style = {{marginBottom : 105}}>
      <TopSection />
        <ScrollView bounces = {false} showsVerticalScrollIndicator ={false}>
          <MainList />
          <Location />
          <Image source = {require("./assets/deals.jpg")} style = {styles.image} />
          <View style = {styles.signIn}>
            <Text style ={{alignSelf : "flex-start", margin : 13, fontSize : 20}}>Sign in for your best experience</Text>
            <TouchableOpacity style ={styles.button}>
              <Text style = {{fontSize : 17, textAlign : "center"}}>Sign in</Text>
            </TouchableOpacity>
            <Text style ={{alignSelf : "flex-start", margin : 13, color : "blue"}}>Create an account</Text>
          </View>
          <DealOfDay />
          <Banner/>
          <Cards />
        </ScrollView>
        
    </SafeAreaView>
    
  );
};

const styles = StyleSheet.create({
  image : {
    width : Dimensions.get("window").width,
    height : Dimensions.get("window").height * 0.2,
  },
  button : {
    width : Dimensions.get("window").width*0.9,
    backgroundColor : "#FB9701",
    color : "black",
    padding : 15,
    
  },
  signIn : {
    alignItems : "center",
    marginVertical : 5,
    elevation : 20,
    padding : 10,
    borderColor : "white",
    backgroundColor : "white"
  }
});

export default App;
