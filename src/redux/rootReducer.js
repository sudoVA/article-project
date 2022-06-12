import { combineReducers } from 'redux';
import signupReducer from './signup/reducer';
import loginReducer from './login/reducer'
import userReducer from './user/reducer';

const rootReducer = combineReducers({
  signup: signupReducer,
  login: loginReducer,
  user: userReducer,
});

export default rootReducer;
