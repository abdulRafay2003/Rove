import React, {FC, ReactNode} from 'react';
import {
  TouchableOpacity,
  Text,
  ActivityIndicator,
  StyleSheet,
  Image,
  TouchableOpacityProps,
  StyleProp,
  ViewStyle,
  View,
  ImageProps,
} from 'react-native';
import {Metrix, Colors, Fonts, Images, FontType, Utills} from '../../config';
import {CustomText, RoundImageContainer} from '..';
import {RoundImageContainerProps} from '../RoundImageContainer';

type PrimaryButtonProps = TouchableOpacityProps &
  RoundImageContainerProps & {
    title: string;
    isLoading?: boolean;
    disabled?: boolean;
    width?: number | string;
    color?: string;
    textColor?: string;
    customStyles?: StyleProp<ViewStyle>;
    isIcon?: boolean;
    icon?: ImageProps['source'];
  };

export const SecondaryButton: FC<PrimaryButtonProps> = ({
  title,
  onPress,
  isLoading,
  disabled,
  width = '100%',
  color = Utills.selectedThemeColors().Base,
  textColor = '#696969',
  customStyles,
  isIcon,
  source,
  circleWidth = 27,
  ...rest
}) => (
  <TouchableOpacity
    onPress={onPress}
    activeOpacity={0.8}
    style={[
      styles.buttonContainer,
      {
        backgroundColor: disabled ? Utills.selectedThemeColors().TextInputPlaceholserColor : color,
    // borderColor: Utills.selectedThemeColors().TextInputBorderColor,
        width: width,
      },
      customStyles,
    ]}
    disabled={disabled || isLoading}
    {...rest}>
    {isIcon && source && (
      <RoundImageContainer
        circleWidth={circleWidth}
        source={source}
        resizeMode="contain"
        styles={{
          // borderWidth:1,
          marginLeft: Metrix.HorizontalSize(10),
        }}
        // imageStyle={{
        //   width: Metrix.HorizontalSize(20),
        //   height: Metrix.VerticalSize(26),
        //   marginTop: 3,
        //   alignSelf: 'center',
        // }}
        borderColor="white"
      />
    )}

    {isLoading ? (
      <ActivityIndicator color={textColor} />
    ) : (
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          // borderWidth: 1,
          // borderColor: 'red',
          width: isIcon? "70%" : '100%',
        }}>
        <CustomText.LargeSemiBoldText
          customStyle={{
            color: textColor,
            fontSize: FontType.FontMedium,
          }}>
          {title}
        </CustomText.LargeSemiBoldText>

        {/* // <Text style={{ color: textColor }}>{title}</Text> */}
      </View>
    )}
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  buttonContainer: {
    height: Metrix.VerticalSize(50),
    // justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: Metrix.VerticalSize(50),
    marginVertical: Metrix.VerticalSize(10),
    borderColor: Utills.selectedThemeColors().TextInputBorderColor,
    borderWidth: 2,

    // ...Metrix.createShadow(),
  },
  // titleText:{
  //   fontFamily: Fonts['Futura-Medium'],
  //   fontSize: Metrix.customFontSize(16),
  //   color: Utills.selectedThemeColors().Primary,
  // }
});
