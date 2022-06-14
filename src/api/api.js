import { apiUrls, baseApiUrl } from "../constants/constants";
import { getToken } from "../utils/authTokenStorage";
const axios = require("axios");

const instance = axios.create({
  baseURL: baseApiUrl,
});

export const signupApi = (payload) => instance.post(apiUrls.signup, payload);

export const loginApi = (payload) => instance.post(apiUrls.login, payload);

export const getArticleApi = (slug) =>
  instance.get(`${apiUrls.articles}/${slug}`, {
    headers: {
      Authorization: getToken(),
    },
  });
