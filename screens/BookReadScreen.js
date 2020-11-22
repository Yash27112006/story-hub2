import React from 'react';
import { Text, View, Image } from 'react-native';

export default class ReadScreen extends React.Component {
    render() {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Image source = {require("../assets/reading.png")} style = {{width: 60, height: 60}} />
          <Text>Read Book</Text>
        </View>
      );
    }
  }