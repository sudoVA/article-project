import { useForm, useFormState } from "react-hook-form";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userLogin } from "../../redux/login/actionCreators";
import { regexValidators, validationErrorMessages, fieldValues } from "constants/constants";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

toast.configure();

export default function LoginForm() {
  const loading = useSelector((state) => state.login.loading);
  const error = useSelector((state) => state.login.error);
  const isAuth = useSelector((state) => state.user.isAuth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
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
        email: data.email,
        password: data.password,
      },
    };
    dispatch(userLogin(user));
  }

  useEffect(() => {
    if(error['email or password']){
      toast.error('Invalid email or password', {
        position: toast.POSITION.BOTTOM_RIGHT,
        autoClose: 2000,
      });
    }
  }, [error]);

  useEffect(() => {
    if(isAuth){
      navigate('/articles');
    }
  },[isAuth, navigate]);

  return (
    <div>
      {/* <ToastContainer /> */}
      <div className="bg-white container border rounded w-50">
      <div className="container border-bottom mb-3 mt-2">
          <h1>Login</h1>
        </div>
      <form className="form-floating" onSubmit={handleSubmit(onSubmit)} >
      <div className="form-floating mb-3">
            <input
              className={setClassName("email")}
              name="email"
              {...register("email", {
                required: validationErrorMessages.REQUIRED_ERROR,
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
              placeholder="Email"
            />
            <label for="email">Email</label>
            <div className="text-danger">
              {errors.email?.message}
            </div>
          </div>
          <div className="form-floating mb-3">
            <input
              className={setClassName("password")}
              name="password"
              type="password"
              {...register("password", {
                required: validationErrorMessages.REQUIRED_ERROR,
              })}
              placeholder="Password"
            />
            <label for="password">Password</label>
            <div className="text-danger">{errors.password?.message}</div>
          </div>
        <div>{errors.password?.message}</div>
        <button
              className="btn btn-primary"
              type="submit"
              disabled={loading}
            >
              Login
            </button>
      </form>
    </div>
    </div>
  );
}
