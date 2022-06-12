import articleActions from './actionTypes';

const initialState = {
  article: {},
  loading: false,
  error: '',
};

const articleReducer = (state = initialState, action) => {
  switch (action.type) {
    case articleActions.ARTICLE_REQUEST:
      return {
        ...state,
        loading: true,
        error: '',
      };

    case articleActions.ARTICLE_RESPONSE:
      return {
        ...state,
        article: action.payload.article,
        loading: false,
        error: action.payload.error,
      };

    case articleActions.ARTICLE_CLEAR_STATE:
      return initialState;

    default:
      return state;
  }
};

export default articleReducer;
