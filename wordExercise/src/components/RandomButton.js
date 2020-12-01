import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import styles from '../../styles';

export const RandomButton = (props) => {
  return (
    <TouchableOpacity
      style={[styles.randomButtonContainer, {backgroundColor: props.color}]}
      onPress={props.onPress}>
      <Text style={styles.randomButtonText}>{props.title}</Text>
    </TouchableOpacity>
  );
};
