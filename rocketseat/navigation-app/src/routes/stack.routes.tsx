import { createStackNavigator } from "@react-navigation/stack";

import TabRoutes from './tab.routes';
import Profile from "../screens/Profile";

const Stack = createStackNavigator();

export default function StackRoutes() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="home"
        component={Profile}
      />
    </Stack.Navigator>
  )
}