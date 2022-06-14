import { apiUrls, baseApiUrl } from "../constants/constants";
import { isTokenExist, getToken } from "../utils/authTokenStorage";
const axios = require("axios");

const instance = axios.create({
  baseURL: baseApiUrl,
});

instance.interceptors.request.use((config) => {
  if (isTokenExist()) {
    const token = getToken();
    if (config.headers && token) {
      config.headers.Authorization = `Token ${token}`;
    }
  }
  return config;
});

instance.interceptors.response.use(
  (response) => {
    console.log(response.data);
    return response;
  },
  (error) => {
    if(error.response.status === 401){
      // redirect to login
      console.log(error.response.status);
    }
    return error;
  }
)

export const signupApi = (payload) => instance.post(apiUrls.signup, payload);

export const loginApi = (payload) => instance.post(apiUrls.login, payload);

export const getArticleApi = (slug) => instance.get(`${apiUrls.articles}/${slug}`);
