import React from "react";
import {Text, View, Image} from "react-native";

type CatProps = {
  name: string;
};

const Cat = (props: CatProps) => {
  return (
    <View>
      <Text>
        Hello, I am {props.name}
      </Text>
    </View>
  );
};

const Cafe = () => {
  return (
    <View>
      <Image
        source={{
          uri:  'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Jenkins_logo.svg/1200px-Jenkins_logo.svg.png'
        }}
        style={{
          width: 200,
          height: 200
        }}
      />

      <Cat name="name 01" />
      <Cat name="name 02" />
      <Cat name="name 03" />
    </View>
  );
};

export default Cafe;
