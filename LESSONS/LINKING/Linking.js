import React, {useCallback} from 'react';
import {Alert, Button, Linking, StyleSheet, View} from 'react-native';

type SendItentButtonProps = {
  action: String;
  children: String;
  extra?: Array<{
    key: String;
    value: string | number | Boolean;
  }>;
};

const SendIntentButton = ({
  action,
  extras,
  children,
}: SendIntentButtonProps) => {
  const handlePress = useCallback(async () => {
    try {
      await Linking.sendIntent(action, extras);
    } catch (e) {
      Alert.alert(e.message);
    }
  }, [action, extras]);

  return <Button title={children} onPress={handlePress} />;
};

const App = () => {
  return (
    <View style={styles.container}>
      <SendIntentButton
        action="android.intent.action.POWER_USAGE_SUMMARY">
        Power Usage Summary
      </SendIntentButton>

      <SendIntentButton
        action="android.settings.APP_NOTIFICATION_SETTINGS"
        extras={[{
          key: 'android.provider.extra.APP_PACKAGE',
          value: 'com.facebook.katana',
        }]}>
        App Notification Settings
      </SendIntentButton>
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
