import React, {useState} from 'react';
import {TouchableOpacity, Text} from 'react-native';
import styles from '../../styles';

export const RandomCard = (props) => {
  return (
    <TouchableOpacity
      activeOpacity={1}
      style={[
        styles.randomCardContainer,
        {backgroundColor: `#00${Math.floor(Math.random() * 10000)}`},
      ]}
      onPress={props.onPress}>
      <Text style={styles.randomCardText}>
        {props.isClicked ? props.word.meaning : props.word.word.toUpperCase()}
      </Text>
    </TouchableOpacity>
  );
};
