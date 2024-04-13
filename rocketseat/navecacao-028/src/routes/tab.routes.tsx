import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { MaterialIcons } from '@expo/vector-icons'

const { Screen, Navigator, Group } = createBottomTabNavigator();

import { ScreenA } from '../screens/ScreenA';
import { ScreenB } from '../screens/ScreenB';

export function TabRoutes() {
  return (
    <Navigator
      screenOptions={{
        tabBarActiveTintColor: 'navy',
        tabBarInactiveTintColor: 'gray',
        // headerShown: false para nao exibir o header
      }}
    >
      <Screen
        name="screenA"
        component = {ScreenA}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons
              name="home"
              color={color}
              size={size}
            />
          )
        }}
      />

      <Group>
        <Screen
          name="screenB"
          component = {ScreenB}
          options={{
            tabBarLabel: 'Novo',
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons
                name="add"
                color={color}
                size={size}
              />
            )
          }}
        />
      </Group>
    </Navigator>
  )
}
