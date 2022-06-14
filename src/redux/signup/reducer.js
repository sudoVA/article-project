import authActions from "./actionTypes";

const initialState = {
  loading: false,
  error: "",
};

const signupReducer = (state = initialState, action) => {
  switch (action.type) {
    case authActions.USER_SIGNUP_REQUEST:
      return {
        ...state,
        loading: true,
        error: "",
      };

    case authActions.USER_SIGNUP_RESPONSE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };

    case authActions.USER_SIGNUP_CLEAR_STATE:
      return initialState;

    default:
      return state;
  }
};

export default signupReducer;
