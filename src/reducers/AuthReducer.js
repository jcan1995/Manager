import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER
} from '../actions/types';


const INITIAL_STATE = {
  email: '',
  password: '',
  user: null,
  error: '',
  loading: false
 };

export default (state = INITIAL_STATE, action) => {
  switch(action.type){
    case EMAIL_CHANGED:
            /*Create a new object and throw all of states props into it.
              Reassign the email property. MUST CREATE NEW OBEJCT!
            */
      return { ...state, email: action.payload };
    case PASSWORD_CHANGED:
      return { ...state, password: action.payload };
    case LOGIN_USER:
      return { ...state, loading: true, error: '' }
    case LOGIN_USER_SUCCESS:
      return { ...state, ...INITIAL_STATE, user: action.payload };
    case LOGIN_USER_FAIL:
      return { ...state, error: 'Authenticaion Failed.', loading: false};
    default:
      return state;
  }
};
