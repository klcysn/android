import moment from 'moment';
import React, {useEffect, useState, useRef} from 'react';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';
import {SafeAreaView, View, Text, FlatList,Alert} from 'react-native';

import {timelinePage} from './styles';
import {PostItem, PostInput, Header, TopicSelectModal} from '../components';



const Timeline = (props) => {
  const user = auth().currentUser;
  const [postList, setPostList] = useState([]);
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [topicModalFlag, setTopicModalFlag] = useState(true);

  const selectingTopic = (value) => {
    database().ref(`/${selectedTopic}/`).off('value');
    setSelectedTopic(value);
    setTopicModalFlag(false);
    database()
      .ref(`${value}`)
      .on('value', (snapshot) => {
        const data = snapshot.val() == null ? {} : snapshot.val();
        const formattedData = Object.keys(data).map((key) => ({...data[key]}));
        
        formattedData.sort((a, b) => {
          return new Date(a.time) - new Date(b.time);
        });

        setPostList(formattedData);
      });
      
  };

  const sendingPost = (value) => {
    const postObject = {
      userMail: user.email,
      postText: value,
      time: moment().toISOString(),
    };

    database().ref(`${selectedTopic}`).push(postObject);
  };

  const renderPosts = ({item}) => <PostItem
  currentUser={user.email}
  post={item}
  onPress={()=>Alert.alert("Would you like to delete ?", "Message will be deleted permanently",[
    {
      text: "Cancel",
      onPress: () => null,
      style: "cancel"
    },
    { text: "Delete All Messages", onPress: () => deleteAll()},
    { text: "Delete", onPress: () => deletePost(item)}
    
  ])}
  />;

  const deletePost=(item)=>{
    database()
      .ref(`${selectedTopic}`)
      .on('value', (snapshot) => {
        const data = snapshot.val() == null ? {} : snapshot.val();
        const formattedData = Object.values(data).filter((data)=>{
          if( data.postText != item.postText && data.time != item.time){
            return {...data}
          }
        });
        formattedData.sort((a, b) => {
          return new Date(a.time) - new Date(b.time);
        });
        // setPostList(formattedData);
        database()
        .ref(`${selectedTopic}`)
        .set(formattedData);
      });
  }

  const deleteAll =()=>{
    database()
    .ref(`${selectedTopic}`)
    .remove();
  }
  


  return (
    <SafeAreaView style={{flex : 1}}>
      <View style={timelinePage.container}>
        <Header
          title={selectedTopic}
          user = {user.email}
          onTopicModalSelect={() => setTopicModalFlag(true)}
          onLogOut={() => auth().signOut()}
        />

        <FlatList
          style={{}}
          keyExtractor={(_, i) => i.toString()}
          data={postList}
          renderItem={renderPosts}
        />
        
        <PostInput onSendPost={sendingPost} />

        <TopicSelectModal
          visibility={topicModalFlag}
          onClose={() => (selectedTopic ? setTopicModalFlag(false) : null)}
          onTopicSelect={selectingTopic}
        />
      </View>
    </SafeAreaView>
  );
};

export {Timeline};
