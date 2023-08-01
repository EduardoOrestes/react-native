import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const BoldAndBeautiful = () => {
  return (
    <View style={{paddingTop: 30}}>
      <Text style={styles.baseText}>
        I am bold
        <Text style={styles.innerText}> and red</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  baseText: {
    fontWeight: 'bold',
  },
  innerText: {
    color: 'red',
  },
});

export default BoldAndBeautiful;
