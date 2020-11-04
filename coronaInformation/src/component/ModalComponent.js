import React, {useEffect, useState} from 'react';
import {SafeAreaView, Text,Platform, Image,TouchableOpacity, View, Button} from "react-native"
import styles from "../styles"
import {useDispatch, useSelector} from "react-redux"
import Modal from 'react-native-modal';

export const ModalComponent=(props)=>{
  const modal = useSelector(state=>state.show)
  const dispatch = useDispatch()
  console.log(props.death)
  
    return (
      <View>
        <Modal isVisible={modal} onBackdropPress={()=>dispatch({type:"CHANGEMODAL", payload:{show:false}})}>
          <View style={styles.modalContainer}>
            <View style={styles.deathContainer}>
              <Text style={[styles.modalText, {color : "white"}]}>Deaths on : {props.date} </Text>
              <Text style={styles.modalText}>New Deaths : {props.death.new}</Text>
              <Text style={styles.modalText}>Total Deaths : {props.death.total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Text>
            </View>
            <View style={styles.deathContainer}>
              <Text style={[styles.modalText, {color : "white"}]}>Tests on : {props.date} </Text>
              <Text style={styles.modalText}>Total Tests : {props.test.total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Text>
            </View>
          </View>
        </Modal>
      </View>
    );
}
