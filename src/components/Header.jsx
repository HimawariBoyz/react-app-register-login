import React from 'react';
import { useNavigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import '../styles/Header.css';

const Header = () => {
    const navigate = useNavigate();
    const { logout } = useAuth();

    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    return (
        <header className="header">
            <h1 className="header-title">My Himawariboyz website</h1>
            <button onClick={handleLogout} className="logout-button">
                Logout
            </button>
        </header>
    );
};

export default Header;
