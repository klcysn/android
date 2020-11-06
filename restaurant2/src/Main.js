import React, { useEffect, useRef, useState } from 'react';
import {SafeAreaView, View, Text, FlatList, Dimensions, Image} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import Axios from "axios"


import {City, RestaurantDetail, SearchBar, RestaurantItem} from './components';
import {mapStyle} from "./styles"


let cityList = []
const Main = (props) => {
  const [modal, setModal] = useState("")
  const [modalFlag, setModalFlag]=useState(false)
  const [input, setInput]=useState("")
  const [filteredCities, setFilteredCities] = useState([])
  const [restaurants, setRestaurants]=useState([])
  const mapRef = useRef(null)
  const fetchCities = async ()=>{
    const {data : {cities}} = await Axios.get("https://opentable.herokuapp.com/api/cities")
    cityList = [...cities]
    setFilteredCities(cities)
    
  }

  useEffect(()=>{
    fetchCities()
  }, [])

  const renderCity =({item})=><City city={item} onPressed={()=>{
    fetchRestaurants(item)
    setInput("")
  }} />
  const fetchRestaurants = async (item)=>{
    const {data:{restaurants}} = await Axios.get("https://opentable.herokuapp.com/api/restaurants", {params : {city :item}})
    setRestaurants(restaurants)
    const restaurantsCoordinates = restaurants.map((item)=>{
      return {latitude:item.lat, longitude: item.lng}
    }
      )
    mapRef.current.fitToCoordinates(restaurantsCoordinates, {edgePadding:{
      top:50,
      right : 25,
      left:25,
      bottom:25
    }})
    
  }


  const filterCities =(text)=>{
    const newCities = cityList.filter((city)=>{
      const newCity = city.toLowerCase()
      const newText = text.toLowerCase()
      return newCity.includes(newText)
    })
    setFilteredCities(newCities)
  }

  const renderRestaurant =({item})=><RestaurantItem item={item} onSelect={()=>{
    mapRef.current.fitToCoordinates([{latitude:item.lat, longitude: item.lng}])
    onRestaurantSelect(item)
  }} />

  const onRestaurantSelect =(item)=>{
    setModal(item)
    setModalFlag(true)
    
  }
  
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1}}>
        <MapView
        ref={mapRef}
        style={{flex : 1}}
        initialRegion={{
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
        customMapStyle: {mapStyle}
      }}
      >
        {
            restaurants.map((marker, index) =>(
            <Marker
            onPress={()=>onRestaurantSelect(marker)}
            key={index}
            coordinate={{latitude:marker.lat, longitude:marker.lng}}
            title={marker.name}
            description={`${marker.address} ${"€".repeat(marker.price)}`}
          >
            <View>
              <Image
              source={{uri:"https://www.clipartmax.com/png/middle/27-277542_image-cartoon-pictures-of-restaurants.png"}}
              style={{width : 40, height:40, backgroundColor : "transparent"}}
              />
            </View>
          </Marker>
            )
          )}
      </MapView>
      <View style={{position : "absolute", top : 5, left : 7}}>
        <SearchBar inputValue={input} onSearch={(text)=>{
          filterCities(text)
          setInput(text)
          }} />
        <FlatList
        style={{ maxHeight : input=="" ? 0 : Dimensions.get("window").height * 0.7}}
        data={filteredCities}
        keyExtractor={(_, index)=>index.toString()}
        renderItem ={renderCity}
        />
      </View>
      </View>
      <FlatList
        style={{position : "absolute", bottom : 10}}
        data={restaurants}
        keyExtractor={(_,index)=>index.toString()}
        renderItem={renderRestaurant}
        horizontal
        />
        <RestaurantDetail restaurant={modal} isVisible={modalFlag} onClose={()=>setModalFlag(false)} />
    </SafeAreaView>
  );
};

export default Main;
