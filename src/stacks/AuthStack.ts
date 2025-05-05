import {RouteNames} from '../config';
import {
  ForgotPassword,
  LoginScreen,
  OtpScreen,
  RegisterScreen,
} from '../screens';
import {
  ForgotPasswordProps,
  LoginScreenProps,
  OtpScreenProps,
  RegisterScreenProps,
} from '../screens/propTypes';

type AuthScreenStacksTypes = {
  name: string;
  component:
    | React.FC<LoginScreenProps>
    | React.FC<ForgotPasswordProps>
    | React.FC<OtpScreenProps>
    | React.FC<RegisterScreenProps>;

  key: string;
}[];

export const AuthStack: AuthScreenStacksTypes = [
  {
    name: RouteNames.AuthRoutes.LoginScreen,
    component: LoginScreen,
    key: RouteNames.AuthRoutes.LoginScreen,
  },
  {
    name: RouteNames.AuthRoutes.RegisterScreen,
    component: RegisterScreen,
    key: RouteNames.AuthRoutes.RegisterScreen,
  },
  {
    name: RouteNames.AuthRoutes.ForgotPasswordScreen,
    component: ForgotPassword,
    key: RouteNames.AuthRoutes.ForgotPasswordScreen,
  },
  {
    name: RouteNames.AuthRoutes.OtpScreen,
    component: OtpScreen,
    key: RouteNames.AuthRoutes.OtpScreen,
  },
];
