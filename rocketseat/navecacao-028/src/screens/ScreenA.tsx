import React from "react";
import { View, Button } from "react-native";
import { useNavigation } from '@react-navigation/native'

export function ScreenA() {
  const navigation = useNavigation();

  function openScreen() {
    navigation.navigate('screenB', { name: 'Dados da tela A' })
  }

  return (
    <View style={{ flex: 1,backgroundColor: 'gray', justifyContent: 'center' }}>
      <Button
        title="Ir para Screen B"
        onPress={openScreen}
    />
    </View>
  )
}
