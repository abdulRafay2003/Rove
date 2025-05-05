import React, {ReactNode} from 'react';
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {BackHeader} from '../BackHeader';
import {CustomText, MainContainer, PrimaryButton, SecondaryButton} from '..';
import {Colors, Images, Metrix, Utills} from '../../config';
import {I18nManager} from 'react-native';
import {PrimaryButtonProps} from '../PrimaryButton';
import {useThemeHook} from '../../hooks';
import {t} from 'i18next';

const TouchableText: React.FC<{text: string}> = ({text}) => {
  // const {Colors} = useThemeHook();
  return (
    <Pressable
      // activeOpacity={0.8}
      style={{justifyContent: 'flex-end'}}
      onPress={() => {}}>
      <CustomText.MediumText
        customStyle={{
          color: Utills.selectedThemeColors().Primary,
          // borderWidth:1,
          // paddingBottom:
          // verticalAlign:'bottom'
        }}>
        {text}
      </CustomText.MediumText>
    </Pressable>
  );
};

type AuthHeaderProps = PrimaryButtonProps & {
  heading: string;
  paragraph?: string;
  showBackHeader?: boolean;
  onBottomTextPress?: () => void;
  isbottomText?: boolean;
  isBtn?: boolean;
  title?: string;
  isSecondaryBtn?: boolean;
  isupperText?: boolean;
  children: ReactNode;
};

export const AuthHeader: React.FC<AuthHeaderProps> = ({
  heading,
  paragraph,
  children,
  disabled,
  title,
  onPress,
  onBottomTextPress,
  isbottomText,
  isBtn,
  customStyles,
  isSecondaryBtn,
  isupperText,
}) => {
  // const {Colors} = useThemeHook();

  return (
    <MainContainer
      customeStyle={{
        paddingHorizontal: Metrix.HorizontalSize(20),
        // paddingTop: Metrix.VerticalSize(40),
        paddingBottom: Metrix.VerticalSize(40),
        // borderWidth: 1,
      }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.topContainer}>
          <Image
            source={Images.Logo}
            style={{
              width: Metrix.HorizontalSize(120),
              height: Metrix.VerticalSize(120),
              borderTopWidth: 8,
              borderColor: Utills.selectedThemeColors().Base,
            }}
            resizeMode="cover"
          />
          <CustomText.ExtraLargeBoldText
            customStyle={{
              fontWeight: '500',
              lineHeight: 50,
              marginVertical: Metrix.VerticalSize(10),
            }}>
            {heading}
          </CustomText.ExtraLargeBoldText>
          <CustomText.RegularText
            isSecondaryColor
            customStyle={{
              textAlign: 'center',
              width: '90%',
              fontWeight: '500',
            }}>
            {paragraph}
          </CustomText.RegularText>
        </View>

        <View style={styles.childrenView}>
          <View
            style={
              {
                // borderWidth:1,
              }
            }>
            {children}
          </View>
          <View
            style={[
              styles.bottomContainer,
              !isBtn && {justifyContent: 'flex-end'},
            ]}>
            {isupperText && (
              <View>
                <CustomText.MediumText
                  customStyle={{
                    textAlign: 'center',
                  }}
                  isSecondaryColor>
                  {t('text')} <TouchableText text={t('terms')} /> {t('and')}{' '}
                  <TouchableText text={t('conditions')} />
                </CustomText.MediumText>
              </View>
            )}
            {isBtn && (
              <PrimaryButton
                title={title}
                customStyles={customStyles}
                disabled={disabled}
                onPress={onPress}
              />
            )}
            {isSecondaryBtn && (
              <View style={{marginBottom: Metrix.VerticalSize(50)}}>
                <SecondaryButton
                  onPress={onPress}
                  title={t('signup')}
                  source={Images.GoogleLogo}
                />
              </View>
            )}
            {isbottomText && (
              <View style={styles.bottomText}>
                <CustomText.RegularText isSecondaryColor>
                  {t('Don’t have an account?')}{' '}
                </CustomText.RegularText>
                <TouchableOpacity onPress={onBottomTextPress}>
                  <CustomText.RegularText
                    customStyle={{
                      textDecorationLine: 'underline',
                      fontWeight: '500',
                      color: Utills.selectedThemeColors().Secondary,
                    }}>
                    {t('Sign Up Now')}
                  </CustomText.RegularText>
                </TouchableOpacity>
              </View>
            )}
          </View>
        </View>
      </ScrollView>
    </MainContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    // marginVertical: Metrix.VerticalSize(40),
  },
  bottomText: {
    marginVertical: Metrix.VerticalSize(10),
    justifyContent: 'center',
    flexDirection: 'row',
  },
  bottomContainer: {justifyContent: 'space-between'},
  childrenView: {
    marginVertical: Metrix.VerticalSize(20),
    flex: 4,
    // borderWidth: 1,
    justifyContent: 'space-between',
  },
  topContainer: {
    // borderWidth: 1,
    // flex: 1.7,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
