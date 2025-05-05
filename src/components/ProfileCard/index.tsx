import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {Fonts, FontType, Images, Metrix, Utills} from '../../config';
import {FadeInImage} from '../FadeInImage';
import {CustomText, PrimaryButton, RoundImageContainer} from '..';
import {normalizeFont} from '../../config/metrix';

type ProfileCardProps = {
  item: any;
  rightTxt?: boolean;
};

export const ProfileCard: React.FC<ProfileCardProps> = ({
  item,
  rightTxt = false,
}) => {
  return (
    <TouchableOpacity
      onPress={() => {}}
      activeOpacity={1}
      style={styles.parentContainer}>
      <View style={styles.imageContainer}>
        <RoundImageContainer
          circleWidth={37}
          source={Images.TestingAvatar}
          resizeMode={'cover'}
        />
      </View>
      <View style={styles.textContainer}>
        <CustomText.SmallText customStyle={styles.productNameText}>
          {item?.userName}
        </CustomText.SmallText>
        <CustomText.SmallText
          isSecondaryColor
          customStyle={styles.productNameText}>
          {item?.date}
        </CustomText.SmallText>
      </View>
      {rightTxt && (
        <View style={styles.rightContainer}>
          <CustomText.ExtraSmallText
            numberOfLines={2}
            customStyle={styles.productNameText}>
            {item?.price}
          </CustomText.ExtraSmallText>
        </View>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  parentContainer: {
    backgroundColor: Utills.selectedThemeColors().Base,
    width: '100%',
    flexDirection: 'row',
    borderColor: Utills.selectedThemeColors().SecondaryTextColor,
    marginTop: Metrix.HorizontalSize(15),
    // borderWidth: 1,
  },
  imageContainer: {
    justifyContent: 'center',
  },
  textContainer: {
    paddingLeft: Metrix.HorizontalSize(10),
    width: '50%',
    justifyContent: 'center',
    // borderWidth: 1,
  },
  productNameText: {
    fontWeight: '500',
  },
  rightContainer: {
    paddingLeft: Metrix.HorizontalSize(10),
    width: '37%',
    justifyContent: 'center',
    // borderWidth: 1,
  },
});
