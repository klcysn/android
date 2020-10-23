import {Dimensions, StyleSheet} from "react-native"


const styles = StyleSheet.create({
    homeContainer : {
        alignItems : "center",
        justifyContent : "center",
        backgroundColor : "#8F4E8D",
        flex : 1
    },
    homeText : {
        color : "white",
        fontWeight : "bold",
        fontSize : 35
      
    },
    image : {
        width : Dimensions.get("window").width,
        height : Dimensions.get("window").height /3,
        margin : 5
    },
    timeLineHeader: {
        fontWeight : "bold",
        margin:5
    }
})

export default styles;