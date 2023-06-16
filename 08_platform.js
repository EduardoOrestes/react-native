import React from 'react';
import {Platform, StyleSheet, Text, View, ScrollView} from 'react-native';

const style = StyleSheet.create({
  customPlataform1: {
    paddingTop: Platform.OS === 'ios' ? 50 : 100,
    fontSize: Platform.OS === 'android' ? 20 : 10,
    backgroundColor: 'rgba(247,247,247,1.0)',
  },
  customPlataform2: {
    flex: 1,
    ...Platform.select({
      ios: {
        backgroundColor: 'red',
      },
      android: {
        backgroundColor: 'green',
      },
      default: {
        backgroundColor: 'blue',
      },
    }),
    paddingTop: Platform.OS === 'ios' ? 50 : 100,
    fontSize: Platform.OS === 'android' ? 20 : 10,
  },
});

const SectionListBasics = () => {
  return (
    <View>
        <Text style={style.customPlataform1}>
          Testing Plataform 1
        </Text>
        <Text style={style.customPlataform2}>
          Testing Plataform 2
        </Text>
    </View>
  );
};

export default SectionListBasics;
