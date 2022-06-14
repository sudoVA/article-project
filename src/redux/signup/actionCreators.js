import { signupApi } from "../../api/api";
import authActions from "./actionTypes";
import { setToken } from "../../utils/authTokenStorage";
import { Redirect, Switch, BrowserRouter, useNavigate } from "react-router-dom";

export const userSignupRequest = () => ({
  type: authActions.USER_SIGNUP_REQUEST,
});

export const userSignupResponse = (obj) => ({
  type: authActions.USER_SIGNUP_RESPONSE,
  payload: obj,
});

export const userSignupClearState = () => ({
  type: authActions.USER_SIGNUP_CLEAR_STATE,
});

export const userSignup = (user) => (dispatch) => {
  dispatch(userSignupRequest());
  signupApi(user)
    .then((response) => {
      setToken(response?.data?.user?.token);
      dispatch(
        userSignupResponse({
          error: "",
        })
      );
      useNavigate("dashboard");
    })
    .catch((error) =>
      dispatch(
        userSignupResponse({
          error: error?.response?.data?.errors,
        })
      )
    );
};
