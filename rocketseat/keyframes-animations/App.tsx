import { Button, View } from 'react-native';

import { styles } from './styles';

import { Message } from './src/components/Message';
import { useState } from 'react';
import { MessageFrame } from './src/components/MessageFrame';

export default function App() {
  const [showMessage, setShowMessage] = useState(false);
  const [showMessageFrame, setShowMessageFrame] = useState(false);

  return (
    <View style={styles.container}>
      { showMessage && <Message /> }

      <View style={styles.buttons}>
        <Button
          title={showMessage ? 'Fechar mensgem' : 'Exibir mensagem' }
          onPress={() => setShowMessage((prevState) => !prevState)}
        />

        <Button
          title={showMessageFrame ? 'Fechar mensgem FRAME' : 'Exibir mensagem FRAME' }
          onPress={() => setShowMessageFrame((prevState) => !prevState)}
        />
      </View>

      { showMessageFrame && <MessageFrame /> }
    </View>
  );
}
