import React from 'react';
import {View, Image, StyleSheet, Text} from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <Image
        style={{
          tintColor: '#000000',
          resizeMode: 'contain',
          height: 100,
          width: 200,
        }}
        source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}}
      />
      <Text>
        tintColor
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    textAlign: 'center',
  },
});

export default App;
