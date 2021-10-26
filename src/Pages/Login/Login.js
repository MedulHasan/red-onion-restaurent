import React from 'react';
import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import loginLogo from '../../images/logo2.png';
import './Login.css';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const { signInUsingGoogle, signInUsingEmailAndPassword } = useAuth();
    const history = useHistory();
    const location = useLocation();
    const redirect_url = location.state?.form || '/';

    const [email, setEmail] = useState('');;
    const [password, setPassword] = useState('');

    const notify = () => toast.success("Login Successfully!");

    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(() => {
                history.push(redirect_url || '/');
            })
    }

    const handleEmail = (e) => {
        setEmail(e.target.value)
    }
    const handlePassword = (e) => {
        setPassword(e.target.value)
    }

    const handleSignInSubmit = (e) => {
        e.preventDefault();
        signInUsingEmailAndPassword(email, password)
            .then(() => {
                history.push(redirect_url)
            })

        notify();
    }
    return (
        <div className="login-container">
            <div className="login-form">
                <div className="text-center">
                    <img src={loginLogo} alt="" className="mb-5" />
                </div>
                <Form onSubmit={handleSignInSubmit}>
                    <Form.Control onBlur={handleEmail} className="mb-3 l-form" type="email" placeholder="Enter email" />
                    <Form.Control onBlur={handlePassword} className="mb-3 l-form" type="password" placeholder="Password" />
                    <Button className="mb-2 w-100 l-form" variant="primary" type="submit">Log in</Button>
                </Form>
                <Link to="/signup">Create a new account?</Link>
                <p className="text-center fs-3">
                    or
                </p>
                <div className="api-login">
                    <Button onClick={handleGoogleLogin} className="w-50" variant="outline-success">Google</Button>{' '}
                    <Button className="w-50" variant="outline-warning">Github</Button>{' '}
                </div>
            </div>
        </div>
    );
};

export default Login;