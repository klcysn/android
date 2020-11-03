import {StyleSheet} from "react-native"

const styles = StyleSheet.create({
    input : {
        marginHorizontal : 10,
        marginVertical : 5,
        borderWidth : 0.5,
        borderRadius : 10,
        paddingHorizontal : 10,
        width : "90%",
        borderColor : "gray"
    },
    buttonContainer : {
        backgroundColor : "#80C341",
        width : "90%",
        marginVertical : 20,
        padding : 15,
        alignItems : "center",
        borderRadius : 10
    },
    buttonText : {
        color : "white",
        fontSize : 25,
        fontWeight : "bold"
    },
    loginContainer : {
        backgroundColor : "white",
        alignItems : "center",
        flex : 1
    },
    loginImage : {
        width : "50%",
        height : "30%",
        marginVertical : 20
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
    }
})

export default styles