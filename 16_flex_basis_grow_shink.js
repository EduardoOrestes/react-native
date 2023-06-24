import React, {useState} from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import type {ViewStyle} from 'react-native';

const App = () => {
  const [redState, setRedState] = useState({
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 100,
  });
  const [greenState, setGreenState] = useState({
    flexGrow: 1,
    flexShrink: 0,
    flexBasis: 100,
  });
  const [yellowState, setYellowState] = useState({
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 200,
  });
  return (
    <View style={styles.container}>
      <View
        style={[
          styles.container,
          {
            flexDirection: 'row',
            alignContent: 'space-between',
          },
        ]}>
          <BoxInfo color="red" {...redState} setStyle={setRedState}/>
          <BoxInfo color="green" {...greenState} setStyle={setGreenState} />
          <BoxInfo color="yellow" {...yellowState} setStyle={setYellowState} />
        </View>
        <View style={styles.previewContainer}>
          <View
            style={[
              styles.box,
              {
                flexBasis: redState.flexBasis,
                flexGrow: redState.flexGrow,
                flexShrink: redState.flexShrink,
                backgroundColor: 'red',
              },
            ]}
          />
          <View
            style={[
              styles.box,
              {
                flexBasis: greenState.flexBasis,
                flexGrow: greenState.flexGrow,
                flexShirink: greenState.flexShrink,
                backgroundColor: 'green',
              },
            ]}
          />
          <View
            style={[
              styles.box,
              {
                flexBasis: yellowState.flexBasis,
                flexGrow: yellowState.flexGrow,
                flexShrink: yellowState.flexShrink,
                backgroundColor: 'yellow',
              },
            ]}
          />
        </View>
    </View>
  );
};

type BoxInfoProps = ViewStyle & {
  color: string;
  setStyle: React.Dispatch<React.SetStateAction<ViewStyle>>;
};

const BoxInfo = ({
  color,
  flexBasis,
  flexShrink,
  setStyle,
  flexGrow,
}: BoxInfoProps) => (
  <View style={[styles.row, {flexDirection: 'column'}]}>
    <View
      style={[
        styles.boxLabel,
        {
          backgroundColor: color,
        },
      ]}>
      <Text
        style={{
          color: '#fff',
          fontWeight: '500',
          textAlign: 'center',
        }}>
        Box
      </Text>
    </View>

    <Text style={styles.label}>
      flexBasis
    </Text>
    <TextInput
      value={String(flexBasis)}
      style={styles.input}
      onChangeText={fB =>
        setStyle(value => ({
          ...value,
          flexBasis: isNaN(parseInt(fB, 10)) ? 'auto' : parseInt(fB, 10),
        }))
      }
    />

    <Text style={styles.label}>
      flexShrink
    </Text>
    <TextInput
      value={String(flexShrink)}
      style={styles.input}
      onChangeText={fS =>
        setStyle(value => ({
          ...value,
          flexShrink: isNaN(parseInt(fS, 10)) ? undefined : parseInt(fS, 10),
        }))
      }
    />

    <Text style={styles.label}>
      flexGrow
    </Text>
    <TextInput
      value={String(flexGrow)}
      style={styles.input}
      onChangeText={fG =>
        setStyle(value => ({
          ...value,
          flexGrow: isNaN(parseInt(fG, 10)) ? undefined : parseInt(fG, 10),
        }))
      }
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    marginTop: 20,
  },
  box: {
    flex: 1,
    height: 50,
    width: 50,
  },
  boxLabel: {
    minWidth: 80,
    padding: 8,
    borderRadius: 4,
    marginTop: 8,
  },
  label: {
    marginTop: 6,
    fontSize: 16,
    fontWeight: '100',
  },
  previewContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'aliceblue',
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    marginBottom: 10,
  },
  input: {
    borderBottomWidth: 1,
    paddingVertical: 3,
    width: 50,
    textAlign: 'center',
  },
});

export default App;
