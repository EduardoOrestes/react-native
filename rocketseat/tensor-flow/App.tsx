import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Image, View, ActivityIndicator } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as tensorflow from '@tensorflow/tfjs';
import * as mobilenet from '@tensorflow-models/mobilenet';
import { decodeJpeg } from '@tensorflow/tfjs-react-native';
import * as FileSystem from 'expo-file-system';

import { Button } from './components/Button'

import { styles } from './styles';
import { Classification, ClassificationProps } from './components/Button/Classification';

export default function App() {
  const [selectedImageUri, setSelectedImageUri] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // reaproveitando a tipagem do components/button/classification
  const [results, setResults] = useState<ClassificationProps[]>([]);

  async function handleSelectImage() {
    setIsLoading(true);

    try {
      // abrir a galeria para selecionar uma imagem
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images, // apenas imagems
        allowsEditing: true // permite a edição
      });

      if (!result.canceled) {
        const { uri } = result.assets[0];

        setSelectedImageUri(uri);

        await imageClassification(uri);
      }
    } catch (error) {
      console.log(error);
    } finally {
      // finalmente... independente se deu certo ou nao
      setIsLoading(false);
    }
  }

  async function imageClassification(imageUri: string) {
    setResults([]);

    await tensorflow.ready();

    const model = await mobilenet.load(); // carrega o modelo que sera utilizado

    // converter a imagem em Base64
    const imageBase64 = await FileSystem.readAsStringAsync(imageUri, {
      encoding: FileSystem.EncodingType.Base64
    });

    // criar um buffer para a imageBase64
    const imgBuffer = tensorflow.util.encodeString(imageBase64, 'base64').buffer;
    const raw = new Uint8Array(imgBuffer);
    const imageTensor = decodeJpeg(raw);

    const classificationResult = await model.classify(imageTensor);

    setResults(classificationResult);
  }

  return (
    <View style={styles.container}>
      <StatusBar
        style="light"
        backgroundColor="transparent"
        translucent
      />
      <Image
        source={{ uri: selectedImageUri ? selectedImageUri : 'https://t3.ftcdn.net/jpg/02/48/42/64/360_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg' }}
        style={styles.image}
      />

      <View style={styles.results}>
        {
          results.map((result) => (
            <Classification key={result.className} data={result} />
          ))
        }
      </View>

      {
        isLoading
        ? <ActivityIndicator color="#5F1BBF" />
        : <Button title="Selecionar Imagem" onPress={handleSelectImage} />
      }
    </View>
  );
}


