import {ImageProps, StyleSheet, Text, View, ViewStyle} from 'react-native';
import React from 'react';
import Lottie from 'lottie-react-native';
import {Metrix} from '../../config';

type LottieAnimatedComponentProps = {
  src?: ImageProps['source'];
  customStyle?: ViewStyle;
  speed?: number;
};

export const LottieAnimatedComponent: React.FC<
  LottieAnimatedComponentProps
> = ({src, customStyle, speed = 0.9}) => {
  return (
    <Lottie
      source={src ? src : require('../../assets/animations/animA.json')}
      autoPlay
      loop
      style={[
        {
          width: Metrix.HorizontalSize(60),
          height: Metrix.VerticalSize(60),
        },
        customStyle,
      ]}
      resizeMode="cover"
      speed={speed}
    />
  );
};

interface LottieAnimatedComponentStyles {}
const styles = StyleSheet.create<LottieAnimatedComponentStyles>({});
