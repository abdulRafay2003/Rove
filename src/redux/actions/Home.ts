export default class Action {
  //Constants
  static EMPTY_STATE_SUCCESS = 'EMPTY_STATE_SUCCESS';
  static IS_DARK_MODE = 'IS_DARK_MODE';
  static USER_DETAILS = 'USER_DETAILS';
  static FCM_TOKEN = 'FCM_TOKEN';
  static USER_CITY = 'USER_CITY';

  //Actions
  static setDarkMode() {
    return {
      type: Action.IS_DARK_MODE,
    };
  }
  static setUserDetails(payload: any) {
    return {
      type: Action.USER_DETAILS,
      payload,
    };
  }

  static setFcm(payload: any) {
    return {
      type: Action.FCM_TOKEN,
      payload,
    };
  }
  static setUserCity(payload: any) {
    return {
      type: Action.USER_CITY,
      payload,
    };
  }
}
