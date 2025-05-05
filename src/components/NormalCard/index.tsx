import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {FontType, Metrix, Utills} from '../../config';
import {CustomText} from '..';

type NormalCardComponentProps = {
  item: any;
  onPress?: () => void;
};

export const NormalCardComponent: React.FC<NormalCardComponentProps> = ({
  item,
  onPress,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.7}
      style={[styles.touchableOpacityStyle]}>
      <Image
        source={item?.icon}
        style={{
          width: Metrix.HorizontalSize(25),
          height: Metrix.VerticalSize(25),
        }}
        resizeMode="contain"
      />
      <CustomText.LargeBoldText customStyle={styles.textStyle}>
        {item?.title}
      </CustomText.LargeBoldText>
      <View></View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    width: '80%',
    fontSize: FontType.FontMedium,
    fontWeight: '500',
  },
  touchableOpacityStyle: {
    alignItems: 'center',
    marginTop: Metrix.VerticalSize(15),
    borderRadius: Metrix.VerticalSize(8),
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: Metrix.HorizontalSize(10),
    backgroundColor: Utills.selectedThemeColors().Base,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: Utills.selectedThemeColors().Secondary,
    ...Metrix.createShadow,
  },
});
