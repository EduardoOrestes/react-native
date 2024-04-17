import React from "react";
import { useRoute, useNavigation } from '@react-navigation/native'
import { View, Text, Button } from "react-native";

type ParamsProps = {
  name: string
}

export function ScreenB() {
  const route = useRoute();
  const navigation = useNavigation();
  const { name } = route.params as ParamsProps; // desestruturando o nome quee esta dentro do route

  return (
    <View style={{ flex: 1, backgroundColor: 'blue', alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 24 }}>
        { name }
      </Text>

      <Button title="Voltar" onPress={() => navigation.goBack()} />
    </View>
  )
}
