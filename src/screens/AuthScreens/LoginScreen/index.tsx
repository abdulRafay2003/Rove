import {
  Alert,
  Linking,
  PermissionsAndroid,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
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
import Geolocation from 'react-native-geolocation-service';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';

export const LoginScreen: React.FC<LoginScreenProps> = ({}) => {
  const dispatch = useDispatch();
  const [hidePassword, setHidePassword] = useState(true);
  const [loading, setLoading] = useState(false);
  const userDetails = useSelector((state: RootState) => state.home.userDetails);
  const isFirstTime = useSelector((state: RootState) => state.user.isFirstTime);

  let passwordRef = useRef<TextInput>(null!);

  console.log('isFirstTime', isFirstTime);

  useEffect(() => {
    getPermission();
  }, []);

  const getPermission = async () => {
    if (Platform.OS == 'ios') {
      getUserLocation();
    } else {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        );

        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          getUserLocation();
        } else {
          Alert.alert(
            'Rove AI does not have access to your Location for showing you nearby services. To enable access, tap Settings and turn on Location',
            '',
            [
              {
                text: 'Cancel',
                style: 'default',
              },
              {
                text: 'Settings',
                style: 'default',
                onPress: () => {
                  Linking.openSettings();
                },
              },
            ],
          );
          console.log('not grantedddd');
        }
      } catch (err) {
        Alert.alert(
          'Rove AI does not have access to your Location for showing you nearby services. To enable access, tap Settings and turn on Location',
          '',
          [
            {
              text: 'Cancel',
              style: 'default',
            },
            {
              text: 'Settings',
              style: 'default',
              onPress: () => {
                Linking.openSettings();
              },
            },
          ],
        );
        console.log('not granted', err);
      }
    }
  };

  const getUserLocation = () => {
    Platform.OS == 'ios' && Geolocation.requestAuthorization('whenInUse');
    Geolocation.getCurrentPosition(
      position => {
        dispatch(
          HomeActions.setUserLocation({
            latitude: position?.coords?.latitude,
            longitude: position?.coords?.longitude,
          }),
        );
        AsyncStorage.setItem(
          'userPosition',
          JSON.stringify({
            latitude: position?.coords?.latitude,
            longitude: position?.coords?.longitude,
          }),
        );
      },
      error => {
        // console.log('notppppppp=====granted', error);
      },
      {
        enableHighAccuracy: true,
        // timeout: 99000000,
        // timeout: 15000,
        maximumAge: 10000,
      },
    );
  };

  const loginUser = (body: Object) => {
    setLoading(true);
    AuthAPIS.userLogin(body)
      .then(res => {
        // console.log('Logging login ovject', res?.data?.data?.user);
        getToken(body, res?.data?.data?.user);
      })
      .catch(err => {
        console.log('Err', err?.data?.errors);
        Utills.showToast(err?.response?.data?.errors?.[0]?.message);
        setLoading(false);
      });
  };

  const getToken = (body: Object, obj: any) => {
    AuthAPIS.getAccessToken(body)
      .then(res => {
        // console.log('Res Token', res?.data);
        dispatch(
          HomeActions.setUserDetails({
            user: obj,
            token: res?.data?.access,
            isSocialLogin: false,
          }),
        ),
          setLoading(false);
        dispatch(AuthActions.loginSuccess(true));
      })
      .catch(err => {
        // console.log('Err', err?.data?.errors?.[0]?.message);
        Utills.showToast(err?.response?.data?.errors?.[0]?.message);
        setLoading(false);
      });
  };

  const handleGoogleLogin = () => {
    GoogleSignin.configure({
      // androidClientId: 'ADD_YOUR_ANDROID_CLIENT_ID_HERE',
      iosClientId:
        '295191056691-erq304na575h0t5lr0phicdo1ofendl8.apps.googleusercontent.com',
    });
    GoogleSignin.hasPlayServices()
      .then(hasPlayService => {
        if (hasPlayService) {
          GoogleSignin.signIn()
            .then(userInfo => {
              // console.log('Google cred', JSON.stringify(userInfo));
              postGoogleCred(userInfo?.data?.idToken);
            })
            .catch(e => {
              // console.log('ERROR IS: ' + JSON.stringify(e));
            });
        }
      })
      .catch(e => {
        // console.log('ERROR IS: ' + JSON.stringify(e));
      });
  };

  const postGoogleCred = (token: any) => {
    setLoading(true);
    AuthAPIS.googleLogin({idToken: token})
      .then(res => {
        const userData = res?.data?.data;
        const firstLogin = !isFirstTime;

        dispatch(AuthActions.setFirstTime(true));
        dispatch(
          HomeActions.setUserDetails({
            user: userData,
            token: userData?.access_token,
            isSocialLogin: true,
          }),
        );
        setLoading(false);
        if (firstLogin) {
          NavigationService.navigate(RouteNames.AuthRoutes.Preferences);
        } else {
          dispatch(AuthActions.loginSuccess(true));
        }
      })
      .catch(err => {
        Utills.showToast(err?.response?.data?.errors?.[0]?.message);
        setLoading(false);
      });
  };

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      onSubmit={values => {
        if (values?.email?.length == 0) {
          Utills.showToast('Enter email');
        } else if (values?.password?.length == 0) {
          Utills.showToast('Enter password');
        } else {
          loginUser({email: values?.email, password: values?.password});
        }
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
        <AuthHeader
          heading={t('Lets Sign In')}
          title={t('Login')}
          customStyles={{marginTop: Metrix.VerticalSize(20)}}
          isBtn
          onSecPress={() => handleGoogleLogin()}
          isbottomText={'SignUp'}
          onBottomTextPress={() =>
            NavigationService.navigate(RouteNames.AuthRoutes.RegisterScreen)
          }
          isSecondaryBtn
          onPress={() => handleSubmit()}>
          <CustomInput
            heading={t('Email')}
            placeholder={t('Enter email')}
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
            heading={t('Password')}
            placeholder={t('Enter password')}
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
                fontSize: FontType.FontSmall,
                textAlign: 'right',
              }}>
              {t('Forgot password')}
            </CustomText.RegularText>
          </TouchableOpacity>
          <Loader isLoading={loading} />
        </AuthHeader>
      )}
    </Formik>
  );
};

interface LoginScreenStyles {}
const styles = StyleSheet.create<LoginScreenStyles>({});
