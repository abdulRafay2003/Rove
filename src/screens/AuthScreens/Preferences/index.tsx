import {StyleSheet, TouchableOpacity, View} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import {PreferencesProps} from '../../propTypes';
import {
  BackHeader,
  CustomText,
  MainContainer,
  PrimaryButton,
} from '../../../components';
import {t} from 'i18next';
import {FontType, Metrix, NavigationService, Utills} from '../../../config';
import {normalizeFont} from '../../../config/metrix';
import {useDispatch, useSelector} from 'react-redux';
import {AuthActions, HomeActions} from '../../../redux/actions';
import {RootState} from '../../../redux/reducers';

export const Preferences: React.FC<PreferencesProps> = ({}) => {
  const isSafeWord = useSelector(
    (state: RootState) => state?.home?.safeWord?.isSafeWord,
  );
  const dispatch = useDispatch();

  return (
    <MainContainer isFlatList>
      <BackHeader heading="Preferences" isBoldHeading />
      <View style={{flex: 1}}>
        <CustomText.MediumText customStyle={styles.heading}>
          Please select your preferred level of protection
        </CustomText.MediumText>

        <CustomText.MediumText
          customStyle={{
            textAlign: 'center',
            marginTop: Metrix.VerticalSize(30),
          }}>
          (Recommended)
        </CustomText.MediumText>

        <TouchableOpacity
          activeOpacity={0.7}
          style={[
            styles.optionContainer,
            {
              borderWidth: isSafeWord ? 2 : StyleSheet.hairlineWidth,
              borderColor: isSafeWord
                ? Utills.selectedThemeColors().PrimaryTextColor
                : Utills.selectedThemeColors().SecondaryTextColor,
            },
          ]}
          onPress={() => {
            dispatch(
              HomeActions.setSafeWord({
                isSafeWord: true,
                safeWord: 'Activate',
              }),
            );
          }}>
          <CustomText.MediumText
            customStyle={{
              textAlign: 'center',
              fontWeight: '700',
              textDecorationLine: 'underline',
            }}>
            Active + manual
          </CustomText.MediumText>

          <CustomText.RegularText
            customStyle={{
              textAlign: 'center',
              marginTop: Metrix.VerticalSize(20),
            }}>
            Rove will use your mic to monitor your surroundings when you are
            moving and start audio streaming if an assault is detected.
          </CustomText.RegularText>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.7}
          style={[
            styles.optionContainer,
            {
              marginTop: Metrix.VerticalSize(30),
              borderWidth: !isSafeWord ? 2 : StyleSheet.hairlineWidth,
              borderColor: !isSafeWord
                ? Utills.selectedThemeColors().PrimaryTextColor
                : Utills.selectedThemeColors().SecondaryTextColor,
            },
          ]}
          onPress={() => {
            dispatch(
              HomeActions.setSafeWord({
                isSafeWord: false,
                safeWord: 'Activate',
              }),
            );
          }}>
          <CustomText.MediumText
            customStyle={{
              textAlign: 'center',
              fontWeight: '700',
              textDecorationLine: 'underline',
            }}>
            Manual Only
          </CustomText.MediumText>

          <CustomText.RegularText
            customStyle={{
              textAlign: 'center',
              marginTop: Metrix.VerticalSize(20),
            }}>
            Rove will only start audio streaming when you will say your custom
            defined safe word to start streaming.
          </CustomText.RegularText>
        </TouchableOpacity>
      </View>

      <PrimaryButton
        title="Continue"
        onPress={() => {
          dispatch(AuthActions.loginSuccess(true));
        }}
      />
    </MainContainer>
  );
};

const styles = StyleSheet.create({
  heading: {
    textAlign: 'center',
    marginTop: Metrix.VerticalSize(10),
  },
  optionContainer: {
    borderWidth: 1,
    borderColor: Utills.selectedThemeColors().PrimaryTextColor,
    width: '85%',
    alignSelf: 'center',
    borderRadius: Metrix.HorizontalSize(10),
    paddingHorizontal: Metrix.HorizontalSize(10),
    paddingVertical: Metrix.HorizontalSize(20),
    marginTop: Metrix.VerticalSize(20),
  },
});
