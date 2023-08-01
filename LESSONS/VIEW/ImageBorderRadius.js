import React from 'react';
import {View, Image, StyleSheet, Text} from 'react-native';

const DisplayAnImageWithStyle = () => {
  return (
    <View style={styles.container}>
      <View>
        <Image
          style={{
            borderTopRightRadius: 20,
            height: 100,
            width: 200,
          }}
          source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}}
        />
        <Text>
          borderTopRightRadius
        </Text>
      </View>

      <View>
        <Image
          style={{
            borderBottomRightRadius: 20,
            height: 100,
            width: 200,
          }}
          source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}}
        />
        <Text>
          borderBottomRightRadius
        </Text>
      </View>

      <View>
        <Image
          style={{
            borderBottomLeftRadius: 20,
            height: 100,
            width: 200,
          }}
          source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}}
        />
        <Text>
          borderBottomLeftRadius
        </Text>
      </View>

      <View>
        <Image
          style={{
            borderTopLeftRadius: 20,
            height: 100,
            width: 200,
          }}
          source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}}
        />
        <Text>
          borderTopLeftRadius
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: '100%',
    textAlign: 'center',
  },
});

export default DisplayAnImageWithStyle;
