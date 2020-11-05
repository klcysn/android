import React from 'react';
import {TouchableOpacity, Text, View, Dimensions} from 'react-native';

import { jobItem } from '../styles';

const SavedJobItem = (props) => {
  return (
      <View style={{flexDirection : "row", justifyContent : "space-between", margin : 5}}>
        <TouchableOpacity
            style={jobItem.container}
            onPress={props.onSelect}
        >
            <Text style={jobItem.jobname}>{props.job.title}</Text>
            <Text>{props.job.type} / {props.job.location}</Text>
        </TouchableOpacity>
        <TouchableOpacity
        style={{backgroundColor : "red",
        justifyContent : "center",
        padding : 5,
        margin:7,
        borderRadius: 6,
        borderWidth: 1,
        borderColor: '#bdbdbd',
        }}
        onPress={()=>props.onDelete(props.job)}>
                <Text style={{color:"white", fontWeight : "bold"}}>Remove</Text>
        </TouchableOpacity>
      </View>
    );
};

export {SavedJobItem};