import { useState } from "react"
import { View, Image, StatusBar, Alert } from "react-native"
import { MaterialCommunityIcons } from "@expo/vector-icons" // https://icons.expo.fyi/Index - para pesquisar
import { Link } from "expo-router"

import { colors } from "@/styles/colors"

import { Input } from "@/components/input"
import { Button } from "@/components/button"

export default function Home() {
  const [code, setCode] = useState('');

  function handleAccessCredential() {
    // console.warn(code); - exibe na tela do emulador ou celular
    if (!code.trim()) {
      return Alert.alert('Credencial', 'Informe o código do ingresso!')
    }
  }

  return (
    <View className="flex-1 bg-green-500 items-center justify-center p-5">
      <StatusBar barStyle="light-content" />

      <Image
        source={require("@/assets/logo.png")}
        className="h-16"
        resizeMode="contain"
      />

      <View className="w-full mt-12 gap-3">
        <Input>
          <MaterialCommunityIcons
            name="ticket-confirmation-outline"
            color={colors.green[200]}
            size={20}
          />
          <Input.Field
            placeholder="Código do ingresso"
            placeholderTextColor="gray"
            onChangeText={setCode}
            // onChangeText={(value) => setCode(value)}
          />
        </Input>

        {/* quando voce define uma proprieda como true, pode ser omitido o valor isLoading == isLoading ={true} */}
        {/* <Button title="Acessar credencial" isLoading /> */}
        {/* <Button title="Acessar credencial" onPress={() => console.warn("Clicou!")} /> */}
        {/* <Button title="Cadastrar" /> */}
        {/* <Button title="Atualizar" /> */}
        <Button title="Acessar credencial" onPress={handleAccessCredential} />

        <Link href="/register" className="text-gray-200 text-base font-bold text-center mt-8">
          Ainda nao possui ingresso?
        </Link>
      </View>
    </View>
  )
}
