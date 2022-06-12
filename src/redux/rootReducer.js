import { combineReducers } from 'redux';
import signupReducer from './signup/reducer';
import loginReducer from './login/reducer'
import userReducer from './user/reducer';
import articleReducer from './article/reducer';

const rootReducer = combineReducers({
  signup: signupReducer,
  login: loginReducer,
  user: userReducer,
  article: articleReducer,
});

export default rootReducer;
