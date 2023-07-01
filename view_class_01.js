import React from 'react';
import {View, Text, TextInput} from 'react-native';

const ViewBoxesWithColorAndText = () => {
  return (
    <View
      style={{
        flexDirection: 'column',
        height: 100,
        padding: 20,
      }}>
      <View style={{backgroundColor: 'blue', flex: 0.3}} />
      <View style={{backgroundColor: 'red', flex: 0.5}} />
      <Text>
        Hello...
      </Text>
    </View>
  );
};

export default ViewBoxesWithColorAndText;
