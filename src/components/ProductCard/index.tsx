import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {Fonts, FontType, Images, Metrix, Utills} from '../../config';
import {FadeInImage} from '../FadeInImage';
import {CustomText, PrimaryButton, ProfileCard} from '..';
import {normalizeFont} from '../../config/metrix';

type ProductCardProps = {
  item: any;
};

export const ProductCard: React.FC<ProductCardProps> = ({item}) => {
  console.log('Item...............', item);

  const productView = (item: any) => {
    return (
      <View style={styles.productView}>
        <View style={styles.productImage}>
          <FadeInImage source={item?.image} resizeMode={'cover'} />
        </View>
        <View style={styles.textContainer}>
          <View style={styles.pricingContainer}>
            <CustomText.RegularText customStyle={styles.priceText}>
              {item?.price}
            </CustomText.RegularText>
          </View>
          <CustomText.LargeSemiBoldText customStyle={styles.productNameText}>
            {item?.title}
          </CustomText.LargeSemiBoldText>
          <CustomText.SmallText numberOfLines={3}>
            {item?.description}
          </CustomText.SmallText>
          <ProfileCard item={item} />
          <PrimaryButton
            title={'Message Now'}
            textColor={Utills.selectedThemeColors().Base}
            customStyles={{height: Metrix.VerticalSize(30)}}
            fontSize={FontType.FontRegular}
          />
        </View>
      </View>
    );
  };

  const industryView = (item: any) => {
    return (
      <View style={styles.industryView}>
        <View style={styles.industryImage}>
          <FadeInImage source={item?.image} resizeMode={'cover'} />
        </View>
        <CustomText.MediumText>{item?.title}</CustomText.MediumText>
      </View>
    );
  };

  const leadView = (item: any) => {
    return (
      <View style={styles.leadView}>
        <View style={styles.industryImage}>
          <FadeInImage source={item?.image} resizeMode={'cover'} />
        </View>
        <CustomText.LargeSemiBoldText
          customStyle={{fontSize: normalizeFont(22), fontWeight: '600'}}>
          {item?.title}
        </CustomText.LargeSemiBoldText>
        <CustomText.RegularText
          customStyle={{marginTop: Metrix.VerticalSize(15)}}>
          {item?.description}
        </CustomText.RegularText>
      </View>
    );
  };

  const servicesView = (item: any) => {
    return (
      <View style={styles.serviceView}>
        <View style={styles.productImage}>
          <FadeInImage source={item?.image} resizeMode={'cover'} />
        </View>
        <View style={styles.textContainer}>
          <CustomText.LargeSemiBoldText customStyle={styles.serviceNameText}>
            {item?.title}
          </CustomText.LargeSemiBoldText>
          <CustomText.SmallText numberOfLines={3}>
            {item?.description}
          </CustomText.SmallText>
          <ProfileCard item={item} rightTxt={true} />
          <PrimaryButton
            title={'Message Now'}
            textColor={Utills.selectedThemeColors().Base}
            customStyles={{height: Metrix.VerticalSize(30)}}
            fontSize={FontType.FontRegular}
          />
        </View>
      </View>
    );
  };

  return (
    <TouchableOpacity
      onPress={() => {}}
      activeOpacity={0.9}
      style={styles.parentContainer}>
      {item?.type == 'product'
        ? productView(item)
        : item?.type == 'industry'
        ? industryView(item)
        : item?.type == 'lead'
        ? leadView(item)
        : servicesView(item)}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  parentContainer: {
    borderRadius: Metrix.HorizontalSize(8),
    backgroundColor: Utills.selectedThemeColors().Base,
    marginHorizontal: Metrix.HorizontalSize(10),
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: Utills.selectedThemeColors().DotGrey,
    // ...Metrix.cardShadow,
  },
  productView: {
    width: Metrix.HorizontalSize(250),
  },
  productImage: {
    height: Metrix.VerticalSize(140),
    borderTopLeftRadius: Metrix.HorizontalSize(8),
    borderTopRightRadius: Metrix.HorizontalSize(8),
    overflow: 'hidden',
  },
  textContainer: {
    paddingTop: Metrix.HorizontalSize(10),
    paddingHorizontal: Metrix.HorizontalSize(15),
  },
  pricingContainer: {
    borderRadius: Metrix.HorizontalSize(100),
    paddingHorizontal: Metrix.HorizontalSize(10),
    paddingVertical: Metrix.HorizontalSize(5),
    alignSelf: 'flex-end',
    backgroundColor: Utills.selectedThemeColors().Primary,
  },
  priceText: {
    color: Utills.selectedThemeColors().Base,
    fontWeight: '500',
    fontSize: normalizeFont(13),
  },
  productNameText: {
    fontSize: normalizeFont(20),
    fontWeight: '600',
    paddingVertical: Metrix.VerticalSize(7),
  },
  industryView: {
    width: Metrix.HorizontalSize(160),
    height: Metrix.VerticalSize(120),
    alignItems: 'center',
    justifyContent: 'center',
    // overflow: 'hidden',
  },
  industryImage: {
    height: Metrix.VerticalSize(40),
    width: Metrix.VerticalSize(40),
    marginVertical: Metrix.VerticalSize(10),
  },
  leadView: {
    width: Metrix.HorizontalSize(280),
    padding: Metrix.HorizontalSize(15),
  },
  serviceView: {
    width: Metrix.HorizontalSize(310),
  },
  serviceNameText: {
    color: Utills.selectedThemeColors().Secondary,
    fontSize: normalizeFont(20),
    fontWeight: '600',
    paddingVertical: Metrix.VerticalSize(7),
  },
});
