import Immutable, {ImmutableObject} from 'seamless-immutable';
import Action from '../actions/Home';

interface AppState {
  darkMode?: boolean;
  userDetails: any;
  fcmToken: string;
  userCity?: string;
}

const initialState: ImmutableObject<AppState> = Immutable<AppState>({
  darkMode: false,
  userDetails: {},
  fcmToken: '',
  userCity: '',
});

export default (state = initialState, action: {type: any; payload: any}) => {
  switch (action.type) {
    case Action.EMPTY_STATE_SUCCESS:
      return Immutable(initialState);

    case Action.IS_DARK_MODE:
      return Immutable(state).merge({
        darkMode: !state.darkMode,
      });

    case Action.USER_DETAILS: {
      return Immutable(state).merge({
        userDetails: action.payload,
      });
    }
    case Action.FCM_TOKEN: {
      return Immutable(state).merge({
        fcmToken: action.payload,
      });
    }
    case Action.USER_CITY: {
      return Immutable(state).merge({
        userCity: action.payload,
      });
    }

    default:
      return state;
  }
};
