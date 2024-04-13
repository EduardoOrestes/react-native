import React from 'react';
import {Text, StyleSheet, useColorScheme, View} from 'react-native';

const App = () => {
  const colorScheme = useColorScheme();
  return (
    <View style={styles.container}>
      <Text>
        Get current theme - useColorScheme(): {colorScheme}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
