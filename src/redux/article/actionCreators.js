import { getArticleApi } from '../../api/api';
import articleActions from './actionTypes';

export const articleRequest = () => ({
  type: articleActions.ARTICLE_REQUEST,
});

export const articleResponse = (obj) => ({
  type: articleActions.ARTICLE_RESPONSE,
  payload: obj,
});

export const articleClearState = () => ({
  type: articleActions.ARTICLE_CLEAR_STATE,
});


export const getArticle = (slug) =>
  (dispatch) => {
    dispatch(articleRequest());
    getArticleApi(slug)
      .then((response) => {
        console.log(response.data);
        dispatch(articleResponse({
          error: '',
          article: response.data.article,
        }))
      }).catch((error) => {
        console.log(error.response.data.errors)
        dispatch(
          articleResponse({
            error: error?.response?.data?.errors,
          })
        )
      }
      );
  };
