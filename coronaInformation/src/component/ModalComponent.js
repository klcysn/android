import React, {useEffect, useState} from 'react';
import {SafeAreaView, Text,Platform, Image,TouchableOpacity, View, Button} from "react-native"
import styles from "../styles"
import {useDispatch, useSelector} from "react-redux"
import Modal from 'react-native-modal';

export const ModalComponent=(props)=>{
  const modal = useSelector(state=>state.show)
  const dispatch = useDispatch()
  
    return (
      <View style={{}}>
        <Modal isVisible={modal} onBackdropPress={()=>dispatch({type:"CHANGEMODAL", payload:{show:false}})}>
          <View style={{}}>
            <Text>Hello!</Text>
            <Button title="Close" onPress={()=>dispatch({type:"CHANGEMODAL", payload:{show:false}})} />
          </View>
        </Modal>
      </View>
    );
}
