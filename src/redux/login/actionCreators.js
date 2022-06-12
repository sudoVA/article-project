import { loginApi } from '../../api/api';
import loginActions from './actionTypes';

export const loginRequest = () => ({
  type: loginActions.LOGIN_REQUEST,
});

export const loginResponse = (obj) => ({
  type: loginActions.LOGIN_RESPONSE,
  payload: obj,
});

export const loginClearState = () => ({
  type: loginActions.LOGIN_CLEAR_STATE,
});


export const userLogin = (user) =>
  (dispatch) => {
    dispatch(loginRequest());
    loginApi(user)
      .then((response) => {
        dispatch(loginResponse({
            error: '',
        }))
      }).catch((error) =>{
          console.log(error.response.data.errors)
        dispatch(
            loginResponse({
              error: error?.response?.data?.errors,
            })
          )
      }
        
      );
  };
