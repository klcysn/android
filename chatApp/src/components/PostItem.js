import moment from 'moment';
import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';

import {postitem} from './styles';

const PostItem = (props) => {
  const user = props.currentUser
  return (
    <View
    style={[{flexDirection : user == props.post.userMail ? "row-reverse" : "row", position : "relative", alignItems :"center"},
    user == props.post.userMail ? {right : 5} : {left : 5}]}>
      <View>
        <Text
        style={[postitem.banner,{backgroundColor :user == props.post.userMail ? "#2979ff" : "#ff4081" } ]}>
          {user == props.post.userMail ? "You" : (props.post.userMail==undefined ? null : props.post.userMail[0].toUpperCase())}
          </Text>
      </View>
      <TouchableOpacity
      onPress ={()=>props.onPress()}
      style={postitem.container}>
        <View style={postitem.headerContainer}>
          <Text style={postitem.time}>
            {moment
              .duration(
                moment(props.post.time).diff(moment(new Date()), 'seconds'),
                'seconds',
              )
              .humanize(true)}
          </Text>
        </View>
        <View style={postitem.bodyContainer}>
          <Text>{props.post.postText}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export {PostItem};
