import React, {useState, useEffect} from 'react';
import {
  Alert,
  Animated,
  InteractionManager,
  Platform,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload, \n' + 'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload, \n' +
           'Shake or press menu button for dev menu',
});

const useFadeIn = (duration = 5000) => {
  const [opacity] = useState(new Animated.Value(0));

  // executa a animacao quando o componente é montado
  useEffect(() => {
    // Animated.Timing() cria um identificador de interacao por padrao,
    // se quiser desativar o comportament, voce pode definir isInteraction como FALSE
    Animated.timing(opacity, {
      toValue: 1,
      duration,
      useNativeDriver: true,
    }).start();
  }, [duration, opacity]);

  return opacity;
};

type BallProps = {
  onShown: () => void;
};

const Ball = ({onShown}: BallProps) => {
  const opacity = useFadeIn();

  // executa o metodo depois da animacao
  useEffect(() => {
    const interactionPromise = InteractionManager.runAfterInteractions(() => onShown());

    return () => interactionPromise.cancel();
  }, [onShown]);

  return <Animated.View style={[styles.ball, {opacity}]} />;
};

const App = () => {
  return (
    <View style={styles.container}>
      <Text>
        {instructions}
      </Text>
      <Ball onShown={() => Alert.alert('Animation is done.')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ball: {
    width: 100,
    height: 100,
    backgroundColor: 'salmon',
    borderRadius: 100,
  },
});

export default App;
