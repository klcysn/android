import React from "react";
import {View, Text, Image, FlatList, StyleSheet, Dimensions} from "react-native"

const Data = [
    {
     title : "Related to items you've viewed",
     content : [
         {imageUrl : "https://m.media-amazon.com/images/I/81qfu69EJXL._AC_UL480_FMwebp_QL65_.jpg",
         description : "Freecom 56346 128 GB Tablet Mini Solid State Drive with USB 3.0 and 2.0",
         price : "€36.54"},
         {imageUrl : "https://m.media-amazon.com/images/I/610SOWo+7cL._AC_UL480_FMwebp_QL65_.jpg",
         description : "Verbatim Vx500 120GB External SSD Drive with USB 3.1 Gen 2 External Storage for Super Fast Data Transfer",
         price : "€35.82 "},
         {imageUrl : "https://m.media-amazon.com/images/I/8130RWrbEoL._AC_UL480_FMwebp_QL65_.jpg",
         description : "XANAD Enclosure for WD My Passport Portable SSD 250GB 500GB 1TB 2TB External Solid State Drive",
         price : "€7.67"},
         {imageUrl : "https://m.media-amazon.com/images/I/61vVpgunZuL._AC_UL480_FMwebp_QL65_.jpg",
         description : "SALCAR USB 3.0 to SATA Dual Bay Hard Drive Docking Station for 2.5 and 3.5 SATA HDD and SSD Offline Clone Function 12V 3A Power ",
         price : "€23.99"}
    ]
    },
    {
        title : "Men's fashion",
        content : [
            {imageUrl : "https://images-eu.ssl-images-amazon.com/images/G/03/AMAZON-FASHION/2020/FASHION/FLIP/08_SEPTEMBER/MERCH/M_ACCESSORIES/GW_DESK_QUAD_CARD_186X116._SY116_CB406075645_.jpg",
            description : "Accessories",
            price : ""},
            {imageUrl : "https://images-eu.ssl-images-amazon.com/images/G/03/AMAZON-FASHION/2020/FASHION/FLIP/08_SEPTEMBER/MERCH/M_WATCHES/GW_DESK_QUAD_CARD_186X116._SY116_CB406118793_.jpg",
            description : "Watches",
            price : ""},
            {imageUrl : "https://images-eu.ssl-images-amazon.com/images/G/03/AMAZON-FASHION/2020/FASHION/FLIP/08_SEPTEMBER/MERCH/M_BACKPACKS/GW_DESK_QUAD_CARD_186X116._SY116_CB406124191_.jpg",
            description : "Backpacks",
            price : ""},
            {imageUrl : "https://images-eu.ssl-images-amazon.com/images/G/03/AMAZON-FASHION/2020/FASHION/FLIP/08_SEPTEMBER/MERCH/M_BRAND/GW_DESK_QUAD_CARD_186X116_VANS._SY116_CB406123323_.jpg",
            description : "Just in from vans",
            price : ""}
       ]
       },
       {
        title : "20% off essentials by Amazon brands",
        content : [
            {imageUrl : "https://images-eu.ssl-images-amazon.com/images/G/03/PBConsumables/Events/PD/2020/LO/XCM_Manual_1274582_1407498_uk_pd_day_off_lead_out_186x116_gb-en_f012f0da-cce3-4093-a4a2-2a2971ed999a._SY116_CB418517580_.jpg",
            description : "Pet food",
            price : ""},
            {imageUrl : "https://images-eu.ssl-images-amazon.com/images/G/03/PBConsumables/Events/PD/2020/LO/XCM_Manual_1274582_1407501_uk_pd_day_off_lead_out_186x116_gb-en_478000a7-f565-49fb-baae-eb3ea236d723._SY116_CB418517580_.jpg",
            description : "Beauty",
            price : ""},
            {imageUrl : "https://images-eu.ssl-images-amazon.com/images/G/03/PBConsumables/Events/PD/2020/LO/XCM_Manual_1274582_1407495_uk_pd_day_off_lead_out_186x116_gb-en_b94371dd-0791-498c-aa0b-f68cbf75883d._SY116_CB418517581_.jpg",
            description : "Household",
            price : ""},
            {imageUrl : "https://images-eu.ssl-images-amazon.com/images/G/03/PBConsumables/Events/PD/2020/LO/XCM_Manual_1274582_1407504_uk_pd_day_off_lead_out_186x116_gb-en_648ef5d8-8f01-4de0-9ba6-e135475cf789._SY116_CB418517580_.jpg",
            description : "All offers",
            price : ""}
       ]
       }
]


const Cards = ()=> {
    const showMainCard = ({item})=>{
        const showCard = ({item})=>{
            return(
                <View style={styles.card}>
                    <Image source ={{uri : item.imageUrl}} style= {styles.image} />
                    <Text style  ={{width : Dimensions.get("window").width * 0.38, textAlign : "justify"}}>{item.description}</Text>
                    <Text style={{color : "red"}}>{item.price}</Text>
                </View>
            )
        }
        return(
            <View style  ={styles.container}>
                    <Text style = {{fontSize : 20, marginBottom : 10, fontWeight : "bold"}}>{item.title}</Text>
                    <FlatList
                    data = {item.content}
                    renderItem = {showCard}
                    numColumns ={2}
                    keyExtractor ={(index)=>index}
                    />
                    <Text style ={{color : "#0066C0", fontWeight : "bold", marginTop : 5}}>See more</Text>
            </View>
        )
    }
    return(
        
            <FlatList 
            data = {Data}
            renderItem = {showMainCard}
            keyExtractor ={(index)=>index}
            />
    )
}

const styles = StyleSheet.create({
    image : {
        width : Dimensions.get("window").width * 0.38,
        height : Dimensions.get("window").height * 0.12
    },
    container : {
        padding : 20,
        elevation : 20,
        marginTop : 5,
        borderColor : "white",
        backgroundColor : "white"
    },
    card : {
        marginLeft : 15,
        marginTop : 5,
        padding : 5,
        backgroundColor : "#ffffff",
        
    }
})

export {Cards};