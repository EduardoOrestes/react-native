// import "../styles/global.css" - foi adicionado em tsconfig o atalho @ para ..
import "@/styles/global.css"

import { Slot } from "expo-router"

// também adicionado em ./src/styles/fontFamily.ts
import {
  useFonts,
  Roboto_700Bold,
  Roboto_500Medium,
  Roboto_400Regular
} from "@expo-google-fonts/roboto"

// import { Loading } from "../components/loading" - - foi adicionado em tsconfig o atalho @ para ..
import { Loading } from "@/components/loading"

export default function Layout() {

  // retorna um boolean para verificar se as fontes já foram carregadas
  const [fontsLoaded] = useFonts({
    Roboto_700Bold,
    Roboto_500Medium,
    Roboto_400Regular
  })

  if (!fontsLoaded) {
    return <Loading />
  }

  {/* o component slot adiciona todas as rotas da aplicacao (arquivos TSX) */}
  return <Slot />
}
