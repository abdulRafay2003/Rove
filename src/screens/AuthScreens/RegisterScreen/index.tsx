import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useRef, useState} from 'react';
import {
  Colors,
  Fonts,
  FontType,
  Metrix,
  NavigationService,
  RouteNames,
  Utills,
} from '../../../config';
import {
  AuthHeader,
  BackHeader,
  CustomInput,
  CustomText,
  Loader,
} from '../../../components';
import {Formik} from 'formik';
import Schema from '../../../formik';
import {LoginScreenProps, RegisterScreenProps} from '../../propTypes';
import {useDispatch, useSelector} from 'react-redux';
import {AuthActions, HomeActions} from '../../../redux/actions';
import {RootState} from '../../../redux/reducers';
import {t} from 'i18next';
import {AuthAPIS} from '../../../services/auth/index';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Dropdown} from 'react-native-element-dropdown';

const data = [
  {label: 'Client', value: 2},
  // {label: 'Employee', value: 3},
  {label: 'Student', value: 4},
];

export const RegisterScreen: React.FC<RegisterScreenProps> = ({}) => {
  const dispatch = useDispatch();
  const [hidePassword, setHidePassword] = useState(true);
  const [hideConfPassword, setHideConfPassword] = useState(true);
  const [loading, setLoading] = useState(false);

  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);

  const userDetails = useSelector((state: RootState) => state.home.userDetails);
  console.log('========Login', value);

  let lNameRef = useRef<TextInput>(null!);
  let emailref = useRef<TextInput>(null!);
  let phoneRef = useRef<TextInput>(null!);
  let nicRef = useRef<TextInput>(null!);
  let referralRef = useRef<TextInput>(null!);
  let passwordRef = useRef<TextInput>(null!);
  let confPasswordRef = useRef<TextInput>(null!);

  const passwordRegex =
    /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>])[A-Za-z\d!@#$%^&*(),.?":{}|<>]{8,}$/;

  function validatePassword(password: string) {
    if (passwordRegex.test(password)) {
      return true;
    } else {
      return false;
    }
  }

  const registerUser = (body: Object) => {
    console.log('Body', body);
    setLoading(true);
    AuthAPIS.userSignup(body)
      .then(res => {
        console.log('Res', res?.data?.data);
        dispatch(
          HomeActions.setUserDetails({
            ...res?.data?.data,
          }),
        );
        AsyncStorage.setItem(
          'userData',
          JSON.stringify({
            ...res?.data?.data,
          }),
        );
        dispatch(AuthActions.loginSuccess(true));
        setLoading(false);
      })
      .catch(err => {
        let errors = err.response?.data?.data?.errors;
        console.log('Err', errors);
        setLoading(false);
        if (Object.entries(errors).length > 0) {
          for (const [key, value] of Object.entries(errors)) {
            Utills.showToast(value);
          }
        }
      });
  };

  return (
    <Formik
      initialValues={{
        fName: '',
        lName: '',
        email: '',
        phone: '',
        nicNumber: '',
        password: '',
        confirmPassword: '',
        referralCode: '',
      }}
      onSubmit={values => {
        NavigationService.navigate(RouteNames.AuthRoutes.OtpScreen);
        // if (values?.fName?.length == 0) {
        //   Utills.showToast('First name is required');
        // } else if (values?.lName?.length == 0) {
        //   Utills.showToast('Last name is required');
        // } else if (values?.email?.length == 0) {
        //   Utills.showToast('Email is required');
        // } else if (values?.password?.length == 0) {
        //   Utills.showToast('Password is required');
        // } else if (values?.confirmPassword?.length == 0) {
        //   Utills.showToast('Confirm password is required');

        // } else if (values?.nicNumber?.length == 0) {
        //   Utills.showToast('NIC number is required');
        // } else if (values?.phone?.length == 0) {
        //   Utills.showToast('Mobile number is required');
        // } else if (value == null) {
        //   Utills.showToast('Register as field is required');
        // } else {
        //   const body = {
        //     first_name: values?.fName,
        //     last_name: values?.lName,
        //     email: values?.email,
        //     password: values?.password,
        //     nic: values?.nicNumber,
        //     mobile_number: values?.phone,
        //     mobile_number_country: 'PK',
        //     role_id: value,
        //     referral_code: '',
        //   };
        //   registerUser(body);
        // }
      }}
      // validationSchema={Schema.LoginSchema}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        setFieldTouched,
        isValid,
        handleSubmit,
      }) => (
        <>
          <BackHeader
            customeStyle={{
              paddingTop: Metrix.VerticalSize(60),
              paddingBottom: 0,
              paddingHorizontal: Metrix.HorizontalSize(20),
            }}
          />
          {/* <ScrollView showsVerticalScrollIndicator={false}> */}
          <AuthHeader
            heading={t('Lets_sign_up')}
            paragraph="Create a new account by providing your email, setting a password, and filling out the required details."
            title={t('Signup')}
            // customStyles={{marginTop: Metrix.VerticalSize(20)}}
            isBtn
            onPress={() => handleSubmit()}
            onBottomTextPress={() =>
              NavigationService.navigate(RouteNames.AuthRoutes.LoginScreen)
            }>
            <CustomInput
              heading={t('first_name')}
              placeholder={t('enter_first_name')}
              onChangeText={handleChange('fName')}
              onBlur={() => setFieldTouched('fName')}
              value={values?.fName}
              error={errors?.fName}
              touched={touched?.fName}
              autoCapitalize="none"
              returnKeyType="next"
              keyboardType="default"
              onSubmitEditing={() => lNameRef.current.focus()}
            />
            <CustomInput
              heading={t('last_name')}
              placeholder={t('enter_last_name')}
              onChangeText={handleChange('lName')}
              onBlur={() => setFieldTouched('lName')}
              value={values?.lName}
              error={errors?.lName}
              touched={touched?.lName}
              autoCapitalize="none"
              returnKeyType="next"
              keyboardType="default"
              onSubmitEditing={() => emailref.current.focus()}
              inputRef={lNameRef}
            />
            <CustomInput
              heading={t('email')}
              placeholder={t('enter_mail')}
              onChangeText={handleChange('email')}
              onBlur={() => setFieldTouched('email')}
              value={values?.email}
              error={errors?.email}
              touched={touched?.email}
              autoCapitalize="none"
              returnKeyType="next"
              keyboardType="email-address"
              onSubmitEditing={() => phoneRef.current.focus()}
              inputRef={emailref}
            />

            <CustomInput
              heading={t('phone_number')}
              placeholder={t('enter_phone_number')}
              onChangeText={handleChange('phone')}
              onBlur={() => setFieldTouched('phone')}
              value={values?.phone}
              error={errors?.phone}
              touched={touched?.phone}
              autoCapitalize="none"
              returnKeyType="next"
              keyboardType="phone-pad"
              onSubmitEditing={() => nicRef.current.focus()}
              inputRef={phoneRef}
            />

            <CustomInput
              heading={'Card Billing Address'}
              placeholder={'Enter your card billing address'}
              onChangeText={handleChange('nicNumber')}
              onBlur={() => setFieldTouched('nicNumber')}
              value={values?.nicNumber}
              error={errors?.nicNumber}
              touched={touched?.nicNumber}
              autoCapitalize="none"
              returnKeyType="next"
              keyboardType="phone-pad"
              onSubmitEditing={() => referralRef.current.focus()}
              inputRef={nicRef}
            />

            <CustomInput
              heading={'Card Billing Address'}
              placeholder={'Enter your card billing address'}
              onChangeText={handleChange('nicNumber')}
              onBlur={() => setFieldTouched('nicNumber')}
              value={values?.nicNumber}
              error={errors?.nicNumber}
              touched={touched?.nicNumber}
              autoCapitalize="none"
              returnKeyType="next"
              keyboardType="phone-pad"
              onSubmitEditing={() => referralRef.current.focus()}
              inputRef={nicRef}
            />
            <CustomInput
              heading={'Card Billing Address'}
              placeholder={'Enter your card billing address'}
              onChangeText={handleChange('nicNumber')}
              onBlur={() => setFieldTouched('nicNumber')}
              value={values?.nicNumber}
              error={errors?.nicNumber}
              touched={touched?.nicNumber}
              autoCapitalize="none"
              returnKeyType="next"
              keyboardType="phone-pad"
              onSubmitEditing={() => referralRef.current.focus()}
              inputRef={nicRef}
            />
            <CustomInput
              heading={'Card Billing Address'}
              placeholder={'Enter your card billing address'}
              onChangeText={handleChange('nicNumber')}
              onBlur={() => setFieldTouched('nicNumber')}
              value={values?.nicNumber}
              error={errors?.nicNumber}
              touched={touched?.nicNumber}
              autoCapitalize="none"
              returnKeyType="next"
              keyboardType="phone-pad"
              onSubmitEditing={() => referralRef.current.focus()}
              inputRef={nicRef}
            />
            <CustomInput
              heading={'Card Billing Address'}
              placeholder={'Enter your card billing address'}
              onChangeText={handleChange('nicNumber')}
              onBlur={() => setFieldTouched('nicNumber')}
              value={values?.nicNumber}
              error={errors?.nicNumber}
              touched={touched?.nicNumber}
              autoCapitalize="none"
              returnKeyType="next"
              keyboardType="phone-pad"
              onSubmitEditing={() => referralRef.current.focus()}
              inputRef={nicRef}
            />

            <CustomText.RegularText
              customStyle={{
                marginLeft: Metrix.HorizontalSize(10),
                fontSize: Metrix.customFontSize(15),
              }}>
              Register As
            </CustomText.RegularText>

            <Dropdown
              style={styles.dropdown}
              placeholderStyle={styles.placeholderStyle}
              selectedTextStyle={styles.selectedTextStyle}
              itemTextStyle={{
                color: Utills.selectedThemeColors().PrimaryTextColor,
              }}
              containerStyle={{
                borderWidth: 1,
                width: '85%',
                borderRadius: 10,
                marginLeft: Metrix.HorizontalSize(10),
              }}
              data={data}
              labelField="label"
              valueField="value"
              placeholder={'Register As'}
              value={value}
              onFocus={() => setIsFocus(true)}
              onBlur={() => setIsFocus(false)}
              onChange={item => {
                setValue(item?.value);
                setIsFocus(false);
              }}
            />

            <CustomInput
              heading={t('Referral Code')}
              placeholder={t('Enter refrral code')}
              onChangeText={handleChange('referralCode')}
              onBlur={() => setFieldTouched('referralCode')}
              value={values?.referralCode}
              error={errors?.referralCode}
              touched={touched?.referralCode}
              autoCapitalize="none"
              returnKeyType="next"
              keyboardType="default"
              onSubmitEditing={() => passwordRef.current.focus()}
              inputRef={referralRef}
            />

            <CustomInput
              heading={t('password')}
              placeholder={t('enter_your_password')}
              value={values?.password}
              onChangeText={handleChange('password')}
              onBlur={() => setFieldTouched('password')}
              error={errors?.password}
              touched={touched?.password}
              secureTextEntry={hidePassword}
              hidepswdState={hidePassword}
              eye
              onEyePress={() => {
                if (values?.password) {
                  setHidePassword(prev => !prev);
                }
              }}
              returnKeyType="done"
              onSubmitEditing={() => confPasswordRef.current.focus()}
              inputRef={passwordRef}
            />
            <CustomInput
              heading={t('confirm_password')}
              placeholder={t('enter_confirm_password')}
              value={values?.confirmPassword}
              onChangeText={handleChange('confirmPassword')}
              onBlur={() => setFieldTouched('confirmPassword')}
              error={errors?.confirmPassword}
              touched={touched?.confirmPassword}
              secureTextEntry={hideConfPassword}
              hidepswdState={hideConfPassword}
              eye
              onEyePress={() => {
                if (values?.password) {
                  setHideConfPassword(prev => !prev);
                }
              }}
              returnKeyType="done"
              inputRef={confPasswordRef}
            />
            <Loader isLoading={loading} />
          </AuthHeader>
          {/* </ScrollView> */}
        </>
      )}
    </Formik>
  );
};

interface RegisterScreenStyles {}
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 16,
  },
  dropdown: {
    height: 50,
    borderColor: Utills.selectedThemeColors().TextInputBorderColor,
    borderWidth: 2,
    borderRadius: 100,
    paddingHorizontal: 20,
    marginVertical: Metrix.VerticalSize(10),
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: 'absolute',
    backgroundColor: 'white',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
    color: Utills.selectedThemeColors().TextInputPlaceholserColor,
  },
  selectedTextStyle: {
    fontSize: Metrix.customFontSize(14),
    fontFamily: Fonts['Regular'],
    color: Utills.selectedThemeColors().PrimaryTextColor,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});
