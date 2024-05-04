import { Text, View } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';
import Animated, { Keyframe } from "react-native-reanimated";

import { styles } from "./styles";

export function MessageFrame() {

  const enteringKeyframe = new Keyframe({
    // esses valores sao as porcentagens do frame, as quais definem cada quadro
    0: {
      opacity: 0,
      transform: [
        { translateY: 100 }
      ]
    },
    70: {
      opacity: 0.3,
    },
    100: {
      opacity: 1,
      transform: [
        { translateY: 0 }
      ]
    }
  });

  const exitingKeyFrame = new Keyframe({
    // do inicio ao fim ou de 0% a 100%
    from : {
      opacity: 1,
      transform: [
        { translateY: 0 }
      ]
    },
    to: {
      opacity: 0,
      transform: [
        { translateY: 100 }
      ]
    }
  });

  return (
    <Animated.View
      style={styles.container}
      entering={enteringKeyframe.duration(500)}
      exiting={exitingKeyFrame}
    >
      <MaterialIcons
        name="notifications"
        color="#FFF"
        size={18}
      />

      <Text style={styles.title}>
        Example message with Frame...
      </Text>
    </Animated.View>
  )
}
