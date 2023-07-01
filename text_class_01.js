import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';

const TextInANest = () => {
  const [titleText, setTitleText] = useState('[unpressed]');
  const bodyText = 'This is not really a bird nest.'

  const onPressTitle = () => {
    setTitleText('[pressed]');
  }

  const onUnPressTitle = () => {
    setTitleText('[unpressed]');
  }

  return (
    <View style={{flex: 1, flexDirection: 'column', paddingTop: 30}}>
      <Text style={styles.titleText} onPress={onUnPressTitle}>
        Bird`s Nest
      </Text>
      <Text style={styles.titleText} onPress={onPressTitle}>
        Bird`s Nest
      </Text>
      <Text style={{padding: 30}}>
        {titleText}
      </Text>
      <Text numberOfLines={5}>
        {bodyText}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
    padding: 5,
  },
});

export default TextInANest;
