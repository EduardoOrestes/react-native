import React from 'react';
import {SafeAreaView, StyleSheet, TextInput} from 'react-native';

const TextInputExample = () => {
  const [text, onChangeText] = React.useState('Texto inicial...');
  const [number, onChangeNumber] = React.useState('');

  return (
    <SafeAreaView style={{marginTop: 30}}>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text} />

      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="Placeholder..."
        keyboardType="numeric" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default TextInputExample;
