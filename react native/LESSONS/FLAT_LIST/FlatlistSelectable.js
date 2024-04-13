import React, {useState} from 'react';
import {
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';

type ItemData = {
  id: String,
  title: String,
};

const DATA: ItemData[] = [
  {
    id: 'hash-1231',
    title: '1 - Item',
  },
  {
    id: 'hash-1232',
    title: '2 - Item',
  },
  {
    id: 'hash1233',
    title: '3 - item',
  },
  {
    id: 'hash1234',
    title: '4 - item',
  },
  {
    id: 'hash1235',
    title: '5 - item',
  },
  {
    id: 'hash1236',
    title: '6 - item',
  },
  {
    id: 'hash1237',
    title: '7 - item',
  },
  {
    id: 'hash1238',
    title: '8 - item',
  },
  {
    id: 'hash1239',
    title: '9 - item',
  },
  {
    id: 'hash12310',
    title: '10 - item',
  },
];

type ItemProps = {
  item: ItemData;
  onPress: () => void;
  backgroundColor: String;
  textColor: String;
};

const Item = ({item, onPress, backgroundColor, textColor}: ItemProps) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, {backgroundColor}]}>
    <Text style={[styles.title, {color: textColor}]}>
      {item.title}
    </Text>
  </TouchableOpacity>
);

const App = () => {
  const [selectedId, setSelectedId] = useState();

  const renderItem = ({item}: {item: ItemData}) => {
    const backgroundColor = item.id === selectedId ? '#6e3b6e' : '#f9c2ff';
    const color = item.id === selectedId ? 'white' : 'black';

    return (
      <Item
        item={item}
        onPress={() =>setSelectedId(item.id)}
        backgroundColor={backgroundColor}
        textColor={color}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        extraData={selectedId}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default App;
