import React from "react";
import { Text, TextInput, View } from "react-native";

const getFullName = (
  firstName: string,
  secondName: string,
  thirdName: string,
) => {
  return firstName + ' ' + secondName + ' ' + thirdName;
};

const Cat = () => {
  return (
    <View>
      <Text>Hello, I am {getFullName('Rum', 'Tum', 'Tugger')}.</Text>
      <TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1,
        }}
        defaultValue="Name me!"
        />
    </View>
  )
}

export default Cat;
