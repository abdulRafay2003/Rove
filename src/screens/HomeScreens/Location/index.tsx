import {
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {BackHeader, CustomText, MainContainer} from '../../../components';
import {Images, Metrix, NavigationService, Utills} from '../../../config';
import {useDispatch} from 'react-redux';
import {HomeActions} from '../../../redux/actions';
import {LocationProps} from '../../propTypes';
import {normalizeFont} from '../../../config/metrix';

const countries = [
  {
    id: '1',
    country: 'Canada',
  },
  {
    id: '2',
    country: 'United States',
  },
  {
    id: '3',
    country: 'United Kingdome',
  },
  {
    id: '4',
    country: 'UAE',
  },
];

export const Location: React.FC<LocationProps> = () => {
  const dispatch = useDispatch();
  const selection = async (city: string) => {
    await dispatch(HomeActions.setUserCity(city));
    setTimeout(() => {
      NavigationService.goBack();
    }, 1000);
  };

  const renderModalItem = ({item}: any) => {
    return (
      <TouchableOpacity
        key={item?.id}
        activeOpacity={0.7}
        onPress={() => selection(item?.country)}
        style={styles.cityRow}>
        <Image
          source={Images.Location}
          style={styles.locationMark}
          resizeMode="contain"
        />
        <View>
          <CustomText.LargeSemiBoldText
            customStyle={{fontSize: normalizeFont(18)}}>
            {item?.country}
          </CustomText.LargeSemiBoldText>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <MainContainer>
      <BackHeader heading="Select City" />
      <View style={{flex: 1}}>
        <FlatList
          data={countries}
          renderItem={renderModalItem}
          keyExtractor={item => item?.id}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </MainContainer>
  );
};

const styles = StyleSheet.create({
  cityRow: {
    borderBottomWidth: 1,
    borderBottomColor: Utills.selectedThemeColors().TextInputBorderColor,
    paddingHorizontal: Metrix.HorizontalSize(10),
    paddingVertical: Metrix.VerticalSize(15),
    flexDirection: 'row',
    alignItems: 'center',
  },
  locationMark: {
    width: Metrix.HorizontalSize(20),
    height: Metrix.VerticalSize(20),
    marginRight: Metrix.HorizontalSize(10),
    tintColor: Utills.selectedThemeColors().Secondary,
  },
});
