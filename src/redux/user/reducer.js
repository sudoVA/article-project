import { isTokenExist } from "../../utils/authTokenStorage";

const initialState = {
  isAuth: isTokenExist(),
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default userReducer;
