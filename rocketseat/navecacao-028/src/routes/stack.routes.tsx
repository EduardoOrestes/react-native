import { createNativeStackNavigator } from '@react-navigation/native-stack'

const { Screen, Navigator, Group } = createNativeStackNavigator();

import { ScreenA } from '../screens/ScreenA';
import { ScreenB } from '../screens/ScreenB';

export function StackRoutes() {
  return (
    <Navigator
      // o que for adicionado no navigator vai para todas as telas, porque ela sobrepõe
      // screenOptions={{
      //   headerShown: false
      // }}
    >
      <Screen
        name="screenA"
        options={{
          headerShown: false
        }}
        component = {ScreenA}
      />

      {/* o group seta as configuracoes para um grupo de screens adicionadas dentro dele */}
      <Group
        // screenOptions={{
        //   headerShown: false
        // }}
      >
        <Screen
          name="screenB"
          options={{
            title: 'Tela B',
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: 'navy'
            },
            headerTintColor: 'white'
          }}
          component = {ScreenB}
        />
      </Group>
    </Navigator>
  )
}
