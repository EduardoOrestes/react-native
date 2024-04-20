import { VStack, Heading, Center } from 'native-base';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
// importa tudo do yup
import * as yup from 'yup';

import { Input } from '../components/Input';
import { Button } from '../components/Button';

type FormDataProps = {
  name: string;
  email: string;
  password: string;
  password_confirm: string;
}

const signUpSchema = yup.object({
  name: yup.string().required('Informe o nome'),
  email: yup.string().required('Informe o email').email('E-mail inválido'),
  password: yup.string().required('Informe a senha').min(6, 'Mínimo 6 dígitos'),
  password_confirm: yup
  .string()
  .required('Infome a confirmação')
  .oneOf([yup.ref('password'), null], 'A confirmação de senha não é igual')
});

// caso queira manipular o form pelo estado
// import { useState } from 'react'

export function SignUp() {
  // caso queira manipular o form pelo estado
  // const [name, setName] = useState('');
  // const [email, setEmail] = useState('');

  const { control, handleSubmit, formState: { errors } } = useForm<FormDataProps>({
    resolver: yupResolver(signUpSchema)
  });

  function handleSignUp(data: FormDataProps) {
    console.log(data)
  }

  return (
    <VStack bgColor="gray.300" flex={1} px={10}>
      <Center>
        <Heading my={24} fontSize={"xl"}>
          Crie sua conta
        </Heading>

        {/* caso queira manipular o form pelo estado */}
        {/* <Input placeholder="Nome" onChangeText={setName} /> */}

        <Controller
          control={control}
          name="name"
          // agora a validacao esta sendo feita pelo YUP
          // rules={{
          //   required: 'Informe o nome',
          //   minLength: {
          //     value: 5,
          //     message: 'Pelo menos 5 dígitos'
          //   }
          // }}
          render={({ field: { onChange }}) => (
            <Input
              placeholder="Nome"
              onChangeText={onChange}
              errorMessage={errors.name?.message}
            />
          )}
        />

        <Controller
          control={control}
          name="email"
          // rules={{
          //   required: 'Informe o e-mail.',
          //   pattern: {
          //     value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
          //     message: 'Email inválido'
          //   }
          // }}
          render={({ field: { onChange }}) => (
            <Input
              placeholder="E-mail"
              onChangeText={onChange}
              errorMessage={errors.email?.message}
            />
          )}
        />

        <Controller
          control={control}
          name="password"
          render={({ field: { onChange }}) => (
            <Input
              placeholder="Senha"
              secureTextEntry
              onChangeText={onChange}
              errorMessage={errors.password?.message}
            />
          )}
        />

        <Controller
          control={control}
          name="password_confirm"
          render={({ field: { onChange }}) => (
            <Input
              placeholder="Confirme a senha"
              secureTextEntry
              onChangeText={onChange}
              errorMessage={errors.password_confirm?.message}
            />
          )}
        />

                                          {/* handleSubmit vai pegar os dados do formulario
                                              e repassar para a funcao handleSignUp que vai
                                              receber um data*/}
        <Button title="Cadastrar" onPress={handleSubmit(handleSignUp)} />
      </Center>
    </VStack>
  );
}
