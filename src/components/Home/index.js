import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './index.css';

const Home = () => {
    const [isRegisteredUser, setIsRegisteredUser] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMsg] = useState('');
    const navigate = useNavigate();

    const onChangeUsername = (event) => setUsername(event.target.value);
    const onChangePassword = (event) => setPassword(event.target.value);

    const onSubmitRegisterForm = async (event) => {
        event.preventDefault();
    };

    const onSubmitLoginForm = async (event) => {
        event.preventDefault();
    };

    const onClickRegister = () => {
        if (username && password) {
            toast.success('Registration successful!');
            setTimeout(() => navigate('/todos'), 2000); // Delay navigation to show toast
        } else {
            setErrorMsg('Please enter a valid username and password');
        }
    };

    const onClickLogin = () => {
        if (username && password) {
            toast.success('Login successful!');
            setTimeout(() => navigate('/todos'), 2000); // Delay navigation to show toast
        } else {
            setErrorMsg('Please enter a valid username and password');
        }
    };

    const onClickLoginFromRegister = () => setIsRegisteredUser(true);

    const onClickRegisterFromLogin = () => setIsRegisteredUser(false);

    const renderLoginForm = () => (
        <form className='login-form' onSubmit={onSubmitLoginForm}>
            <h3 className='form-title'>User Login</h3>
            <div className="input-container">
                <label htmlFor='username' className='input-label'>Username</label>
                <input
                    type="text"
                    id="username"
                    className='input-field'
                    value={username}
                    onChange={onChangeUsername}
                    placeholder='Enter Username'
                />
            </div>
            <div className="input-container">
                <label htmlFor='password' className='input-label'>Password</label>
                <input
                    type="password"
                    id="password"
                    className='input-field'
                    value={password}
                    onChange={onChangePassword}
                    placeholder='Enter Password'
                />
            </div>
            {errorMessage && <p className='error-message'>{errorMessage}</p>}
            <p className='para'>Don't have an account? Click Register</p>
            <div className='buttons-container'>
                <button type="submit" className='btn' onClick={onClickLogin}>Login</button>
                <button type="button" className='btn' onClick={onClickRegisterFromLogin}>Register</button>
            </div>
        </form>
    );

    const renderRegisterForm = () => (
        <form className='login-form' onSubmit={onSubmitRegisterForm}>
            <h3 className='form-title'>Register User</h3>
            <div className="input-container">
                <label htmlFor='username' className='input-label'>Username</label>
                <input
                    type="text"
                    id="username"
                    className='input-field'
                    value={username}
                    onChange={onChangeUsername}
                    placeholder='Enter Username'
                />
            </div>
            <div className="input-container">
                <label htmlFor='password' className='input-label'>Password</label>
                <input
                    type="password"
                    id="password"
                    className='input-field'
                    value={password}
                    onChange={onChangePassword}
                    placeholder='Enter Password'
                />
            </div>
            {errorMessage && <p className='error-message'>{errorMessage}</p>}
            <p className='para'>Already have an account? Click Login</p>
            <div className='buttons-container'>
                <button type="button" className='btn' onClick={onClickLoginFromRegister}>Login</button>
                <button type="submit" className='btn' onClick={onClickRegister}>Register</button>
            </div>
        </form>
    );

    return (
        <div className='home-container'>
            <h1 className='heading'>Todos</h1>
            {isRegisteredUser ? renderLoginForm() : renderRegisterForm()}
            <ToastContainer />
        </div>
    );
};

export default Home;
