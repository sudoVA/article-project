const baseApiUrl = 'https://api.realworld.io/api'

export const validationErrors = {
    REQUIRED_ERROR: 'This field is required.',
    MAX_LENGTH_ERROR: 'Max length allowed is ',
    EMAIL_ERROR: 'Please enter valid email address.',
    PASSWORD_ERROR:
        'Please use at least one of each -> lowercase, uppercase, digit, special character and at least 8 characters.',
    CONFIRM_PASSWORD_ERROR: 'Both passwords must match.',
    INVALID_CREDENTIALS_ERROR_MESSAGE:
        'Wrong credentials. Please enter valid email and password!',
    SERVER_ERROR_ERROR_MESSAGE: 'Internal server error',
};
export const regexValidators = {
    PASSWORD_REGEX: /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
    URL_REGEX:
        /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/,
    EMAIL_REGEX:
        /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/,
}

export const apiUrls = {
    signup: baseApiUrl + '/users',
    login: baseApiUrl + '/users/login',
}