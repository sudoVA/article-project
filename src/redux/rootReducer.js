import { combineReducers } from 'redux';
import signupReducer from './signup/reducer';
import loginReducer from './login/reducer'

const rootReducer = combineReducers({
  signup: signupReducer,
  login: loginReducer,
});

export default rootReducer;
