import React from 'react';
import {View, StyleSheet, ToastAndroid, Button, StatusBar} from 'react-native';

const App = () => {
  const showToast = () => {
    ToastAndroid.show('Toast SHORT', ToastAndroid.SHORT);
  };

  const showToastWithGravity = () => {
    ToastAndroid.showWithGravity(
      'Toast SHORT AND CENTER',
      ToastAndroid.SHORT,
      ToastAndroid.CENTER,
    );
  };

  const showToastWithGravityAndOffset = () => {
    ToastAndroid.showWithGravityAndOffset(
      'Toast LONG AND BOTTOM',
      ToastAndroid.LONG,
      ToastAndroid.BOTTOM,
      25,
      50,
    );
  };

  return (
    <View style={styles.container}>
      <Button title='Toggle toast' onPress={() => showToast()} />
      
      <Button
        title='Toggle toast with gravity'
        onPress={() => showToastWithGravity()}
      />

      <Button
        title='Toggle toast with gravity & offset'
        onPress={() => showToastWithGravityAndOffset()} 
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: StatusBar.currentHeight,
    backgroundColor: '#888888',
    padding: 8,
  },
});

export default App;
