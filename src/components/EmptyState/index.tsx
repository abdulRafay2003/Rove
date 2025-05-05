import {
  Image,
  ImageProps,
  StyleSheet,
  Text,
  View,
  ViewStyle,
} from 'react-native';
import React from 'react';
import {Images, Metrix, Utills} from '../../config';
import {CustomText} from '..';

type EmptyStateProps = {
  src?: ImageProps['source'];
  customStyle?: ViewStyle;
  title?: any;
};

export const EmptyState: React.FC<EmptyStateProps> = ({
  src,
  customStyle,
  title = 'Data',
}) => {
  return (
    <View style={[styles.emptyState, customStyle]}>
      <View style={styles.containerStyle}>
        <Image
          source={src ? src : Images.EmptyState}
          style={{
            width: Metrix.HorizontalSize(120),
            height: Metrix.VerticalSize(120),
            tintColor: Utills.selectedThemeColors().Primary,
          }}
          resizeMode="contain"
        />
        <CustomText.MediumText
          customStyle={{
            marginTop: Metrix.VerticalSize(10),
            fontWeight: '600',
            textAlign: 'center',
          }}>
          No {title} Found
        </CustomText.MediumText>
      </View>
    </View>
  );
};

interface EmptyStateStyles {
  containerStyle: ViewStyle;
  emptyState: ViewStyle;
}
const styles = StyleSheet.create<EmptyStateStyles>({
  containerStyle: {
    // borderColor: 'red',
    width: '100%',
    alignItems: 'center',
    // borderWidth: 1,
    // height: Metrix.VerticalSize(120),
    marginTop: Metrix.VerticalSize(150),
    // alignSelf: 'center',
  },
  emptyState: {
    // borderWidth: 2,
    // borderColor: 'green',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    paddingHorizontal: Metrix.VerticalSize(50),
  },
});
