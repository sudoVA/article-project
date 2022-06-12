import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userSignup } from "../../redux/signup/actionCreators";

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
        clearErrors,
        getValues
    } = useForm({ mode: "onBlur", reValidateMode: 'onBlur' });

    function onChangeEmail() {
        clearErrors('email');
        setEmailError('');
    }

    function onChangeUsername() {
        clearErrors('username');
        setUsernameError('');
    }

    function onSubmit(data) {
        var user = {
            user: {
                username: data.username,
                email: data.email,
                password: data.password
            }
        }
        dispatch(userSignup(user));
    }
    useEffect(() => {
        if (error.email) {
            setEmailError('email has been taken');
        }
        if (error.username) {
            setUsernameError('username has been taken');
        }
    }, [error])

    return (
        <div>
            <h4>My Form</h4>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    name="username"
                    {...register("username", {
                        required: {
                            value: true,
                            message: "Username is required",
                        },
                        minLength: {
                            value: 5,
                            message: "Minimum length must be 5",
                        },
                        maxLength: {
                            value: 128,
                            message: "maximum length must be 128",
                        },
                    })}
                    onChange={onChangeUsername}
                    placeholder="Username"
                />
                <div>
                    {errors.username?.message}
                    {usernameError}
                </div>
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
                    onChange={onChangeEmail}
                    placeholder="Email"
                />
                <div>
                    {errors.email?.message}
                    {emailError}
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
                <input
                    name="cpassword"
                    type="password"
                    {...register("cpassword", {
                        required: "Password is required",
                        validate: (value) => {
                            const { password } = getValues();
                            return password === value ? true : 'must be same as password';
                        }
                    })}
                    placeholder="Password"
                    onChange={() => clearErrors("cpassword")}
                />
                {errors.cpassword?.message}
                <button type="submit" disabled={loading}>Submit</button>
            </form>
        </div>
    );
}
