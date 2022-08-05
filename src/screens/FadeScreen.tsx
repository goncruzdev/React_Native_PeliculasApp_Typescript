import {View, Text, Animated, Button} from 'react-native';
import React, {useRef} from 'react';
import useFade from '../hooks/useFade';

const FadeScreen = () => {
  const {fadeIn, fadeOut, opacity} = useFade();
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'grey',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Animated.View
        style={{
          backgroundColor: '#084F6A',
          width: 150,
          height: 150,
          borderColor: 'white',
          borderWidth: 10,
          opacity: opacity,
        }}></Animated.View>

      <Button onPress={fadeIn} title="animacion" />
      <Button onPress={fadeOut} title="animacionOut" />
    </View>
  );
};

export default FadeScreen;
