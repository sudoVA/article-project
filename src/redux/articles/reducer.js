import articlesActions from './actionTypes'

const initialState = {
    error: '',
    loading: false,
    data: {},
}

const articlesReducer = (state = initialState, action) => {
    switch (action.type) {
      case articlesActions.ARTICLES_REQUEST:
        return {
          ...state,
          loading: true,
          error: "",
        };
  
      case articlesActions.ARTICLES_RESPONSE:
        return {
          ...state,
          data: action.payload.data,
          loading: false,
          error: action.payload.error,
        };
  
      case articlesActions.ARTICLES_CLEAR_STATE:
        return initialState;
  
      default:
        return state;
    }
  };
  
  export default articlesReducer;
  