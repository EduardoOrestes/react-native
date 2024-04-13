import { ReactNode } from "react";
import { TextInput, View, TextInputProps } from "react-native";

import { colors } from "@/styles/colors";

// { children }: { children: ReactNode } - children é o que vai receber e { children: ReactNode } é a tipagem
function Input({ children }: { children: ReactNode }) {
  return (
    <View className="w-full h-14 flex-row items-center gap-3 p-3 border border-green-400 rounded-lg">
      {children}
    </View>
  )
}

// adde tipagem TextInputProps
// function Field({ placeholder }: TextInputProps) { // pode adicionar apenas uma propriedade (placeholder, ...) ou adicionar todas com o ...rest
function Field({ ...rest }: TextInputProps) {
  return (
    <TextInput
      className="flex-1 text-white text-base font-regular"
      placeholderTextColor={colors.gray[200]}
      // placeholder={placeholder} - se especificar a propriedade passada
      {...rest} // o rest deve sempre vir no final, caso queira customizar alguma propriedade enviada do outro componente
    />
  ) 
}

Input.Field = Field

export { Input }
