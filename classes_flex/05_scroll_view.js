import React from 'react';
import {Image, ScrollView, Text} from 'react-native';

const logo = {
  uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/120px-React-icon.svg.png',
  width: 72,
  height: 72,
};

const ScrollView = () => (
  <ScrollView>
    <Text style={{fontSize: 64}}>Scroll Me</Text>
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Text style={{fontSize: 64}}>More Scroll</Text>
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Text style={{fontSize: 96}}>End</Text>
  </ScrollView>
);

export default ScrollView;
