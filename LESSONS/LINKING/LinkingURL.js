import React, {useCallback} from 'react';
import {Alert, Button, Linking, StyleSheet, View} from 'react-native';

const supportedURL = 'https://google.com';
const unsupportedURL = 'slack://open?tean=123';

type OpenURLButtonProps = {
  url: String;
  children: String;
};

const OpenURLButton = ({url, children}: OpenURLButtonProps) => {
  const handlePress = useCallback(async () => {
    // verificando se o link é compativel com a URL customizada
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      // abrindo o link com algum aplicativo, se o esquema de URL fot 'HTTP',
      //  o link da web vai abrir no navegador
      await Linking.openURL(url);
    } else {
      Alert.alert(`Don't know how to open this URL: ${url}`);
    }
  }, [url]);

  return <Button title={children} onPress={handlePress} />;
};

const App = () => {
  return (
    <View style={styles.container}>
      <OpenURLButton url={supportedURL}>
        Open Supported URL
      </OpenURLButton>

      <OpenURLButton url={unsupportedURL}>
        Open Unsupported URL
      </OpenURLButton>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
