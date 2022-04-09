import React, { useState } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword } from "firebase/auth"
import { useNavigate } from 'react-router-dom';
import app from '../firebase/firebase.init';
import toast from 'react-hot-toast';

const provider = new GoogleAuthProvider();

const auth = getAuth(app);

// singup with google 
const Singup = () => {
    const navigate = useNavigate()

    const [email, setEmail] = useState({ value: '', error: '' })
    const [password, setPassword] = useState({ value: '', error: '' })
    const [confirmPassword, setConfirmPassword] = useState({ value: '', error: '' })
    console.log(email)
    console.log(password)

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

    // singup with email password
    const handleSingUpSubmit = (event) => {
        event.preventDefault()
        console.log("submit")
        // toast.success("Succesful Singup" , {id:"test"})
        // toast.error("Already Exiest")

        if (email.value === '') {
            setEmail({ value: '', error: 'Email is required' })
        }if (password.value === '') {
            setPassword({ value: '', error: 'Password is required' })
        } if(email.value && password.value && confirmPassword.value === password.value) {
            createUserWithEmailAndPassword(auth, email.value, password.value)
                .then((userCredential) => {
                    const user = userCredential.user;
                    toast.success("Successfull", {id:user})
                    navigate('/')
                    console.log(user)
                })
                .catch((error) => {
                    const errorMessage = error.message
                   if(errorMessage.includes('email-already-in-use')){
                       toast.error("Alredy Exist", {id:error})
                   }else{
                    toast.error(errorMessage, {id:error})
                   }
                });
        }
    }


    // handle singup section
    const handleEmail = (emailInput) => {
        if (/\S+@\S+\.\S+/.test(emailInput)) {
            setEmail({ value: emailInput, error: '' })
        } else {
            setEmail({ value: '', error: 'Enter valid email' })
        }
    }

    const handlePassword = (passwordInput) => {
        if (passwordInput.length < 7) {
            setPassword({ value: '', error: 'Too short password length' })
        } else if (!/(?=.*[A-Z])/.test(passwordInput)) {
            setPassword({ value: '', error: 'Must added capital latter' })
        } else {
            setPassword({ value: passwordInput, error: '' })
        }
    }

    const handleConfirmPassword = (confirmPasswordInput) => {
        if(confirmPasswordInput === password.value) {
            setConfirmPassword({ value:confirmPasswordInput, error:''})
        }else{
            setConfirmPassword({ value:'', error:"Password did't match"})
        }
    }


    return (
        <div className='auth-form-container '>
            <div className='auth-form'>
                <h1>Sign Up</h1>
                <form onSubmit={handleSingUpSubmit}>
                    <div className='input-field'>
                        <label htmlFor='email'>Email</label>
                        <div className='input-wrapper'>
                            <input type='email' name='email' id='email' onBlur={(event) => handleEmail(event.target.value)} />
                        </div>
                        {email?.error && <p>{email.error}</p>}
                    </div>
                    <div className='input-field'>
                        <label htmlFor='password'>Password</label>
                        <div className='input-wrapper'>
                            <input type='password' name='password' id='password' onBlur={(event) => handlePassword(event.target.value)} />
                        </div>
                        {password.error && <p>{password.error}</p>}
                    </div>
                    <div className='input-field'>
                        <label htmlFor='confirm-password'>Confirm Password</label>
                        <div className='input-wrapper'>
                            <input
                                type='password'
                                name='confirmPassword'
                                id='confirm-password'
                                onBlur={(event) => handleConfirmPassword(event.target.value)}
                            />
                        </div>
                        {confirmPassword.error && <p>{confirmPassword.error}</p>}
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
                    <button className='google-auth' onClick={googleAuth}>
                        <img src="" alt='' />
                        <p> Continue with Google </p>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Singup;