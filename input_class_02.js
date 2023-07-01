import React from 'react';
import {View, Text, TextInput} from 'react-native';

const MultilineTextInputExample = () => {
  const [value, onChangeText] = React.useState('Useless multiline placeholder');

  return (
    <View
      style={{
        backgroundColor: value,
        borderBottomColor: '#000000',
        borderBottomWidth: 1,
      }}
    >
      <View style={{marginTop: 30}}>
        <Text>
          Digite o nome de uma cor para alterar o fundo...
        </Text>
        <Text>
           Enter para quebrar a linha do input...
        </Text>
      </View>

      <TextInput
        editable
        multiline
        numberOfLines={4}
        maxLength={40}
        onChangeText={text => onChangeText(text)}
        value={value}
        style={{padding: 10}}
      />
    </View>
  )
};

export default MultilineTextInputExample;
