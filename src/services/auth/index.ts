import httpService from '../https.service';

const userLogin = (body: object) => {
  return httpService().post('auth/login', body);
};

const userSignup = (body: object) => {
  return httpService().post('auth/registration', body);
};

const setOTP = (body: object) => {
  return httpService().patch('auth/verification', body);
};

const setResetPasswordOtp = (body: object) => {
  return httpService().post('auth/resetPasswordVerificaton', body);
};
const setResetPassword = (body: object) => {
  return httpService().post('auth/reset-password', body);
};

const getMe = () => {
  return httpService().get('me');
};

const onBoardingApi = (body: object) => {
  return httpService().post('auth/onboard', body);
};

const setForgotPasswordApi = (body: object) => {
  return httpService().post('auth/forgot-password', body);
};

const setResedPasswordApi = (body: object) => {
  return httpService().post('auth/resendOtp', body);
};

const setUpdateProfileAPI = (body: object) => {
  return httpService().post('auth/updateProfile', body);
};

const updateFcm = (body: object) => {
  return httpService().post('fcm-token/create', body);
};

export const AuthAPIS = {
  userLogin,
  userSignup,
  setOTP,
  onBoardingApi,
  getMe,
  setForgotPasswordApi,
  setResetPasswordOtp,
  setResetPassword,
  setResedPasswordApi,
  setUpdateProfileAPI,
  updateFcm,
};
