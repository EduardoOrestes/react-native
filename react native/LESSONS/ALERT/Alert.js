import React from 'react';
import {View, StyleSheet, Button, Alert} from 'react-native';

const App = () => {
  const createOneButtonAlert = () => 
  Alert.alert('Alert title', 'My Alert MSG', [
    {
      text: 'Cancel',
      onPress: () => console.log('Cancel Pressed'),
      style: 'cancel',
    },
    {text: 'OK', onPress: () => console.log('Ok pressed')},
  ]);

  const createTwoButtonAlert = () =>
  Alert.alert('Alert title', 'My Alert MSG', [
    {
      text: 'Ask me later',
      onPress: () => console.log('Ask me later pressed'),
    },
    {
      text: 'Cancel',
      onPress: () => console.log('Cancel Pressed'),
      style: 'cancel',
    },
    {text: 'Ok', onPress: () => console.log('Ok pressed')},
  ]);

  return (
    <View style={styles.container}>
      <Button title={'1 - Button Alert'} onPress={createOneButtonAlert} />

      <Button title={'2 - Button Alert'} onPress={createTwoButtonAlert} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});

export default App;
