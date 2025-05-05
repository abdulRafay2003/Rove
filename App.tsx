/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import 'react-native-gesture-handler';
import React, {useEffect, JSX} from 'react';
import type {PropsWithChildren} from 'react';
import {StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {NavigationService, Utills} from './src/config';
import {MainStack} from './src/stacks/MainStack';
import Toast, {
  BaseToast,
  ErrorToast,
  ToastProps,
} from 'react-native-toast-message';
import SplashScreen from 'react-native-splash-screen';
import changeNavigationBarColor from 'react-native-navigation-bar-color';
import './src/i18n';

function App(): JSX.Element {
  const toastConfig = {
    info: (props: ToastProps) => (
      <BaseToast
        {...props}
        style={{
          borderLeftColor: Utills.selectedThemeColors().Primary,
          width: '80%',
        }}
        text1Style={{
          fontSize: 14,
          fontWeight: '600',
        }}
        text2Style={{
          fontSize: 12,
        }}
        text1NumberOfLines={2}
      />
    ),
    success: (props: ToastProps) => (
      <BaseToast
        {...props}
        style={{
          borderLeftColor: 'lightgreen',
          width: '80%',
          borderLeftWidth: 6,
        }}
        text1Style={{
          fontSize: 14,
          fontWeight: '600',
        }}
        text2Style={{
          fontSize: 12,
        }}
        text1NumberOfLines={2}
      />
    ),
    error: (props: ToastProps) => (
      <ErrorToast
        {...props}
        style={{
          borderLeftColor: Utills.selectedThemeColors().ErrorTextColor,
          width: '80%',
        }}
        text1Style={{
          fontSize: 13,
          fontWeight: '600',
        }}
        text2Style={{
          fontSize: 12,
        }}
      />
    ),
  };

  const changeBottomBtnBarColor = async () => {
    try {
      const response = await changeNavigationBarColor(
        Utills.selectedThemeColors().Base,
        true,
      );
      console.log(response); // {success: true}
    } catch (e) {
      console.log(e); // {success: false}
    }
  };

  useEffect(() => {
    changeBottomBtnBarColor();
    SplashScreen.hide();
  }, []);

  return (
    <NavigationContainer
      ref={ref => NavigationService.setTopLevelNavigator(ref)}
      theme={{
        dark: true,
        colors: {
          background: Utills.selectedThemeColors().Base,
          primary: Utills.selectedThemeColors().Base,
          card: Utills.selectedThemeColors().Base,
          text: Utills.selectedThemeColors().Base,
          border: Utills.selectedThemeColors().Base,
          notification: Utills.selectedThemeColors().Base,
        },
      }}>
      <MainStack />
      <Toast config={toastConfig} />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});

export default App;
