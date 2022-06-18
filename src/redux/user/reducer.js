import { isTokenExist } from "../../utils/authTokenStorage";
import userActions from "./actionTypes";

const initialState = {
  isAuth: isTokenExist(),
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case userActions.UPDATE_USER_STATE:
      return ({
        isAuth: isTokenExist()
      });
    default:
      return state;
  }
};

export default userReducer;
