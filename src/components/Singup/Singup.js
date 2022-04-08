import React from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth"
import { useNavigate } from 'react-router-dom';
import app from '../firebase/firebase.init';

const provider = new GoogleAuthProvider();



const Singup = () => {
    const navigate = useNavigate()
    const googleAuth = () => {
        const auth = getAuth(app);
        signInWithPopup(auth, provider)
            .then((result) => {
                const user = result.user
                console.log(user)
            }).catch((error) => {
                const errorMessage = error.message
                console.error(errorMessage)
            });
    }

    return (
        <div className='auth-form-container '>
            <div className='auth-form'>
                <h1>Sign Up</h1>
                <form>
                    <div className='input-field'>
                        <label htmlFor='email'>Email</label>
                        <div className='input-wrapper'>
                            <input type='email' name='email' id='email' />
                        </div>
                    </div>
                    <div className='input-field'>
                        <label htmlFor='password'>Password</label>
                        <div className='input-wrapper'>
                            <input type='password' name='password' id='password' />
                        </div>
                    </div>
                    <div className='input-field'>
                        <label htmlFor='confirm-password'>Confirm Password</label>
                        <div className='input-wrapper'>
                            <input
                                type='password'
                                name='confirmPassword'
                                id='confirm-password'
                            />
                        </div>
                    </div>
                    <button type='submit' className='auth-form-submit'>
                        Sign Up
                    </button>
                </form>
                <p className='redirect'>
                    Already have an account?{" "}
                    <span onClick={() => navigate("/login")}>Login</span>
                </p>
                <div className='horizontal-divider'>
                    <div className='line-left' />
                    <p>or</p>
                    <div className='line-right' />
                </div>
                <div className='input-wrapper'>
                    <button  className='google-auth' onClick={googleAuth}>
                        <img src="" alt='' />
                        <p> Continue with Google </p>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Singup;