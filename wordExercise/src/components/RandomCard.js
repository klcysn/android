import React, { useState} from "react"
import { TouchableWithoutFeedback, Text} from "react-native"


export const RandomCard = (props) =>{
    const [isClicked, setClicked] = useState(false)
    const clicked = () =>{
        setClicked(s=>!s)
    }
    return(
        <TouchableWithoutFeedback onPress={clicked}>
            <Text>{isClicked ? props.word.meaning : props.word.word}</Text>
        </TouchableWithoutFeedback>
    )
}