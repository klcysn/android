import React, {useState} from 'react';
import {SafeAreaView, View} from 'react-native';
import WORD_LIST from '../../WordList.json';
import {RandomCard, RandomButton} from '../components';
import styles from '../../styles';
import AsyncStorage from '@react-native-async-storage/async-storage';

const words = WORD_LIST.WORDS;
export const Random = (props) => {
  const [isClicked, setClicked] = useState(false);
  const [unknownList, setUnknownList] = useState()
  const [learnedList, setLearnedList] = useState()
  const [count, setCount] = useState(0);
  const clicked = () => {
    setClicked((s) => !s);
  };
  const previousWord = () => {
    if (count === 0) {
      setCount(0);
    } else {
      setClicked(false);
      setCount(count - 1);
    }
  };
  const nextWord = () => {
    if (count === words.length - 1) {
      setCount(words.length - 1);
    } else {
      setClicked(false);
      setCount(count + 1);
    }
  };
  const setLearned = async () => {
    try {
      const learned = await AsyncStorage.getItem('@unknown')
      setLearnedList(learned != null ? JSON.parse(learned) : null);
      } catch(e) {
      alert(e)
      }
    try {
      const jsonValue = JSON.stringify([...learnedList,words[count]])
      await AsyncStorage.setItem('@learned', jsonValue)
      nextWord()
    } catch (e) {
      alert(e)
    }
  }
  const setUnknown = async () => {
    try {
      const unknownList = await AsyncStorage.getItem('@unknown')
      setUnknownList(unknown != null ? JSON.parse(unknown) : null);
      } catch(e) {
      alert(e)
      }

    try {
      const jsonValue = JSON.stringify([...unknownList, words[count]])
      await AsyncStorage.setItem('@unknown', jsonValue)
      nextWord()
    } catch (e) {
      alert(e)
    }
  }
  return (
    <SafeAreaView style={styles.randomContainer}>
      <View style={styles.randomArea}>
        <RandomButton title="❮" color="gray" onPress={previousWord} />
        <RandomCard
          word={words[count]}
          onPress={clicked}
          isClicked={isClicked}
        />
        <RandomButton title="❯" color="gray" onPress={nextWord} />
      </View>
      <View style={styles.randomButtonWrapper}>
        <RandomButton title="✔" color="green" onPress={setLearned} />
        <RandomButton title="✗" color="red" onPress={setUnknown} />
      </View>
    </SafeAreaView>
  );
};
