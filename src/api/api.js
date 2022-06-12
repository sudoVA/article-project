import { apiUrls } from '../constants/constants'
const axios = require ("axios");

export const signupApi = (payload) => 
    axios.post(apiUrls.signup, payload)

export const loginApi = (payload) => 
    axios.post(apiUrls.login, payload)

