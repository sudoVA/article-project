import { useForm, useFormState } from "react-hook-form";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userSignup } from "../../redux/signup/actionCreators";
import { regexValidators, fieldValues, validationErrorMessages } from "../../constants/constants";

export default function SignupForm() {
  const [emailError, setEmailError] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const loading = useSelector((state) => state.signup.loading);
  const error = useSelector((state) => state.signup.error);
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    control,
  } = useForm({ mode: "onChange", reValidateMode: "onChange" });
  const { dirtyFields } = useFormState({ control });

  function setClassName(input) {
    if (dirtyFields[input] || errors[input]) {
      return errors[input]
        ? "form-control is-invalid"
        : "form-control is-valid";
    }
    return "form-control";
  }

  function onSubmit(data) {
    var user = {
      user: {
        username: data.username,
        email: data.email,
        password: data.password,
      },
    };
    dispatch(userSignup(user));
  }
  useEffect(() => {
    if (error.email) {
      setEmailError("email has been taken");
    }
    if (error.username) {
      setUsernameError("username has been taken");
    }
  }, [error]);

  return (
    <div className="bg-light">
      <div className="bg-white container border rounded w-50">
        <div className="container border-bottom mb-3 mt-2">
          <h1>Create a new account</h1>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="form-floating">
          <div className="form-floating mb-3">
            <input
              name="username"
              {...register("username", {
                required: validationErrorMessages.REQUIRED_ERROR,
                maxLength: {
                  value: fieldValues.USERNAME_MAX_LENGTH,
                  message: `${validationErrorMessages.MAX_LENGTH_ERROR} ${fieldValues.USERNAME_MAX_LENGTH}`,
                },
                minLength: {
                  value: fieldValues.USERNAME_MIN_LENGTH,
                  message: `${validationErrorMessages.MIN_LENGTH_ERROR} ${fieldValues.USERNAME_MIN_LENGTH}`,
                },
              })}
              onFocus={(e) => {
                setUsernameError('');
              }}
              placeholder="Username"
              className={setClassName('username')}
            />
            <label for="username">Username</label>
            <div className="text-danger">
              {errors.username?.message}
              {usernameError}
            </div>
          </div>

          <div className="form-floating mb-3">
            <input
              className={setClassName("email")}
              name="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: regexValidators.EMAIL_REGEX,
                  message: validationErrorMessages.EMAIL_ERROR
                },
                minLength: {
                  value: fieldValues.EMAIL_MIN_LENGTH,
                  message: `${validationErrorMessages.MIN_LENGTH_ERROR} ${fieldValues.EMAIL_MIN_LENGTH}`,
                },
                maxLength: {
                  value: fieldValues.EMAIL_MAX_LENGTH,
                  message: `${validationErrorMessages.MAX_LENGTH_ERROR} ${fieldValues.EMAIL_MAX_LENGTH}`,
                },
              })}
              onFocus={(e) => {
                setEmailError("");
              }}
              placeholder="Email"
            />
            <label for="email">Email</label>
            <div className="text-danger">
              {errors.email?.message}
              {emailError}
            </div>
          </div>

          <div className="form-floating mb-3">
            <input
              className={setClassName("password")}
              name="password"
              type="password"
              {...register("password", {
                required: validationErrorMessages.REQUIRED_ERROR,
                minLength: {
                  value: fieldValues.PASSWORD_MIN_LENGTH,
                  message: `${validationErrorMessages.MIN_LENGTH_ERROR} ${fieldValues.PASSWORD_MIN_LENGTH}`,
                },
                maxLength: {
                  value: fieldValues.PASSWORD_MAX_LENGTH,
                  message: `${validationErrorMessages.MAX_LENGTH_ERROR} ${fieldValues.PASSWORD_MAX_LENGTH}`,
                },
              })}
              placeholder="Password"
            />
            <label for="password">Password</label>
            <div className="text-danger">{errors.password?.message}</div>
          </div>

          <div className="form-floating mb-3">
            <input
              name="cpassword"
              type="password"
              {...register("cpassword", {
                required: validationErrorMessages.REQUIRED_ERROR,
                validate: (value) => {
                  const { password } = getValues();
                  return password === value ? true : validationErrorMessages.CONFIRM_PASSWORD_ERROR;
                },
              })}
              placeholder="Password"
              className={setClassName('cpassword')}
            />
            <label for="cpassword">Confirm password</label>
            <div className="text-danger">{errors.cpassword?.message}</div>
          </div>
          <div className="mb-3">
            <button
              className="btn btn-primary"
              type="submit"
              disabled={loading}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
