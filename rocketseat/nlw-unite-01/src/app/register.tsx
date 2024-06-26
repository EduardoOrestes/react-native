import { useState } from "react"
import { View, Image, StatusBar, Alert } from "react-native"
import { FontAwesome6, MaterialIcons } from "@expo/vector-icons" // https://icons.expo.fyi/Index - para pesquisar
import { Link, router } from "expo-router"

import { colors } from "@/styles/colors"

import { Input } from "@/components/input"
import { Button } from "@/components/button"

export default function Register(){
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")

  function handleRegister() {
    if (!name.trim() || !email.trim()) {
      return Alert.alert('Incrição', 'Preencha todos os campos.')
    }

    router.push("/ticket")
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
          <FontAwesome6
            name="user-circle"
            color={colors.green[200]}
            size={20}
          />
          <Input.Field
            placeholder="Nome completo"
            onChangeText={setName}
          />
        </Input>

        <Input>
          <MaterialIcons
            name="alternate-email"
            color={colors.green[200]}
            size={20}
          />
          <Input.Field
            placeholder="E-mail"
            keyboardType="email-address"
            onChangeText={setEmail}
          />
        </Input>

        {/* quando voce define uma proprieda como true, pode ser omitido o valor isLoading == isLoading ={true} */}
        {/* <Button title="Acessar credencial" isLoading /> */}
        {/* <Button title="Cadastrar" /> */}
        {/* <Button title="Atualizar" /> */}
        <Button
          title="Realizar inscrição"
          onPress={handleRegister}
        />

        <Link href="/" className="text-gray-200 text-base font-bold text-center mt-8">
          Já possui ingresso?
        </Link>
      </View>
    </View>
  )
}
