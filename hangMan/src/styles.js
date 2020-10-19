import {Dimensions, StyleSheet} from "react-native"



const styles = StyleSheet.create({
    backgroundImage : {
        width : Dimensions.get("window").width,
        height : Dimensions.get("window").height
    },
    manContainer : {
        flex : 2,
        justifyContent : "center",
        alignItems : "flex-start",
        paddingTop : 5,
        flexDirection : "row"
    },
    man : {
        width : Dimensions.get("window").width * 0.6,
        height : Dimensions.get("window").height * 0.3,
        resizeMode : "contain",
    },
    topContainer : {
        flex : 0.2,
        justifyContent : "center",
        alignItems : "center",
    },
    topText : {
        fontSize : 22,
        fontWeight : "bold",
        color : "blue"
    },
    wordAreaContainer : {
        flex : 0.2,
        paddingHorizontal : 10,
    },
    letter : {
        fontSize : 22,
        fontWeight : "bold",
    },
    letterContainer : {
        marginLeft : 10,
        borderBottomWidth : 5,
        padding : 5,
        flex : 1,
        alignItems : "center",
        justifyContent : "center"
    },
    inputContainer : {
        flex : 0.01,
        backgroundColor : "white"
    },
    wrongWord : {
        fontSize : 20,
        fontWeight : "bold",
        color : "red"
    }
})

export default styles;