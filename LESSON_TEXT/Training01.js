import React from 'react';
import {View, Text} from 'react-native';

const Containers = () => {
  return (
    <View style={{paddingTop: 30}}>
      <Text style={{padding: 10}}>
        <Text>TEXT... </Text>
        <Text>Text.</Text>
      </Text>

      <View style={{padding: 10}}>
        <Text>VIEW... </Text>
        <Text>View. </Text>
      </View>
    </View>
  );
};

export default Containers;
