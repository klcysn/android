import {Dimensions, StyleSheet} from "react-native"

const styles = StyleSheet.create({
    container : {
        flex : 1,
        alignItems : "center",
        backgroundColor : "#C3DEF0",
        
    },
    textContainer : {
        flex : 1,
        justifyContent : "center",
        backgroundColor : "#C3DEF0",
        width : Dimensions.get("window").width,
        alignItems : "center",
        padding : 15
    },
    text : {
        fontSize : 25,
        color : "#02273F",
        textAlign : "justify",
        lineHeight : 40,
    },
    inputContainer : {
        flexDirection : "row",
        height : Dimensions.get("window").height * 0.07
    },
    input : {
        width : Dimensions.get("window").width * 0.7,
        backgroundColor : "white",
        padding : 5
    },
    inputButton : {
        width : Dimensions.get("window").width * 0.3,
        backgroundColor : "#1A5D8E",
        justifyContent : "center",
        alignItems  : "center"
    },
    inputButtonText : {
        color : "white",
        fontWeight : "700",
        fontSize : 20
    },
    button : {
        backgroundColor : "#1A5D8E",
        justifyContent : "center",
        alignItems  : "center",
        width : Dimensions.get("window").width,
        borderTopWidth : 2,
        height : Dimensions.get("window").height * 0.07,
    },
    buttonText : {
        color : "white",
        fontWeight : "700",
        fontSize : 30,
    },
    menuButton : {
        alignSelf : "flex-start",
        backgroundColor : "#1A5D8E",
        padding : 15,
        alignItems : "center",
        borderRadius : 8,
        margin : 5,
        justifyContent : "center",
        marginBottom : 30
    },
    menuText : {
        color : "white",
        fontSize : 20,
        fontWeight : "bold"
    }
})

export default styles;