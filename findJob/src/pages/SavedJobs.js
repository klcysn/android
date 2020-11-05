import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useState} from 'react';
import {SafeAreaView, View, Text, FlatList, Button} from 'react-native';

import { SavedJobItem } from '../components'

const SavedJobs = (props) => {
  const [jobList, setJobList] = useState([])

  AsyncStorage.getItem("@SAVED_JOBS")
  .then(res => {
    const list = JSON.parse(res);
    setJobList(list);
  })

  const Delete=(job)=>{
    AsyncStorage.getItem("@SAVED_JOBS")
    .then(res=>{
      const list = JSON.parse(res)
      const newList = list.filter((item)=>item.id != job.id)
      AsyncStorage.setItem("@SAVED_JOBS", JSON.stringify(newList))
    })
  }
  return (
    <SafeAreaView>
      <View>
        <Button title="Back" onPress={()=>props.navigation.goBack()} />
        <FlatList
          data={jobList}
          renderItem={({item}) => <SavedJobItem job={item} onDelete={(job)=>Delete(job)}/>}
        />
      </View>
    </SafeAreaView>
  );
};

export {SavedJobs};