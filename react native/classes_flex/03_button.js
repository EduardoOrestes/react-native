import React, {useState} from "react";
import { Button, Text, View } from "react-native";

type CatProps = {
  name: string;
}

const Cat = (props: CatProps) => {
  const [isHungry, setIsHungry] = useState(true);

  return (
    <View>
      <Text>
        I am {props.name}, ans I am {isHungry ? 'hungry' : 'full' }.
      </Text>

      <Button
        onPress = {() => {
          setIsHungry(false);
        }}
        disable={!isHungry}
        title={isHungry ? 'Pour me some milk' : 'Thanks'}
      />

      <Button
        onPress = {() => {
          setIsHungry(true);
        }}
        disable={isHungry}
        title={'Reset'}
      />
    </View>
  );
};

const Cafe = () => {
  return (
    // <> sao fragmentos... permite que voce faca isso sem aninhar um elemento
    //  de empacotamento extra como uma view
    <>
      <Cat name="Gato 1" />
      <Cat name="Gato 2" />
    </>
  );
};

export default Cafe;
