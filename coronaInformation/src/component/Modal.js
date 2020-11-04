import React, {useEffect, useState} from 'react';
import {SafeAreaView, Text,Platform, Image,TouchableOpacity, View} from "react-native"
import styles from "../styles"
import {useDispatch, useSelector} from "react-redux"
import Modal from 'react-native-modal';

export const Modal=(props)=>{
    const [isModalVisible, setModalVisible] = useState(false);
  
    const toggleModal = () => {
        setModalVisible(!isModalVisible);
  };
    return (
      <View style={{flex: 1}}>
        <Modal isVisible={isModalVisible}>
          <View style={{flex: 1}}>
            <Text>Hello!</Text>
            <Button title="Close" onPress={toggleModal} />
          </View>
        </Modal>
      </View>
    );
}
