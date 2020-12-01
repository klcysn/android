import React from "react"
import {SafeAreaView} from "react-native"
import WORD_LIST from "../../WordList.json"
import {RandomCard} from "../components"

export const Random = (props) =>{
    console.log(WORD_LIST.WORDS)
    return(
        <SafeAreaView>
            <RandomCard word={WORD_LIST.WORDS[0]} />
        </SafeAreaView>
    )
}