import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import '../styles/HomePage.css';

const HomePage = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const authUser = useAuth();
    const user = location.state?.user || authUser;

    if (!user) {
        navigate('/login');
        return null;
    }

    return (
        <div className="home-page-container">
            <Header />
            <div className="home-content">
                <h2>Welcome, {user.username}</h2>
                <p>Your personal information:</p>
                <ul>
                    <li>Username: {user.username}</li>
                    {/* <li>Password: {user.password}</li> */}
                </ul>
                <div className="additional-info">
                    <p>Additional Information:</p>
                    <ul>
                        <li>Email: {user.username}@example.com</li>
                        <li>Account created: {new Date().toLocaleDateString()}</li>
                        <li>Last login: {new Date().toLocaleTimeString()}</li>
                    </ul>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default HomePage;
