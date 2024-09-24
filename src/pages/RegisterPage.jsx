import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/RegisterPage.css';

const RegisterPage = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    };

    const handleRegister = (e) => {
        e.preventDefault();
        let currentErrors = {};

        if (!username) {
            currentErrors.username = 'Username is required';
        }

        if (!email || !validateEmail(email)) {
            currentErrors.email = 'A valid email is required';
        }

        if (password.length < 8) {
            currentErrors.password = 'Password must be at least 8 characters long';
        }

        if (password !== confirmPassword) {
            currentErrors.confirmPassword = 'Passwords do not match';
        }

        if (Object.keys(currentErrors).length > 0) {
            setErrors(currentErrors);
        } else {
            const user = { username, email, password };
            localStorage.setItem('user', JSON.stringify(user)); 
            navigate('/login'); 
        }
    };

    return (
        <div className="register-page">
            <h2>Register</h2>
            <form onSubmit={handleRegister} className="register-form">
                <div className="form-group">
                    <label>Username</label>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="Enter your username"
                    />
                    {errors.username && <p className="error">{errors.username}</p>}
                </div>

                <div className="form-group">
                    <label>Email</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                    />
                    {errors.email && <p className="error">{errors.email}</p>}
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter your password"
                    />
                    {errors.password && <p className="error">{errors.password}</p>}
                </div>

                <div className="form-group">
                    <label>Confirm Password</label>
                    <input
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        placeholder="Confirm your password"
                    />
                    {errors.confirmPassword && (
                        <p className="error">{errors.confirmPassword}</p>
                    )}
                </div>

                <button type="submit">Register</button>
            </form>
        </div>
    );
};

export default RegisterPage;
