import {Alert, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {AuthHeader, BackHeader, CustomInput, Loader} from '../../../components';
import {Formik} from 'formik';
import Schema from '../../../formik';
import {Metrix, NavigationService, RouteNames, Utills} from '../../../config';
import {ForgotPasswordProps} from '../../propTypes';
import {useDispatch} from 'react-redux';
import {AuthActions} from '../../../redux/actions';
import {AuthAPIS} from '../../../services/auth';

export const ForgotPassword: React.FC<ForgotPasswordProps> = ({}) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const forget = (body: Object) => {
    console.log('Body', body);

    setLoading(true);
    AuthAPIS.setForgotPasswordApi(body)
      .then(res => {
        console.log('Res', res);
        Utills.showToast(res?.data?.message);
        setLoading(false);
      })
      .catch(err => {
        console.log('Err', err?.response?.data?.message);
        setLoading(false);
      });
  };

  return (
    <Formik
      initialValues={{
        email: '',
      }}
      onSubmit={value => {
        const body = {
          email: value?.email,
        };
        forget(value);
      }}
      validationSchema={Schema.ForgotPasswordSchema}>
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
              paddingHorizontal: Metrix.HorizontalSize(20),
            }}
          />
          <AuthHeader
            heading="Forgot Password"
            paragraph="Enter your email address, we will send you a reset link to your email"
            showBackHeader={true}
            isBtn
            title={'Send'}
            customStyles={{marginTop: Metrix.VerticalSize(20)}}
            // disabled={!isValid}
            onPress={handleSubmit}>
            <CustomInput
              heading="Enter your email"
              placeholder="Enter Email"
              value={values?.email}
              onChangeText={handleChange('email')}
              onBlur={() => setFieldTouched('email')}
              error={errors?.email}
              touched={touched?.email}
              autoCapitalize="none"
              keyboardType="email-address"
            />
            {/* <PrimaryButton
            title={'NEXT'}
            customStyles={{marginTop: Metrix.VerticalSize(20)}}
            disabled={!isValid}
            onPress={handleSubmit}
          /> */}
            <Loader isLoading={loading} />
          </AuthHeader>
        </>
      )}
    </Formik>
  );
};

interface ForgotPasswordStyles {}
const styles = StyleSheet.create<ForgotPasswordStyles>({});
