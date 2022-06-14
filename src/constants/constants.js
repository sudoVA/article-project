export const baseApiUrl = "https://api.realworld.io/api";

export const fieldValues = {
  EMAIL_MAX_LENGTH: 128,
  EMAIL_MIN_LENGTH: 5,
  USERNAME_MAX_LENGTH: 128,
  USERNAME_MIN_LENGTH: 5,
  PASSWORD_MAX_LENGTH: 100,
  PASSWORD_MIN_LENGTH: 4,
}

export const validationErrorMessages = {
  REQUIRED_ERROR: "This field is required.",
  MAX_LENGTH_ERROR: "Max length allowed is ",
  MIN_LENGTH_ERROR: "Min length must be greater than ",
  EMAIL_ERROR: "Please enter valid email address.",
  PASSWORD_ERROR:
    "Please use at least one of each -> lowercase, uppercase, digit, special character and at least 8 characters.",
  CONFIRM_PASSWORD_ERROR: "Both passwords must match.",
  INVALID_CREDENTIALS_ERROR_MESSAGE:
    "Wrong credentials. Please enter valid email and password!",
  SERVER_ERROR_ERROR_MESSAGE: "Internal server error",
};

export const regexValidators = {
  PASSWORD_REGEX: /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
  URL_REGEX:
    /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/,
  EMAIL_REGEX:
    /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/,
};

export const apiUrls = {
  signup: "/users",
  login: "/users/login",
  articles: "/articles",
};

export const routeUrls = {
  LOGIN: "login",
  SIGNUP: "signup",
  DASHBOARD: "dashboard",
  PROFILE: "profile",
  ARTICLES: "articles",
  ARTICLE: "articles/:slug",
  CREATE_ARTICLE: "create-article",
  UPDATE_ARTICLE: "article/:id/update",
};

export const navbarItems = ["PROFILE", "ARTICLES", "CREATE_ARTICLE"];
