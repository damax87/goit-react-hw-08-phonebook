import { useDispatch } from "react-redux";
import { logIn } from '../../redux/auth/auth-operations';
import { LoginFormButton } from "./LoginForm.style";
import { FormLogin } from "./LoginForm.style";
import { LoginFormInput } from "./LoginForm.style";
import { LoginFormLabel } from "./LoginForm.style";

export const LoginForm = () => {
    const dispatch = useDispatch();

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.currentTarget;
        dispatch(
            logIn({ 
                email: form.elements.email.value, 
                password: form.elements.password.value, 
            })
            );
        form.reset();
    };

    return (
        <div>
            <h1>Login Page</h1>
            <FormLogin onSubmit={handleSubmit} autoComplete="off">
                <LoginFormLabel>
                    Email
                    <LoginFormInput type="email" name="email" placeholder="Enter email" />
                </LoginFormLabel>
                <LoginFormLabel>
                    Password
                    <LoginFormInput type="password" name="password" placeholder="Enter password" />
                </LoginFormLabel>
                <LoginFormButton type="submit">Log In</LoginFormButton>
            </FormLogin>
        </div>
    )
};