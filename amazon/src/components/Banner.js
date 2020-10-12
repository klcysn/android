import React from "react";
import {Dimensions, Image, ScrollView, StyleSheet} from "react-native";



const Banner = ()=>{
    return(
        <ScrollView horizontal = {true} style={{elevation : 20}} >
            <Image style ={styles.image} source = {{uri : "https://images-eu.ssl-images-amazon.com/images/G/03/kindle/journeys/YTNkYTJjMWMt/YTNkYTJjMWMt-Mzc4NDcxNzYt-w1500._CB410650290_.jpg"}} />
            <Image style ={styles.image} source = {{uri : "https://images-eu.ssl-images-amazon.com/images/G/03/AMAZON-FASHION/2020/FASHION/CML/JULY/04_MERCH/MEN/DE_ENG_GW_HERO_DESKTOP_1500x600._CB410338987_.jpg"}} />
            <Image style ={styles.image} source = {{uri : "https://images-eu.ssl-images-amazon.com/images/G/03/SnS/Mozart_EN/XCM_Manual_1208066_1066411_de_de_sns_store_placement_in_en__mozart__1500x600_0f041a58-e585-4e12-b26b-802674d321c2._CB426640071_.jpg"}} />
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    image : {
        width : Dimensions.get("window").width,
        height : Dimensions.get("window").height * 0.2,
        margin : 2,
        marginBottom : 120
    }
})

export {Banner};