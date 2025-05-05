import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useRef, useState} from 'react';
import {
  Colors,
  FontType,
  Metrix,
  NavigationService,
  RouteNames,
  Utills,
} from '../../../config';
import {AuthHeader, CustomInput, CustomText, Loader} from '../../../components';
import {Formik} from 'formik';
import Schema from '../../../formik';
import {LoginScreenProps} from '../../propTypes';
import {useDispatch, useSelector} from 'react-redux';
import {AuthActions, HomeActions} from '../../../redux/actions';
import {RootState} from '../../../redux/reducers';
import {t} from 'i18next';
import {AuthAPIS} from '../../../services/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const LoginScreen: React.FC<LoginScreenProps> = ({}) => {
  const dispatch = useDispatch();
  const [hidePassword, setHidePassword] = useState(true);
  const [loading, setLoading] = useState(false);
  const userDetails = useSelector((state: RootState) => state.user.userDetail);
  console.log('========Login', userDetails);
  let passwordRef = useRef<TextInput>(null!);

  const loginUser = (body: Object) => {
    setLoading(true);
    AuthAPIS.userLogin(body)
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
        console.log('Err', err?.response?.data?.data);
        if (err?.response?.data?.data?.errors?.email) {
          Utills.showToast(err?.response?.data?.data?.errors?.email);
        } else if (err?.response?.data?.data?.errors?.password) {
          Utills.showToast(err?.response?.data?.data?.errors?.password);
        }
        setLoading(false);
      });
  };

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
        fcm_token: 'fcm',
        platform_id: 1,
      }}
      onSubmit={values => {
        console.log('Vslues', values);
        dispatch(AuthActions.loginSuccess(true));
        // loginUser(values);
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
          <AuthHeader
            heading={t('Sign In')}
            title={t('Sign In')}
            paragraph="Please enter your email and password to log in to your account"
            customStyles={{marginTop: Metrix.VerticalSize(20)}}
            isBtn
            isbottomText
            onPress={() => handleSubmit()}
            onBottomTextPress={() =>
              NavigationService.navigate(RouteNames.AuthRoutes.RegisterScreen)
            }>
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
              onSubmitEditing={() => passwordRef.current.focus()}
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
              inputRef={passwordRef}
            />
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() =>
                NavigationService.navigate(
                  RouteNames.AuthRoutes.ForgotPasswordScreen,
                )
              }>
              <CustomText.RegularText
                customStyle={{
                  textAlign: 'right',
                  color: Utills.selectedThemeColors().Secondary,
                }}>
                {t('Forgot Password')}
              </CustomText.RegularText>
            </TouchableOpacity>
            <Loader isLoading={loading} />
          </AuthHeader>
        </>
      )}
    </Formik>
  );
};

interface LoginScreenStyles {}
const styles = StyleSheet.create<LoginScreenStyles>({});
