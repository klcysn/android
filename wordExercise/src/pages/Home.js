import * as React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import {Button} from '../components';
import styles from '../../styles';

export const Home = (props) => {
  const goPath = (path) => {
    props.navigation.navigate(path);
  };
  return (
    <SafeAreaView style={styles.homeContainer}>
      <Button
        title="Random Word Exercise"
        color="#b0003a"
        onPress={() => goPath('Random')}
      />
      <Button title="Add Word" color="#320b86" />
    </SafeAreaView>
  );
};
