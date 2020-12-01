import {Dimensions, StyleSheet} from "react-native"

const styles = StyleSheet.create({
    buttonContainer: {
        justifyContent: "center",
        alignItems: "center",
        height: Dimensions.get("window").height * 0.3,
        width: Dimensions.get("window").width * 0.8,
        borderRadius: 50
    },
    buttonText: {
        color: "white",
        fontSize: 30,
        fontWeight: "bold"
    },
    homeContainer:{
        flex: 1,
        alignItems: "center",
        justifyContent: "space-around"
    }

})


export default styles;