import React from 'react';
import {
  StyleSheet,
  Button,
  View,
  SafeAreaView,
  Text,
  Alert,
} from 'react-native';

const Separator = () => <View style={styles.separator} />;

const App = () => (
  <SafeAreaView style={styles.container}>
    <View>
      <Text style={styles.title}>
        O titulo e o manipulador onPress sao obrigatorios.
        Recomenda-se defini accessibilidadeLabel para ajudar a tornar seu aplicativo utilizavel por todos.
      </Text>
      <Button
        title='Press me'
        onPress={() => Alert.alert('Simple Button Pressed')} />
    </View>

    <Separator />

    <View>
      <Text style={styles.title}>
        Ajuste a cor de uma forma que pareca padrao em cada plataforma.
        No iOS,o suporte de cor controla a cor do text.
        No Android, a cor ajusta a cor de fundo do botao.
      </Text>
      <Button
        title="Press me"
        color="#f194FF"
        onPress={() => Alert.alert('Button with adjusted color pressed.')} />
    </View>

    <Separator />

    <View>
      <Text style={styles.title}>
        Todas as interacoes para o componente estao desativadas.
      </Text>
      <Button
        title="Press me"
        disabled
        onPress={() =>Alert.alert('Cannot press this one')} />
    </View>

    <Separator />

    <View>
      <Text style={styles.title}>
        Essa estrategia de layout permite que o titulo defina a largura do botao.
      </Text>
      <View style={styles.fixToText}>
        <Button
          title="Left button"
          onPress={() => Alert.alert('Left button pressed')} />
        <Button
          title="Right button"
          onPress={() => Alert.alert('Right button pressed')} />
      </View>
    </View>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 16,
  },
  title: {
    textAlign: 'center',
    marginVertical: 8,
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});

export default App;
