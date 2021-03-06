import {Dimensions, StyleSheet} from "react-native"

const styles = StyleSheet.create({
    input : {
        marginHorizontal : 10,
        marginVertical : 5,
        borderBottomWidth : 0.5,
        borderRadius : 10,
        paddingHorizontal : 10,
        width : Dimensions.get("window").width * 0.7,
        borderColor : "gray"
    },
    buttonContainer : {
        backgroundColor : "#80C341",
        width : Dimensions.get("window").width * 0.7,
        marginVertical : 15,
        padding : 2,
        alignItems : "center",
        borderRadius : 30
    },
    buttonText : {
        color : "white",
        fontSize : 25,
        fontWeight : "bold"
    },
    loginContainer : {
        alignItems : "center",
        flex : 1
    },
    loginImage : {
        width : "76%",
        height : "42%",
        marginTop : 40
    },
    countryContainer : {
        borderWidth : 0.5,
        padding : 10,
        backgroundColor : "#80C341"
    },
    selectContainer : {
        flex : 1,
        alignItems : "center",
        padding : 20
    },
    selectText : {
        color : "#80C341",
        fontSize : 25,
        fontWeight : "bold",
        alignSelf : "flex-start",
        margin : 10,
        textDecorationLine : "underline"
    },
    selectButton : {
        width : "100%",
        height : "100%",
        alignItems : "center"
    },
    statisticsCard : {
        padding:10,
        borderRadius : 40,
        marginBottom : 15,
        minWidth: "25%",
        minHeight : "10%",
        justifyContent : "center"
    },
    statisticsText : {
        color : "white",
        fontSize : 15,
        fontWeight : "bold",
        textAlign:"center"
    },
    statisticsNumber : {
        fontSize : 20,
         fontWeight : "bold",
         color : "#424242",
         lineHeight : 35,
         borderBottomWidth : 1
    },
    nuberContainer : {
        backgroundColor : "#ffcdd2",
        padding : 10,
        borderWidth : 2,
        borderColor : "#af4448",
        borderRadius : 10,
        marginRight : 30,
        width : "60%",
        height : Dimensions.get("window").height * 0.28
        
    },
    statisticsCountry : {
        textAlign : "center",
        padding : 5,
        fontSize : 40,
        fontWeight : "bold",
        letterSpacing : 12,
        color : "#9b0000",
        borderBottomWidth : 5,
        marginBottom : 30,
        borderColor : "#9b0000"
    },
    statisticsDate :{
        padding : 5,
        fontSize : 20,
        fontWeight : "bold",
        letterSpacing : 10,
        color : "#9b0000",
        borderBottomWidth : 5,
        marginBottom : 30,
        borderColor : "#9b0000"
    },
    modalContainer : {
        backgroundColor : "#ffcdd2",
        padding : 10,
        borderRadius : 10
    },
    modalText:{
        fontSize: 20,
        lineHeight : 30,
        borderBottomWidth : 0.5
    },
    deathContainer : {
        backgroundColor : "#ff5252",
        padding : 10,
        borderRadius : 5,
        marginBottom : 5
    },
    shareContainer : {
        position : "absolute",
        top : 20,
        right : 20
    },
    shareImage : {
        width : 40,
        height : 40
    },
    inputContainer :{
        backgroundColor : "white",
        marginTop : 10,
        padding : 20,
        borderRadius : 5,
        alignItems : "center"
    }

})

export default styles