import { Text, TouchableOpacity, TouchableOpacityProps, ActivityIndicator } from "react-native";

// adicionando todas as propriedades que o TouchableOpacityProps e as outras (title, isLoading)
type Props = TouchableOpacityProps & {
  // title?: string - quando quer que uma propriedade seja opcional, basta colocar o ?
  title: string
  isLoading?: boolean // quando a propriedade for opcional, pode setar um valor default pra ela
}

export function Button({title, isLoading = false, ...rest}: Props) {
  return(
    <TouchableOpacity
      activeOpacity={0.7}
      disabled={isLoading} // se estiver carregando, o botao sesa desabilitado
      className="w-full h-14 bg-orange-500 items-center justify-center rounded-lg"
      {...rest}
    >
      {
        isLoading ? (
          <ActivityIndicator className="text-green-500" />
        ) : (
          <Text className="text-green-500 text-base font-bold uppercase">
            {title}
          </Text>
        )
      }
    </TouchableOpacity>
  )
}
