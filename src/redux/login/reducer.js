import loginActions from "./actionTypes";

const initialState = {
  loading: false,
  error: "",
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case loginActions.LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
        error: "",
      };

    case loginActions.LOGIN_RESPONSE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };

    case loginActions.LOGIN_CLEAR_STATE:
      return initialState;

    default:
      return state;
  }
};

export default loginReducer;
