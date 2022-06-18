import articlesActions from './actionTypes'
import { getArticlesApi } from '../../api/api'

export const articlesRequest = () => ({
    type: articlesActions.ARTICLES_REQUEST
})

export const articlesResponse = (payload) => ({
    type: articlesActions.ARTICLES_RESPONSE,
    payload: payload
})

export const articlesClearState = () => ({
    type: articlesActions.ARTICLES_CLEAR_STATE,
})

export const getArticles = () => (dispatch) => {
    dispatch(articlesRequest());
    getArticlesApi()
    .then((response) => {
        dispatch(articlesResponse({
            error: '',
            data: response.data
        }));
        console.log(response.data,'**')
    }).catch((error) => {
        dispatch(articlesResponse({
            error: error.response.data,
        }));
    })
}

