import {StyleSheet, Text, TextStyle, View} from 'react-native';
import React from 'react';
import {CustomText} from '..';
import {Metrix} from '../../config';

export type MultipleHeadingComponentProps = {
  heading: string;
  subHeading: string;
};

export const MultipleHeadingComponent: React.FC<
  MultipleHeadingComponentProps
> = ({heading, subHeading}) => {
  return (
    <View>
      <CustomText.LargeBoldText
        customStyle={[
          styles.textStyle,
          {
            marginTop: Metrix.VerticalSize(50),
          },
        ]}>
        {heading}
      </CustomText.LargeBoldText>
      <CustomText.RegularText
        customStyle={[
          styles.textStyle,
          {
            lineHeight: Metrix.VerticalSize(20),
            marginTop: Metrix.VerticalSize(5),
          },
        ]}>
        {subHeading}
      </CustomText.RegularText>
    </View>
  );
};

interface MultipleHeadingComponentStyles {
  textStyle: TextStyle;
}
const styles = StyleSheet.create<MultipleHeadingComponentStyles>({
  textStyle: {textAlign: 'center'},
});
