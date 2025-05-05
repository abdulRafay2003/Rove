import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

// params Object
type AuthParamList = {
  ChangePassword: {from?: string; data?: object};
  OtpScreen: {email: string; from?: string};
  VideoScreen: {courseId?: string};
};

// Auth Screens Types
export type LoginScreenProps = {};
export type RegisterScreenProps = {};

export type OtpScreenProps = {
  navigation: StackNavigationProp<AuthParamList, 'OtpScreen'>;
  route: RouteProp<AuthParamList, 'OtpScreen'>;
};

export type ForgotPasswordProps = {};
export type SelectLanguageProps = {};
export type OnBoardingProps = {};

// Home Screen Types

export type HomeScreenProps = {};
export type LocationProps = {};
export type InfoProps = {};
export type SearchProps = {};
export type WebViewProps = {};
export type ChatsProps = {};
export type DashboardProps = {};
export type EditProfileProps = {};
export type ChangePasswordProps = {};
export type ChatMessagesProps = {};
