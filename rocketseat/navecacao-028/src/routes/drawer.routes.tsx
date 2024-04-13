import { createDrawerNavigator } from '@react-navigation/drawer'
import { MaterialIcons } from '@expo/vector-icons'
const { Screen, Navigator, Group } = createDrawerNavigator();

import { ScreenA } from '../screens/ScreenA';
import { ScreenB } from '../screens/ScreenB';

export function DrawerRoutes() {
  return (
    <Navigator>
      <Screen
        name="screenA"
        component = {ScreenA}
        options={{
          drawerLabel: "Home",
          drawerIcon: () => <MaterialIcons name="home" size={22} />
        }}
      />

      <Group>
        <Screen
          name="screenB"
          component = {ScreenB}
          options={{
            drawerLabel: "Cadastrar",
            drawerIcon: () => <MaterialIcons name="add" size={22} />
          }}
        />
      </Group>
    </Navigator>
  )
}
