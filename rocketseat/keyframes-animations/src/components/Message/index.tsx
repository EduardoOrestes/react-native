import { Text, View } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';
import Animated, { FadeIn, StretchOutY } from "react-native-reanimated";

import { styles } from "./styles";

export function Message() {
  return (
    <Animated.View
      style={styles.container}
      entering={FadeIn.duration(700)}
      exiting={StretchOutY}
    >
      <MaterialIcons
        name="notifications"
        color="#FFF"
        size={18}
      />

      <Text style={styles.title}>
        Example message with Animated...
      </Text>
    </Animated.View>
  )
}
