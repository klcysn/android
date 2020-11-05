import React from 'react';
import {TouchableOpacity, Text, Dimensions} from 'react-native';

import { jobItem } from '../styles';

const JobItem = (props) => {
  return (
      <TouchableOpacity
        style={[jobItem.container,{width : Dimensions.get("window").width * 0.93}]}
        onPress={props.onSelect}
      >
          <Text style={jobItem.jobname}>{props.job.title}</Text>
          <Text>{props.job.type} / {props.job.location}</Text>
      </TouchableOpacity>
    );
};

export {JobItem};