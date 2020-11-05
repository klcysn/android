import Axios from 'axios';
import Modal from 'react-native-modal';
import React, {useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {SafeAreaView, Text, View, FlatList, Button, TouchableOpacity, ScrollView} from 'react-native';
import HTMLView from 'react-native-htmlview';
import {jobs} from '../styles';
import {JobItem} from '../components';

const Jobs = (props) => {
  const [data, setData] = useState([]);
  const [selectedJob, setSelectedJob] = useState('');
  const [modalFlag, setModalFlag] = useState(false);
  const {selectedLanguage} = props.route.params;

  const fetchData = async () => {
    const response = await Axios.get(
      `https://jobs.github.com/positions.json?search=${selectedLanguage.toLowerCase()}`,
    );
    setData(response.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const onJobSelect = (job) => {
    setModalFlag(true);
    setSelectedJob(job);
  };

  const renderJobs = ({item}) => (
    <JobItem job={item} onSelect={() => onJobSelect(item)} />
  );

  const onJobSave = async () => {
    let savedJobList = await AsyncStorage.getItem("@SAVED_JOBS");
    savedJobList = savedJobList == null ? [] : JSON.parse(savedJobList)

    if(savedJobList.findIndex((item)=>item.id == selectedJob.id) != -1){
      alert(`You have already add ${selectedJob.title}`)
    }else{
      const updatedJobList = [...savedJobList, selectedJob];
  
      AsyncStorage.setItem("@SAVED_JOBS", JSON.stringify(updatedJobList));
    }
    setModalFlag(false)

  }

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{ flex: 1, alignItems : "center" }}>
        <Text
          style={{
            textAlign: 'center',
            fontWeight: 'bold',
            fontSize: 20,
          }}>
          JOBS FOR {selectedLanguage.toUpperCase()}
        </Text>
        <FlatList data={data} renderItem={renderJobs} />

        <TouchableOpacity
          style={{
            backgroundColor: 'blue',
            padding: 10,
            borderRadius: 3,
            position: 'absolute',
            bottom: 10,
            right: 10
          }}
          onPress={() => props.navigation.navigate("SavedJobs")}
        >
          <Text style={{color: 'white'}}>Saved Jobs</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: '#304ffe',
            padding: 5,
            position: 'absolute',
            top: 1,
            left: 17
          }}
          onPress={() => props.navigation.navigate("Intro")}
        >
          <Text style={{color: 'white', fontWeight : "bold"}}>{`${"❮❮"} Languages`}</Text>
        </TouchableOpacity>

        <Modal isVisible={modalFlag} onBackdropPress={() => setModalFlag(false)}>
          <View style={jobs.modalBackground}>
            <View style={{borderBottomWidth: 2, borderColor: '#bdbdbd'}}>
              <Text style={jobs.jobTitle}>{selectedJob.title}</Text>
              <Text>
                {selectedJob.location} / {selectedJob.title}
              </Text>
              <Text>{selectedJob.company}</Text>
            </View>
            <ScrollView style={jobs.jobDesc}>
              <HTMLView value={selectedJob.description}/>
            </ScrollView>
            <Button title="Save" onPress={onJobSave} />
          </View>
        </Modal>
      </View>
    </SafeAreaView>
  );
};

export {Jobs};