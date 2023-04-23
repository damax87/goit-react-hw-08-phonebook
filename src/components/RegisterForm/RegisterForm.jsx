import { useDispatch } from "react-redux";
import { register } from '../../redux/auth/auth-operations';
import { RegisterFormButton } from "./RegisterForm.style";
import { RegisterFormInput } from "./RegisterForm.style";
import { RegisterFormLabel } from "./RegisterForm.style";
import { FormRegister } from "./RegisterForm.style";

export const RegisterForm = () => {
    const dispatch = useDispatch();

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.currentTarget;
        dispatch(
            register({
                name: form.elements.name.value,
                email: form.elements.email.value,
                password: form.elements.password.value,
             })
             );
        form.reset();
    };

    return (
        <div>
            <h1>Registration Page</h1>

            <FormRegister onSubmit={handleSubmit} autoComplete="off">
                <RegisterFormLabel>
                    Name
                    <RegisterFormInput type="text" name="name" placeholder="Enter your name" />
                </RegisterFormLabel>
                <RegisterFormLabel>
                    Email
                    <RegisterFormInput type="email" name="email" placeholder="Enter your email" />
                </RegisterFormLabel>
                <RegisterFormLabel>
                    Password
                    <RegisterFormInput type="password" name="password" placeholder="Enter your password" />
                </RegisterFormLabel>
                <RegisterFormButton type="submit">Register</RegisterFormButton>
            </FormRegister>
        </div>
    )
};