import {
  Image,
  StyleSheet,
  Text,
  TextInputProps,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {
  AuthHeader,
  CustomModal,
  CustomText,
  PlaceholderComponent,
} from '../../../components';
import {
  Colors,
  FontType,
  Images,
  Metrix,
  NavigationService,
  RouteNames,
  Utills,
} from '../../../config';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import {OtpScreenProps} from '../../propTypes';
import {useDispatch} from 'react-redux';
import {AuthActions} from '../../../redux/actions';
import {t} from 'i18next';

export const OtpScreen: React.FC<OtpScreenProps> = ({route}) => {
  // const {email, from} = route?.params;
  const dispatch = useDispatch();
  // console.log('-----------===email', email, from);

  const [code, setCode] = useState('');
  const [modalPostVisible, setModalPostVisible] = useState(false);

  // const handleOtp = () => {
  //   if (!code && !code.length) {
  //     Utills.showToast('Code is required.');
  //   } else if (code.length < 4) {
  //     Utills.showToast('Please enter valid code.');
  //   } else {
  //     dispatch(
  //       AuthActions.setOTP({
  //         token: Number(code),
  //         email: email,
  //         ...(from && {from}),
  //       }),
  //     );
  //   }
  // };

  const handleOnClosePost = () => {
    setModalPostVisible(false);
    setTimeout(() => {
      dispatch(AuthActions.loginSuccess(true));
    }, 200);
  };

  return (
    <>
      <AuthHeader
        heading={t('enter_otp_code')}
        paragraph="Enter the 6 digit code sent to your mobile to verify your account."
        title={t('confirm')}
        customStyles={{marginTop: Metrix.VerticalSize(20)}}
        isBtn
        onPress={() => setModalPostVisible(true)}
        // onTextPress={() => {
        //   const body = {
        //     email,
        //     purpose:
        //       from == 'forgotPswd' ? 'FORGOT_PASSWORD' : 'EMAIL_VERIFICATION',
        //   };

        //   dispatch(AuthActions.setResendPassword(body));
        //   setTextDisable(true);
        //   setTimeout(() => setTextDisable(false), 5000);
        // }}
      >
        <View style={styles.container}>
          <OTPInputView
            style={{
              width: '90%',
              height: Metrix.VerticalSize(50),
              marginVertical: Metrix.VerticalSize(40),
            }}
            pinCount={6}
            code={code}
            onCodeChanged={code => setCode(code)}
            codeInputFieldStyle={styles.underlineStyleBase}
            codeInputHighlightStyle={styles.underlineStyleHighLighted}
            selectionColor={Utills.selectedThemeColors().Primary}
          />

          <View
            style={{
              flexDirection: 'row',
            }}>
            <CustomText.SmallText isSecondaryColor>
              {t('Didnt get OTP ?')}
            </CustomText.SmallText>

            <TouchableOpacity>
              <CustomText.SmallText
                customStyle={{
                  color: Utills.selectedThemeColors().Secondary,
                  fontWeight: '600',
                  textDecorationLine: 'underline',
                }}>
                {t(' Resend Now')}
              </CustomText.SmallText>
            </TouchableOpacity>
          </View>
        </View>
      </AuthHeader>
      <CustomModal onClose={handleOnClosePost} visible={modalPostVisible}>
        <PlaceholderComponent
          heading={t('congratulations')}
          image={Images.Wow}
          subHeading={t(`You have successfully verified your account.`)}
          title={t('Go to Home')}
          onPress={() => {
            handleOnClosePost();
          }}
          // onBottombtnPress={() => {}}
          // bottomBtnText="Skip now"
        />
      </CustomModal>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    // height: '60%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-around',
    // borderWidth: 1,
  },
  imageStyle: {
    width: Metrix.HorizontalSize(100),
    height: Metrix.VerticalSize(90),
  },
  textStyle: {
    textAlign: 'center',
    lineHeight: Metrix.VerticalSize(20),
  },
  underlineStyleBase: {
    width: Metrix.HorizontalSize(45),
    height: Metrix.VerticalSize(40),
    borderWidth: 1,
    borderBottomWidth: Metrix.HorizontalSize(2),
    borderRightWidth: Metrix.HorizontalSize(2),
    borderRadius: Metrix.HorizontalSize(7),
    borderColor: Utills.selectedThemeColors().SecondaryTextColor,
    fontSize: FontType.FontExtraLarge,
    color: Utills.selectedThemeColors().Primary,
    padding: 0,
  },
  underlineStyleHighLighted: {
    borderColor: Utills.selectedThemeColors().Secondary,
  },
});
