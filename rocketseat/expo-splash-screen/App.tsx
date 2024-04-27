import { useState } from 'react';
import { Home } from './src/screens/Home';
import { Splash } from './src/screens/Splash';
import { preventAutoHideAsync } from 'expo-splash-screen';

// para a splash screen nao sumir automaticamente, vai ser removida manualmente quando verifica o splash complete
preventAutoHideAsync();

export default function App() {
  const [splashComplete, setSplashComplete] = useState(false);

  return (
    splashComplete
      ? <Home />
      : <Splash onComplete={setSplashComplete} />
  );
}
