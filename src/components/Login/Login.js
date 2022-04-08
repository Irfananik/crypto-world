import {  getAuth, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import app from '../firebase/firebase.init';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css'

const provider = new GoogleAuthProvider();
const auth = getAuth(app);

const Login = () => {
    const navigate = useNavigate()

    // login with google
    const googleAuth = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                const user = result.user
                console.log(user)
                navigate('/')
            }).catch((error) => {
                const errorMessage = error.message
                console.error(errorMessage)
            });
    }

    // login with email and password
    const handleSingUpSubmit = (event) => {
        event.preventDefault()
        const email = event.target.email.value
        const password = event.target.password.value
        console.log("submit")

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user)
            })
            .catch((error) => {
                const errorMessage = error.message
                console.error(errorMessage)
            });
    }
    return (
        <div>
            <div className='auth-form-container '>
                <div className='auth-form'>
                    <h1>Login</h1>
                    <form onSubmit={handleSingUpSubmit}>
                        <div className='input-field'>
                            <label htmlFor='email'>Email</label>
                            <div className='input-wrapper'>
                                <input type='text' name='email' id='email' />
                            </div>
                        </div>
                        <div className='input-field'>
                            <label htmlFor='password'>Password</label>
                            <div className='input-wrapper'>
                                <input type='password' name='password' id='password' />
                            </div>
                        </div>
                        <button type='submit' className='auth-form-submit'>
                            Login
                        </button>
                    </form>
                    <p className='redirect'>
                        New to Tech Geeks?{" "}
                        <span onClick={() => navigate('/singup')}>Create New Account</span>
                    </p>
                    <div className='horizontal-divider'>
                        <div className='line-left' />
                        <p>or</p>
                        <div className='line-right' />
                    </div>
                    <div className='input-wrapper'>
                        <button className='google-auth' onClick={googleAuth}>
                            <img src="" alt='' />
                            <p> Continue with Google </p>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;