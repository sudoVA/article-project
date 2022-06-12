import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userLogin } from "../../redux/login/actionCreators";

export default function LoginForm() {
    const loading = useSelector((state) => state.login.loading);
    const error = useSelector((state) => state.login.error);
    const dispatch = useDispatch();

    const {
        register,
        handleSubmit,
        formState: { errors },
        clearErrors,
    } = useForm({ mode: "onBlur", reValidateMode: 'onBlur' });

    function onSubmit(data) {
        var user = {
            user: {
                email: data.email,
                password: data.password
            }
        }
        dispatch(userLogin(user));
    }
    useEffect(() => {
        console.log(error);
    }, [error])

    return (
        <div>
            <h4>Login</h4>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    name="email"
                    {...register("email", {
                        required: "Email is required",
                        minLength: {
                            value: 5,
                            message: "Minimum length must be 5",
                        },
                        maxLength: {
                            value: 128,
                            message: "maximum length must be 128",
                        },
                    })}
                    onChange={() => clearErrors("email")}
                    placeholder="Email"
                />
                <div>
                    {errors.email?.message}
                </div>
                <input
                    name="password"
                    type="password"
                    {...register("password", {
                        required: "Password is required",
                        minLength: {
                            value: 5,
                            message: "Minimum length must be 5",
                        },
                        maxLength: {
                            value: 128,
                            message: "maximum length must be 128",
                        },
                    })}
                    onChange={() => clearErrors("password")}
                    placeholder="Password"
                />
                <div>
                    {errors.password?.message}
                </div>
                <button type="submit" disabled={loading}>Login</button>
            </form>
        </div>
    );
}
