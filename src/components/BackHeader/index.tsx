import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ImageSourcePropType,
  StyleProp,
  ViewStyle,
  ImageStyle,
} from 'react-native';
import {
  Colors,
  FontType,
  Images,
  Metrix,
  NavigationService,
  Utills,
} from '../../config';
import {CustomText} from '..';
import colors from '../../config/colors';
import utills from '../../config/utills';
import {normalizeFont} from '../../config/metrix';

type BackHeaderProps = {
  heading?: string;
  right?: boolean;
  customeStyle?: StyleProp<ViewStyle>;
  btnImage?: ImageSourcePropType;
  backArrow?: boolean;
  backFunction?: () => void;
  isBoldHeading?: boolean;
  btnImageStyle?: ImageStyle;
};

export const BackHeader: React.FC<BackHeaderProps> = ({
  heading = '',
  customeStyle,
  btnImage = Images.BackBtn,
  backArrow = true,
  right = false,
  backFunction = () => NavigationService.goBack(),
  isBoldHeading,
  btnImageStyle,
}) => {
  return (
    <View style={[styles.container, customeStyle]}>
      {backArrow ? (
        <TouchableOpacity style={styles.backButton} onPress={backFunction}>
          <Image
            source={Images.Arrow}
            resizeMode="contain"
            style={[styles.backImage, btnImageStyle]}
          />
        </TouchableOpacity>
      ) : (
        <View style={isBoldHeading ? {} : styles.backButton} />
      )}
      <View style={isBoldHeading ? {} : styles.headingContainer}>
        {isBoldHeading ? (
          <CustomText.LargeBoldText>{heading}</CustomText.LargeBoldText>
        ) : (
          <CustomText.MediumText
            customStyle={{
              fontWeight: '700',
              fontSize: normalizeFont(20),
              color: Utills.selectedThemeColors().Secondary,
            }}>
            {heading}
          </CustomText.MediumText>
        )}
      </View>
      {right ? (
        <TouchableOpacity style={styles.backButton} onPress={backFunction}>
          <Image
            source={Images.Search}
            resizeMode="contain"
            style={[styles.backImage, btnImageStyle]}
          />
        </TouchableOpacity>
      ) : (
        <View style={isBoldHeading ? {} : styles.backButton} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    // alignItems: 'center',
    width: '100%',
    // paddingTop: Metrix.VerticalSize(10),
    paddingBottom: Metrix.VerticalSize(10),
  },
  backButton: {
    width: '15%',
    // borderColor:'white'
  },
  backImage: {
    width: Metrix.HorizontalSize(30),
    height: Metrix.VerticalSize(30),
    tintColor: utills.selectedThemeColors()?.Secondary,
  },
  headingContainer: {
    // paddingVertical:5,
    width: '70%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
